import React, { useMemo, useRef, useState } from 'react'
import { missions, missionDifficulty, resultBands, results, teams } from './data.js'
import { isForceGroup, rollCasualties } from './casualties.js'
import { cascadingEffects, sumEffects, physicalConditions, missionPhysicalReport } from './operations.js'

const emptyAssignments = Object.fromEntries(missions.map(m => [m.id, []]))

function Glyph({ children, size = 18 }) {
  return <span className="ui-glyph" style={{ fontSize: size }} aria-hidden="true">{children}</span>
}

function Portrait({ team, size = '' }) {
  return <span className={`avatar ${size}`} aria-hidden="true">
    <span className="avatar-initial">{team.short}</span>
    <img src={`/portraits/${team.id}.png`} alt="" loading="lazy" onError={e => { e.currentTarget.style.display = 'none' }} />
  </span>
}

function iconForMission(id, size = 22) {
  if (id === 'distraction') return <Glyph size={size}>◉</Glyph>
  if (id === 'basement') return <Glyph size={size}>ϟ</Glyph>
  if (id === 'storm') return <Glyph size={size}>⚔</Glyph>
  return <Glyph size={size}>◆</Glyph>
}

function bandFor(total, missionId) {
  const adjusted = total - missionDifficulty(missionId)
  return resultBands.find(b => adjusted >= b.min && adjusted <= b.max) || resultBands[0]
}

function clampTone(value) {
  if (value <= -3) return 'excellent'
  if (value < 0) return 'good'
  if (value === 0) return 'neutral'
  if (value <= 2) return 'warning'
  return 'danger'
}

