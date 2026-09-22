/**
 * Physical assault consequences, independent of the force roster and base DCs.
 * This creates real scene changes from four existing missions; it adds no stages,
 * activation meter, or extraction roll. All DM-facing consequences are guidance
 * for the tabletop encounters, not an automated result for the player party.
 */

const SEVERITY = ['catastrophic', 'failure', 'costly', 'success', 'target', 'great', 'exceptional']
const is = (key, ...choices) => choices.includes(key)
const missionBand = (resolved, id) => resolved[id]?.band?.key ?? null

const crossDc = {
  distraction: {
    catastrophic: { basementDc: 3 }, failure: { basementDc: 2 },
    costly: { basementDc: 1 }, success: { basementDc: 0 },
    target: { basementDc: -1 }, great: { basementDc: -2 },
    exceptional: { basementDc: -3 }
  },
  basement: {
    catastrophic: { defenseDc: 2 }, failure: { defenseDc: 1 },
    costly: { defenseDc: 0 }, success: { defenseDc: 0 },
    target: { defenseDc: -1 }, great: { defenseDc: -1 },
    exceptional: { defenseDc: -2 }
  },
  storm: {
    catastrophic: { defenseDc: 3 }, failure: { defenseDc: 2 },
    costly: { defenseDc: 1 }, success: { defenseDc: 0 },
    target: { defenseDc: -1 }, great: { defenseDc: -2 },
    exceptional: { defenseDc: -3 }
  }
}

export function cascadingEffects(missionId, bandKey) {
  return { ...(crossDc[missionId]?.[bandKey] || {}) }
}

export function sumEffects(resolved = {}) {
  const base = {
    basementDc: 0, stormDc: 0, defenseDc: 0, security: 0,
    reinforcements: 0, towerControl: 0, finalPressure: 0, elevators: 0,
    removeElite: 0, removeSecurityEncounter: 0,
    removeReinforcementEncounter: 0, suppressElite: 0
  }
  for (const entry of Object.values(resolved)) {
    for (const [key, value] of Object.entries(entry.effectData || {})) {
      if (typeof value === 'number') base[key] = (base[key] || 0) + value
    }
  }
  return base
}

function condition(label, value, detail, tone = 'neutral') {
  return { label, value, detail, tone }
}

