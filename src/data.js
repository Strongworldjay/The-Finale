export const teams = [
  {
    id: 'watchers',
    group: 'Squads',
    isGroup: true,
    defaultStrength: 16,
    name: 'Sympathizer Watchers',
    short: 'SW',
    subtitle: 'Inside information & misdirection',
    bonuses: { distraction: 3, basement: 1, storm: 1, defense: 3 },
    trait: 'Inside Knowledge',
    traitText: 'Great or Exceptional City Distraction results further delay Watcher coordination.'
  },
  {
    id: 'scraps',
    group: 'Squads',
    isGroup: true,
    defaultStrength: 32,
    name: 'Scrap Reinforcements',
    short: 'SR',
    subtitle: 'Rugged irregular fighters',
    bonuses: { distraction: 2, basement: 0, storm: 2, defense: 2 },
    trait: 'Hard to Kill',
    traitText: 'On a Costly Success, Scrap Reinforcements reduce the severity of allied casualties.'
  },
  {
    id: 'gangs',
    group: 'Squads',
    isGroup: true,
    defaultStrength: 36,
    name: 'Gang Reinforcements',
    short: 'GR',
    subtitle: 'Numbers, noise & street pressure',
    bonuses: { distraction: 2, basement: 0, storm: 2, defense: 1 },
    trait: 'Street Network',
    traitText: 'Strong distraction results cause additional confusion across New Genesis.'
  },
  {
    id: 'dorro',
    group: 'Special Allies',
    name: 'Dorro',
    short: 'DO',
    subtitle: 'Ancient tool spirit & field tinkerer',
    description: 'An earnest terracotta tool spirit from an ancient age. Dorro is bewildered by modern New Genesis, but his instinct to help and unusual old-world craftsmanship make him invaluable when something needs to be repaired, bypassed or improvised.',
    bonuses: { distraction: 0, basement: 3, storm: 1, defense: 2 },
    trait: 'Ancient Tinkerer',
    traitText: 'If Dorro earns a Success or better in Basement Sabotage, his improvised work grants one additional step of elevator access.'
  },
  {
    id: 'veyne',
    group: 'Special Allies',
    name: 'Lieutenant Serelyth Veyne',
    short: 'SV',
    subtitle: 'Watcher officer, marksman & observer',
    description: 'A composed elven lieutenant whose strength is precision, observation and authority. Veyne catches inconsistencies others miss, shoots with unforgiving accuracy and understands how Watcher responses are coordinated.',
    bonuses: { distraction: 3, basement: 1, storm: 2, defense: 3 },
    trait: 'Officer’s Read',
    traitText: 'On a Great or Exceptional City-Wide Distraction, Veyne deliberately misroutes additional response units and further delays reinforcements.'
  },
  {
    id: 'akane',
    group: 'Special Allies',
    name: 'Akane',
    short: 'AK',
    subtitle: 'Onro upper echelon swordswoman',
    description: 'One of the Onro Militia’s most dangerous leaders. Akane is a master swordswoman capable of calling forth a colossal samurai-like shikigami whose attacks can tear through an entire battlefield.',
    bonuses: { distraction: 1, basement: 0, storm: 3, defense: 3 },
    trait: 'Shikigami Catastrophe',
    traitText: 'On a Great or Exceptional Storm the Tower result, Akane’s massive samurai shikigami suppresses an elite defender before the party reaches them.'
  },
  {
    id: 'gaz',
    group: 'The Real Gs',
    name: 'Gaz',
    short: 'GZ',
    subtitle: 'Journalist, investigator & information runner',
    description: 'A sharp Inkhound journalist who chases corruption and underworld stories through New Genesis. Gaz is far better at creating information pressure and uncovering weaknesses than surviving a straight firefight.',
    bonuses: { distraction: 3, basement: 2, storm: 1, defense: 1 },
    trait: 'Front Page Panic',
    traitText: 'On a Success or better City-Wide Distraction, Gaz amplifies false reports and real chaos through the city, further slowing reinforcement coordination.'
  },
  {
    id: 'miki',
    group: 'The Real Gs',
    name: 'Miki',
    short: 'MI',
    subtitle: 'Bakeneko street scout & urchin leader',
    description: 'A clever young Bakeneko survivor with a natural talent for navigating alleys, gathering people and finding opportunities where others see dead ends.',
    bonuses: { distraction: 2, basement: 1, storm: 2, defense: 2 },
    trait: 'Alley Network',
    traitText: 'On a Success or better City-Wide Distraction, Miki’s street network feeds false sightings and escape routes into the operation, delaying reinforcements.'
  },
  {
    id: 'red',
    group: 'The Real Gs',
    name: 'Red',
    short: 'RD',
    subtitle: 'Young goliath protector & heavy muscle',
    description: 'A gentle young goliath with immense strength and fierce loyalty. Red may not follow complicated plans easily, but when told who needs protecting, he is exceptionally hard to move.',
    bonuses: { distraction: 1, basement: 0, storm: 3, defense: 3 },
    trait: 'Nobody Gets Past Me',
    traitText: 'On a Costly Success during Storm or Defense, Red reduces allied casualties by protecting wounded allies and holding the line.'
  },
  {
    id: 'oliver',
    group: 'The Real Gs',
    name: 'Oliver',
    short: 'OL',
    subtitle: 'Saboteur prodigy & systems problem-solver',
    description: 'A brilliant young saboteur with a gift for spotting weaknesses, bypassing obstacles and taking complicated systems apart in ways their designers never expected.',
    bonuses: { distraction: 1, basement: 3, storm: 1, defense: 1 },
    trait: 'Found the Weak Point',
    traitText: 'On a Success or better Basement Sabotage, Oliver degrades Wallace Tower security one additional step.'
  },
  {
    id: 'azren',
    group: 'The Real Gs',
    name: 'Azren',
    short: 'AZ',
    subtitle: 'Young tiefling spellcaster & ranged support',
    description: 'A guarded young tiefling prodigy whose resilience and destructive magical talent make him dangerous when he can fight from a protected position.',
    bonuses: { distraction: 2, basement: 2, storm: 2, defense: 2 },
    trait: 'Burning Cover',
    traitText: 'On a Great or Exceptional Storm result, Azren’s ranged magical pressure improves allied control of the lower floors.'
  },
  {
    id: 'maya',
    group: 'The Real Gs',
    name: 'Maya',
    short: 'MY',
    subtitle: 'Corrosive spirit predator',
    description: 'Maya’s timid human appearance hides a lethal quadrupedal Cegua spirit capable of spitting corrosive acid and tearing through flesh, metal and stone.',
    bonuses: { distraction: 2, basement: 0, storm: 2, defense: 3 },
    trait: 'True Form',
    traitText: 'On a Great or Exceptional Storm result, Maya’s corrosive assault destroys a hardened defensive position or automated-security element.'
  },
  {
    id: 'ari',
    group: 'The Real Gs',
    name: 'Ari Briar',
    short: 'AR',
    subtitle: 'Earth genasi enforcer & street fighter',
    description: 'A reckless but perceptive earth genasi enforcer who survives through toughness, intimidation, hidden weapons and an instinct for finding weakness in a fight.',
    bonuses: { distraction: 1, basement: 0, storm: 2, defense: 2 },
    trait: 'Read the Weakness',
    traitText: 'On a Great or Exceptional Storm result, Ari turns a break in the enemy line into additional allied control.'
  },
  {
    id: 'montana',
    group: 'The Real Gs',
    name: 'Montana Onyx',
    short: 'MO',
    subtitle: 'Courier, thief & route specialist',
    description: 'A gnome courier and former market hustler who knows New Genesis routes, shortcuts and exits better than most people know their own homes.',
    bonuses: { distraction: 1, basement: 1, storm: 1, defense: 1 },
    trait: 'Fastest Route Out',
    traitText: 'On a Great or Exceptional City-Wide Distraction, Montana’s route knowledge makes the later perimeter operation easier.'
  },
  {
    id: 'avery',
    group: 'The Real Gs',
    name: 'Avery Stallard',
    short: 'AV',
    subtitle: 'Orc mechanic, lockbreaker & bruiser',
    description: 'A mechanically gifted orc scavenger who is far more comfortable with tools and broken machines than people, but can also serve as a reliable defensive bruiser.',
    bonuses: { distraction: 0, basement: 2, storm: 1, defense: 1 },
    trait: 'Field Mechanic',
    traitText: 'On a Success or better Basement Sabotage, Avery improves either elevator access or damaged infrastructure by one step.'
  },
  {
    id: 'yariman',
    group: 'The Real Gs',
    name: 'Yariman Duhu',
    short: 'YD',
    subtitle: 'Vandros-trained elite warrior',
    description: 'A seventeen-year-old warrior shaped from childhood into an elite soldier and assassin. His upbringing left deep scars, but his skill with a blade remains exceptional.',
    bonuses: { distraction: 1, basement: 1, storm: 3, defense: 3 },
    trait: 'Raised for War',
    traitText: 'On a Great or Exceptional Storm result, Yariman breaks through an elite defensive position and improves allied tower control.'
  },
  {
    id: 'shelby',
    group: 'The Real Gs',
    name: 'Shelby Jenkins',
    short: 'SJ',
    subtitle: 'Elemental support & terrain control',
    description: 'A quiet older recruit with a long-neglected connection to nature, animals and the elements, now finally exploring what those abilities can do in a real operation.',
    bonuses: { distraction: 1, basement: 0, storm: 1, defense: 2 },
    trait: 'Shape the Ground',
    traitText: 'On a Great or Exceptional Defensive result, Shelby uses the environment to further delay incoming forces.'
  },
  {
    id: 'gray',
    group: 'The Real Gs',
    name: 'Gray Luna',
    short: 'GL',
    subtitle: 'Mountain dwarf heavy enforcer',
    description: 'A powerful mountain dwarf who left the Yamagumi behind and chose to put his strength toward something better. Rough, loyal and extremely difficult to push out of a position.',
    bonuses: { distraction: 1, basement: 0, storm: 1, defense: 1 },
    trait: 'Old Muscle, New Cause',
    traitText: 'On a Costly Success during Storm or Defense, Gray reduces allied casualties by absorbing the worst of the counterattack.'
  },
  {
    id: 'charlie',
    group: 'The Real Gs',
    name: 'Charlie Zimmerman',
    short: 'CZ',
    subtitle: 'Dhampir lookout & perimeter sentry',
    description: 'A calm, broad-shouldered dhampir lookout who built her reputation on seeing trouble before it arrived and staying at her post when everyone else ran.',
    bonuses: { distraction: 1, basement: 1, storm: 1, defense: 1 },
    trait: 'Nothing Gets By Her',
    traitText: 'On a Success or better Defensive result, Charlie spots incoming forces early enough to further reduce reinforcement pressure.'
  }
]