function App() {
  const rosterRef = useRef(null)
  const [phase, setPhase] = useState('planning')
  const [assignments, setAssignments] = useState(emptyAssignments)
  const [selectedTeam, setSelectedTeam] = useState(null)
  const [activeMissionIndex, setActiveMissionIndex] = useState(0)
  const [enteredTotal, setEnteredTotal] = useState('')
  const [missionResults, setMissionResults] = useState({})
  const [showResolved, setShowResolved] = useState(false)
  const [rollError, setRollError] = useState('')
  const [strengthById, setStrengthById] = useState(
    Object.fromEntries(teams.filter(isForceGroup).map(t => [t.id, t.defaultStrength]))
  )

  const assignedTeamIds = useMemo(
    () => new Set(Object.values(assignments).flat()),
    [assignments]
  )

  const groupedTeams = useMemo(() => {
    const order = ['Squads', 'Special Allies', 'The Real Gs']
    return order.map(group => ({ group, teams: teams.filter(team => (team.group || 'Squads') === group) })).filter(section => section.teams.length)
  }, [])

  const operationState = useMemo(() => sumEffects(missionResults), [missionResults])

  const currentMission = missions[activeMissionIndex]

  function getTeam(teamId) {
    return teams.find(t => t.id === teamId)
  }

  function assignmentBonus(missionId) {
    return assignments[missionId].reduce((sum, teamId) => {
      return sum + (getTeam(teamId)?.bonuses?.[missionId] || 0)
    }, 0)
  }

  function missionModifier(missionId) {
    if (missionId === 'basement') return operationState.basementDc
    if (missionId === 'storm') return operationState.stormDc
    if (missionId === 'defense') return operationState.defenseDc
    return 0
  }

  function effectiveThresholdNote(missionId) {
    const mod = missionModifier(missionId)
    if (!mod) return 'No prior operational modifier.'
    if (mod < 0) return `Earlier operations make this mission ${Math.abs(mod)} point${Math.abs(mod) === 1 ? '' : 's'} easier.`
    return `Earlier operations make this mission ${mod} point${mod === 1 ? '' : 's'} harder.`
  }

  function assignTeam(teamId, missionId) {
    setAssignments(prev => {
      const next = Object.fromEntries(
        Object.entries(prev).map(([id, ids]) => [id, ids.filter(x => x !== teamId)])
      )
      next[missionId] = [...next[missionId], teamId]
      return next
    })
    setSelectedTeam(null)
  }

  function unassignTeam(teamId) {
    setAssignments(prev => Object.fromEntries(
      Object.entries(prev).map(([id, ids]) => [id, ids.filter(x => x !== teamId)])
    ))
  }

  function handleDrop(e, missionId) {
    e.preventDefault()
    const teamId = e.dataTransfer.getData('teamId')
    if (teamId) assignTeam(teamId, missionId)
  }

  function beginAssault() {
    if (assignedTeamIds.size === 0) return
    setPhase('assault')
    setActiveMissionIndex(0)
    setEnteredTotal('')
    setMissionResults({})
    setShowResolved(false)
    setRollError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function adjustedTotal(raw, missionId) {
    return raw - missionModifier(missionId)
  }

  function resolveMission() {
    if (showResolved) return // a mission's random fates are rolled and saved once
    const assignedIds = assignments[currentMission.id]
    const bonus = assignmentBonus(currentMission.id)
    const hasForces = assignedIds.length > 0
    const raw = hasForces ? Number(enteredTotal) : 0
    if (hasForces && (enteredTotal.trim() === '' || !Number.isInteger(raw) || raw < bonus + 1 || raw > bonus + 20)) {
      setRollError(`Enter a valid d20 + bonus total between ${bonus + 1} and ${bonus + 20}.`)
      return
    }
    setRollError('')

    const effective = hasForces ? adjustedTotal(raw, currentMission.id) : 0
    const band = hasForces ? bandFor(effective, currentMission.id) : resultBands[0]
    const result = results[currentMission.id][band.key]

    // Preserve the existing authored mission outcomes and add only physical,
    // cross-operation DC consequences. These are applied once when resolving.
    let effectData = { ...result.effects, ...cascadingEffects(currentMission.id, band.key) }

    if (currentMission.id === 'basement' && assignments.basement.includes('dorro') && ['success', 'target', 'great', 'exceptional'].includes(band.key)) {
      effectData.elevators = (effectData.elevators || 0) + 1
    }
    if (currentMission.id === 'distraction' && assignments.distraction.includes('watchers') && ['great', 'exceptional'].includes(band.key)) {
      // Sympathizers misroute Watcher patrols away from both city streets and the basement access.
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
      effectData.basementDc = (effectData.basementDc || 0) - 1
    }
    if (currentMission.id === 'distraction' && assignments.distraction.includes('gangs') && ['great', 'exceptional'].includes(band.key)) {
      // Street-network confusion delays outside response even after the first decoy resolves.
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
    }
    if (currentMission.id === 'distraction' && assignments.distraction.includes('veyne') && ['great', 'exceptional'].includes(band.key)) {
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
    }
    if (currentMission.id === 'storm' && assignments.storm.includes('akane') && ['great', 'exceptional'].includes(band.key)) {
      effectData.suppressElite = (effectData.suppressElite || 0) + 1
      effectData.towerControl = (effectData.towerControl || 0) + 1
    }

    // Real G trait hooks.
    if (currentMission.id === 'distraction' && assignments.distraction.includes('gaz') && ['success', 'target', 'great', 'exceptional'].includes(band.key)) {
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
    }
    if (currentMission.id === 'distraction' && assignments.distraction.includes('miki') && ['success', 'target', 'great', 'exceptional'].includes(band.key)) {
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
    }
    if (currentMission.id === 'distraction' && assignments.distraction.includes('montana') && ['great', 'exceptional'].includes(band.key)) {
      effectData.defenseDc = (effectData.defenseDc || 0) - 1
    }
    if (currentMission.id === 'basement' && assignments.basement.includes('oliver') && ['success', 'target', 'great', 'exceptional'].includes(band.key)) {
      effectData.security = (effectData.security || 0) - 1
    }
    if (currentMission.id === 'basement' && assignments.basement.includes('avery') && ['success', 'target', 'great', 'exceptional'].includes(band.key)) {
      effectData.elevators = (effectData.elevators || 0) + 1
    }
    if (currentMission.id === 'storm' && assignments.storm.includes('azren') && ['great', 'exceptional'].includes(band.key)) {
      effectData.towerControl = (effectData.towerControl || 0) + 1
    }
    if (currentMission.id === 'storm' && assignments.storm.includes('maya') && ['great', 'exceptional'].includes(band.key)) {
      effectData.removeSecurityEncounter = (effectData.removeSecurityEncounter || 0) + 1
    }
    if (currentMission.id === 'storm' && assignments.storm.includes('ari') && ['great', 'exceptional'].includes(band.key)) {
      effectData.towerControl = (effectData.towerControl || 0) + 1
    }
    if (currentMission.id === 'storm' && assignments.storm.includes('yariman') && ['great', 'exceptional'].includes(band.key)) {
      effectData.towerControl = (effectData.towerControl || 0) + 1
      effectData.suppressElite = (effectData.suppressElite || 0) + 1
    }
    if (currentMission.id === 'defense' && assignments.defense.includes('shelby') && ['great', 'exceptional'].includes(band.key)) {
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
    }
    if (currentMission.id === 'defense' && assignments.defense.includes('charlie') && ['success', 'target', 'great', 'exceptional'].includes(band.key)) {
      effectData.reinforcements = (effectData.reinforcements || 0) - 1
    }

    const protectorPresent = ['storm', 'defense'].includes(currentMission.id) &&
      (assignedIds.includes('red') || assignedIds.includes('gray'))
    const mitigation = (protectorPresent || (assignedIds.includes('scraps') && band.key === 'costly')) ? 1 : 0
    const casualties = rollCasualties({
      assigned: assignedIds.map(getTeam), bandKey: band.key, strengthById, mitigation
    })

    const physicalReport = missionPhysicalReport(currentMission.id, band.key, missionResults, effectData)
    setMissionResults(prev => ({
      ...prev,
      [currentMission.id]: {
        missionId: currentMission.id,
        enteredTotal: raw,
        effectiveTotal: effective,
        band,
        result,
        effectData,
        physicalReport,
        casualties,
        teams: [...assignedIds],
        baseBonus: assignmentBonus(currentMission.id),
        priorModifier: missionModifier(currentMission.id)
      }
    }))
    setShowResolved(true)
  }

  function continueAssault() {
    if (activeMissionIndex >= missions.length - 1) {
      setPhase('summary')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    setActiveMissionIndex(i => i + 1)
    setEnteredTotal('')
    setShowResolved(false)
    setRollError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function resetAll() {
    setPhase('planning')
    setAssignments(emptyAssignments)
    setSelectedTeam(null)
    setActiveMissionIndex(0)
    setEnteredTotal('')
    setMissionResults({})
    setShowResolved(false)
    setRollError('')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (phase === 'assault') {
    const assigned = assignments[currentMission.id]
    const bonus = assignmentBonus(currentMission.id)
    const priorMod = missionModifier(currentMission.id)
    const resolved = missionResults[currentMission.id]
    const priorTower = physicalConditions(missionResults)
    const relevantConditions = currentMission.id === 'basement'
      ? priorTower.conditions.slice(0, 1)
      : currentMission.id === 'storm'
        ? priorTower.conditions.slice(0, 5)
        : currentMission.id === 'defense'
          ? [priorTower.conditions[0], priorTower.conditions[2], priorTower.conditions[5]]
          : []

    return (
      <main className="assault-shell">
        <header className="topbar compact">
          <div>
            <div className="eyebrow">OPERATION // WALLACE TOWER</div>
            <h1>{currentMission.name}</h1>
          </div>
          <div className="mission-progress">
            {missions.map((m, i) => (
              <span key={m.id} className={`progress-dot ${i < activeMissionIndex ? 'done' : ''} ${i === activeMissionIndex ? 'active' : ''}`} />
            ))}
          </div>
        </header>

        <section className="resolution-stage">
          <div className="mission-number">0{currentMission.order}</div>
          <div className="eyebrow">{currentMission.kicker}</div>
          <div className="mission-icon huge">{iconForMission(currentMission.id, 40)}</div>
          <h2>{currentMission.introTitle}</h2>
          <p className="stage-copy">{currentMission.intro}</p>

          <div className="assigned-strip">
            {assigned.length ? assigned.map(teamId => {
              const team = getTeam(teamId)
              return (
                <div className="mini-team" key={teamId}>
                  <Portrait team={team} size="small" />
                  <div>
                    <strong>{team.name}</strong>
                    <span>+{team.bonuses[currentMission.id]}</span>
                  </div>
                </div>
              )
            }) : (
              <div className="empty-warning"><Glyph size={17}>!</Glyph> No force was assigned to this operation.</div>
            )}
          </div>

          {!showResolved ? (
            <div className="roll-panel">
              {relevantConditions.length > 0 && <section className="prior-situation" aria-label="Effects of earlier operations">
                <div className="physical-kicker">SITUATION REPORT // INHERITED CONDITIONS</div>
                <div className="prior-condition-grid">
                  {relevantConditions.map(item => <div key={item.label} className={`prior-condition ${item.tone}`}>
                    <strong>{item.label}: {item.value}</strong>
                    <p>{item.detail}</p>
                  </div>)}
                </div>
              </section>}
              <div className="roll-heading">
                <div>
                  <span>ASSIGNED FORCE BONUS</span>
                  <strong>+{bonus}</strong>
                </div>
                <div>
                  <span>OPERATIONAL SHIFT</span>
                  <strong className={priorMod < 0 ? 'positive' : priorMod > 0 ? 'negative' : ''}>{priorMod === 0 ? '—' : `${priorMod > 0 ? '+' : ''}${priorMod}`}</strong>
                </div>
              </div>
              <p className="threshold-note">{effectiveThresholdNote(currentMission.id)}</p>
              <div className="threshold-guide">
                {['costly', 'success', 'target', 'great', 'exceptional'].map(key => {
                  const step = resultBands.find(b => b.key === key)
                  return <span key={key}><b>{step.min + missionDifficulty(currentMission.id) + priorMod}+</b> {step.label}</span>
                })}
              </div>
              <div className="roll-instruction">{assigned.length
                ? `Roll a d20 and add +${bonus}. Enter the final total (${bonus + 1}–${bonus + 20}).`
                : 'No force assigned. This operation is abandoned and automatically fails.'}</div>
              <div className={`input-row ${assigned.length ? "" : "abandoned"}`}>
                {assigned.length > 0 && <input
                  aria-label="Final d20 total"
                  inputMode="numeric"
                  placeholder="TOTAL"
                  value={enteredTotal}
                  onChange={e => { setEnteredTotal(e.target.value.replace(/[^0-9]/g, '')); setRollError('') }}
                  onKeyDown={e => e.key === 'Enter' && enteredTotal && resolveMission()}
                />}
                <button className="primary" onClick={resolveMission} disabled={assigned.length > 0 && enteredTotal === ''}>
                  {assigned.length ? 'Resolve Operation' : 'Resolve Unassigned Operation'} <Glyph size={18}>⌾</Glyph>
                </button>
              </div>
              {rollError && <p className="roll-error" role="alert">{rollError}</p>}
              {priorMod !== 0 && enteredTotal !== '' && (
                <div className="effective-preview">
                  Entered {enteredTotal} → effective result total {adjustedTotal(Number(enteredTotal), currentMission.id)}
                </div>
              )}
            </div>
          ) : (
            <div className={`result-card band-${resolved.band.key}`}>
              <div className="result-label">{resolved.band.label}</div>
              <h3>{resolved.result.title}</h3>
              <p>{resolved.result.body}</p>
              <div className="result-scoreline">
                <span>Entered Total <strong>{resolved.teams.length ? resolved.enteredTotal : 'UNASSIGNED'}</strong></span>
                {resolved.priorModifier !== 0 && <span>Effective Total <strong>{resolved.effectiveTotal}</strong></span>}
              </div>
              <ul>
                {resolved.result.bullets.map((b, i) => <li key={i}><Glyph size={16}>✓</Glyph>{b}</li>)}
              </ul>
              <section className="physical-report" aria-label="Changes to the actual tower and later missions">
                <div className="physical-kicker">WHAT PHYSICALLY CHANGED // DM FIELD NOTES</div>
                {resolved.physicalReport.map((note, i) => <div key={i} className="physical-note">
                  <strong>{note.label}</strong><p>{note.text}</p>
                </div>)}
              </section>
              <section className="casualty-report" aria-label="Rolled personnel losses">
                <div className="casualty-title">AFTER-ACTION PERSONNEL REPORT <strong>{resolved.casualties.killed} KIA · {resolved.casualties.wounded} WOUNDED</strong></div>
                <p className="casualty-explainer">These results were rolled once from the operatives and groups assigned to this mission. No unassigned characters or main player characters were selected.</p>
                {resolved.casualties.lines.map((line, i) => <p key={i} className="casualty-line">{line}</p>)}
              </section>
              <button className="primary continue" onClick={continueAssault}>
                {activeMissionIndex === missions.length - 1 ? 'View Assault Overview' : 'Continue Assault'} <Glyph size={18}>›</Glyph>
              </button>
            </div>
          )}
        </section>
      </main>
    )
  }

  if (phase === 'summary') {
    const fieldReport = physicalConditions(missionResults)
    const killed = Object.values(missionResults).reduce((count, r) => count + r.casualties.killed, 0)
    const wounded = Object.values(missionResults).reduce((count, r) => count + r.casualties.wounded, 0)
    const casualtyText = `${killed} KIA · ${wounded} WOUNDED`

    return (
      <main className="summary-shell">
        <header className="summary-hero">
          <div className="eyebrow">OPERATION COMPLETE</div>
          <h1>WALLACE TOWER</h1>
          <p>The four operations have resolved. Use these physical conditions to run the main party’s infiltration through the windowless, nearly impenetrable 25-story tower.</p>
        </header>

        <section className="summary-grid">
          {missions.map(m => {
            const r = missionResults[m.id]
            return (
              <article className="summary-mission" key={m.id}>
                <div className="summary-mission-head">
                  <span>{iconForMission(m.id, 20)}</span>
                  <div>
                    <div className="eyebrow">0{m.order}</div>
                    <h3>{m.name}</h3>
                  </div>
                  <div className={`result-chip band-${r?.band.key || 'failure'}`}>{r?.band.label || 'Unresolved'}</div>
                </div>
                <div className="summary-score">Final Total <strong>{r?.teams.length ? r.enteredTotal : 'UNASSIGNED'}</strong> · Effective <strong>{r?.effectiveTotal ?? '—'}</strong></div>
                <p>{r?.result.body}</p>
                <div className="summary-physical"><strong>PHYSICAL CHANGES</strong>
                  {(r?.physicalReport || []).map((note, i) => <p key={i}><b>{note.label}:</b> {note.text}</p>)}
                </div>
                <div className="summary-losses">{r.casualties.killed} killed · {r.casualties.wounded} wounded</div>
                <div className="summary-loss-lines">{r.casualties.lines.map((line, i) => <p key={i}>{line}</p>)}</div>
                <div className="summary-team-row">
                  {(r?.teams || []).map(teamId => <span key={teamId}>{getTeam(teamId).name}</span>)}
                  {!r?.teams?.length && <span>No assigned force</span>}
                </div>
              </article>
            )
          })}
        </section>

        <section className="conditions-panel">
          <div className="conditions-title">
            <div>
              <div className="eyebrow">FINAL BATTLE CONDITIONS / DM BRIEF</div>
              <h2>THE TOWER AS IT STANDS</h2>
              <p>The party is separate from all four NPC deployments. No exterior wall or window breach is possible, and the elevators never go above floor 24.</p>
            </div>
            <Glyph size={34}>✦</Glyph>
          </div>
          <div className="condition-grid physical-condition-grid">
            {fieldReport.conditions.map(item => <div key={item.label} className={`condition physical-condition ${item.tone}`}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </div>)}
            <Condition label="Allied Casualties" value={casualtyText} tone={killed === 0 && wounded === 0 ? 'good' : killed + wounded < 6 ? 'warning' : 'danger'} />
          </div>
          <section className="party-route" id="party-route" aria-label="Route for the main player party">
            <div className="physical-kicker">TABLETOP ROUTE // MAIN PARTY</div>
            <h3>FROM THE LOBBY TO WALLACE</h3>
            <ol>{fieldReport.partyRoute.map((step, i) => <li key={i}>{step}</li>)}</ol>
            <p className="party-route-reminder">The lift stops on floor 24. The private internal staircase and its locks lead to Wallace’s full-floor office on 25. Wallace and his Warbreaker contraption remain for the actual tabletop finale; these results do not resolve that battle.</p>
          </section>
          {fieldReport.encounterNotes.length > 0 && <section className="dm-encounters">
            <div className="physical-kicker">ADJUST YOUR PREPARED ENCOUNTERS</div>
            <ul>{fieldReport.encounterNotes.map((note,i) => <li key={i}>{note}</li>)}</ul>
          </section>}
          <div className="special-effects">
            {operationState.removeElite > 0 && <span><Glyph size={15}>✓</Glyph> Elite tower encounter removed</span>}
            {operationState.removeSecurityEncounter > 0 && <span><Glyph size={15}>✓</Glyph> Automated-security encounter removed</span>}
            {operationState.removeReinforcementEncounter > 0 && <span><Glyph size={15}>✓</Glyph> Reinforcement encounter removed</span>}
            {operationState.suppressElite > 0 && <span><Glyph size={15}>✓</Glyph> Elite defenders suppressed</span>}
          </div>
          <div className="final-actions">
            <button className="enter-tower" onClick={() => document.getElementById('party-route')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}>VIEW THE PARTY’S ROUTE <Glyph size={20}>↓</Glyph></button>
            <button className="ghost" onClick={resetAll}><Glyph size={17}>↻</Glyph> Reset Operation</button>
          </div>
        </section>
      </main>
    )
  }

  const selected = selectedTeam ? getTeam(selectedTeam) : null

  function MissionStation({ mission }) {
    const ids = assignments[mission.id]
    const bonus = assignmentBonus(mission.id)
    return (
      <section
        className={`map-station station-${mission.id} ${selectedTeam ? 'can-drop' : ''} ${ids.length ? 'has-assignments' : ''}`}
        aria-label={`${mission.name}; ${ids.length} forces assigned; bonus plus ${bonus}`}
        onDragOver={e => e.preventDefault()}
        onDrop={e => handleDrop(e, mission.id)}
      >
        <button
          type="button"
          className="station-circle"
          onClick={() => selectedTeam && assignTeam(selectedTeam, mission.id)}
          title={selectedTeam ? `Assign ${selected.name} to ${mission.name}` : mission.planning}
        >
          <span className="station-order">0{mission.order}</span>
          <span className="station-emblem">{iconForMission(mission.id, 25)}</span>
          <strong>{mission.shortName === 'Distraction' ? 'CITY DISTRACTION' : mission.name}</strong>
          <span className="station-instruction">{selectedTeam ? 'CLICK TO ASSIGN' : (ids.length ? `${ids.length} ASSIGNED` : 'DROP FORCES HERE')}</span>
          <span className="station-bonus">+{bonus}</span>
        </button>
        <div className="station-forces" aria-label={`Assigned to ${mission.name}`}>
          {ids.map(teamId => {
            const team = getTeam(teamId)
            return (
              <button key={teamId} type="button" className="station-force"
                title={`Remove ${team.name} from ${mission.name}`}
                onClick={() => unassignTeam(teamId)}>
                <Portrait team={team} size="tiny" />
                <span className="station-force-name">{team.name}{team.isGroup ? ` (${strengthById[team.id]})` : ''}</span>
                <b>+{team.bonuses[mission.id]}</b>
                <span className="remove-cross" aria-hidden="true">×</span>
              </button>
            )
          })}
        </div>
      </section>
    )
  }

  return (
    <main className="app-shell tactical-shell">
      <section className="roster-section" aria-label="Available force roster">
        <div className="roster-caption"><span>01 / SELECT YOUR FORCES</span><span>← SCROLL THE ROSTER →</span></div>
        <div className="roster-frame">
          <button type="button" className="roster-arrow" aria-label="Scroll roster left" onClick={() => rosterRef.current?.scrollBy({left:-520, behavior:'smooth'})}>‹</button>
          <div className="roster-track" ref={rosterRef}>
            {teams.map(team => {
              const assignedMission = missions.find(m => assignments[m.id].includes(team.id))
              return (
                <button type="button" draggable key={team.id}
                  className={`roster-card ${selectedTeam === team.id ? 'is-selected' : ''} ${assignedMission ? 'is-assigned' : ''}`}
                  onDragStart={e => {e.dataTransfer.setData('teamId',team.id);e.dataTransfer.effectAllowed='move';setSelectedTeam(team.id)}}
                  onClick={() => setSelectedTeam(selectedTeam === team.id ? null : team.id)}
                  title={`${team.name} — ${team.subtitle}`}>
                  <Portrait team={team} size="roster-avatar" />
                  <span className="roster-name">{team.name}</span>
                  <span className="roster-group">{assignedMission ? `↳ ${assignedMission.shortName}` : (team.isGroup ? `${team.group} · ${strengthById[team.id]} DEPLOYED` : team.group)}</span>
                </button>
              )
            })}
          </div>
          <button type="button" className="roster-arrow" aria-label="Scroll roster right" onClick={() => rosterRef.current?.scrollBy({left:520,behavior:'smooth'})}>›</button>
        </div>
      </section>

      <section className="command-tools" aria-live="polite">
        {selected ? (
          <div className="selected-operative">
            <Portrait team={selected} size="small" />
            <div className="selected-details">
              <div className="eyebrow">SELECTED FORCE / {selected.group}</div>
              <strong>{selected.name}</strong>
              <span title={`${selected.trait}: ${selected.traitText}`}>{selected.trait}: {selected.traitText}</span>
            </div>
            <div className="selected-values">
              {selected.isGroup && <label className="strength-control" title="Set the number of members in this force before the assault. This is a planning estimate, not a canon headcount.">
                FORCE SIZE <input type="number" min="1" max="999" inputMode="numeric" aria-label={`${selected.name} force size`}
                  value={strengthById[selected.id]}
                  onChange={e => setStrengthById(prev => ({...prev, [selected.id]: Math.max(1, Math.min(999, Number(e.target.value) || 1))}))} />
              </label>}
              {missions.map(m => <button type="button" key={m.id} onClick={() => assignTeam(selected.id, m.id)}>
                <span>{m.shortName}</span><b>+{selected.bonuses[m.id]}</b>
              </button>)}
            </div>
            {assignedTeamIds.has(selected.id) && <button className="clear-selected" onClick={() => unassignTeam(selected.id)}>Unassign</button>}
            <button className="dismiss-selection" aria-label="Close selected force" onClick={() => setSelectedTeam(null)}>×</button>
          </div>
        ) : <div className="map-guidance"><span className="guide-mark">02</span><span>TACTICAL MAP <em>Deploy forces to the four assault positions below.</em></span><span className="map-guidance-right">TAP A PORTRAIT TO VIEW MISSION BONUSES</span></div>}
      </section>

      <section className="tactical-map-scroller" aria-label="Tactical mission map">
        <div className="tactical-map">
          <div className="map-grid" aria-hidden="true" />
          <div className="city-illustration" aria-hidden="true">
            <div className="city-skyline"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <div className="city-tag">NEW GENESIS<br />CITY DISTRICTS</div>
          </div>
          <div className="tower-illustration" aria-label="Wallace Tower">
            <div className="tower-antenna" /><div className="tower-roof" />
            <div className="tower-building"><span className="tower-seams"/><span className="tower-brand">W</span><span className="tower-title">WALLACE<br/>TOWER</span><span className="tower-entrance"/></div>
            <div className="tower-shadow"/>
          </div>
          <div className="map-route route-city" aria-hidden="true" />
          <div className="map-route route-basement" aria-hidden="true" />
          <div className="map-route route-storm" aria-hidden="true" />
          <div className="map-route route-defense" aria-hidden="true" />
          {missions.map(mission => <MissionStation key={mission.id} mission={mission} />)}
          <div className="map-compass" aria-hidden="true">N <span>↑</span></div>
          <div className="map-legend">◌ MISSION POSITION <span>—</span> ASSIGNMENT ROUTE</div>
        </div>
      </section>

      <footer className="tactical-footer">
        <div><div className="eyebrow">FINAL DEPLOYMENT</div><strong>{assignedTeamIds.size} of {teams.length} forces assigned</strong><p>Unassigned forces will not join the opening operations. Assignments lock when the assault begins.</p></div>
        <button className="begin-button" disabled={assignedTeamIds.size === 0} onClick={beginAssault}>BEGIN ASSAULT <Glyph size={20}>→</Glyph></button>
      </footer>
    </main>
  )
}

function Condition({ label, value, tone }) {
  return (
    <div className={`condition ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default App