export function physicalConditions(resolved = {}) {
  const state = sumEffects(resolved)
  const d = missionBand(resolved, 'distraction')
  const b = missionBand(resolved, 'basement')
  const s = missionBand(resolved, 'storm')
  const p = missionBand(resolved, 'defense')
  const post = (key, index) => key ? SEVERITY.indexOf(key) >= index : false

  const defenders = !d ? condition('Tower garrison', 'UNCHANGED', 'No diversion has resolved yet; guards retain their original posts.')
    : is(d, 'catastrophic', 'failure') ? condition('Tower garrison', 'FULLY MANNED / ALERTED', 'No meaningful contingent has left. Security expects a coordinated intrusion.', 'danger')
    : d === 'costly' ? condition('Tower garrison', 'MOSTLY IN PLACE', 'A few patrols are outside; interior checkpoints are still staffed.', 'warning')
    : d === 'success' ? condition('Tower garrison', 'LIGHTLY THINNED', 'Some exterior sentries and roving patrols are called into the city.', 'warning')
    : d === 'target' ? condition('Tower garrison', 'THINNED', 'Several patrols and some tower security are redeployed to distractions.', 'good')
    : d === 'great' ? condition('Tower garrison', 'HEAVILY THINNED', 'Guard posts on lower floors are undermanned; the city absorbs the responders.', 'good')
    : condition('Tower garrison', 'MAJOR GAPS', 'Elite and regular guards have been drawn away. Remove one planned elite tower encounter.', 'good')

  const elevators = !b ? condition('Magitech elevators', 'NOT YET SECURED', 'The lift network is Wallace-controlled; its highest normal stop is floor 24.')
    : state.elevators <= -1 ? condition('Magitech elevators', 'HOSTILE LOCKDOWN', 'The lifts are locked or can be remotely stopped by Wallace. The party needs an internal stair/service route.', 'danger')
    : state.elevators === 0 ? condition('Magitech elevators', 'ENEMY-CONTROLLED', 'The lift controls remain hostile. The main party cannot rely on an uninterrupted ascent.', 'danger')
    : state.elevators === 1 ? condition('Magitech elevators', 'INTERMITTENT CONTROL', 'Service access gives the party a partial ride, but they must finish the ascent by guarded internal stairs.', 'warning')
    : state.elevators === 2 ? condition('Magitech elevators', 'ROUTE TO FLOOR 24', 'The party can ride to the 24th floor, though Wallace may still interrupt some functions.', 'good')
    : condition('Magitech elevators', 'ALLIED CONTROL TO 24', 'The basement team controls the lift routing and can carry the party directly to floor 24; no elevator reaches floor 25.', 'good')

  const security = !b ? condition('Interior security', 'FULLY ACTIVE', 'Automated defenses, cameras and electronically locked passages remain active.')
    : state.security >= 2 ? condition('Interior security', 'REINFORCED / ALERT', 'Automated weapons, cameras and emergency locks are active, with Wallace prepared to trap infiltrators.', 'danger')
    : state.security >= 0 ? condition('Interior security', 'OPERATING', 'Important bulkheads and electronic sentries still work. Clearing them requires tabletop action.', 'warning')
    : state.security >= -2 ? condition('Interior security', 'PATCHY', 'Some cameras and security doors are down. A few active defensive points remain.', 'warning')
    : state.security >= -4 ? condition('Interior security', 'SEVERELY DISRUPTED', 'Most ordinary electronic locks and automated positions are disabled.', 'good')
    : condition('Interior security', 'BACKBONE DISABLED', 'The main automated network is down. Remove one planned automated-security encounter.', 'good')

  const comms = !b ? condition('Party communications', 'AWAITING SIGNAL', 'The party and basement team must establish their prearranged link before using infrastructure updates.')
    : is(b, 'catastrophic', 'failure') ? condition('Party communications', 'LINK COMPROMISED', 'The basement team cannot guide the party reliably; Wallace may detect or jam transmitted instructions.', 'danger')
    : b === 'costly' ? condition('Party communications', 'FRAGMENTED', 'The team gets brief instructions through, but the party must navigate later obstructions without steady guidance.', 'warning')
    : b === 'success' ? condition('Party communications', 'INTERMITTENT', 'The team relays working routes and partial system information; some calls are lost.', 'warning')
    : condition('Party communications', 'SECURE OPERATIONAL LINK', 'The basement team guides the party through available internal passages and elevator controls.', 'good')

  const floor24 = !b ? condition('24th-floor approach', 'UNKNOWN', 'A private internal staircase connects floor 24 to Wallace’s office on floor 25. No exterior breach is practical.')
    : is(b, 'catastrophic', 'failure') ? condition('24th-floor approach', 'PRIVATE STAIR SEALED', 'The party must personally force or bypass the internal security lock after reaching floor 24; no lift reaches Wallace’s office.', 'danger')
    : b === 'costly' ? condition('24th-floor approach', 'LOCK ACTIVE; ROUTE KNOWN', 'The basement team identifies the private stair, but cannot send a working override. The party must defeat the lock itself.', 'warning')
    : b === 'success' ? condition('24th-floor approach', 'PARTIAL OVERRIDE AVAILABLE', 'The basement team supplies a temporary unlock procedure; the party still has to clear or bypass the last sealed access point.', 'warning')
    : b === 'target' ? condition('24th-floor approach', 'ACCESS OVERRIDE RELAYED', 'The basement team opens the access lock leading to the private staircase. The party must still traverse that stair to floor 25.', 'good')
    : condition('24th-floor approach', 'PRIVATE STAIR ACCESS OPEN', 'The basement team disengages the electronic gate from below. Wallace’s personal defenders and the 25th-floor battle remain.', 'good')

  const lowerFloors = !s ? condition('Lobby & lower floors', 'ASSAULT PENDING', 'Internal defenders hold the entry corridors; the main party is not assigned to the assault wave.')
    : is(s, 'catastrophic', 'failure') ? condition('Lobby & lower floors', 'HOSTILE / BLOCKED', 'Enemy units hold key junctions; the party will need to fight through or evade internal guard lines.', 'danger')
    : s === 'costly' ? condition('Lobby & lower floors', 'NARROW BREACH', 'The assault force holds a single entry lane at heavy cost; some upper-floor defenders can still intercept the party.', 'warning')
    : s === 'success' ? condition('Lobby & lower floors', 'CONTESTED', 'Allied forces pin down the lobby defenders but cannot clear every checkpoint. One interior interception remains plausible.', 'warning')
    : s === 'target' ? condition('Lobby & lower floors', 'MAIN ROUTE HELD', 'Allies hold the lobby and lower-floor junctions; ordinary guards are pinned away from the party’s route.', 'good')
    : condition('Lobby & lower floors', 'ALLIED-CONTROLLED', 'Allies clear the major junctions, leaving isolated pockets rather than a continuous defender line.', 'good')

  const outside = !p ? condition('Perimeter & arrivals', 'PERIMETER PENDING', 'Outside forces have not been resolved. Reinforcements may still attempt to approach.')
    : p === 'catastrophic' ? condition('Perimeter & arrivals', 'OVERRUN', 'Additional units break into the building. A reinforcement wave can join a party encounter; hostile forces remain outside after Wallace is confronted.', 'danger')
    : p === 'failure' ? condition('Perimeter & arrivals', 'BREACHED', 'An enemy column enters the tower. Put fresh enemies into a later corridor or 24th-floor encounter; the outside remains hostile.', 'danger')
    : p === 'costly' ? condition('Perimeter & arrivals', 'LEAKING', 'A small enemy team slips through a side approach. It may interrupt the party near the upper floors; outside remains contested.', 'warning')
    : p === 'success' ? condition('Perimeter & arrivals', 'MOSTLY HELD', 'Main columns are blocked, but one small squad could reach a service entrance. The outer approaches are still contested.', 'warning')
    : p === 'target' ? condition('Perimeter & arrivals', 'HELD', 'No fresh wave joins the tower fight. Allies control the planned outside approaches during the final confrontation.', 'good')
    : condition('Perimeter & arrivals', 'SEALED AGAINST RELIEF', 'Reinforcements cannot join the tower battle. Allied forces retain the exterior approaches through the immediate aftermath.', 'good')

  const conditions = [defenders, elevators, security, comms, floor24, lowerFloors, outside]
  const partyRoute = [
    `ENTRY: ${lowerFloors.detail}`,
    `ASCENT TO FLOOR 24: ${elevators.detail}`,
    `SECURITY ON THE WAY UP: ${security.detail}`,
    `24 → 25: ${floor24.detail}`,
    `ENEMY ARRIVALS: ${outside.detail}`
  ]
  const encounterNotes = []
  if (state.removeElite > 0) encounterNotes.push(`Remove up to ${state.removeElite} planned elite tower encounter${state.removeElite > 1 ? 's' : ''} (do not remove Wallace).`)
  if (state.suppressElite > 0) encounterNotes.push(`Up to ${state.suppressElite} elite defender${state.suppressElite > 1 ? 's' : ''} begin pinned or unavailable to intercept the main party.`)
  if (state.removeSecurityEncounter > 0) encounterNotes.push(`Remove up to ${state.removeSecurityEncounter} planned automated-security encounter${state.removeSecurityEncounter > 1 ? 's' : ''}.`)
  if (state.removeReinforcementEncounter > 0) encounterNotes.push(`Remove up to ${state.removeReinforcementEncounter} planned incoming reinforcement encounter${state.removeReinforcementEncounter > 1 ? 's' : ''}.`)
  if (post(d, 5) && post(b, 4)) encounterNotes.push('Diverted garrison + basement override: the party can take the controlled lift to floor 24 without a routine lower-floor security stop, provided the assault team has secured entry.')
  if (post(s, 4) && !post(b, 4)) encounterNotes.push('The lobby is held, but the lift network is not secured; the party must still solve the internal ascent. A successful assault never opens the 25th floor by itself.')
  if (post(b, 4) && s && SEVERITY.indexOf(s) <= 2) encounterNotes.push('Elevator routing is available, but the assault force is pinned below. Guards can confront the party at the lift doors or a 24th-floor checkpoint.')
  if (p && SEVERITY.indexOf(p) <= 3 && d && SEVERITY.indexOf(d) >= 5) encounterNotes.push('The city diversion delayed the response, but the perimeter still leaked: use fewer or later-arriving reinforcements, not a magically sealed tower.')

  return { conditions, partyRoute, encounterNotes, state }
}