export const missions = [
  {
    id: 'distraction',
    order: 1,
    name: 'City-Wide Distraction',
    shortName: 'Distraction',
    kicker: 'NEW GENESIS',
    introTitle: 'The City-Wide Distractions Are Beginning',
    intro: 'Coordinated attacks, false reports, gang activity and sympathetic Watcher interference begin spreading across New Genesis. Wallace Tower must decide how many defenders it can afford to keep.',
    planning: 'Cause panic and coordinated distractions across the city to draw Watchers and SCS forces away from Wallace Tower.',
    icon: 'radio'
  },
  {
    id: 'basement',
    order: 2,
    name: 'Basement Sabotage',
    shortName: 'Sabotage',
    kicker: 'WALLACE TOWER // SUBLEVELS',
    introTitle: 'The Sabotage Team Is Going Below',
    intro: 'While the city burns with distractions, the sabotage team moves into Wallace Tower’s lower infrastructure. Their target is the auxiliary power and security backbone.',
    planning: 'Disable backup power and electronic defenses so the main party can reach the upper floors without the tower locking them down.',
    icon: 'zap'
  },
  {
    id: 'storm',
    order: 3,
    name: 'Storm the Tower',
    shortName: 'Main Assault',
    kicker: 'WALLACE TOWER // GROUND ASSAULT',
    introTitle: 'The Assault on Wallace Tower Begins',
    intro: 'The first assault wave hits Wallace Tower. These forces will take the brunt of the fighting so G and the main party can slip through toward Wallace.',
    planning: 'Take the mass brunt of Wallace Tower’s defenders and create a path for the main party to advance.',
    icon: 'swords'
  },
  {
    id: 'defense',
    order: 4,
    name: 'Defensive Assignment',
    shortName: 'Perimeter',
    kicker: 'WALLACE TOWER // OUTER PERIMETER',
    introTitle: 'Reinforcements Are Closing In',
    intro: 'SCS, Watchers and Wallace-aligned forces are attempting to reach the tower. The defensive assignment must keep the roads, rooftops and entrances under allied control.',
    planning: 'Hold the exterior perimeter and stop reinforcements from reaching the tower once the assault begins.',
    icon: 'shield'
  }
]


