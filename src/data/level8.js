import { spellImgUrl, slugify } from "./spellUtils.js";

export const LEVEL8 = [
    {
        slug: slugify("Antipathy/Sympathy"),
        name: "Antipathy/Sympathy",
        classes: ["Bard", "Druid", "Wizard"],
        spellLevel: 8,
        school: "Enchantment",
        castingTime: "1 hour",
        duration: "10 days",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control", "Warding"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Frightened", "Charmed"],
        components: { verbal: true, somatic: true, material: true, materialText: "a mix of vinegar and honey" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As you cast the spell, choose antipathy or sympathy, and target one creature or object that is Huge or smaller. Then specify a kind of creature (e.g., red dragons, goblins, vampires). A creature of the chosen kind that comes within 120 feet of the target must make a Wisdom saving throw. Your choice determines the effect on a failed save:\n\nAntipathy. The creature gains the Frightened condition and must use its movement each turn to move away from the target by the safest route.\n\nSympathy. The creature is Charmed and must use its movement each turn to move as close as possible to the target by the safest route. If within 5 feet of the target, it can’t willingly move away. If the target damages the charmed creature, that creature can attempt a save to end the effect (see below).\n\nEnding the Effect. If the affected creature ends its turn more than 120 feet from the target, it makes a Wisdom saving throw. On a success, the effect ends for that creature. A creature that succeeds on this save is immune to the effect for 1 minute, after which it can be affected again.",
        scalingMd: "",
        imagePath: spellImgUrl("antipathy_sympathy")
    },
    {
        slug: slugify("Bury"),
        name: "Bury",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 8,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "120 feet",
        area: "30-ft-radius, 300-ft-high cylinder",
        tags: ["Homebrew", "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Restrained", "Incapacitated"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Intensify gravity in a 30-ft-radius, 300-ft-high cylinder centered on a point on the ground within range. Movement in the area costs 4 ft per 1 ft. Flying creatures fall, taking normal fall damage. Creatures on the ground that start their turn in the cylinder or enter it must make a Strength save or be forced into the ground—Restrained and Incapacitated, but gaining three-quarters cover as only their upper body is exposed. Affected creatures can repeat the save at the end of each of their turns to free themselves.",
        scalingMd: "",
        imagePath: spellImgUrl("bury")
    },
    {
        slug: slugify("Celestial Alignment"),
        name: "Celestial Alignment",
        classes: ["Cleric",],
        spellLevel: 8,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Touch",
        area: "1 creature",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a platinum circlet worth 1,000 gp, consumed" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Bring a creature into cosmic balance. For 1 minute: all healing it receives is doubled; it gains a flying speed 60 ft (hover); resistance to Radiant; and advantage on Intelligence, Wisdom, and Charisma checks and saves.",
        scalingMd: "",
        imagePath: spellImgUrl("celestialalignment")
    },
    {
        slug: slugify("Creeping Death"),
        name: "Creeping Death",
        classes: ["Warlock", "Wizard"],
        spellLevel: 8,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Sangromancy", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend eight Hit Point Dice or the spell automatically fails. Roll the expended Hit Point Dice. The target’s creeping death threshold is equal to the roll’s total. For the spell’s duration, if the creature’s Hit Points are reduced to or lower than its creeping death threshold, the creature immediately dies.\n\n" +
            "As a Bonus Action, you can force the target to make a Constitution saving throw. On a failed save, roll 2d6 and add the result to the creature’s creeping death threshold. On a successful save, add half the result instead. If the creature succeeds on three saving throws, which don’t have to be consecutive, this spell ends early.",
        scalingMd: "",
        imagePath: spellImgUrl("creepingdeath")
    },
    {
        slug: slugify("Filet"),
        name: "Filet",
        classes: ["Cleric", "Druid", "Wizard"],
        spellLevel: 8,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Damage"],
        saveRequired: "Constitution",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a scalpel" },
        concentration: true,
        ritual: false,
        descriptionMd: "You target a creature you can see within range, using necromantic force to slice the skin from its body. Make a ranged spell attack against that creature. On a hit, the target takes 8d6 Necrotic damage.\n\n" +
            "On each of your subsequent turns until the spell ends, you can take a Magic action to force the same target to make a Constitution saving throw, even if the first attack missed. On a failed save, the target takes 8d6 Necrotic damage. On a successful save, the target takes half as much damage.\n\n" +
            "The spell ends if the target is ever outside the spell’s range, if the target is reduced to 0 Hit Points, or if you can’t see it.",
        scalingMd: "",
        imagePath: spellImgUrl("filet")
    },
    {
        slug: slugify("Impenetrable Fortress"),
        name: "Impenetrable Fortress",
        classes: ["Wizard"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "Instantaneous (see text)",
        range: "1 mile",
        area: "Fortress (120-ft square; walls and turrets; keep inside)",
        tags: ["Xanathar's Guide to Everything", "Utility", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a diamond worth at least 500 gp, which the spell consumes" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A fortress of stone erupts from a 120-foot-square area of ground you can see within range, harmlessly lifting creatures in the area. Four 20-by-20-by-30-foot corner turrets connect via 80-foot stone walls (1-foot thick, paneled in 10-by-20-foot sections). Up to four stone doors can be placed. A 50-foot-square keep with three 10-foot-high floors stands inside, divided as you wish (min 5-foot rooms), with stairs, 6-inch walls, and doors/archways as you choose. It’s furnished and decorated, and contains food for a nine-course banquet for up to 100 people daily (objects crumble to dust if removed).\n\nA staff of 100 invisible servants obeys creatures you designate (as unseen servant). Each 10-by-10-foot stone section has AC 15 and 30 HP per inch of thickness, immune to Poison and Psychic. Sections reduced to 0 HP are destroyed and may cause nearby sections to buckle at the DM’s discretion. After 7 days or when you cast this spell elsewhere, the fortress crumbles and sinks back, leaving creatures safely on the ground. Casting on the same spot once every 7 days for a year makes it permanent.",
        scalingMd: "",
        imagePath: spellImgUrl("impenetrablefortress")
    },
    {
        slug: slugify("Immortal Theft"),
        name: "Immortal Theft",
        classes: ["Sorcerer", "Warlock",],
        spellLevel: 9,
        school: "Transmutation",
        castingTime: "1 reaction",
        duration: "Instantaneous (benefits persist; see text)",
        range: "300 feet",
        area: "Self; target creature (triggered)",
        tags: ["Homebrew", "Sangromancy", "Buff", "Defense"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["See creature-type benefits"],
        components: { verbal: true, somatic: true, material: true, materialText: "the skull of a humanoid encrusted in gems worth 1,000+ gp, which the spell consumes" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend nine Hit Point Dice or the spell automatically fails. Roll the expended dice and gain Temporary Hit Points equal to twice the total. You gain the creature type of the spell’s target, in addition to your own type. While the spell lasts, you have Immunity to the Poisoned condition; you no longer need to eat, drink, or breathe; you have Resistance to Bludgeoning, Piercing, and Slashing damage; and you gain benefits based on your new type:\n\nCelestial. Resistance to Radiant and Necrotic; Fly speed 60 ft.\nElemental. Resistance to Acid, Cold, Fire, Lightning, and Thunder.\nFey. As a Bonus Action, become Invisible until the start of your next turn, or teleport up to 60 feet to a space you can see.\nFiend. Resistance to Cold and Fire; Fly speed 60 ft.\nUndead. Immunity to Necrotic; Immunity to the Charmed and Frightened conditions.\n\nYou retain the type and benefits until you cast the spell again or you are reduced to 0 HP.\n\nTrigger. You take this reaction when a Celestial, Elemental, Fey, Fiend, or Undead within range that you can see is reduced to 0 HP.",
        scalingMd: "",
        imagePath: spellImgUrl("immortaltheft")
    },
    {
        slug: slugify("Lifesink"),
        name: "Lifesink",
        classes: ["Cleric", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 8,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "15-foot emanation",
        tags: ["Homebrew", "Damage", "Healing",],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "An aura extends from you in a 15-foot Emanation. Any other creature that enters or begins its turn in the area takes 4d6 Necrotic damage. At the start of your turn, you regain 4d6 Hit Points plus 1 for each creature in the area.",
        scalingMd: "",
        imagePath: spellImgUrl("lifesink")
    },
    {
        slug: slugify("Maddening Darkness"),
        name: "Maddening Darkness",
        classes: ["Warlock", "Wizard"],
        spellLevel: 8,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "150 feet",
        area: "60-foot-radius sphere",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: ["Magical Darkness (blocks Darkvision; light of 8th level or lower fails)"],
        components: { verbal: true, somatic: false, material: true, materialText: "a drop of pitch mixed with a drop of mercury" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Magical darkness spreads to fill a 60-foot-radius sphere, spreading around corners. Darkvision cannot see through it, and nonmagical light and light from 8th-level spells or lower can’t illuminate it. Echoes of shrieks and mad laughter fill the sphere. Whenever a creature starts its turn in the area, it makes a Wisdom save, taking 8d8 Psychic on a failure, or half on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("maddeningdarkness")
    },
    {
        slug: slugify("Raiding Ward"),
        name: "Raiding Ward",
        classes: ["Bard", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 8,
        school: "Transmutation",
        castingTime: "1 hour",
        duration: "24 hours",
        range: "Touch",
        area: "5 miles",
        tags: ["Homebrew", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an orb or crystal worth 5,000 gp" },
        concentration: false,
        ritual: false,
        descriptionMd: "When casting this spell, you must select a point within 5 feet of where you cast it. The spot begins to glow and projects an invisible dome out to a range of 5 miles. While the spell is active, no form of teleportation or transportation can be used within the dome, and divination spells to locate or scry on a place or creature within the spell’s radius automatically fail.\n\n" +
            "Spells such as Teleport, Portal, Misty Step, Teleportation Circle, and similar magic cast within the dome still expend their spell slot but fail to function. Attempting to teleport into the dome from outside its range instead causes the traveler to immediately appear just outside the dome’s boundary.\n\n" +
            "Casting this spell in the same location each day for 3 months causes its effects to become permanent.",
        scalingMd: "",
        imagePath: spellImgUrl("raidingward"),
    },
    {
        slug: slugify("Reality Break"),
        name: "Reality Break",
        classes: ["Bard", "Warlock", "Wizard",],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Explorer's Guide to Wildemount", "Damage", "Control", "Dunamancy"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Psychic", "Force", "Cold"],
        conditions: ["Stunned", "Prone", "Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a crystal prism" },
        concentration: true,
        ritual: false,
        descriptionMd: "You shatter the barriers between realities and timelines, thrusting a creature into turmoil and madness. The target must succeed on a Wisdom saving throw, or it can’t take reactions until the spell ends. The affected target must also roll a d10 at the start of each of its turns; the number rolled determines what happens to the target, as shown on the Reality Break Effects table.\n\n" +
            "At the end of each of its turns, the affected target can repeat the Wisdom saving throw, ending the spell on itself on a success.\n\n" +
            "Reality Break Effects\n" +
            "1–2. Vision of the Far Realm. The target takes 6d12 Psychic damage and is Stunned until the end of the turn.\n" +
            "3–5. Rending Rift. The target must make a Dexterity saving throw, taking 8d12 Force damage on a failed save or half as much damage on a successful one.\n" +
            "6–8. Wormhole. The target is teleported, along with everything it is wearing and carrying, up to 30 feet to an unoccupied space of your choice that you can see. The target also takes 10d12 Force damage and is knocked Prone.\n" +
            "9–10. Chill of the Dark Void. The target takes 10d12 Cold damage and is Blinded until the end of the turn.",
        scalingMd: "",
        imagePath: spellImgUrl("realitybreak"),
    },
    {
        slug: slugify("Red Rain"),
        name: "Red Rain",
        classes: ["Cleric", "Warlock"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "10 minutes",
        duration: "8 hours",
        range: "Self",
        area: "5 Mile",
        tags: ["Grim Hollow", "Sangromancy", "Damage", "Debuff", "Control"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Frightened", "Exhaustion"],
        components: { verbal: true, somatic: true, material: true, materialText: "a sponge soaked in blood" },
        concentration: true,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend eight Hit Point Dice or the spell automatically fails. Over the course of 1d6 × 5 minutes, the sky darkens and thick droplets of blood rain everywhere within 5 miles of you.\n\n" +
            "Each Beast and Plant creature in the area must succeed on a Wisdom saving throw or have the Frightened condition until it has spent 1 minute outside the area. Mundane plants exposed to the rain wither and die after 10 minutes.\n\n" +
            "For every 10 minutes that a creature of any type is directly exposed to the rain, that creature gains 1 Exhaustion level and takes 2d10 Necrotic damage. The creature’s Hit Point maximum decreases by an amount equal to the Necrotic damage dealt. This reduction lasts until the creature removes all levels of Exhaustion gained from this spell. While a creature has any Exhaustion levels from this spell, it automatically fails saving throws against removing the Poisoned condition.\n\n" +
            "When the spell ends, roll the Hit Point Dice expended to cast the spell. Beast and Plant creatures won’t return and plants won’t regrow in the area for a number of days equal to the roll’s total.",
        scalingMd: "",
        imagePath: spellImgUrl("redrain"),
    },
    {
        slug: slugify("Shadow Dragon"),
        name: "Shadow Dragon",
        classes: ["Warlock", "Wizard"],
        spellLevel: 8,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "Huge illusion; 60-foot cone breath",
        tags: ["Xanathar's Guide to Everything", "Creation", "Damage", "Control"],
        saveRequired: "WIS Save (fear); INT Save (breath)",
        attackType: "None",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Necrotic", "Poison"],
        conditions: ["Frightened (save ends when out of sight)"],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "By gathering threads of shadow material from the Shadowfell, you create a Huge shadowy dragon in an unoccupied space that you can see within range. The illusion lasts for the spell’s duration and occupies its space, as if it were a creature.\n\n" +
            "When the illusion appears, any of your enemies that can see it must succeed on a Wisdom saving throw or become frightened of it for 1 minute. If a frightened creature ends its turn in a location where it doesn’t have line of sight to the illusion, it can repeat the saving throw, ending the effect on itself on a success.\n\n" +
            "As a bonus action on your turn, you can move the illusion up to 60 feet. At any point during its movement, you can cause it to exhale a blast of energy in a 60-foot cone originating from its space. When you create the dragon, choose a damage type: acid, cold, fire, lightning, necrotic, or poison. Each creature in the cone must make an Intelligence saving throw, taking 7d6 damage of the chosen damage type on a failed save, or half as much damage on a successful one.\n\n" +
            "The illusion is tangible because of the shadow stuff used to create it, but attacks miss it automatically, it succeeds on all saving throws, and it is immune to all damage and conditions. A creature that uses an action to examine the dragon can determine that it is an illusion by succeeding on an Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through it and has advantage on saving throws against its breath.",
        scalingMd: "",
        imagePath: spellImgUrl("shadowdragon"),
    },
    {
        slug: slugify("Undead Enthrallment"),
        name: "Undead Enthrallment",
        classes: ["Cleric", "Warlock", "Wizard"],
        spellLevel: 8,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Instantaneous",
        range: "10 feet",
        area: "One or more corpses",
        tags: ["Grim Hollow"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a clay pot filled with brackish water, another clay pot filled with grave dirt, and a black onyx stone worth 500 + GP for each corpse" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Choose a corpse, or a number or corpses, within range that are equivalent to the size of the creature you are animating (the GM determines how many corpses are required). Your spell imbues the target with a foul mimicry of life, raising it as an Undead creature. You can choose for the target to become an Undead creature of CR 3 or lower (the GM has the creature’s game statistics).\n\nOn each of your turns, you can use a Bonus Action to mentally command any creature you made with this spell if the creature is within 60 feet of you. (If you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature takes the Dodge Action. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it.\n\nTo maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over 1 creature you have animated with this spell, rather than animating a new one. Any creature you have maintained with this spell for 30 days remains permanently under your control. You may only control a maximum of four creatures with this spell.",
        scalingMd: ""
    },
    {
        slug: slugify("Wall of Gloom"),
        name: "Wall of Gloom",
        classes: ["Bard", "Wizard"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "120 feet",
        area: "60-foot line",
        tags: ["Grim Hollow"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: ["Incapacitated", "Exhaustion"],
        components: { verbal: true, somatic: true, material: true, materialText: "a vial of tears" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a wall of swirling gray energy, formed of the psychic pain of loss. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a ringed wall that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.\n\n" +
            "The wall sheds Dim Light out to a range of 100 feet. When you cast the spell, you and creatures you designate can pass through and remain near the wall without harm. If a creature moves within 20 feet of it or starts its turn there, the creature must succeed on a Charisma saving throw or have the Incapacitated condition for one round.\n\n" +
            "A creature can move through the wall, though the attempt is emotionally draining. The first time a creature enters the wall on a turn or ends its turn there, it must succeed on a Charisma saving throw or gain 1 Exhaustion level.",
    },
    {
        slug: slugify("Animal Shapes"),
        name: "Animal Shapes",
        classes: ["Druid"],
        spellLevel: 8,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "24 hours",
        range: "30 feet",
        area: "Any number of willing creatures you can see within range",
        tags: ["Player's Handbook", "Shapechanging"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Choose any number of willing creatures that you can see within range. Each target shape-shifts into a Large or smaller Beast of your choice that has a Challenge Rating of 4 or lower. You can choose a different form for each target. On later turns, you can take a Magic action to transform the targets again.\n\n" +
            "A target’s game statistics are replaced by the chosen Beast’s statistics, but the target retains its creature type; Hit Points; Hit Point Dice; alignment; ability to communicate; and Intelligence, Wisdom, and Charisma scores. The target’s actions are limited by the Beast form’s anatomy, and it can’t cast spells. The target’s equipment melds into the new form, and the target can’t use any of that equipment while in that form.\n\n" +
            "The target gains a number of Temporary Hit Points equal to the Hit Points of the first form into which it shape-shifts. These Temporary Hit Points vanish if any remain when the spell ends. The transformation lasts for the duration or until the target ends it as a Bonus Action.",
        scalingMd: "",
    },
    {
        slug: slugify("Antimagic Field"),
        name: "Antimagic Field",
        classes: ["Cleric", "Wizard"],
        spellLevel: 8,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "10-foot emanation",
        tags: ["Player's Handbook", "Control", "Negation", "Warding", "Anti-Magic"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "iron filings" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A 10-foot antimagic aura surrounds you. Spells and magical effects can’t be cast or function within, and can’t target anything inside. Magic items are suppressed. Areas of magic can’t extend in, teleportation/planar travel fails, and portals close while in the aura. Ongoing magic is suppressed (time counts toward duration). Dispel Magic doesn’t end the field.",
        scalingMd: "",
    },
    {
        slug: slugify("Befuddlement"),
        name: "Befuddlement",
        classes: ["Bard", "Druid", "Warlock", "Wizard"],
        spellLevel: 8,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous (with lingering effect)",
        range: "150 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Damage", "Debuff"],
        saveRequired: "Intelligence",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a key ring with no keys" },
        concentration: false,
        ritual: false,
        descriptionMd: "You blast the mind of a creature that you can see within range. The target makes an Intelligence saving throw.\n\n" +
            "On a failed save, the target takes 10d12 Psychic damage and can’t cast spells or take the Magic action. At the end of every 30 days, the target repeats the save, ending the effect on a success. The effect can also be ended by the Greater Restoration, Heal, or Wish spell.\n\n" +
            "On a successful save, the target takes half as much damage only.",
        scalingMd: "",
        imagePath: spellImgUrl("befuddlement")
    },
    {
        slug: slugify("Clone"),
        name: "Clone",
        classes: ["Wizard"],
        spellLevel: 8,
        school: "Necromancy",
        castingTime: "1 hour",
        duration: "Instantaneous (special)",
        range: "Touch",
        area: "One creature or at least 1 cubic inch of its flesh",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true, somatic: true, material: true,
            materialText: "a diamond worth 1,000+ gp (consumed) and a sealable vessel worth 2,000+ gp sized for the creature"
        },
        concentration: false,
        ritual: false,
        descriptionMd: "You touch a creature or at least 1 cubic inch of its flesh. An inert duplicate of that creature forms inside the vessel used in the spell’s casting and finishes growing after 120 days; you choose whether the finished clone is the same age as the creature or younger. The clone remains inert and endures indefinitely while its vessel remains undisturbed.\n\n" +
            "If the original creature dies after the clone finishes forming, the creature’s soul transfers to the clone if the soul is free and willing to return. The clone is physically identical to the original and has the same personality, memories, and abilities, but none of the original’s equipment. The creature’s original remains, if any, become inert and can’t be revived, since the creature’s soul is elsewhere.",
        scalingMd: "",
        imagePath: spellImgUrl("clone")
    },
    {
        slug: slugify("Control Weather"),
        name: "Control Weather",
        classes: ["Cleric", "Druid", "Wizard"],
        spellLevel: 8,
        school: "Transmutation",
        castingTime: "10 minutes",
        duration: "8 hours",
        range: "Self",
        area: "5 miles",
        tags: ["Player's Handbook", "Control", ],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "burning incense" },
        concentration: true,
        ritual: false,
        descriptionMd: "You take control of the weather within 5 miles of you for the duration. You must be outdoors to cast this spell, and it ends early if you go indoors.\n\n" +
            "When you cast the spell, you change the current weather conditions, which are determined by the DM. You can change precipitation, temperature, and wind. It takes 1d4 × 10 minutes for the new conditions to take effect. Once they do so, you can change the conditions again. When the spell ends, the weather gradually returns to normal.\n\n" +
            "When you change the weather conditions, find a current condition on the following tables and change its stage by one, up or down. When changing the wind, you can change its direction.",
        tableHtml: `
  <div class="rules-table">
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Clear</td></tr>
        <tr><td>2</td><td>Light clouds</td></tr>
        <tr><td>3</td><td>Overcast or ground fog</td></tr>
        <tr><td>4</td><td>Rain, hail, or snow</td></tr>
        <tr><td>5</td><td>Torrential rain, driving hail, or blizzard</td></tr>
      </tbody>
    </table>

    <h3>Temperature</h3>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Heat wave</td></tr>
        <tr><td>2</td><td>Hot</td></tr>
        <tr><td>3</td><td>Warm</td></tr>
        <tr><td>4</td><td>Cool</td></tr>
        <tr><td>5</td><td>Cold</td></tr>
        <tr><td>6</td><td>Freezing</td></tr>
      </tbody>
    </table>

    <h3>Wind</h3>
    <table>
      <thead>
        <tr>
          <th>Stage</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>1</td><td>Calm</td></tr>
        <tr><td>2</td><td>Moderate wind</td></tr>
        <tr><td>3</td><td>Strong wind</td></tr>
        <tr><td>4</td><td>Gale</td></tr>
        <tr><td>5</td><td>Storm</td></tr>
      </tbody>
    </table>
  </div>
`,
        scalingMd: "",
    },
    {
        slug: slugify("Demiplane"),
        name: "Demiplane",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "Medium door to a 30×30×30 ft room",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create a shadowy door leading to a 30-ft cube demiplane (wood or stone). Objects left inside remain when the door vanishes. Creatures inside may opt to be shunted out Prone as the door disappears. Each casting can make a new room or connect to an existing one you created (or a known other’s).",
        scalingMd: "",
        imagePath: spellImgUrl("demiplane")
    },
    {
        slug: slugify("Dominate Monster"),
        name: "Dominate Monster",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 8,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "One creature you can see within range must succeed on a Wisdom saving throw or have the Charmed condition for the duration. The target has Advantage on the save if you or your allies are fighting it. Whenever the target takes damage, it repeats the save, ending the spell on itself on a success.\n\n" +
            "You have a telepathic link with the Charmed target while the two of you are on the same plane of existence. On your turn, you can use this link to issue commands to the target (no action required), such as “Attack that creature,” “Move over there,” or “Fetch that object.” The target does its best to obey on its turn. If it completes an order and doesn’t receive further direction from you, it acts and moves as it likes, focusing on protecting itself.\n\n" +
            "You can command the target to take a Reaction but must take your own Reaction to do so.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Your Concentration can last longer with a level 9 spell slot (up to 8 hours).",
    },
    {
        slug: slugify("Earthquake"),
        name: "Earthquake",
        classes: ["Cleric", "Druid", "Sorcerer"],
        spellLevel: 8,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "500 feet",
        area: "100-foot-radius circle (ground)",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a fractured rock" },
        concentration: true,
        ritual: false,
        descriptionMd: "Choose a point on the ground that you can see within range. For the duration, an intense tremor rips through the ground in a 100-foot-radius circle centered on that point. The ground there is Difficult Terrain.\n\n" +
            "When you cast this spell and at the end of each of your turns for the duration, each creature on the ground in the area makes a Dexterity saving throw. On a failed save, a creature has the Prone condition, and its Concentration is broken.\n\n" +
            "You can also cause the effects below.\n\n" +
            "Fissures. A total of 1d6 fissures open in the spell’s area at the end of the turn you cast it. You choose the fissures’ locations, which can’t be under structures. Each fissure is 1d10 × 10 feet deep and 10 feet wide, and it extends from one edge of the spell’s area to another edge. A creature in the same space as a fissure must succeed on a Dexterity saving throw or fall in. A creature that successfully saves moves with the fissure’s edge as it opens.\n\n" +
            "Structures. The tremor deals 50 Bludgeoning damage to any structure in contact with the ground in the area when you cast the spell and at the end of each of your turns until the spell ends. If a structure drops to 0 Hit Points, it collapses.\n\n" +
            "A creature within a distance from a collapsing structure equal to half the structure’s height makes a Dexterity saving throw. On a failed save, the creature takes 12d6 Bludgeoning damage, has the Prone condition, and is buried in the rubble, requiring a DC 20 Strength (Athletics) check as an action to escape. On a successful save, the creature takes half as much damage only.",
        scalingMd: "",
        imagePath: spellImgUrl("earthquake")
    },
    {
        slug: slugify("Glibness"),
        name: "Glibness",
        classes: ["Bard", "Warlock"],
        spellLevel: 8,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Social"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "For the duration, when you make a Charisma check, you can treat the roll as 15. Truth-detecting magic indicates you are truthful, regardless of what you say.",
        scalingMd: "",
        imagePath: spellImgUrl("glibness")
    },
    {
        slug: slugify("Holy Aura"),
        name: "Holy Aura",
        classes: ["Cleric"],
        spellLevel: 8,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "30-foot aura",
        tags: ["Player's Handbook", "Buff", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a reliquary worth 1,000+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Allies you choose in your 30-ft aura have Advantage on all saving throws; enemies have Disadvantage on attack rolls against them. When a Fiend or Undead hits an affected creature in melee, it must CON save or become Blinded until end of its next turn.",
        scalingMd: "",
    },
    {
        slug: slugify("Incendiary Cloud"),
        name: "Incendiary Cloud",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "150 feet",
        area: "20-foot sphere",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A swirling cloud of embers/smoke fills a 20-ft-radius sphere (Heavily Obscured). DEX save on entry, start, or move-into (once/turn): 10d8 Fire, half on success. The cloud moves 10 ft away from you each turn. Strong wind disperses it.",
        scalingMd: "",
    },
    {
        slug: slugify("Maze"),
        name: "Maze",
        classes: ["Wizard"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Control", "Banishment"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You banish a creature that you can see within range into a labyrinthine demiplane. The target remains there for the duration or until it escapes the maze.\n\n" +
            "The target can take a Study action to try to escape. When it does so, it makes a DC 20 Intelligence (Investigation) check. If it succeeds, it escapes, and the spell ends.\n\n" +
            "When the spell ends, the target reappears in the space it left or, if that space is occupied, in the nearest unoccupied space.",
        scalingMd: "",
        imagePath: spellImgUrl("maze")
    },
    {
        slug: slugify("Mind Blank"),
        name: "Mind Blank",
        classes: ["Bard", "Wizard"],
        spellLevel: 8,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "24 hours",
        range: "Touch",
        area: "One willing creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Target gains Immunity to Psychic damage and the Charmed condition. The target can’t be sensed for emotions/alignment, read, detected, or controlled by magic, and no spell (even Wish) can gather information about or remotely observe the target.",
        scalingMd: "",
    },
    {
        slug: slugify("Power Word Stun"),
        name: "Power Word Stun",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 8,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous (with ongoing saves)",
        range: "60 feet",
        area: "One creature you can see",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None (ongoing CON saves to end)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Stunned"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "If the target has 150 HP or fewer, it is Stunned. Otherwise, its Speed is 0 until the start of your next turn. A Stunned target makes a CON save at each turn’s end to end the condition.",
        scalingMd: "",
    },
    {
        slug: slugify("Sunburst"),
        name: "Sunburst",
        classes: ["Cleric", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 8,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous (with ongoing saves)",
        range: "150 feet",
        area: "60-foot-radius sphere",
        tags: ["Player's Handbook", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of sunstone" },
        concentration: false,
        ritual: false,
        descriptionMd: "Brilliant sunlight flashes in a 60-foot-radius Sphere centered on a point you choose within range. Each creature in the Sphere makes a Constitution saving throw. On a failed save, a creature takes 12d6 Radiant damage and has the Blinded condition for 1 minute. On a successful save, it takes half as much damage only.\n\n" +
            "A creature Blinded by this spell makes another Constitution saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n" +
            "This spell dispels Darkness in its area that was created by any spell.",
        scalingMd: "",
        imagePath: spellImgUrl("sunburst")
    },
    {
        slug: slugify("Telepathy"),
        name: "Telepathy",
        classes: ["Wizard"],
        spellLevel: 8,
        school: "Divination",
        castingTime: "1 action",
        duration: "24 hours",
        range: "Unlimited",
        area: "1 creature",
        tags: ["Player's Handbook", "Communication"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a pair of linked silver rings" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create a two-way telepathic link with a familiar willing creature anywhere on the same plane. Instantly share words, images, sounds, and other sensory messages; the target recognizes you through the link. Ends if you’re no longer on the same plane.",
        scalingMd: "",
        imagePath: spellImgUrl("telepathy")
    },
    {
        slug: slugify("Tsunami"),
        name: "Tsunami",
        classes: ["Druid"],
        spellLevel: 8,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "6 rounds",
        range: "1 mile",
        area: "Wall up to 300 ft long, 300 ft high, 50 ft thick",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Strength",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.\n\n" +
            "When the wall appears, each creature in its area makes a Strength saving throw, taking 6d10 Bludgeoning damage on a failed save or half as much damage on a successful one.\n\n" +
            "At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 Bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 50 feet, and the damage the wall deals on later rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.\n\n" +
            "A creature caught in the wall can move by swimming. Because of the wave’s force, though, the creature must succeed on a Strength (Athletics) check against your spell save DC to move at all. If it fails the check, it can’t move. A creature that moves out of the wall falls to the ground.",
        scalingMd: "",
        imagePath: spellImgUrl("tsunami")
    },
{
  slug: slugify("Wrathstorm"),
  name: "Wrathstorm",
  classes: ["Druid"],
  spellLevel: 8,
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 minute",
  range: "300 feet",
  area: "120-foot radius",
  tags: ["Homebrew", "Damage", ],
  saveRequired: "Dexterity",
  attackType: "Spell",
  damageTypes: ["Lightning"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "You call an overwhelming tempest over the area. While the spell lasts, at the start of each creature’s turn that is within the area (including allies), roll a d6. On a 1–3, a lightning bolt smites that creature. The creature makes a Dexterity saving throw, taking 7d10 Lightning damage on a failed save, or half as much damage on a success.\n\n" +
    "The bolt descends from above and ignores cover: a creature can’t gain the benefit of cover for this save, and the bolt can strike a creature you can’t see, including one that is invisible or behind total cover. The storm targets creatures only and doesn’t ignite unattended objects.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** The Lightning damage increases by 1d10 for each spell slot level above 8th.",
  imagePath: spellImgUrl("wrathstorm"),
},
{
    slug: slugify("Holy Star of Mystra"),
    name: "Holy Star of Mystra",
    classes: ["Cleric", "Wizard"],
    spellLevel: 8,
    school: "Evocation",
    castingTime: "1 bonus action",
    duration: "1 minute",
    range: "Self",
    area: "Self; 1 creature within 120 feet",
    tags: ["Player's Handbook", "Damage", "Defense", "Buff", ],
    saveRequired: "None",
    attackType: "Ranged Spell Attack",
    damageTypes: ["Force", "Radiant"],
    conditions: [],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You create a glowing mote of energy that hovers above you for the duration. The mote sheds Bright Light in a 5-foot radius and Dim Light for an additional 5 feet.\n\n" +
        "When you cast this spell and as a Bonus Action on later turns, you can unleash a shining bolt from the mote, targeting one creature within 120 feet of yourself. Make a ranged spell attack. On a hit, the target takes Force or Radiant damage (your choice) equal to 4d10 + your spellcasting ability modifier.\n\n" +
        "In addition, while the mote is present, you have Three-Quarters Cover, and if you succeed on a saving throw against a spell of level 7 or lower that targeted only you and didn’t create an area of effect, you can use your Reaction to deflect that spell back at the spell’s caster; the caster makes a saving throw against that spell using that caster’s own spell save DC.",
    scalingMd: "",
    imagePath: spellImgUrl("holystarofmystra")
},

];