const BASE_STAGE = {
  distraction: {
    catastrophic: ['CITY RESPONSE', 'SCS traces the decoys, recalls outside patrols and alerts the tower. Basement sentries now expect an intrusion.'],
    failure: ['CITY RESPONSE', 'The decoys fail to pull significant guards away. Basement patrols tighten their watch.'],
    costly: ['CITY RESPONSE', 'A few units leave, but the tower stays alert. The basement infiltration inherits extra patrol pressure.'],
    success: ['CITY RESPONSE', 'Some roving guards leave for the city. The basement has its normal guard coverage, and the main assault faces a slightly thinner line.'],
    target: ['CITY RESPONSE', 'A reliable redeployment opens holes in lower-floor patrols and gives the basement team a quieter approach.'],
    great: ['CITY RESPONSE', 'Wallace dispatches guards to city emergencies. The basement gets lighter patrols and the assault force faces understaffed checkpoints.'],
    exceptional: ['CITY RESPONSE', 'Major guard elements leave the windowless fortress; a planned elite tower interception is removed. Basement sentries are spread thin.']
  },
  basement: {
    catastrophic: ['BUILDING INFRASTRUCTURE', 'Backup power remains live, emergency locks seal and hostile lift controls deny a clear route to floor 24.'],
    failure: ['BUILDING INFRASTRUCTURE', 'The generator and security backbone survive; the party must use guarded internal stairs or manually bypass lifts.'],
    costly: ['BUILDING INFRASTRUCTURE', 'A generator fails, but backup circuits retain the lock network and only intermittent instructions reach the party.'],
    success: ['BUILDING INFRASTRUCTURE', 'Some locks and sentries fail. Partial lift access and an intermittent radio link let the party bypass a portion of the climb.'],
    target: ['BUILDING INFRASTRUCTURE', 'The basement team takes control of the magitech lifts to floor 24, relays the private-stair override and degrades routine defenses.'],
    great: ['BUILDING INFRASTRUCTURE', 'The internal backbone breaks. Allied lift control reaches floor 24 and the private-stair gate unlocks; remaining defenders still fight.'],
    exceptional: ['BUILDING INFRASTRUCTURE', 'The backup grid goes dark. Allied lift routing reaches floor 24, the private-stair lock is released and a planned automated-security encounter is removed.']
  },
  storm: {
    catastrophic: ['INTERIOR CONTROL', 'The assault wave is shattered. The party must evade or fight an organized defense through the tower’s existing internal routes.'],
    failure: ['INTERIOR CONTROL', 'The lobby is breached but enemy units hold key corridors. Guards can converge on the party’s ascent.'],
    costly: ['INTERIOR CONTROL', 'Allies hold a narrow access lane at great cost. The main party may slip inside, but upper checkpoints remain contested.'],
    success: ['INTERIOR CONTROL', 'The lobby is taken and defenders are pinned below, but one or more interior checkpoints can still intercept the party.'],
    target: ['INTERIOR CONTROL', 'Allies secure entry and key lower-floor junctions. Most ordinary defenders cannot leave the firefight to hunt the party.'],
    great: ['INTERIOR CONTROL', 'The lower-floor defense splits into isolated pockets. The party can pass routine checkpoints with minimal interference.'],
    exceptional: ['INTERIOR CONTROL', 'The lower-floor garrison loses coordinated control. The route to the lift or stairs is held by allies and a planned elite interception can be removed.']
  },
  defense: {
    catastrophic: ['REINFORCEMENT FLOW', 'The perimeter collapses. Fresh forces enter the tower and can join an ongoing interior battle; enemies also control outside approaches afterward.'],
    failure: ['REINFORCEMENT FLOW', 'An armored response breaks through to the lobby. Add fresh enemies to a subsequent interior or 24th-floor encounter.'],
    costly: ['REINFORCEMENT FLOW', 'Most entrances hold, but a small squad reaches a service route and may arrive during the party’s climb.'],
    success: ['REINFORCEMENT FLOW', 'The main response is blocked. One small unit may reach a secondary entrance while the perimeter fights to contain it.'],
    target: ['REINFORCEMENT FLOW', 'Every planned approach is held. No new reinforcement wave reaches the tower during the final fight.'],
    great: ['REINFORCEMENT FLOW', 'Prepared barricades strand outside support. No reinforcements join the party’s encounter and the immediate exterior remains held.'],
    exceptional: ['REINFORCEMENT FLOW', 'The external relief force is isolated from Wallace Tower. No reinforcements enter, and a planned reinforcement encounter can be removed.']
  }
}

