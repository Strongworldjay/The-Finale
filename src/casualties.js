/**
 * Roll personnel losses only among the forces assigned to this operation.
 * Squad sizes are editable planning estimates, not campaign-canon headcounts.
 * Fate is rolled once at resolution and saved with the mission result.
 */
export const isForceGroup = force => Boolean(force?.isGroup)

const injuries = [
  'lost their left leg', 'lost their right leg', 'lost both legs',
  'lost their left arm', 'lost their right arm', 'lost an eye',
  'suffered a shattered shoulder', 'suffered a serious spinal injury'
]
const otherWounds = [
  'suffered a severe concussion', 'suffered broken ribs',
  'sustained severe burns', 'was left badly wounded and unable to continue fighting'
]

const profiles = {
  catastrophic: { dead: [.62, 1], wounded: [.03, .28], wipe: .38, individualDead: [1, 3], individualWounded: [1, 3], permanent: .95 },
  failure: { dead: [.34, .70], wounded: [.08, .32], wipe: .08, individualDead: [0, 2], individualWounded: [1, 3], permanent: .82 },
  costly: { dead: [.16, .38], wounded: [.12, .35], wipe: 0, individualDead: [0, 1], individualWounded: [1, 2], permanent: .75 },
  success: { dead: [.07, .26], wounded: [.04, .22], wipe: 0, individualDead: [0, 0], individualWounded: [1, 1], permanent: .55 }
}

function integer(min, max, random) {
  if (max <= min) return min
  return min + Math.floor(Math.min(.999999999, Math.max(0, random())) * (max - min + 1))
}
function sampledRatio(range, random) { return range[0] + random() * (range[1] - range[0]) }
function pick(pool, random) { return pool.splice(integer(0, pool.length - 1, random), 1)[0] }

export function rollCasualties({ assigned, bandKey, strengthById, random = Math.random, mitigation = 0 }) {
  const groups = assigned.filter(isForceGroup)
  const named = assigned.filter(f => !isForceGroup(f))
  const actualBand = mitigation > 0 ? ({ catastrophic:'failure', failure:'costly', costly:'success', success:'target' }[bandKey] || bandKey) : bandKey
  const profile = profiles[actualBand]
  const outcome = { named: [], groups: [], killed: 0, wounded: 0, lines: [] }
  if (!assigned.length) {
    outcome.lines.push('No force was assigned. No allied personnel were present to take losses; the unopposed operation failed.')
    return outcome
  }
  if (!profile) {
    for (const force of groups) {
      const starting = Number.isInteger(strengthById[force.id]) ? Math.max(1, Math.min(999, strengthById[force.id])) : force.defaultStrength
      outcome.groups.push({ id:force.id, name:force.name, starting, killed:0, wounded:0, fit:starting, wipedOut:false })
    }
    for (const force of named) outcome.named.push({ id:force.id, name:force.name, fate:'uninjured', detail:'returned intact' })
    outcome.lines.push('All assigned forces returned intact. No deaths or injuries were reported.')
    return outcome
  }

  for (const force of groups) {
    const starting = Number.isInteger(strengthById[force.id]) ? Math.max(1, Math.min(999, strengthById[force.id])) : force.defaultStrength
    const wipedOut = random() < profile.wipe
    const killed = wipedOut ? starting : Math.max(starting > 0 && actualBand !== 'success' ? 1 : 0, Math.round(starting * sampledRatio(profile.dead, random)))
    const wounded = wipedOut ? 0 : Math.min(starting - killed, Math.round(starting * sampledRatio(profile.wounded, random)))
    const fit = starting - killed - wounded
    outcome.groups.push({ id:force.id, name:force.name, starting, killed, wounded, fit, wipedOut })
    outcome.killed += killed
    outcome.wounded += wounded
    outcome.lines.push(wipedOut
      ? `${force.name}: the entire deployed force of ${starting} was wiped out. No survivors returned.`
      : `${force.name}: ${killed} killed, ${wounded} wounded and ${fit} still fit for duty out of ${starting} deployed.`)
  }

  const pool = named.slice()
  const [minDeaths, maxDeaths] = profile.individualDead
  // A catastrophe guarantees a fatality only when named operatives are present.
  const deathCount = integer(Math.min(minDeaths, pool.length), Math.min(maxDeaths, pool.length), random)
  for (let i = 0; i < deathCount; i++) {
    const force = pick(pool, random)
    outcome.named.push({ id:force.id, name:force.name, fate:'killed', detail:'was killed during the operation' })
    outcome.killed += 1
    outcome.lines.push(`${force.name} was killed during the operation.`)
  }
  const woundCount = Math.min(pool.length, integer(profile.individualWounded[0], profile.individualWounded[1], random))
  for (let i = 0; i < woundCount; i++) {
    const force = pick(pool, random)
    const permanent = random() < profile.permanent
    const detail = permanent ? injuries[integer(0, injuries.length - 1, random)] : otherWounds[integer(0, otherWounds.length - 1, random)]
    outcome.named.push({ id:force.id, name:force.name, fate:permanent ? 'permanently injured' : 'wounded', detail })
    outcome.wounded += 1
    outcome.lines.push(`${force.name} survived but ${detail}.`)
  }
  for (const force of pool) outcome.named.push({ id:force.id, name:force.name, fate:'uninjured', detail:'returned intact' })
  if (!outcome.killed && !outcome.wounded) outcome.lines.push('The force withdraws intact despite the mission setbacks.')
  return outcome
}