// Base thresholds for Distraction / Sabotage. Tower Assault / Defense use +5.
// Operational modifiers are applied to the final entered roll before this lookup.
export const resultBands = [
  { key: 'catastrophic', min: -999, max: 9, label: 'Catastrophic Failure' },
  { key: 'failure', min: 10, max: 14, label: 'Failure' },
  { key: 'costly', min: 15, max: 19, label: 'Success — Major Issues' },
  { key: 'success', min: 20, max: 24, label: 'Success — With Issues' },
  { key: 'target', min: 25, max: 29, label: 'On Target — No Issues' },
  { key: 'great', min: 30, max: 34, label: 'Amazing Success' },
  { key: 'exceptional', min: 35, max: 999, label: 'Best Possible Result' }
]
export const missionDifficulty = missionId => ['storm', 'defense'].includes(missionId) ? 5 : 0

const entry = (title, body, bullets, effects) => ({ title, body, bullets, effects })

// Casualties and permanent injuries are generated separately for the actual
// assigned forces at the moment a mission resolves; they are not canned text.
export const results = {
  distraction: {
    catastrophic: entry('THE CITY TURNS ON THE DISTRACTION', 'SCS intercepts the false reports and traces the decoys back to the assault. Coordinated arrests and counterattacks leave your people isolated as the tower is warned that it is the real target.', ['Tower security enters a heightened state.', 'Little of the enemy deployment is diverted.', 'Assigned forces face catastrophic losses.'], { stormDc: 4, defenseDc: 3, reinforcements: 2 }),
    failure: entry('THE DECOYS ARE EXPOSED', 'The disturbances spread for only a few minutes before Watcher dispatch identifies the pattern. Your teams spend more time escaping a city-wide search than pulling security away from the tower.', ['Tower guards remain at their posts.', 'The external response is accelerated.', 'Assigned forces suffer serious losses.'], { stormDc: 2, defenseDc: 1, reinforcements: 1 }),
    costly: entry('THE CITY TAKES THE BAIT — BARELY', 'Street fires, false alarms and gang pressure occupy patrols, but SCS answers with an aggressive sweep. The decoys buy the assault a narrow window and are caught in the counterattack.', ['Some outside units are distracted, but the tower stays ready.', 'The operation succeeds despite severe losses among those assigned.', 'Tower assault difficulty remains unchanged.'], { stormDc: 0, defenseDc: 0, reinforcements: -1 }),
    success: entry('A WINDOW OPENS AT A PRICE', 'Conflicting emergency calls pull multiple Watcher units across New Genesis. The deception holds long enough to open a route, but several exposed diversion points come under fire before the teams withdraw.', ['A small contingent leaves the tower perimeter.', 'The tower assault and perimeter checks become slightly easier.', 'The diversion team must pay for its success.'], { stormDc: -1, defenseDc: -1, reinforcements: -1 }),
    target: entry('THE DISTRACTION RUNS TO PLAN', 'The city-wide diversions unfold on schedule. Dispatchers split their forces, patrols chase the wrong leads and the diversion groups withdraw along their planned routes before SCS can trap them.', ['The operation meets its objectives without allied injuries.', 'Tower defenders and response units are reduced.', 'The remaining assault gains a useful opening.'], { stormDc: -2, defenseDc: -1, reinforcements: -2 }),
    great: entry('NEW GENESIS DROWNS OUT THE ALARM', 'Disinformation and real disturbances overwhelm SCS communications. The diversion teams clear their positions cleanly as officers begin pulling sentries away from the tower to reinforce the city.', ['Every assigned force withdraws intact.', 'Wallace Tower loses stationed security personnel.', 'The outer response is heavily delayed.'], { stormDc: -3, defenseDc: -2, security: -1, reinforcements: -3 }),
    exceptional: entry('WALLACE TOWER IS BLEEDING DEFENDERS', 'SCS becomes convinced that the main threat lies somewhere else. Entire units redeploy into New Genesis while the diversions quietly end; the tower is left with large, exploitable gaps in its defenses.', ['Every diversion force returns intact.', 'Elite security shifts away from Wallace Tower.', 'One elite tower encounter may be removed.'], { stormDc: -4, defenseDc: -3, security: -2, reinforcements: -4, removeElite: 1 })
  },
  basement: {
    catastrophic: entry('THE BASEMENT BECOMES A TRAP', 'Security detects the infiltrators before they reach the auxiliary generator. Internal bulkheads seal, backup power spins up and alarms send armed response teams to their location.', ['The security grid hardens instead of failing.', 'Elevators lock and the party must find a dangerous alternate route.', 'The sabotage force risks being wiped out below ground.'], { stormDc: 4, security: 3, elevators: -2 }),
    failure: entry('THE BACKUP GRID SURVIVES', 'The team reaches the infrastructure floors but is driven out before it can stop the redundancies. Wallace now knows exactly which systems the attackers intended to disable.', ['Automated weapons and electronic locks remain active.', 'Security tightens around the main ascent.', 'The sabotage force suffers serious losses.'], { stormDc: 2, security: 2, elevators: -1 }),
    costly: entry('POWER CUT — EMERGENCY SYSTEMS HOLD', 'A generator falls and several floors go dark, but emergency circuits immediately take over. The saboteurs must fight through locked corridors and get out with whatever remains of their team.', ['Some cameras fail; other systems stay online.', 'The main assault faces a slightly harder climb despite partial progress.', 'The sabotage succeeds at a very high human cost.'], { stormDc: 1, security: 1, elevators: 0 }),
    success: entry('AN UNSTABLE OPENING', 'Explosives and improvised overrides disable a section of auxiliary power. The way upward opens for brief intervals, while automated sentries continue operating elsewhere and emergency crews fight to restore power.', ['A portion of the upper-floor route is accessible.', 'Some security systems remain active.', 'The sabotage team incurs losses during withdrawal.'], { stormDc: -1, security: -1, elevators: 1 }),
    target: entry('AUXILIARY POWER IS DISABLED', 'The sabotage teams sever the backup supply and escape by the planned service route. The main party has access to the upper levels without the tower locking every corridor behind them.', ['The operation completes with no allied injuries.', 'The security network is significantly degraded.', 'Elevator and access control become manageable.'], { stormDc: -2, security: -2, elevators: 2 }),
    great: entry('THE SECURITY BACKBONE BREAKS', 'A precisely timed strike takes the generators and distribution nodes offline together. Guards lose cameras, floor-to-floor coordination and electronic access control before they can reroute the current.', ['Every assigned force returns intact.', 'The party can use an unlocked ascent route.', 'Automated defenses are heavily suppressed.'], { stormDc: -3, security: -3, elevators: 3 }),
    exceptional: entry('THE TOWER GOES DARK', 'Every planned strike lands within seconds. Both redundancies fail, and Wallace Tower is reduced to isolated floors operating without reliable electronic security or internal coordination.', ['The sabotage force escapes intact.', 'The party controls the elevators and access routes.', 'One automated-security encounter may be removed.'], { stormDc: -4, security: -5, elevators: 4, removeSecurityEncounter: 1 })
  },
  storm: {
    catastrophic: entry('THE FIRST ASSAULT WAVE IS DESTROYED', 'The tower defenders funnel the attackers into overlapping fields of fire. With its assault wave broken, the main party is left to fight through a building still controlled by Wallace.', ['The lower floors remain enemy-held.', 'The main party receives almost no protective diversion.', 'Assault-force casualties may be total.'], { towerControl: -4, finalPressure: 4 }),
    failure: entry('THE ASSAULT STALLS', 'The opening rush breaches the lobby but cannot establish a defensible foothold. Wallace’s defenders regroup floor by floor as the attackers attempt to retrieve their wounded.', ['Most defenders remain available to intercept the party.', 'The tower stays largely in Wallace’s hands.', 'The assault force suffers serious losses.'], { towerControl: -2, finalPressure: 3 }),
    costly: entry('A BREACH BOUGHT IN BLOOD', 'A narrow path through the lobby is forced open, but the assault force is devastated holding it. The main party can squeeze through while the attackers fight for every meter behind them.', ['The party has a route inside, but elite defenders remain.', 'The lower levels cannot be securely held.', 'The assault succeeds at a severe cost.'], { towerControl: -1, finalPressure: 2 }),
    success: entry('THE LOBBY FALLS — THE FIGHT CONTINUES', 'Your forces take the entrance and pin down the first defenders, but counterattacks erupt in adjoining corridors. The main party has an opening only because the assault wave refuses to retreat.', ['The party advances through some remaining resistance.', 'Wallace retains a contested hold on several floors.', 'The attackers take losses while protecting the route.'], { towerControl: 1, finalPressure: 1 }),
    target: entry('THE ASSAULT REACHES ITS OBJECTIVES', 'The assault groups seize the lobby and hold enough of the lower floors to cover the party’s ascent. Their entry routes and fallback positions remain in friendly hands.', ['The main party can slip upward with limited interference.', 'The assault force remains intact.', 'Most regular defenders are pinned below.'], { towerControl: 2, finalPressure: 0 }),
    great: entry('WALLACE’S DEFENSES CRACK', 'Fighting collapses Wallace’s defensive line in successive floors. The party advances behind a clear path as the tower assault pushes the remaining security force into isolated pockets.', ['The assault force sustains no losses.', 'Elite defenders can be suppressed before the finale.', 'Allies firmly control the lower levels.'], { towerControl: 4, finalPressure: -2, suppressElite: 1 }),
    exceptional: entry('THE TOWER IS YOURS', 'The assault wave overwhelms the defenders before they can establish a second line. Wallace is isolated above allied-controlled floors, with no coherent lower-floor counterattack left to organize.', ['The assault force remains intact.', 'One elite encounter may be removed.', 'Wallace enters the finale without a meaningful lower-floor reserve.'], { towerControl: 6, finalPressure: -4, suppressElite: 1, removeElite: 1 })
  },
  defense: {
    catastrophic: entry('THE PERIMETER IS OVERRUN', 'SCS and Wallace-aligned reinforcements overwhelm the defenders at every roadblock. Transports reach the tower as surviving allies fall back through the streets.', ['Fresh enemy units enter the building.', 'The external defense is broken.', 'The perimeter force may be completely wiped out.'], { reinforcements: 6, finalPressure: 4 }),
    failure: entry('THE OUTSIDE FORCES BREAK THROUGH', 'The perimeter holds briefly before armored columns and rooftop units find its weakest approaches. Defenders scatter to avoid total encirclement while reinforcements enter the tower.', ['New enemies join the tower fight.', 'The perimeter remains unsafe.', 'Defensive forces suffer serious casualties.'], { reinforcements: 4, finalPressure: 3 }),
    costly: entry('THE LINE HOLDS — AT GREAT COST', 'Your defenders close most roads and entrances, but only by committing their last reserves. Enemy scouts get through the gaps as the remaining allies hold their positions under sustained attack.', ['Some reinforcements reach the fight.', 'The position holds only temporarily.', 'The defensive mission succeeds with severe losses.'], { reinforcements: 2, finalPressure: 2 }),
    success: entry('THE APPROACHES ARE CONTESTED', 'The perimeter blocks the largest columns, but scattered SCS teams slip through rooftops and service lanes. Your defenders contain the main threat while taking losses and yielding several outer positions.', ['The heaviest reinforcement wave is delayed.', 'A smaller enemy element may reach the tower.', 'The perimeter force incurs losses.'], { reinforcements: 1, finalPressure: 1 }),
    target: entry('THE PERIMETER HOLDS TO PLAN', 'Every assigned roadblock and rooftop observation point does its job. Reinforcement columns are held outside the tower until the party has the time it needs.', ['No major reinforcement wave enters the tower.', 'All assigned forces hold their positions intact.', 'The main party retains a protected retreat route.'], { reinforcements: -2, finalPressure: 0 }),
    great: entry('NO ONE IS GETTING THROUGH', 'The defensive groups anticipate every approach and redirect arriving units into prepared dead ends. SCS cannot build enough momentum to reach the tower before the assault progresses.', ['No reinforcements reach the tower.', 'The perimeter force remains intact.', 'Enemy outside support is heavily delayed.'], { reinforcements: -4, finalPressure: -2 }),
    exceptional: entry('WALLACE TOWER IS CUT OFF', 'Barricades, rooftops and crossing routes are held in a coordinated defensive net. Wallace’s relief forces cannot approach the building, and the perimeter force maintains control of every planned exit.', ['No assigned force takes casualties.', 'One reinforcement encounter may be removed.', 'Allied escape and extraction routes remain secure.'], { reinforcements: -6, finalPressure: -3, removeReinforcementEncounter: 1 })
  }
}