export function missionPhysicalReport(missionId, bandKey, previousResults = {}, effects = {}) {
  const match = BASE_STAGE[missionId][bandKey]
  const notes = [{ label: match[0], text: match[1] }]
  const d = missionBand(previousResults, 'distraction')
  const b = missionBand(previousResults, 'basement')
  const s = missionBand(previousResults, 'storm')
  if (missionId === 'distraction') {
    notes.push({ label: 'NEXT → BASEMENT', text: `The patrol redeployment changes the next basement check by ${effects.basementDc > 0 ? '+' : ''}${effects.basementDc || 0} DC. Guard positions physically change; no new mission is added.` })
  }
  if (missionId === 'basement') {
    if (d) notes.push({ label: 'CITY → BASEMENT', text: SEVERITY.indexOf(d) >= 4 ? 'The earlier diversion pulled guards off the basement approach, giving the team room to work.' : SEVERITY.indexOf(d) <= 1 ? 'The failed city diversion alerted the basement garrison, forcing entry against prepared sentries.' : 'The city diversion provides only limited cover at the basement entrances.' })
    notes.push({ label: 'NEXT → ASSAULT & PERIMETER', text: `Internal locks and service doors alter the tower assault; access to building approaches also shifts the later perimeter check by ${effects.defenseDc > 0 ? '+' : ''}${effects.defenseDc || 0} DC.` })
  }
  if (missionId === 'storm') {
    if (b) notes.push({ label: 'BASEMENT → MAIN PARTY', text: SEVERITY.indexOf(b) >= 4 ? 'The basement team has opened the lift route to floor 24. Allied control of the lobby determines whether the party can reach that lift unopposed.' : 'The basement team has not secured a full lift route. Even a clear lobby cannot bypass hostile internal stairs, bulkheads or the floor-24 security threshold.' })
    if (d) notes.push({ label: 'CITY → ASSAULT', text: SEVERITY.indexOf(d) >= 5 ? 'Earlier diversion pulled key guards out of the tower; the assault force fights a reduced interior garrison.' : SEVERITY.indexOf(d) <= 1 ? 'The failed diversion left the full garrison alert and available for the assault.' : 'The diversion changes how many existing guards can join the interior defense.' })
    notes.push({ label: 'NEXT → PERIMETER', text: `The lobby and service doors are now ${SEVERITY.indexOf(bandKey) >= 4 ? 'more defensible' : 'harder to seal'}. This changes the defensive-perimeter check by ${effects.defenseDc > 0 ? '+' : ''}${effects.defenseDc || 0} DC.` })
  }
  if (missionId === 'defense') {
    if (s) notes.push({ label: 'ASSAULT → PERIMETER', text: SEVERITY.indexOf(s) >= 4 ? 'The assault force holds the lobby and can bar access from inside, giving the perimeter another defensible choke point.' : SEVERITY.indexOf(s) <= 1 ? 'Enemies still control the lobby and can open interior approaches to arriving reinforcements.' : 'Contested lower floors make holding the outside perimeter more demanding.' })
    if (d) notes.push({ label: 'CITY → PERIMETER', text: SEVERITY.indexOf(d) >= 5 ? 'SCS response was delayed by city distractions. This affects arrival timing, but cannot erase reinforcements if the perimeter itself breaks.' : SEVERITY.indexOf(d) <= 1 ? 'The earlier decoys failed; outside response can arrive in greater strength.' : 'The city diversion shifts how quickly new forces gather near the tower.' })
    if (b) notes.push({ label: 'BASEMENT → PERIMETER', text: SEVERITY.indexOf(b) >= 4 ? 'Allied infrastructure control can close service entrances and hinder hostile access to the building.' : 'Hostile or unreliable service-door controls leave more approaches for the perimeter to cover.' })
  }
  return notes
}
