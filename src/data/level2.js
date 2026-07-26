import { spellImgUrl, slugify } from "./spellUtils.js";

export const LEVEL2 = [
    {
        slug: slugify("Arcanomagnetic Repulsion"),
        name: "Arcanomagnetic Repulsion",
        classes: ["Artificer", "Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "20-ft. radius around you",
        tags: ["Heliana's Guide to Monster Hunting", "Control", "Warding"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You emit waves of arcanomagnetic energy that distort the trajectories of ferrous items. For the duration, attacks using metal or steel weapons or ammunition made against you are at disadvantage. In addition, the area within 20 feet of you is difficult terrain for creatures made of metal or wearing metal or steel armor.\n\nMagnetic Pulse. When you cast the spell and as a bonus action on subsequent turns, force one Huge or smaller creature affected by this difficult terrain to make a Strength saving throw. On a failure, it takes 1d6 Force damage and is knocked prone.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 3rd level or higher, the radius increases by 5 feet and the pulse damage increases by 1d6 for each slot level above 2nd.",
        imagePath: spellImgUrl("arcanomagneticrepulsion")
    },
    {
  slug: slugify("Reflective Shimmer"),
  name: "Reflective Shimmer",
  classes: ["Artificer", "Bard", "Cleric", "Paladin", "Sorcerer", "Warlock", "Wizard"],
  spellLevel: 2,
  school: "Abjuration",
  castingTime: "1 action",
  duration: "1 round",
  range: "Self",
  area: "Self",
  tags: ["Homebrew", "Damage", "Defense", "New"],
  saveRequired: "None",
  attackType: "Ranged",
  damageTypes: ["Force"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You conjure a shimmering arcane bubble that surrounds you. Before the end of your next turn, when you are targeted by a ranged attack roll, whether from a weapon or a spell, the attack is immediately deflected back toward the attacker. " +
    "Make a ranged spell attack against that attacker. On a hit, the reflected attack deals the original attack’s damage plus 2d8 Force damage.\n\n" +
    "After the bubble deflects one attack, this spell ends.",
  scalingMd: "",
  imagePath: spellImgUrl("reflectiveshimmer")
},
    {
        slug: slugify("Arcane Conduit"),
        name: "Arcane Conduit",
        classes: ["Sorcerer"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Damage"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You tap directly into the arcane weave. For the duration, you have resistance to all damage from magical sources except Force. At the start of each of your turns, you and all creatures within 5 feet of you take 1d6 Force damage. This damage increases by 1d6 each turn to a maximum of 4d6.",
        scalingMd: "",
        imagePath: spellImgUrl("arcaneconduit")
    },
    {
        slug: slugify("Aggressive Bloat"),
        name: "Aggressive Bloat",
        classes: ["Cleric", "Druid", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 round",
        range: "30 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bean" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You cause the gases within a creature you can see to expand rapidly. The target makes a Constitution saving throw, taking 3d10 Necrotic damage on a failed save, or half as much on a success. If the damage the creature takes equals or exceeds its Constitution score, it floats vertically 5 feet and remains suspended until the start of your next turn. While suspended, the target can move only by pushing or pulling against a fixed object within reach, as if climbing. When the spell ends, the target floats gently to the ground.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.",
        imagePath: spellImgUrl("aggressivebloat")
    },
    {
        slug: slugify("Animate Object"),
        name: "Animate Object",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Creation", "Damage"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You bring a Tiny object to life. It gains HP 20, AC 18, STR 4, DEX 18, CON 10, INT 3, WIS 3, CHA 1; speed 30 ft. (or fly 30 ft. (hover) if it lacks legs). Its attack modifier equals your spell attack modifier and on a hit it deals 1d4 + your spellcasting ability modifier damage (weapon’s type if a weapon, otherwise bludgeoning).\n\nAs a bonus action, you can mentally command the animated object while it is within 60 feet of you. If unsecured objects are attached (e.g., a chain bolted to a wall), speed is 0. It has blindsight 30 ft. and is blind beyond that range. When it drops to 0 hit points, it reverts to its object form and any excess damage carries over to that form.",
        scalingMd: "",
        imagePath: spellImgUrl("animateobject")
    },

    {
        slug: slugify("Become Fire"),
        name: "Become Fire",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff", "Damage", "Movement"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You become a burst of elemental flames. Until the start of your next turn: you have resistance to Fire and to nonmagical B/P/S damage; you can move through creatures and ignore difficult terrain but can’t end your turn in an occupied space; the first time you enter a creature’s space on a turn it takes 1d6 Fire damage; and once on your turn when you roll Fire damage, you can maximize one die.",
        scalingMd: "",
        imagePath: spellImgUrl("becomefire")
    },
    {
        slug: slugify("Become Stone"),
        name: "Become Stone",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff", "Defense"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Petrified"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You solidify into stone. Until the start of your next turn, you are Petrified, your AC becomes 20, and you gain 10 temporary hit points (any remaining temp HP fade when the spell ends).",
        scalingMd: "",
        imagePath: spellImgUrl("becomestone")
    },
    {
        slug: slugify("Become Water"),
        name: "Become Water",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff", "Control", "Movement"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You become a surge of elemental water. Until the start of your next turn: you have resistance to nonmagical B/P/S damage; you can move through other creatures and ignore difficult terrain; the first time you move through a Large or smaller creature on a turn, it must succeed on a Strength saving throw or be knocked prone.",
        scalingMd: "",
        imagePath: spellImgUrl("becomewater")
    },
    {
        slug: slugify("Become Wind"),
        name: "Become Wind",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff", "Movement", "Defense"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You become a burst of elemental wind. Until the start of your next turn, you gain resistance to Lightning and to nonmagical B/P/S damage, a flying speed of 30 ft., can move through other creatures, and ignore difficult terrain. You fall at the start of your next turn if not otherwise supported.",
        scalingMd: "",
        imagePath: spellImgUrl("becomewind")
    },
    {
        slug: slugify("Binding Ice"),
        name: "Binding Ice",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-ft. cone",
        tags: ["Fizban's Treasury of Dragons", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Cold"],
        conditions: ["Speed 0 (ice)"],
        components: { verbal: false, somatic: true, material: true, materialText: "a vial of meltwater" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A burst of cold erupts in a 30-foot cone. Each creature in the area makes a Constitution saving throw. On a failure, a creature takes 3d8 Cold damage and is hindered by ice for 1 minute (speed 0) until it or a creature within reach uses an action to break away the ice. On a success, a creature takes half damage and isn’t hindered.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, the Cold damage increases by 1d8 for each slot level above 2nd.",
        imagePath: spellImgUrl("bindingice")
    },
    {
        slug: slugify("Blazing Beacon"),
        name: "Blazing Beacon",
        classes: ["Cleric", "Paladin",],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff", "Warding"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You’re bathed in holy light, shedding bright light 30 ft. and dim light 30 ft. beyond. Creatures that target you with an attack or a spell that requires seeing you must first make a Constitution saving throw. On a failure, they are Blinded until the start of their next turn. A creature with darkvision makes this save with disadvantage. A creature that is already blinded automatically succeeds on this save.",
        scalingMd: "",
        imagePath: spellImgUrl("blazingbeacon")
    },
    {
        slug: slugify("Blazing Streak"),
        name: "Blazing Streak",
        classes: ["Artificer", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "30-ft. by 5-ft. line",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A 30-foot-long, 5-foot-wide line of roaring flame erupts in a direction you choose. Each creature in the line makes a Dexterity saving throw, taking 3d8 Fire on a failed save, or half as much on a success. Flammable objects not being worn or carried are ignited.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
        imagePath: spellImgUrl("blazingstreak")
    },
    {
        slug: slugify("Blood Sacrifice"),
        name: "Blood Sacrifice",
        classes: ["Sorcerer", "Warlock", "Wizard",],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Crooked Moon", "Sangromancy", "Buff", "Damage"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of your own blood" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You sacrifice life force to empower your magic. When you cast this spell, you take 1d6 Necrotic damage that cannot be reduced or prevented. For the duration, whenever you deal damage with a spell, one target of that spell takes an extra 1d6 damage of the same type (your choice if multiple types).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both the self-damage and bonus damage increase by 1d6 for each slot level above 2nd.",
        imagePath: spellImgUrl("bloodsacrifice")
    },
    {
        slug: slugify("Blood Wisp"),
        name: "Blood Wisp",
        classes: ["Bard", "Sorcerer", "Wizard", "Blood Hunter"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 hour",
        duration: "1 hour",
        range: "Self",
        area: "Self",
        tags: ["Grim Hollow", "Sangromancy", "Buff"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a ruby worth 10 gp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend two Hit Point Dice or it automatically fails. Roll the expended dice and create a red wisp with HP equal to the total + your spellcasting modifier. The wisp has AC 10 + your spellcasting modifier and orbits your head.\n\nEach time you roll damage for a spell, you can reroll one damage die, taking the new result; the wisp takes damage equal to that roll. When the wisp reaches 0 HP, the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can expend one additional Hit Point Die for each slot level above 2nd.",
        imagePath: spellImgUrl("bloodwisp")
    },
    {
        slug: slugify("Bloodletter"),
        name: "Bloodletter",
        classes: ["Cleric", "Paladin", "Ranger", "Warlock",],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Touch",
        area: "1 weapon",
        tags: ["Grim Hollow", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: ["Festering Wound"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You touch a nonmagical weapon, imbuing it with necrotic power. The next creature hit by the weapon must make a Constitution saving throw or receive a festering wound. A creature with such a wound takes 2d6 Necrotic damage at the start of its turn for the spell’s duration. Each creature can only have one festering wound at a time. Receiving any magical healing ends the wound and the spell.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, the recurring wound damage increases by 1d6 for each slot level above 2nd.",
        imagePath: spellImgUrl("bloodletter")
    },
    {
        slug: slugify("Borrowed Knowledge"),
        name: "Borrowed Knowledge",
        classes: ["Bard", "Cleric", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "Self",
        tags: ["Strixhaven", "Utility"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a book worth at least 5 gp, which the spell consumes" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You draw on knowledge from spirits of the past. Choose one skill in which you lack proficiency; for the duration, you gain proficiency in that skill. The spell ends early if you cast it again.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Gain one additional proficiency for each slot level above 2nd. For each slot level above 2nd, consume one additional book.",
        imagePath: spellImgUrl("borrowedknowledge")
    },
    {
        slug: slugify("Burning Strike"),
        name: "Burning Strike",
        classes: ["Ranger",],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 weapon",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of ammunition or weapon worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You imbue a weapon or piece of ammunition with flickering flames. The first time you attack with it, it erupts in fire. On a hit, the target takes an extra 4d4 Fire and begins burning. On a miss, it takes half the extra damage and doesn’t ignite.\n\nA burning target sheds bright light 10 ft. and dim light 10 ft., and takes 1d4 Fire at the end of its turns unless a creature uses its action to douse the flames. Once an attack is made with the empowered item, the spell ends. If you empower a Light weapon, you can immediately make one weapon attack with it as part of the casting.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, both the initial and ongoing fire damage increase by 1d4 per slot level above 2nd.",
        imagePath: spellImgUrl("burningstrike")
    },
    {
        slug: slugify("Chorus of the Lost"),
        name: "Chorus of the Lost",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "15-ft-radius sphere",
        tags: ["Crooked Moon", "Damage", "Control"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: ["Frightened"],
        components: { verbal: true, somatic: true, material: true, materialText: "a silver bell worth 10+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You summon the eerie wailing of lost souls at a point within range. Each creature in a 15-foot-radius sphere makes a Wisdom save. On a failed save, it takes 2d6 Psychic and is Frightened for the duration. On a success, it takes half damage and is Frightened until the end of its next turn. A Frightened target repeats the save at the end of each of its turns, ending the effect on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the damage by 1d6 per slot level above 2nd.",
        imagePath: spellImgUrl("chorusofthelost")
    },
    {
        slug: slugify("Cold Snap"),
        name: "Cold Snap",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "90 feet",
        area: "5-ft-radius sphere",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Cold"],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A swirling burst of freezing wind erupts at a point within range. Each creature in a 5-foot-radius sphere makes a Constitution save. On a failed save, it takes 3d8 Cold and is stuck in ice, reducing its speed by 10 feet until the start of your next turn. On a success, a creature takes half damage and isn’t slowed. The ground becomes difficult terrain until the start of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the damage by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("coldsnap")
    },
    {
        slug: slugify("Chain of Conviction"),
        name: "Chain of Conviction",
        classes: ["Paladin", "Warlock",],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "30 feet",
        area: "1 creature",
        tags: ["Crooked Moon", "Control", "Damage"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Hurl a spectral barbed chain at a creature you can see. The target makes a Strength save. On a failed save, it takes 2d6 Force damage, is pulled up to 30 feet toward you, and is bound: it is tethered to you and can’t move or teleport to a space more than 30 feet away, and you have Advantage on attack rolls against it. On a success, it takes half damage only. The bound target repeats the save at the end of each of its turns, ending the spell on a success. If you are ever more than 30 feet away, the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the damage by 1d6 per slot level above 2nd.",
        imagePath: spellImgUrl("chainofconviction")
    },

    {
        slug: slugify("Corpse Explosion"),
        name: "Corpse Explosion",
        classes: ["Bard", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 hour",
        duration: "Instantaneous",
        range: "120 feet",
        area: "10-foot radius (see scaling)",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a corpse" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Target a Medium corpse within range; it swells and bursts, showering bone shards. Creatures within 10 feet make a Dexterity save, taking 3d8 Piercing on a failed save, or half as much on a success. Constructs, Plants, and creatures without physical bodies are immune.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** 4th level: target a Large corpse, 20-ft radius, 6d8 damage. 6th: Huge corpse, 30-ft radius, 9d8 damage. 8th: Gargantuan corpse, 50-ft radius, 12d8 damage.",
        imagePath: spellImgUrl("corpseexplosion")
    },
    {
        slug: slugify("Counterspy"),
        name: "Counterspy",
        classes: ["Bard", "Cleric", "Druid", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "10 minutes",
        duration: "1 hour",
        range: "5 feet",
        area: "10-foot radius",
        tags: ["Obojima", "Utility", "Warding", "Detection"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bag of sand and six candles" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create an intricate circle of candles and sand centered on a point within range (radius up to 10 feet). While the spell lasts, if any creature outside the circle can see or hear you by magical or nonmagical means, the candles’ flames change color. If a spell or magical effect was used, you know that fact and the extent of its effects.",
        scalingMd: "",
        imagePath: spellImgUrl("counterspy")
    },
    {
        slug: slugify("Crackle"),
        name: "Crackle",
        classes: ["Druid", "Sorcerer", "Wizard",],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1+ creature",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Constitution",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Lightning"],
        conditions: ["Stunned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create three arcs of lightning and hurl them at targets in range (one or several). Make a separate ranged spell attack for each arc; on a hit, the target takes 1d12 Lightning. If three or more arcs hit a single target, it must make a Constitution save or be Stunned until the start of its next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Create one additional arc per slot level above 2nd.",
        imagePath: spellImgUrl("crackle")
    },
    {
        slug: slugify("Dazing Blast"),
        name: "Dazing Blast",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: ["Stunned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "A wave of force targets a creature within range. The target makes a Constitution saving throw. On a failed save, it takes 2d6 Force damage and is Stunned until the end of its next turn. On a success, the creature takes only the damage.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 2nd.",
        imagePath: spellImgUrl("dazingblast")
    },
    {
    slug: slugify("Autopsy"),
    name: "Autopsy",
    classes: ["Bard", "Wizard"],
    spellLevel: 2,
    school: "Divination",
    castingTime: "10 minutes",
    duration: "Instantaneous",
    range: "Touch",
    area: "1 corpse",
    tags: ["Detection", "Utility", "Homebrew", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a strip of clean linen and a copper coin placed over one eye"
    },
    concentration: false,
    ritual: true,
    descriptionMd:
        "You examine a corpse and pull truth from its remaining physical echoes. You learn all of the following:\n\n" +
        "• The creature’s type and whether it was poisoned, diseased, cursed, or affected by a magical effect at the time of death (you learn the school of magic, if applicable).\n" +
        "• The approximate time of death (within 1 hour).\n" +
        "• The primary cause of death (bleeding, trauma, suffocation, fire, and so on), and whether the killing blow was a weapon, a spell, or environmental.\n" +
        "• Whether the creature died from massive damage, failed death saves, or an effect that caused death without reducing it to 0 Hit Points.",
    scalingMd: "",
    imagePath: spellImgUrl("autopsy")
},
{
    slug: slugify("Repulsion Field"),
    name: "Repulsion Field",
    classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"],
    spellLevel: 2,
    school: "Abjuration",
    castingTime: "1 action",
    duration: "1 minute",
    range: "Self",
    area: "10-foot emanation",
    tags: ["Control", "Buff", "New", "Homebrew"],
    saveRequired: "STR",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "A humming pressure surrounds you, warping the air in a tight halo. For the duration, you project a 10-foot Emanation that moves with you.\n\n" +
        "**Repulsion Pulse.** When you cast the spell and as a Bonus Action on your later turns, you can release a concussive pulse. Choose any number of creatures you can see within the Emanation. Each chosen creature must succeed on a Strength saving throw or be pushed up to 10 feet directly away from you.\n\n" +
        "A creature that is Huge or larger has Advantage on this saving throw.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the Emanation increases by 5 feet for each slot level above 2nd.",
    imagePath: spellImgUrl("repulsionfield")
},
    {
        slug: slugify("Deep Analysis"),
        name: "Deep Analysis",
        classes: ["Bard", "Ranger", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Foreknowledge"],
        saveRequired: "Charisma",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Choose a single target within range. It must succeed on a Charisma saving throw or you learn one of the following of your choice: a vulnerability, a resistance, a saving throw proficiency, a damage immunity, or a condition immunity. On a success, you learn nothing; if you are hidden, the target isn’t alerted.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Learn one additional feature for each slot level above 2nd.",
        imagePath: spellImgUrl("deepanalysis")
    },
    {
        slug: slugify("Dancing Wave"),
        name: "Dancing Wave",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "5-foot-radius low wave (3 ft high)",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You summon a cohesive mass of water at a point on the ground within range, forming a 5-foot-radius, 3-foot-high wave. The area is difficult terrain for creatures without a swimming speed. As a bonus action, you can move the wave up to 30 feet along a surface. The first time it enters a creature’s space on your turn, that creature must make a Strength save or take 1d6 Bludgeoning damage and fall Prone (prone creatures automatically fail).",
        scalingMd: "",
        imagePath: spellImgUrl("dancingwave")
    },
    {
        slug: slugify("Disorient"),
        name: "Disorient",
        classes: ["Bard", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Debuff", "Control"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Disadvantage", "Forced movement", "Speed - 0", "Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a Möbius strip" },
        concentration: false,
        ritual: false,
        descriptionMd: "You flip a target’s perception of reality. The target must make a Wisdom saving throw or become disoriented. A disoriented creature has Disadvantage on all attack rolls and, at the start of its turn, it moves 10 feet in a random direction (up to its speed) before its speed becomes 0 until the start of its next turn. At the end of each of its turns, it can make another Wisdom save, ending the effect on a success; on a failure by 5 or more, it falls Prone.",
        scalingMd: "",
        imagePath: spellImgUrl("disorient")
    },
    {
        slug: slugify("Dust Cyclone"),
        name: "Dust Cyclone",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot-radius, 30-foot-high cylinder",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Heavily Obscured (situational)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of dust" },
        concentration: true,
        ritual: false,
        descriptionMd: "A small cyclone whips up at a point on the ground within range (radius 5 ft, height 30 ft). A creature that starts its turn in the cyclone or enters it for the first time on a turn must make a Strength save, taking 1d12 Bludgeoning damage and being pushed 5 feet away on a failure, or half damage and not pushed on a success. As a bonus action, you can move the cyclone up to 30 feet; the first time it passes through a creature on your turn, that creature saves against the cyclone and is pushed out of its path on a failure. Passing through additional creatures that turn has no effect. If the cyclone moves over sand, dust, loose dirt, or small gravel, it heavily obscures its radius until the start of your next turn.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The damage increases by 1d12 for every 2 slot levels above 2nd.",
        imagePath: spellImgUrl("dustcyclone")
    },
    {
        slug: slugify("Earth Ripple"),
        name: "Earth Ripple",
        classes: ["Druid", "Sorcerer", "Warlock"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning", "Piercing"],
        conditions: ["Prone", "Restrained"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You cause the earth to deform and ripple, forcing a target creature to make a Dexterity saving throw or suffer one of the following effects (your choice):\n\n" +
            "**Pulled Under.** The target is pulled into the earth, taking 1d8 Bludgeoning damage and reducing its movement speed to 0 until a creature spends an action to dig it free.\n\n" +
            "**Earth Slam.** The target is slammed 5 feet in a direction of your choice by a wave of earth, taking 2d8 Bludgeoning damage and being knocked prone.\n\n" +
            "**Earthen Spike.** The target is impaled by a spike of earth, taking 4d8 Piercing damage.",
        scalingMd: "",
        imagePath: spellImgUrl("earthripple")
    },
    {
        slug: slugify("Earthbind"),
        name: "Earthbind",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "300 feet",
        area: "1 creature",
        tags: ["Elemental Evil Player's Companion", "Control", "Debuff"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Flying Speed - 0"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "Yellow strips of magic loop a creature you can see within range. On a failed Strength save, the target’s flying speed (if any) is reduced to 0 for the duration. An airborne creature descends safely at 60 feet per round until it reaches the ground or the spell ends.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 2nd.",
        imagePath: spellImgUrl("earthbind")
    },
    {
        slug: slugify("Earthen Grasp"),
        name: "Earthen Grasp",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "5-foot square (hand) and 1 creature within 5 feet of it",
        tags: ["Elemental Evil Player's Companion", "Damage", "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature hand sculpted from clay" },
        concentration: true,
        ritual: false,
        descriptionMd: "A Medium hand of compacted soil rises in a 5-foot square within range and reaches for one creature within 5 feet of it. The target makes a Strength save, taking 2d6 Bludgeoning damage and becoming Restrained on a failure. On subsequent turns, you can use a Magic action to crush the Restrained target (STR save; 2d6 Bludgeoning on a fail, half on a success). The target can use an action to make a Strength check against your spell save DC, ending the Restraint on a success. You can use a Magic action to move the hand or reach for a different creature; the hand releases any Restrained target if you do.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Both the initial and crush damage increase by 1d6 for each slot level above 2nd.",
        imagePath: spellImgUrl("earthengrasp")
    },
    {
        slug: slugify("Fiend Flesh"),
        name: "Fiend Flesh",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Grim Hollow", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a handful of sulfur" },
        concentration: true,
        ritual: false,
        descriptionMd: "You transform a willing creature’s skin into red scales. It gains Resistance to Cold, Fire, and Lightning damage, and Immunity to Poison damage until the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("fiendflesh")
    },
    {
        slug: slugify("Fortune's Favor"),
        name: "Fortune's Favor",
        classes: ["Wizard",],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 minute",
        duration: "1 hour",
        range: "60 feet",
        area: "1 willing creature",
        tags: ["Explorer's Guide to Wildemount", "Buff", "Dunamancy"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a white pearl worth at least 100 gp (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You impart latent luck to a willing creature you can see. Before the spell ends, the creature can dismiss this spell to roll an additional d20 for an attack roll, ability check, or saving throw and choose which d20 to use. Alternatively, when an attack roll is made against it, it can dismiss the spell to roll a d20 and choose between that roll or the attacker’s d20. When advantage/disadvantage applies, roll the extra d20 after it has been applied.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Target one additional creature per slot level above 2nd.",
        imagePath: spellImgUrl("fortunesfavor")
    },
    {
        slug: slugify("Graviturgic Smite"),
        name: "Graviturgic Smite",
        classes: ["Paladin"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "Weapon Attack (on trigger)",
        damageTypes: ["Bludgeoning"],
        conditions: ["Speed Reduction"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "The next time you hit with a weapon attack before the spell ends, it deals an extra 2d6 Bludgeoning damage. The target makes a Constitution save or its speed becomes 10 feet until the spell ends and can’t be modified (e.g., by haste).",
        scalingMd: "**Using a Higher-Level Spell Slot.** Initial extra damage increases by 1d6 per slot above 2nd.",
        imagePath: spellImgUrl("graviturgicsmite")
    },
    {
        slug: slugify("Gravity Surge"),
        name: "Gravity Surge",
        classes: ["Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "15-foot-radius sphere",
        tags: ["Homebrew", "Control", "Damage"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You crush an area with gravity. Creatures in a 15-foot-radius sphere make a STR save; on a failure they take 2d6 Bludgeoning and fall Prone (half and not Prone on a success). Creatures not on the ground make this save with Disadvantage.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 2nd.",
        imagePath: spellImgUrl("gravitysurge")
    },
    {
        slug: slugify("Harrowing Ballad"),
        name: "Harrowing Ballad",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Homebrew", "Debuff", "Damage"],
        saveRequired: "Intelligence",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "A mind-eroding song assaults a creature you can see. The target must have an Intelligence of 4 or higher and make an Intelligence saving throw. On a failure they are Charmed for the duration. While charmed, it takes 1d6 Psychic at the start of each of its turns and has Disadvantage on Perception and Concentration checks. It repeats the save at the end of each of its turns, ending the spell on a success.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Psychic damage increases by 1d6 per slot level above 2nd.",
        imagePath: spellImgUrl("harrowingballad")
    },
    {
        slug: slugify("Healing Spirit"),
        name: "Healing Spirit",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot cube (spirit)",
        tags: ["Homebrew", "Healing", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a soothing spirit in a 5-foot cube you can see. When a creature you can see moves into the spirit’s space for the first time on a turn or starts its turn there, you can restore 1d6 HP to that creature (no action). The spirit can heal 1 + your spellcasting modifier times, then disappears. As a bonus action, you can move the spirit 30 feet.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The healing increases by 1d6 per slot level above 2nd.",
        imagePath: spellImgUrl("healingspirit")
    },
    {
  slug: slugify("Stasis"),
  name: "Stasis",
  classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
  spellLevel: 2,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "1 hour",
  range: "Touch",
  area: "One object weighing up to 10 pounds",
  tags: ["Heliana's Guide to Monster Hunting", "Utility", "Dunamancy", "New"],
  saveRequired: "None",
  attackType: "None",
  damageTypes: [],
  conditions: [],
  components: {
    verbal: true,
    somatic: true,
    material: true,
    materialText: "gold dust worth at least 25 GP, which the spell consumes"
  },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You touch an object that weighs no more than 10 pounds and cause it to become magically fixed in place. You and any creatures you designate when you cast the spell can move the object normally. You can also set a password. When the password is spoken within 5 feet of the object, the spell is suppressed for 1 minute.\n\n" +
    "If the object is fixed in the air, it can support up to 4,000 pounds. If more weight is placed on it, the object falls. Otherwise, a creature can take an action to make a Strength (Athletics) check against your spell save DC. On a successful check, the creature can move the object up to 10 feet.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** If you cast this spell using a level 4 or 5 spell slot, the DC to move the object increases by 5, the object can support up to 8,000 pounds, and the duration increases to 24 hours. If you cast this spell using a level 6 or higher spell slot, the DC increases by 10, the object can support up to 20,000 pounds, and the effect lasts until dispelled.",
  imagePath: spellImgUrl("stasis")
},
{
  slug: slugify("Quick Conceal"),
  name: "Quick Conceal",
  classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  spellLevel: 2,
  school: "Conjuration",
  castingTime: "1 action",
  duration: "Concentration, up to 1 hour",
  range: "Self",
  area: "One held object",
  tags: ["Heliana's Guide to Monster Hunting", "Utility", "Dunamancy", "New"],
  saveRequired: "None",
  attackType: "None",
  damageTypes: [],
  conditions: [],
  components: { verbal: false, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: true,
  descriptionMd:
    "You flick your wrist, causing one object you are holding to vanish into an extradimensional space. The object can weigh no more than 5 pounds, and no other creature can be holding it when you cast the spell.\n\n" +
    "Until the spell ends, you can take a Magic action to summon the object into your free hand or return it to the extradimensional space. If the object is still in the extradimensional space when the spell ends, it appears at your feet in your space.",
  scalingMd: "",
  imagePath: spellImgUrl("quickconceal")
},
{
  slug: slugify("Skywrite"),
  name: "Skywrite",
  classes: ["Artificer", "Bard", "Druid", "Wizard"],
  spellLevel: 2,
  school: "Transmutation",
  castingTime: "1 action (ritual)",
  duration: "Concentration, up to 1 hour",
  range: "Sight",
  area: "Part of the visible sky",
  tags: ["Heliana's Guide to Monster Hunting", "Control", "Communication", "New"],
  saveRequired: "None",
  attackType: "None",
  damageTypes: [],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: true,
  descriptionMd:
    "You cause up to ten words to form in a part of the sky you can see. The words appear to be made of clouds and remain in place for the duration. The words dissipate when the spell ends. A strong wind can disperse the clouds and end the spell early.",
  scalingMd: "",
  imagePath: spellImgUrl("skywrite")
},
    {
        slug: slugify("Icy Streaks"),
        name: "Icy Streaks",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "1+ creature",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Cold"],
        conditions: ["Restrained (if hit by three beams and fails CON save; until end of next turn)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You hurl three icy beams at targets within range, which can be one or several creatures. Make a ranged spell attack for each beam. On a hit, the target takes 2d6 Cold damage. If a creature is hit by three of these beams, it must succeed on a Constitution saving throw or become Restrained in ice until the end of its next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You create one additional beam for each slot level above 2nd.",
        imagePath: spellImgUrl("icystreaks")
    },
    {
        slug: slugify("Imbue Luck"),
        name: "Imbue Luck",
        classes: ["Bard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 hour",
        duration: "1 hour",
        range: "Touch",
        area: "1 object",
        tags: ["Homebrew", "Buff", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a four-leaf clover" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a weapon or worn item and imbue luck into it. Weapon: On an attack roll, the wielder can roll an additional d20 (they can choose to do this after they roll, but before the outcome is determined) and choose which die to use. Worn item: When attacked, the wearer can roll a d20 and choose whether the attack uses the attacker’s roll or theirs. In either case, the spell immediately ends upon rolling the extra d20.",
        scalingMd: "",
        imagePath: spellImgUrl("imbueluck")
    },
    {
    slug: slugify("Primal Maul"),
    name: "Primal Maul",
    classes: ["Druid"],
    spellLevel: 2,
    school: "Transmutation",
    castingTime: "1 bonus action",
    duration: "Instantaneous",
    range: "Self",
    area: "10-foot cone",
    tags: ["Damage", "Control", "Homebrew", "New"],
    saveRequired: "Strength",
    attackType: "Spell",
    damageTypes: ["Piercing"],
    conditions: ["Prone", "Grappled"],
    components: {
        verbal: false,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You can cast this spell only while you are transformed by Wild Shape or by a spell that changes your form (such as polymorph). This spell ignores any restrictions that would prevent you from casting spells while transformed, as long as you are otherwise capable of using magic.\n\n" +
        "You lunge with crushing jaws, horns, or talons, battering everything in a tight arc. Each creature in the cone must make a Strength saving throw. On a failed save, a creature takes 2d8 Piercing damage, has the Prone condition, and has the Grappled condition (escape DC equals your spell save DC). On a successful save, the creature takes half as much damage and isn’t Prone or Grappled.\n\n" +
        "A creature Grappled by this spell is Grappled by you (no extra appendages appear), and the Grappled condition ends early if you are Incapacitated, if the creature is ever more than 10 feet from you, or if you end the Grapple (no action required).",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each spell slot level above 2nd.",
    imagePath: spellImgUrl("primalmaul")
},
{
    slug: slugify("Primal Rend"),
    name: "Primal Rend",
    classes: ["Druid"],
    spellLevel: 2,
    school: "Transmutation",
    castingTime: "1 bonus action",
    duration: "Instantaneous",
    range: "Self",
    area: "10-foot cone",
    tags: ["Damage", "Homebrew", "New"],
    saveRequired: "Dexterity",
    attackType: "Spell",
    damageTypes: ["Slashing"],
    conditions: [],
    components: {
        verbal: false,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You can cast this spell only while you are transformed by Wild Shape or by a spell that changes your form (such as polymorph). This spell ignores any restrictions that would prevent you from casting spells while transformed, as long as you are otherwise capable of using magic.\n\n" +
        "You unleash a brutal tearing swipe—claw, horn, talon, or fanged arc—focused into a tight cone. Each creature in the cone must make a Dexterity saving throw. On a failed save, a creature takes 3d8 Slashing damage. On a successful save, it takes half as much damage.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each spell slot level above 2nd.",
    imagePath: spellImgUrl("primalrend")
},
    {
    slug: slugify("Grimoire Snap"),
    name: "Grimoire Snap",
    classes: ["Wizard"],
    spellLevel: 2,
    school: "Evocation",
    castingTime: "1 bonus action",
    duration: "Instantaneous",
    range: "Self",
    area: "10-foot emanation",
    tags: ["Damage", "Control", "New", "Homebrew"],
    saveRequired: "Constitution",
    attackType: "Spell",
    damageTypes: ["Thunder"],
    conditions: ["Dazed"],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a tome or grimoire"
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You snap your grimoire shut with violent finality, releasing a concussive burst of arcane thunder. Each creature of your choice in a 10-foot Emanation must make a Constitution saving throw.\n\n" +
        "On a failed save, a creature takes 3d8 Thunder damage and has the Dazed condition until the start of your next turn. On a successful save, the creature takes half as much damage and doesn’t become Dazed.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
    imagePath: spellImgUrl("grimoiresnap")
},
    {
        slug: slugify("Infernal Shackles"),
        name: "Infernal Shackles",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1+ creature",
        tags: ["Homebrew", "Control", "Damage"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: ["Shackled to a point (10-foot leash)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Chains of burning black iron spring from the ground and bind a creature you can see to a point within 10 feet of it. At the start of each of its turns, it takes 1d6 Fire damage. If it attempts to move more than 10 feet from the point, it must make a Strength saving throw. On a success, the chains break and the spell ends for that creature. On a failure, it cannot move away and cannot try again until the start of its next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, target one additional creature per slot level above 2nd. All targets are shackled to the same point and must be within 10 feet of it.",
        imagePath: spellImgUrl("infernalshackles")
    },
    {
        slug: slugify("Instant Counter"),
        name: "Instant Counter",
        classes: ["Bard", "Ranger", "Sorcerer", "Warlock", "Wizard",],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature",
        tags: ["Homebrew", "Teleportation", "Damage", ],
        saveRequired: "None",
        attackType: "Weapon Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee weapon worth at least 1 sp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Trigger: You are damaged by a creature within 30 feet that you can see. You teleport to an empty space within 5 feet of the attacker and immediately make a weapon attack against it with the weapon used in the spell’s casting.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, the hit deals an extra 1d8 Force damage per slot level above 2nd.",
        imagePath: spellImgUrl("instantcounter")
    },
    {
        slug: slugify("Iron Wind Strike"),
        name: "Iron Wind Strike",
        classes: ["Ranger",],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "15-foot radius",
        tags: ["Homebrew", "Teleportation", "Damage",],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: false, somatic: true, material: true, materialText: "a melee weapon worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You flourish a weapon you used to cast the spell and vanish to strike like the wind. Choose up to three creatures you can see within range. Make a melee spell attack against each target. On a hit, a target takes 3d8 damage of the weapon’s type.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 3rd level or higher, the hit deals an additional 1d8 damage per slot level above 2nd.",
        imagePath: spellImgUrl("ironwindstrike")
    },
    {
        slug: slugify("Lightning Charged"),
        name: "Lightning Charged",
        classes: ["Artificer"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Touch",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of metal once used in a lightning rod" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You channel lightning into a creature; it is harmless to the target but discharges dangerously to others. Whenever the target strikes a creature with a melee attack, casts a spell with range Touch, is struck by a melee attack, or ends its turn while grappling or grappled, the other creature takes 1d6 Lightning damage. The spell ends after discharging 6 times.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The spell can discharge 2 additional times (2d6 more total damage) per slot level above 2nd.",
        imagePath: spellImgUrl("lightningcharged")
    },
    {
        slug: slugify("Mind Whip"),
        name: "Mind Whip",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 round",
        range: "90 feet",
        area: "1 creature",
        tags: ["Tasha's Cauldron of Everything", "Damage", "Control", "Debuff"],
        saveRequired: "Intelligence",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: ["Halt Reactions", "Limit Action Economy"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You lash a creature you can see within range. It must make an Intelligence saving throw. On a failed save, it takes 3d6 Psychic damage, and until the end of its next turn it can’t take reactions and on its next turn it gets only one of move, action, or bonus action. On a success, it takes half damage and suffers no other effects.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 2nd (targets must be within 30 feet of each other).",
        imagePath: spellImgUrl("mindwhip")
    },
    {
        slug: slugify("Necroplague"),
        name: "Necroplague",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "10-foot-radius around the targeted corpse",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Poison"],
        conditions: ["Poisoned (until start of next turn on failed save)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a rotted piece of meat or fruit" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You target a corpse within range. It emits a toxic stench in a 10-foot radius. A creature entering the area for the first time on a turn or starting its turn there must make a Constitution save, taking 1d8 Poison damage and becoming Poisoned until the start of its next turn on a failure (save once per turn even if overlapping auras).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Poison damage increases by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("necroplague"),
    },
    {
        slug: slugify("Overgrowth"),
        name: "Overgrowth",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Control", ],
        saveRequired: "Strength",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a single seed" },
        concentration: true,
        ritual: false,
        descriptionMd: "When you cast this spell, choose a creature or an object that is Huge or smaller and not being worn or carried within range. Vibrant vines quickly grow around the target, pinning it into place and making it easier to traverse.\n\n" +
            "If the target is a creature, it must succeed on a Strength saving throw or have the Restrained condition until the spell ends. The creature can repeat the saving throw at the end of each of its turns, ending the Restrained condition on a success.\n\n" +
            "If the target is an object, it can’t be moved from its current location, and creatures that climb the object don’t spend extra movement. A creature can make a Strength (Athletics) check against your spell save DC to try to wrest the object out of the vines so it can be moved. If the object is too heavy for the creature to move, this action automatically fails.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Choose one additional target for each slot level above 2nd.",
        imagePath: spellImgUrl("overgrowth"),
    },
    {
        slug: slugify("Pillar of Force"),
        name: "Pillar of Force",
        classes: ["Bard", "Druid", "Ranger", "Sorcerer"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature",
        tags: ["Obojima", "Damage", "Control"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A pillar of wood or stone erupts at your command toward a creature you can see. Make a ranged spell attack. On a hit, the target takes 2d12 Bludgeoning damage and, if Huge or smaller, is pushed 10 feet away from you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d12 per slot level above 2nd.",
        imagePath: spellImgUrl("pillarofforce"),
    },
    {
        slug: slugify("Poison Dart"),
        name: "Poison Dart",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Constitution",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Poison"],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You hurl a conjured dart of poison. Make a ranged spell attack. On a hit, the target takes 2d12 Poison damage and must make a Constitution save or be Poisoned until the start of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d12 per slot level above 2nd.",
        imagePath: spellImgUrl("poisondart"),
    },
    {
        slug: slugify("Pressure Cage"),
        name: "Pressure Cage",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "10-foot-sphere",
        tags: ["Homebrew", "Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Speed reduced to 0 on failed save (while in area)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a shard of ball and chain" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Select a point in range; gravity intensifies in a 10-ft-radius sphere. A creature entering the area or starting its turn there must make a Strength save or its Speed becomes 0 for that turn. As a bonus action, move the sphere 20 ft.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 3rd level or higher, the radius increases by 5 ft for each slot level above 3rd.",
        imagePath: spellImgUrl("pressurecage"),
    },
    {
        slug: slugify("Rageful Nimbus"),
        name: "Rageful Nimbus",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Obojima", "Damage", "Reaction"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack (reaction)",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of water" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A pristine cloud follows the target. When the target takes damage from a hostile creature you can see, you can use your reaction to make a ranged spell attack from the cloud against that creature within 60 ft of the target; on a hit it takes 2d8 Lightning damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 3rd level or higher, damage increases by 1d8 for every two slot levels above 2nd.",
        imagePath: spellImgUrl("ragefulnimbus"),
    },
    {
        slug: slugify("Raise Wall"),
        name: "Raise Wall",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "Self",
        area: "Wall providing three-quarters cover",
        tags: ["Homebrew", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "When you are subjected to a ranged attack or forced to make a Dexterity saving throw from an area effect such as a dragon’s breath, the Fireball spell, or a large explosion, you can cast this spell as a reaction, raising a temporary rock wall in front of you. The wall grants you three-quarters cover against the triggering effect.\n\n" +
            "At the start of your next turn, the wall crumbles and falls away.",
        scalingMd: "",
        imagePath: spellImgUrl("raisewall"),
    },
    {
        slug: slugify("Rays Of Light"),
        name: "Rays Of Light",
        classes: ["Cleric",],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "1+ creatures",
        tags: ["Homebrew", "Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create three rays of brilliant light and hurl them at targets within range. You can hurl them at one target or several.\n\n" +
            "Make a ranged spell attack for each ray. On a hit, the target takes 2d6 Radiant damage. If at least 3 rays hit a single target, that target must succeed on a Constitution saving throw or be Blinded until the end of their turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Create one additional ray for each slot level above 2nd.",
        imagePath: spellImgUrl("raysoflight"),
    },
    {
        slug: slugify("Recall"),
        name: "Recall",
        classes: ["Sorcerer", "Wizard",],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Valda's Spire of Secrets", "Chronomancy", "Defense"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Record your current location. Until the spell ends, you can use your reaction to teleport back to that location (or the nearest unoccupied space) in response to an attack roll, a spell being cast, or a creature moving within 5 ft of you. The teleportation precedes the triggering effect, then the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("recall"),
    },
    {
        slug: slugify("Rock Throw"),
        name: "Rock Throw",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Rip three clumps of rock from the earth and hurl them at one creature within range. Make a separate attack for each clump; on a hit, the target takes 1d12 Bludgeoning damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 3rd level or higher, throw one additional rock per slot level above 2nd.",
        imagePath: spellImgUrl("rockthrow"),
    },

    {
        slug: slugify("Sanguine Secrets"),
        name: "Sanguine Secrets",
        classes: ["Ranger", "Sorcerer", "Warlock", "Wizard", "Blood Hunter",],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "30 feet",
        area: "1 creature",
        tags: ["Crooked Moon", "Detection", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a drop of the creature’s blood, consumed",
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Read truths from blood. Learn the target’s species & creature type, current HP, conditions, and any Vulnerabilities/Resistances/Immunities (damage or conditions). Your next attack roll or ability check against it before the end of your next turn has advantage.",
        scalingMd: "",
        imagePath: spellImgUrl("sanguinesecrets"),
    },
    {
        slug: slugify("Sanguine Shield"),
        name: "Sanguine Shield",
        classes: ["Sorcerer", "Wizard", "Blood Hunter"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Grim Hollow", "Sangromancy", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Half cover (while you have temp HP from this spell)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "As part of casting, expend two Hit Dice or the spell fails. Gain 5 temp HP per creature within 30 ft that is below max HP (including you), up to 15 temp HP. While you have these temp HP, you have Half Cover. When the spell ends, any remaining temp HP from it are lost.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The maximum temp HP increases by 5 for every two slot levels above 2nd.",
        imagePath: spellImgUrl("sanguineshield"),
    },
    {
        slug: slugify("Seeking Orb"),
        name: "Seeking Orb",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create a Tiny orb and designate a target within 120 ft. At the end of each of your turns, the orb grows and moves 30 ft straight toward the target. If it reaches the target, they make a DEX save, taking 4d4 Force +1d4 per round since casting (half on success). The spell ends after dealing damage or when the duration ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Initial damage increases by 1d4 per slot level above 2nd.",
        imagePath: spellImgUrl("seekingorb"),
    },
    {
        slug: slugify("Shadow Blade"),
        name: "Shadow Blade",
        classes: ["Sorcerer", "Warlock", "Wizard", "Blood Hunter"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Xanathar's Guide to Everything", "Creation", "Damage", ],
        saveRequired: "None",
        attackType: "Melee Weapon (Finesse, Light, Thrown 20/60)",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Forge a sword of gloom: 2d8 Psychic on hit; finesse, light, thrown (20/60). You have advantage on attacks against targets in dim light or darkness. If dropped or thrown, it dissipates at turn’s end; as a bonus action, you can make it reappear in your hand.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 for every two slot levels above 2nd.",
        imagePath: spellImgUrl("shadowblade"),
    },
    {
        slug: slugify("Sanctified Charge"),
        name: "Sanctified Charge",
        classes: ["Cleric", "Paladin"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "20-foot line",
        tags: ["Homebrew", "Movement"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Burst forward up to 20 ft in a straight line, stopping early if you collide with a creature. The creature makes a Strength save: on a failure, it takes 2d6 Radiant and is knocked prone; on a success, it takes half damage and doesn’t fall prone.",
        scalingMd: "",
        imagePath: spellImgUrl("sanctifiedcharge"),
    },
    {
        slug: slugify("Sharp Gust"),
        name: "Sharp Gust",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "30-foot line",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Condense wind into a razor blast. Creatures in a 30-ft × 5-ft line make a DEX save; on a failure they take 3d8 Slashing, or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 3rd level or higher, create one additional line of effect. A creature in multiple lines is affected only once.",
        imagePath: spellImgUrl("sharpgust"),
    },
    {
        slug: slugify("Sleeping Drought"),
        name: "Sleeping Drought",
        classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "90 feet",
        area: "20-foot-radius",
        tags: ["Homebrew", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Unconscious (special)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a draught of any liquid" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Roll 9d8; the total is HP worth of creatures affected, starting with the lowest current HP in a 20-ft-radius sphere. Affected creatures fall unconscious until the spell ends, they take damage, or someone uses an action to wake them. Undead and creatures immune to being Charmed aren’t affected.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Add +3d8 to the HP total per slot level above 2nd.",
        imagePath: spellImgUrl("sleep"),
    },
    {
        slug: slugify("Spatial Distortion Sense"),
        name: "Spatial Distortion Sense",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "60-foot radius",
        tags: ["Homebrew", "Detection", "Exploration"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a razorvine leaf" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Sense portals (even inactive) within 60 ft. You can Study one portal: make a DC 15 check using your casting ability. On success, learn its destination plane and required key, then the spell ends. On failure, learn nothing and can’t study that portal again until you recast. Blocked by 1 ft stone, 1 inch common metal, a thin sheet of lead, or 3 ft wood/dirt.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase range by 60 ft per slot level above 2nd.",
        imagePath: spellImgUrl("spatialdistortionsense"),
    },
    {
        slug: slugify("Spell Seal"),
        name: "Spell Seal",
        classes: ["Sorcerer"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Control"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "wax mixed with lead and a stamp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a creature you can see. When it casts a spell, it must make a CHA save. On a failure, it expends the slot but the spell has no effect. On a success, the spell resolves but the caster takes 3d8 Force. After the save is made, this spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("spellseal"),
    },
    {
        slug: slugify("Spell Signature"),
        name: "Spell Signature",
        classes: ["Bard", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "10 minutes",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 magical effect within range",
        tags: ["Obojima", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a rosewood match" },
        concentration: false,
        ritual: false,
        descriptionMd: "As you cast the spell, you draw out the potent scents trapped within all magic. Choose a magical effect you are aware of that’s within range. The effect releases a scent specific to the creature that created it. If you are familiar with the creature, you automatically know that the magical effect was created by them.\n\n" +
            "If you are not familiar with the creature, you can make an ability check using your spellcasting ability modifier and add your proficiency bonus to it. Refer to the table below to determine what information you are able to glean from the scent. When succeeding on a DC check, you also learn previous information given from lower DCs.\n\n" +
            "**DC 10** — You learn the type of creature that created the magical effect.\n" +
            "**DC 15** — If the creature has a class, you learn what it is.\n" +
            "**DC 20** — You learn the creature’s alignment.\n" +
            "**DC 25** or **DC 30** (if the creature is of a higher level than you) — You learn the name of the creature.",
        scalingMd: "",
        imagePath: spellImgUrl("spellsignature"),
    },
    {
        slug: slugify("Spelltrap"),
        name: "Spelltrap",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a spelltrap, marking it on yourself—typically as a small glowing mark on your skin. The first time you must make a saving throw against a non-AOE spell of 1st level or lower, the spell is absorbed by the spelltrap, and none of the effects of the spell take place.\n\n" +
            "On your next turn, you can cast the spell absorbed by the spelltrap without expending a spell slot, using either an action or bonus action depending on the spell’s normal casting time. If you do not cast the spell during your next turn, the spelltrap fades and the trapped spell is lost.\n\n" +
            "You may create multiple spelltraps, but only one can be placed on a single creature at a time. Attempting to place another spelltrap on a creature causes the original to fade away.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The protected spell level increases by 1 per slot above 2nd.",
        imagePath: spellImgUrl("spelltrap"),
    },
    {
        slug: slugify("Spray of Cards"),
        name: "Spray of Cards",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "15-foot cone",
        tags: ["The Book of Many Things", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a deck of cards" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Spray spectral cards in a 15-ft cone, choosing one effect:\n- Blinding Cards: creatures make WIS save or are Blinded until end of their next turn.\n- Cutting Cards: creatures make DEX save; on a fail take 2d10 Force, or half on success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 4th+, the Cutting Cards damage increases by +1d10 for every two slot levels above 2nd.",
        imagePath: spellImgUrl("sprayofcards"),
    },
    {
        slug: slugify("Sprout Tree"),
        name: "Sprout Tree",
        classes: ["Druid"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "5-foot square",
        tags: ["Homebrew", "Creation", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: [],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A tree erupts from a targeted 5-ft square of suitable ground, growing to 20 ft tall (2-ft radius trunk). Large or smaller creatures in the space make a DEX save: on fail they’re carried 20 ft up into the branches; on success they move 5 ft to a safe space (or fail if none). Branches give half cover; trunk gives three-quarters cover from the opposite side. The tree: AC 13, 50 HP. It remains (may die if unsuitable).",
        scalingMd: "",
        imagePath: spellImgUrl("sprouttree"),
    },
    {
        slug: slugify("Star Dust"),
        name: "Star Dust",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-foot cone",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Brilliant particulate force sweeps a 30-ft cone. Creatures make DEX save; on a fail take 3d4 Force and the next attack against them before the start of your next turn has advantage. On success, half damage and no rider.",
        scalingMd: "",
        imagePath: spellImgUrl("stardust"),
    },
    {
        slug: slugify("Summer Winds"),
        name: "Summer Winds",
        classes: ["Cleric", "Druid", "Paladin", "Ranger"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "15-foot cone",
        tags: ["Crooked Moon", "Healing", "Damage"],
        saveRequired: "Constitution (Undead only)",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A 15-ft cone of warm light and wind. Allies in the cone regain 2d6 HP. Hostile Undead in the cone make a CON save; on a fail they take 2d6 Radiant, or half on success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Healing and damage both increase by +2d6 per slot level above 2nd.",
        imagePath: spellImgUrl("summerwinds"),
    },
    {
        slug: slugify("Summon Archon"),
        name: "Summon Archon",
        classes: ["Cleric", "Paladin", "Warlock"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "90-foot radius",
        tags: ["Homebrew", "Summoning"],
        saveRequired: "None",
        attackType: "Varies",
        damageTypes: ["Radiant", "Thunder", "Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an ornate relic worth ≥ 200 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a minor celestial archon. It manifests in an unoccupied space that you can see within range. It takes the form of the Archon Spirit stat block. When you cast the spell, choose Hound, Lantern, or Trumpet. The creature resembles the Archon of your choice, which determines certain traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is allied to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>ARCHON SPIRIT</h2>
    <hr>
    <p><em>Medium Celestial, Small for Trumpet</em></p>

    <p>
      <strong>AC</strong> 11 + the spell’s level (natural armor)<br>
      <strong>HP</strong> 20 or 30 <em>(Hound Only)</em> + 5 for each spell level above 2nd<br>
      <strong>Speed</strong> 30 ft., Fly 30 ft. <em>(Trumpet and Lantern only)</em>
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>INT</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 10</td><td>+0</td><td>+0</td>
          <td><strong>WIS</strong> 13</td><td>+1</td><td>+1</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>CHA</strong> 14</td><td>+2</td><td>+2</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances</strong> Radiant<br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft.; Passive Perception 11<br>
      <strong>Languages</strong> Celestial, understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Keen Hearing and Smell (Hound Only).</strong> The archon has advantage on Wisdom (Perception) checks that rely on hearing or smell.</p>

    <p><strong>Lantern’s Light (Lantern Only).</strong> The archon sheds bright light in a 30-foot radius and dim light for an additional 30 feet.</p>

    <p><strong>Rallying Call (Trumpet Only).</strong> Once per turn when the archon deals damage it can grant temporary hit points to one ally within 60 ft. equal to half the damage dealt.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The celestial makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p><strong>Greatsword (Hound Only).</strong>
       <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft., one target.
       <em>Hit:</em> 2d6 + 2 + the spell’s level Slashing damage.</p>

    <p><strong>Radiant Bolt (Lantern Only).</strong>
       <em>Ranged Attack Roll:</em> Bonus equals your spell attack modifier to hit, range 60 ft., one target.
       <em>Hit:</em> 1d8 + 2 + the spell’s level Radiant damage.</p>

    <p><strong>Trumpet (Trumpet Only).</strong>
       One creature of the archon’s choice within 60 ft. must succeed on a <em>Constitution Saving Throw</em>
       (DC equals your spell save DC) or take 1d6 + 2 + the spell’s level Thunder damage.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the higher level wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("summonarchon"),
    },
    {
    slug: slugify("Rally"),
    name: "Rally",
    classes: ["Bard", "Cleric", "Paladin"],
    spellLevel: 2,
    school: "Enchantment",
    castingTime: "1 bonus action",
    duration: "Instantaneous",
    range: "Self",
    area: "30-foot Emanation",
    tags: ["Buff", "Healing", "New", "Homebrew"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: false,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You loose a surge of battle-spirit that snaps allies into focus. Choose any number of creatures you can see within the Emanation (you can choose yourself). Each chosen creature gains Temporary Hit Points equal to 1d6 + your spellcasting ability modifier.\n\n" +
        "In addition, each chosen creature has Advantage on the first attack roll it makes before the end of its next turn.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the Temporary Hit Points increase by 1d6 for each slot level above 2nd.",
    imagePath: spellImgUrl("rally")
},
{
    slug: slugify("Evasive Grace"),
    name: "Evasive Grace",
    classes: ["Bard", "Cleric", "Ranger"],
    spellLevel: 2,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "10 minutes",
    range: "Touch",
    area: "1 creature",
    tags: ["Buff", "Defense", "Homebrew", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You touch a creature and lace its movements with preternatural timing. For the duration, the target has Advantage on Dexterity saving throws.\n\n" +
        "In addition, the target gains Evasion for the duration. When the target makes a Dexterity saving throw to take only half damage, it instead takes no damage on a successful save and only half damage on a failed save.",
    scalingMd: "",
    imagePath: spellImgUrl("evasivegrace")
},
{
    slug: slugify("Sunder Ward"),
    name: "Sunder Ward",
    classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 2,
    school: "Enchantment",
    castingTime: "1 bonus action",
    duration: "1 minute",
    range: "60 feet",
    area: "1 creature",
    tags: ["Debuff", "New", "Homebrew"],
    saveRequired: "Charisma",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You unravel a creature’s protective instincts with a cutting word and a twist of intent. Choose one creature you can see within range. The target must make a Charisma saving throw.\n\n" +
        "On a failed save, the target takes a −1 penalty to AC for the duration.\n\n" +
        "**Lockout.** Whether the target succeeds or fails, once you target a creature with this spell, it can’t be affected by **Sunder Ward** again until the spell ends.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the AC penalty increases by 1 for every 2 slot levels above 2nd.",
    imagePath: spellImgUrl("sunderward")
},
{
    slug: slugify("Toppler’s Boon"),
    name: "Toppler’s Boon",
    classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger"],
    spellLevel: 2,
    school: "Transmutation",
    castingTime: "1 bonus action",
    duration: "1 minute",
    range: "Touch",
    area: "1 willing creature",
    tags: ["Buff", "Control", "New", "Homebrew"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You imbue a creature with brutal, unignorable leverage. Choose one willing creature you touch. For the duration, when the target forces a hostile creature to make a saving throw or ability check to avoid being knocked Prone (by a spell, action, or feature), that hostile creature makes that saving throw or ability check with Disadvantage.",
    scalingMd: "",
    imagePath: spellImgUrl("topplersboon")
},
{
    slug: slugify("Rabied Bite"),
    name: "Rabied Bite",
    classes: ["Druid"],
    spellLevel: 2,
    school: "Transmutation",
    castingTime: "1 bonus action",
    duration: "Instantaneous",
    range: "Self",
    area: "1 creature",
    tags: ["Damage", "Debuff", "New", "Homebrew"],
    saveRequired: "Constitution",
    attackType: "Melee Spell Attack",
    damageTypes: ["Piercing"],
    conditions: ["Diseased"],
    components: {
        verbal: false,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You can cast this spell only while you are transformed by Wild Shape or by a spell that changes your form (such as polymorph). This spell ignores any restrictions that would prevent you from casting spells while transformed, as long as you are otherwise capable of using magic.\n\n" +
        "You lash out with a filthy, fevered bite. Make a melee spell attack against one creature within your reach. On a hit, the target takes 1d12 + your spellcasting ability modifier Piercing damage and must make a Constitution saving throw.\n\n" +
        "On a failed save, the target is afflicted with a disease for 1 minute. If the disease isn’t cured before that minute ends by magic that ends a disease or by a curative potion (such as an antitoxin, at the DM’s discretion), the target’s Hit Point maximum is halved until it finishes a Long Rest.\n\n" +
        "On a successful save, the target isn’t diseased.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the Piercing damage increases by 1d12 for each spell slot level above 2nd.",
    imagePath: spellImgUrl("rabiedbite")
},
    {
        slug: slugify("Summon Swarm"),
        name: "Summon Swarm",
        classes: ["Druid", "Ranger", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "An unoccupied space you can see",
        tags: ["Homebrew", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a golden insect worth at least 200 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a magical swarm. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Swarm Spirit stat block. When you cast the spell, choose from Quippers, Spiders, or Wasps. The swarm resembles the creatures of your choice, which determines certain traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>SWARM SPIRIT</h2>
    <hr>
    <p><em>Medium swarm of Tiny beasts, unaligned</em></p>

    <p>
      <strong>AC</strong> 10 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 30 + 5 for each spell level above 1st<br>
      <strong>Speed</strong> 30 ft. (Spiders only), 5 ft. (Quippers or Wasps only), fly 30 ft. (Wasps only), swim 30 ft. (Quippers only)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 3</td><td>−4</td>
          <td><strong>INT</strong> 1</td><td>−5</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 13</td><td>+1</td>
          <td><strong>WIS</strong> 7</td><td>−1</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 10</td><td>+0</td>
          <td><strong>CHA</strong> 1</td><td>−5</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances</strong> Bludgeoning, Piercing, Slashing<br>
      <strong>Senses</strong> Blindsight 10 ft., Passive Perception 8<br>
      <strong>Languages</strong> Understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your bonus)
    </p>

    <p><strong>Spider Climb (Spider only).</strong> The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>

    <p><strong>Web Walker (Spider only).</strong> The swarm ignores movement restrictions caused by webbing.</p>

    <p><strong>Swarm.</strong> The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can’t regain hit points or gain temporary hit points.</p>

    <hr>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The swarm makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Bite (Spider and Wasp only).</strong>
      <em>Melee weapon attack:</em> your spell attack modifier, reach 0 ft., one target.
      <em>Hit:</em> 2d4 + the spell’s level Piercing damage + 1d4 Poison damage.
    </p>

    <p>
      <strong>Bite (Quipper only).</strong>
      <em>Melee weapon attack:</em> your spell attack modifier, reach 0 ft., one target.
      <em>Hit:</em> 3d4 + the spell’s level Piercing damage.
    </p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, use the higher level wherever the spell’s level appears in the stat block."
    },
    {
        slug: slugify("Tailwind"),
        name: "Tailwind",
        classes: ["Paladin", "Ranger", "Wizard",],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A turning tempest wind lifts you up and carries you to a creature you can see within range, your movement speed is increased by 60 feet this turn and you can hover. The next time you hit a creature with a melee weapon attack before the end of the turn, the attack deals an extra 2d6 Slashing damage as the winds buffet the target.",
        scalingMd: ""
    },
    {
        slug: slugify("Theft of Vitae"),
        name: "Theft of Vitae",
        classes: ["Druid", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Grim Hollow", "Sangromancy"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend two Hit Point Dice or the spell automatically fails. The target takes Necrotic damage. To determine this damage, roll the Hit Point Dice expended to cast the spell. You gain a number of Temporary Hit Points equal to the triggering damage plus the Necrotic damage you dealt, to a maximum of 15.\n\nTrigger: which you take when a creature you can see within 30 feet of you takes damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The maximum number of Temporary Hit Points you can gain from casting increases by 10 for each slot level above 2."
    },
    {
        slug: slugify("Thunderburst Mine"),
        name: "Thunderburst Mine",
        classes: ["Artificer", "Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Touch",
        area: "10-foot radius (on detonation)",
        tags: ["Homebrew", "Creation", "Damage", "Control", "Trap"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Thunder"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "any tiny nonmagical item, destroyed on activation" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You can set a magical trap by infusing explosive magic into an item. You can set this item to detonate when someone comes within 5 feet of it, or by a verbal command using your reaction (one or more mines can be detonated).\n\nWhen the magic trap detonates, each creature in a 10-foot radius sphere centered on the item must make a Constitution saving throw. A creature takes 3d8 Thunder damage on a failed save, or half as much damage on a successful one. If a creature is in the area of effect of more than one Thunderburst mine during a turn, they take half damage from any mines beyond the first.\n\nA magical mine must be set 5 feet or more from another mine, and cannot be moved once placed; any attempt to move it results in it detonating unless the caster that set it disarms it with an action.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d8 for each slot level above 2nd."
    },
    {
        slug: slugify("Unraveling Whisper"),
        name: "Unraveling Whisper",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 round",
        range: "30 feet",
        area: "1 creature",
        tags: ["Crooked Moon",],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: ["Frightened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Choose a creature you can see within range and whisper a frightful phrase that only the target can hear. The target must make a Wisdom saving throw. On a failed save, the target takes 2d6 Psychic damage and has the Frightened condition until the start of your next turn. On a successful save, the target takes half as much damage only.\n\nWhile Frightened in this way, the creature has Vulnerability to your choice of Bludgeoning, Piercing, or Slashing damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can target one additional creature for each spell slot level above 2."
    },
    {
        slug: slugify("Vacuum Pull"),
        name: "Vacuum Pull",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Control",],
        saveRequired: "Strength",
        attackType: "None",
        damageTypes: [],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You cause a sudden savage burst of wind to howl toward you, attempting to pull a Huge or smaller creature within range that you can see toward you. The target must succeed a Strength saving throw or be yanked off their feet and flung toward you, landing within 5 feet of you and falling prone. Flying creatures make the Strength save with disadvantage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the range of the spell increases by 10 feet."
    },
    {
        slug: slugify("Veil of the Reaper"),
        name: "Veil of the Reaper",
        classes: ["Ranger", "Sorcerer", "Warlock", "Wizard", "Blood Hunter"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Crooked Moon"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible"],
        components: { verbal: true, somatic: true, material: true, materialText: "a dried corn husk or wheat straw" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You wrap yourself in shadows that veil you between strikes. At the end of any turn in which you hit a creature with an attack roll, you gain the Invisible condition until the start of your next turn.",
        scalingMd: ""
    },
    {
        slug: slugify("Verdant Rings"),
        name: "Verdant Rings",
        classes: ["Druid", "Ranger",],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You wrap yourself in barks and vines that act as a ward against damage. You gain 20 temporary hit points. At the start of each of your turns you lose 2 temporary hit points.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The temporary hit points increases by 10 and the temporary hit points lost at the start of each turn is increased by 1 for each spell slot level above 2."
    },
    {
        slug: slugify("Vicious Hound"),
        name: "Vicious Hound",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Homebrew",],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a spiked collar" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You summon a particularly vicious looking illusory hound that ferociously chases a target within range. Only the target can see the hound that chases them. The target creature can attempt to flee from the hound, moving at least 30 feet in any direction from where they start their turn. If the target does not flee or is unable to move at least 30 feet from where they started by the end of their turn, they take 3d8 Psychic damage from being mauled by the hound at the end of the turn. The spell ends early if the target gets more than 120 feet from you.\n\nAt the end of each of their turns, the target can make a Wisdom saving throw. On a success, they realize the hound is an illusion, and the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the speed of the hound increases by 10 feet for each slot level above 2nd (meaning that the target must flee 10 additional feet to avoid taking the damage)."
    },
    {
        slug: slugify("Viscious Vapors"),
        name: "Viscious Vapors",
        classes: ["Druid", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot cube",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Poison"],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You fill the air with poisonous vapors in a cube 5 feet on each side. A creature must make a Constitution saving throw when it enters the spell's area for the first time on their turn or starts its turn there. On a failed save, they take 1d12 Poison damage and become Poisoned until the end of their next turn. On a successful save, they take half as much damage and do not become poisoned.\n\nYou can move the cloud of vapors up to 20 feet as a bonus action during your turn.",
        scalingMd: ""
    },
    {
        slug: slugify("Vortex Warp"),
        name: "Vortex Warp",
        classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "90 feet",
        area: "1 creature",
        tags: ["Strixhaven", "Teleportation"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You magically twist space around another creature you can see within range. The target must succeed on a Constitution saving throw (the target can choose to fail), or the target is teleported to an unoccupied space of your choice that you can see within range. The chosen space must be on a surface or in a liquid that can support the target without the target having to squeeze.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, the range of the spell increases by 30 feet for each slot level above 2nd."
    },
    {
        slug: slugify("Warding Wind"),
        name: "Warding Wind",
        classes: ["Bard", "Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "10-foot radius",
        tags: ["Elemental Evil Player's Companion", "Control", "Debuff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Deafened"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A strong wind (20 mph) blows around you in a 10-foot sphere and moves with you. Effects: it deafens creatures in its area; extinguishes unprotected small flames; hedges out dispersible vapor/gas/fog; makes the area difficult terrain for others; and ranged weapon attacks that pass in or out have disadvantage."
    },
    {
        slug: slugify("Wither and Bloom"),
        name: "Wither and Bloom",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "10-foot-radius sphere",
        tags: ["Strixhaven"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a withered vine twisted into a loop" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Invoke death and life upon a 10-foot-radius sphere. Each creature of your choice in the area makes a Constitution save, taking 2d6 Necrotic damage on a failed save, or half on a success. Nonmagical vegetation withers.\n\nOne creature of your choice in the area can spend and roll one Hit Die and regain HP equal to the roll + your spellcasting ability modifier.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot above 2nd, and the number of Hit Dice that can be spent increases by one per slot above 2nd."
    },
    {
        slug: slugify("Wilting Smite"),
        name: "Wilting Smite",
        classes: ["Paladin",],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Grim Hollow", "Sangromancy"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You use this spell immediately after hitting a creature with a melee weapon or an Unarmed Strike. As part of casting this spell, you must expend two Hit Point Dice or the spell automatically fails. The target hit by the strike takes extra Necrotic damage from the attack equal to the total of the Hit Point Dice expended to cast the spell.\n\n" +
            "Additionally, the creature loses Resistance to damage until the start of your next turn.",
    },
    {
        slug: slugify("Wind Cutter"),
        name: "Wind Cutter",
        classes: ["Druid", "Ranger", "Wizard",],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "30-foot radius",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "Melee Weapon (special reach)",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee weapon that deals damage worth at least 1 cp" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You infuse the weapon used in the casting with tempestuous power. For the duration, when you make an attack during your turn with that weapon, it gains a reach of 30 feet, releasing slashes of razor wind; beyond your normal reach it deals Slashing damage. When you deal damage to a creature with that weapon, you can deal 1d4 Slashing to up to two other creatures within 5 feet of the target."
    },
    {
        slug: slugify("Windsense"),
        name: "Windsense",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You cast your senses into the wind. Until the start of your next turn, you gain blindsight 60 ft and advantage on Wisdom (Perception) checks. For the duration, when you make a ranged weapon attack, you don’t require line of sight within your blindsight and targets don’t benefit from cover."
    },
    {
        slug: slugify("Aid"),
        name: "Aid",
        classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger",],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Self",
        area: "30-foot radius",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a strip of white cloth" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Choose up to three creatures within range. Each target’s Hit Point maximum and current Hit Points increase by 5 for the duration.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Each target’s HP increases by +5 per slot level above 2."
    },
    {
        slug: slugify("Alter Self"),
        name: "Alter Self",
        classes: ["Artificer", "Sorcerer", "Wizard",],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Shapechanging"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You alter your physical form, choosing one option: \n- Aquatic Adaptation. Breathe underwater; gain a Swim Speed equal to your Speed.\n- Change Appearance. Alter your appearance (same size and basic shape). As a Magic action, you can change again during the duration.\n- Natural Weapons. Grow claws/fangs/horns/hooves; your Unarmed Strike deals 1d6 of the appropriate type and uses your spellcasting ability for attack and damage.",
        scalingMd: ""
    },
    {
        slug: slugify("Animal Messenger"),
        name: "Animal Messenger",
        classes: ["Bard", "Druid", "Ranger"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action (ritual)",
        duration: "24 hours",
        range: "30 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Communication", "Social"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a morsel of food" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "A Tiny Beast you can see must succeed on a Charisma save or attempts to deliver a ≤25-word message to a described recipient at a location you’ve visited (≈25 miles/day; 50 if it can fly). If it doesn’t arrive before the duration ends, the message is lost and the Beast returns.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Duration +48 hours per slot level above 2."
    },
    {
        slug: slugify("Arcane Lock"),
        name: "Arcane Lock",
        classes: ["Artificer", "Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Until dispelled",
        range: "Touch",
        area: "5-foot radius",
        tags: ["Player's Handbook", "Utility", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "gold dust worth 25+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Magically locks a closed object. It can’t be unlocked by nonmagical means. You designate creatures who can open it and may set a password that unlocks it for 1 minute when spoken within 5 feet.",
        scalingMd: ""
    },
    {
        slug: slugify("Arcane Vigor"),
        name: "Arcane Vigor",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook",],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Roll one or two of your unexpended Hit Point Dice and regain HP equal to the total + your spellcasting ability modifier. Those dice are then expended.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You may roll +1 additional unexpended Hit Die per slot level above 2."
    },
    {
        slug: slugify("Augury"),
        name: "Augury",
        classes: ["Cleric", "Druid", "Wizard", "Illrigger"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Foreknowledge"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "divinatory tokens worth 25+ GP" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Receive an omen about a course of action planned within 30 minutes: Weal (good), Woe (bad), Weal and woe (mixed), or Indifference. Results don’t account for changing circumstances. Casting multiple times before a Long Rest yields a cumulative 25% chance after the first to get no answer.",
        scalingMd: ""
    },
    {
        slug: slugify("Barkskin"),
        name: "Barkskin",
        classes: ["Druid", "Ranger",],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Player's Handbook", "Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a handful of oak bark" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A willing creature’s skin becomes bark-like. For the duration, the target’s AC is 17 if it would otherwise be lower.",
        scalingMd: ""
    },
    {
        slug: slugify("Beast Sense"),
        name: "Beast Sense",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action (ritual)",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing Beast",
        tags: ["Player's Handbook", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: true,
        descriptionMd:
            "Touch a willing Beast. For the duration, you can perceive through the Beast’s senses (gaining its special senses) as well as your own.",
        scalingMd: ""
    },
    {
        slug: slugify("Blindness/Deafness"),
        name: "Blindness/Deafness",
        classes: ["Bard", "Cleric", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: ["Blinded", "Deafened"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "One creature must succeed on a Constitution save or become Blinded or Deafened (your choice) for the duration. The target repeats the save at the end of each of its turns, ending the effect on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target +1 creature per slot level above 2.",
        imagePath: spellImgUrl("blindness_deafness")
    },
    {
        slug: slugify("Blur"),
        name: "Blur",
        classes: ["Artificer", "Sorcerer", "Wizard", "Illrigger",],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Your body becomes blurred. For the duration, attack rolls against you have Disadvantage. Creatures that perceive you with Blindsight or Truesight ignore this effect.",
        scalingMd: ""
    },
    {
        slug: slugify("Calm Emotions"),
        name: "Calm Emotions",
        classes: ["Bard", "Cleric",],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "20-foot-radius sphere",
        tags: ["Player's Handbook", "Social"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed", "Frightened", "Indifferent"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Each Humanoid in a 20-foot-radius sphere must make a Charisma save or be affected by one option (choose per creature):\n- Immunity to Charmed and Frightened for the duration (suppresses existing instances), or\n- Becomes Indifferent about creatures you choose that it’s hostile toward (ends if it or its allies take damage; attitude returns to normal when the spell ends).",
        scalingMd: ""
    },
    {
        slug: slugify("Cloud of Daggers"),
        name: "Cloud of Daggers",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot cube",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a sliver of glass" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Conjure spinning daggers in a 5-foot cube centered on a point within range. Each creature in that area takes 4d4 Slashing damage. A creature also takes this damage if it enters the cube, ends its turn there, or the cube moves into its space—once per turn.\n\nOn later turns, you can take a Magic action to teleport the cube up to 30 feet.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 2d4 per slot level above 2."
    },
    {
        slug: slugify("Continual Flame"),
        name: "Continual Flame",
        classes: ["Artificer", "Cleric", "Druid", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Until dispelled",
        range: "Touch",
        area: "1 object",
        tags: ["Player's Handbook", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "ruby dust worth 50+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A flame springs from a touched object, shedding Bright Light 20 ft and Dim Light 20 ft. It produces no heat and consumes no fuel; it can be covered/hidden but not smothered or quenched.",
        scalingMd: ""
    },
    {
        slug: slugify("Cordon of Arrows"),
        name: "Cordon of Arrows",
        classes: ["Ranger"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Touch",
        area: "1+ object",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "four or more arrows or bolts" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Touch up to 4 nonmagical arrows/bolts and plant them in your space. Until the spell ends, they can’t be uprooted. When a creature other than you enters or ends its turn within 30 ft of the ammunition, one piece flies to strike it (Dex save or 2d4 Piercing); that piece is destroyed. The spell ends when none remain. You can designate creatures to ignore.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Ammunition affected +2 per slot level above 2."
    },
    {
        slug: slugify("Crown of Madness"),
        name: "Crown of Madness",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard",],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1creature",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "WIS Save (repeat each turn)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "One creature you can see must make a Wisdom save or be Charmed. While charmed, a spectral crown appears and the target must use its action before moving each turn to make a melee attack against a creature (other than itself) you mentally choose. If none is in reach or you choose none, it acts normally. The target repeats the save at the end of each turn, ending the effect on a success. You must take the Magic action each later turn to maintain control, or the spell ends.",
        scalingMd: ""
    },
    {
        slug: slugify("Darkness"),
        name: "Darkness",
        classes: ["Sorcerer", "Warlock", "Wizard",],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "15-foot-radius",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: true, materialText: "bat fur and a piece of coal" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create magical Darkness in a 15-foot-radius sphere. Darkvision can’t see through it, and nonmagical light can’t illuminate it. Alternatively, cast on a nonworn object to create a 15-foot emanation from it; covering the object blocks the Darkness. If any of this area overlaps Bright/Dim light from a spell of level 2 or lower, that spell is dispelled.",
        scalingMd: ""
    },
    {
        slug: slugify("Darkvision"),
        name: "Darkvision",
        classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a dried carrot" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A willing creature you touch gains Darkvision (150 ft.) for the duration.",
        scalingMd: ""
    },
    {
        slug: slugify("Detect Thoughts"),
        name: "Detect Thoughts",
        classes: ["Bard", "Sorcerer", "Wizard", "Illrigger",],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "1 creature",
        tags: ["Player's Handbook", "Social", "Detection"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "1 copper piece" },
        concentration: true,
        ritual: false,
        descriptionMd: "You activate one of the effects below. Until the spell ends, you can activate either effect as a Magic action on your later turns.\n\n" +
            "**Sense Thoughts.** You sense the presence of thoughts within 30 feet of yourself that belong to creatures that know languages or are telepathic. You don’t read the thoughts, but you know that a thinking creature is present.\n\n" +
            "The spell is blocked by 1 foot of stone, dirt, or wood; 1 inch of metal; or a thin sheet of lead.\n\n" +
            "**Read Thoughts.** Target one creature you can see within 30 feet of yourself or one creature within 30 feet of yourself that you detected with the Sense Thoughts option. You learn what is most on the target’s mind right now. If the target doesn’t know any languages and isn’t telepathic, you learn nothing.\n\n" +
            "As a Magic action on your next turn, you can try to probe deeper into the target’s mind. If you probe deeper, the target makes a Wisdom saving throw. On a failed save, you discern the target’s reasoning, emotions, and something that looms large in its mind (such as a worry, love, or hate). On a successful save, the spell ends. Either way, the target knows that you are probing into its mind, and until you shift your attention away from the target’s mind, the target can take an action on its turn to make an Intelligence (Arcana) check against your spell save DC, ending the spell on a success.",
        scalingMd: ""
    },
    {
        slug: slugify("Dragon's Breath"),
        name: "Dragon's Breath",
        classes: ["Sorcerer", "Wizard",],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Touch",
        area: "15-foot cone",
        tags: ["Player's Handbook", "Damage", "Buff"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Poison"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a hot pepper" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Touch a willing creature and choose a damage type. Until the spell ends, the target can take a Magic action to exhale a 15-foot cone; creatures in the area make a DEX save, taking 3d6 of the chosen type on a failure, or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 2."
    },
    {
        slug: slugify("Enhance Ability"),
        name: "Enhance Ability",
        classes: ["Artificer", "Bard", "Cleric", "Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "fur or a feather" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Touch a creature and choose Strength, Dexterity, Intelligence, Wisdom, or Charisma. The target has Advantage on ability checks using the chosen ability for the duration.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target +1 creature per slot level above 2 (you can choose a different ability for each)."
    },
    {
        slug: slugify("Enthrall"),
        name: "Enthrall",
        classes: ["Bard", "Warlock"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "Creatures of your choice within 60 feet",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You weave distracting words. Creatures of your choice you can see within range make a Wisdom saving throw. Any creature you or your companions are fighting automatically succeeds. On a failed save, a target has a −10 penalty to Wisdom (Perception) checks and to Passive Perception until the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("enthrall")
    },
    {
        slug: slugify("Enlarge/Reduce"),
        name: "Enlarge/Reduce",
        classes: ["Artificer", "Bard", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of powdered iron" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You cause a creature or object you can see within range to grow or shrink for the duration. An unwilling creature can make a Constitution saving throw to resist. Everything the target is wearing or carrying changes size with it. Items drop or thrown return to normal size after leaving the target’s possession.\n\nEnlarge. Size increases by one category; the target has advantage on Strength checks and Strength saving throws, and its weapon/unarmed attacks deal +1d4 damage.\n\nReduce. Size decreases by one category; the target has disadvantage on Strength checks and Strength saving throws, and its weapon/unarmed attacks deal −1d4 damage (not below 1).",
        scalingMd: "",
        imagePath: spellImgUrl("enlarge_reduce")
    },
    {
        slug: slugify("Find Steed"),
        name: "Find Steed",
        classes: ["Paladin"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You summon an otherworldly being that appears as a loyal steed in an unoccupied space of your choice within range. This creature uses the Otherworldly Steed stat block. If you already have a steed from this spell, the steed is replaced by the new one.\n\n" +
            "The steed resembles a Large, rideable animal of your choice, such as a horse, a camel, a dire wolf, or an elk. Whenever you cast the spell, choose the steed’s creature type—Celestial, Fey, or Fiend—which determines certain traits in the stat block.\n\n" +
            "**Combat.** The steed is an ally to you and your allies. In combat, it shares your Initiative count, and it functions as a controlled mount while you ride it (as defined in the rules on mounted combat). If you have the Incapacitated condition, the steed takes its turn immediately after yours and acts independently, focusing on protecting you.\n\n" +
            "**Disappearance of the Steed.** The steed disappears if it drops to 0 Hit Points or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the steed that disappeared or a different one.",
        statblockHtml: `
  <div class="statblock">
    <h2>OTHERWORLDLY STEED</h2>
    <hr>
    <p><em>Large Celestial, Fey, or Fiend (Your Choice), Neutral</em></p>

    <p>
      <strong>AC</strong> 10 + 1 per spell level<br>
      <strong>HP</strong> 5 + 10 per spell level <em>(the steed has a number of Hit Dice [d10s] equal to the spell’s level)</em><br>
      <strong>Speed</strong> 60 ft.; Fly 60 ft. <em>(requires level 4+ spell)</em><br>
      <strong>Initiative</strong> +1
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 18</td><td>+4</td><td>+4</td>
          <td><strong>INT</strong> 6</td><td>−2</td><td>−2</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 12</td><td>+1</td><td>+1</td>
          <td><strong>WIS</strong> 12</td><td>+1</td><td>+1</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>CHA</strong> 8</td><td>−1</td><td>−1</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Senses</strong> Passive Perception 11<br>
      <strong>Languages</strong> Telepathy 1 mile <em>(works only with you)</em><br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Life Bond.</strong> When you regain Hit Points from a level 1+ spell, the steed regains the same number of Hit Points if you’re within 5 feet of it.</p>

    <h3>Actions</h3>
    <p><strong>Otherworldly Slam.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d8 plus the spell’s level of Radiant <em>(Celestial)</em>, Psychic <em>(Fey)</em>, or Necrotic <em>(Fiend)</em> damage.</p>

    <h3>Bonus Actions</h3>
    <p><strong>Fell Glare (Fiend Only; Recharges after a Long Rest).</strong>
       <em>Wisdom Saving Throw:</em> DC equals your spell save DC, one creature within 60 feet the steed can see.
       <em>Failure:</em> The target has the <a href="#">Frightened</a> condition until the end of your next turn.</p>

    <p><strong>Fey Step (Fey Only; Recharges after a Long Rest).</strong>
       The steed teleports, along with its rider, to an unoccupied space of your choice up to 60 feet away from itself.</p>

    <p><strong>Healing Touch (Celestial Only; Recharges after a Long Rest).</strong>
       One creature within 5 feet of the steed regains a number of Hit Points equal to 2d8 plus the spell’s level.</p>

    <h3>Treasure</h3>
    <p>None. This steed leaves no physical remains.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the spell slot’s level for the spell level in the steed’s stat block (including granting a fly speed at 4th-level slot or higher).",
        imagePath: spellImgUrl("findsteed")
    },
    {
        slug: slugify("Find Traps"),
        name: "Find Traps",
        classes: ["Cleric", "Druid", "Ranger"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "120-foot radius",
        tags: ["Player's Handbook", "Detection", "Trap"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You sense any trap within range that is in line of sight. A trap includes any object or mechanism created to cause harm (e.g., alarm, glyph of warding, a pit). You learn that a trap is present and the general nature of the danger, but not its location.",
        scalingMd: "",
        imagePath: spellImgUrl("findtraps")
    },
    {
        slug: slugify("Flame Blade"),
        name: "Flame Blade",
        classes: ["Druid", "Sorcerer"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a sumac leaf" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A fiery scimitar appears in your free hand. If you release it, it vanishes, but you can evoke it again as a bonus action. As a Magic action, make a melee spell attack: on a hit, deal 3d6 + your spellcasting modifier Fire damage. The blade sheds bright light (10 ft.) and dim light (10 ft.).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 for each slot level above 2nd.",
        imagePath: spellImgUrl("flameblade")
    },
    {
        slug: slugify("Flaming Sphere"),
        name: "Flaming Sphere",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot sphere",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a ball of wax" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You create a 5-foot-diameter rolling sphere of fire in an unoccupied space on the ground within range. A creature that ends its turn within 5 feet of the sphere makes a Dexterity save, taking 2d6 Fire on a fail or half on a success. As a bonus action, move the sphere up to 30 feet along the ground; entering a creature’s space forces the save and ends the sphere’s movement. It can roll over low barriers, jump pits, ignites unattended flammables, and sheds bright light (20 ft.) and dim light (20 ft.).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 for each slot level above 2nd.",
        imagePath: spellImgUrl("flamingsphere")
    },
    {
        slug: slugify("Gentle Repose"),
        name: "Gentle Repose",
        classes: ["Cleric", "Paladin", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action (ritual)",
        duration: "10 days",
        range: "Touch",
        area: "1 corpse",
        tags: ["Player's Handbook", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "two copper pieces, consumed" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You touch a corpse or remains. For the duration, the target is protected from decay and can’t become Undead. Time under this spell doesn’t count against the time limit of spells such as raise dead.",
        scalingMd: "",
        imagePath: spellImgUrl("gentlerepose")
    },
    {
        slug: slugify("Gust of Wind"),
        name: "Gust of Wind",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "60-foot by 10-foot line",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a legume seed" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A strong wind (60-ft line, 10-ft wide) blasts from you. Creatures in the line must make a Strength save or be pushed 15 feet away along the line. A creature that ends its turn in the line repeats the save. Moving closer to you in the line costs 2 feet of movement per 1 foot. The gust disperses gas or vapor and extinguishes small flames; protected flames flicker and may go out (50% chance). As a bonus action, you can change the line’s direction.",
        scalingMd: "",
        imagePath: spellImgUrl("gustofwind")
    },
    {
        slug: slugify("Heat Metal"),
        name: "Heat Metal",
        classes: ["Artificer", "Bard", "Druid"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 manufactured metal object",
        tags: ["Player's Handbook", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of iron and a flame" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a manufactured metal object you can see within range. A creature in physical contact with it takes 2d8 Fire damage when you cast the spell; on later turns you can use a bonus action to deal the damage again if in range. If a creature is holding or wearing the object and takes damage, it must succeed on a CON save or drop it (if it can). If it doesn’t, it has disadvantage on attack rolls and ability checks until the start of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("heatmetal")
    },
    {
        slug: slugify("Hold Person"),
        name: "Hold Person",
        classes: ["Bard", "Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: ["Paralyzed"],
        components: { verbal: true, somatic: true, material: true, materialText: "a straight piece of iron" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a Humanoid you can see within range. The target must succeed on a Wisdom save or be Paralyzed for the duration. At the end of each of its turns, the target repeats the save, ending the effect on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional Humanoid per slot level above 2nd.",
        imagePath: spellImgUrl("holdperson")
    },
    {
        slug: slugify("Invisibility"),
        name: "Invisibility",
        classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible"],
        components: { verbal: true, somatic: true, material: true, materialText: "an eyelash encased in gum arabic" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A creature you touch becomes Invisible until the spell ends. The spell ends early immediately after the target makes an attack roll, deals damage, or casts a spell.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature per slot level above 2nd.",
        imagePath: spellImgUrl("invisibility")
    },
    {
        slug: slugify("Knock"),
        name: "Knock",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 object",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Choose an object you can see within range (door, box, manacles, padlock, etc.). One mundane lock is unlocked, or the object becomes unstuck/unbarred. If affected by arcane lock, that spell is suppressed for 10 minutes. Casting produces a loud knock audible out to 300 feet.",
        scalingMd: "",
        imagePath: spellImgUrl("knock")
    },
    {
        slug: slugify("Lesser Restoration"),
        name: "Lesser Restoration",
        classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a creature and end one condition on it: Blinded, Deafened, Paralyzed, or Poisoned.",
        scalingMd: "",
        imagePath: spellImgUrl("lesserrestoration")
    },
    {
        slug: slugify("Levitate"),
        name: "Levitate",
        classes: ["Artificer", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Movement"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a small metal spring" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "One creature or loose object you can see rises vertically up to 20 feet and remains suspended. The spell can affect up to 500 pounds. An unwilling creature that succeeds on a CON save is unaffected. The target moves only by pushing/pulling against a surface. You can change altitude by up to 20 feet on your turn (as part of your move if you are the target, or as a Magic action otherwise). When the spell ends, the target floats gently to the ground.",
        scalingMd: "",
        imagePath: spellImgUrl("levitate")
    },
    {
        slug: slugify("Locate Animals or Plants"),
        name: "Locate Animals or Plants",
        classes: ["Bard", "Druid", "Ranger"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action (ritual)",
        duration: "Instantaneous",
        range: "Self",
        area: "5-mile radius (closest match)",
        tags: ["Player's Handbook", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "fur from a bloodhound" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Describe or name a kind of Beast, Plant creature, or nonmagical plant. You learn the direction and distance to the closest such creature or plant within 5 miles, if present.",
        scalingMd: "",
        imagePath: spellImgUrl("locateanimalsorplants")
    },
    {
        slug: slugify("Locate Object"),
        name: "Locate Object",
        classes: ["Bard", "Cleric", "Druid", "Paladin", "Ranger", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "1,000-foot radius (direction to object)",
        tags: ["Player's Handbook", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a forked twig" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Describe or name a familiar object. If it’s within 1,000 feet, you sense the direction to it (and the direction of its movement if moving). You can also locate the nearest object of a particular kind. The spell is blocked by any thickness of lead.",
        scalingMd: "",
        imagePath: spellImgUrl("locateobject")
    },
    {
        slug: slugify("Magic Mouth"),
        name: "Magic Mouth",
        classes: ["Artificer", "Bard", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 minute",
        duration: "Until dispelled",
        range: "30 feet",
        area: "1 object",
        tags: ["Player's Handbook", "Communication"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "jade dust worth 10+ gp, consumed" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You implant a 25-word message (delivered over up to 10 minutes) in an object that speaks when a visual or audible trigger within 30 feet occurs. A magical mouth appears on the object and recites the message in your voice at the same volume. You can have the spell end after delivery or repeat each time the trigger happens.",
        scalingMd: "",
        imagePath: spellImgUrl("magicmouth")
    },
    {
        slug: slugify("Magic Weapon"),
        name: "Magic Weapon",
        classes: ["Artificer", "Paladin", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 hour",
        range: "Touch",
        area: "1 nonmagical weapon",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a nonmagical weapon. Until the spell ends, it becomes magical with a +1 bonus to attack and damage rolls. The spell ends early if you cast it again.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** +2 with a 3rd–5th-level slot; +3 with a 6th-level slot or higher.",
        imagePath: spellImgUrl("magicweapon")
    },
    {
        slug: slugify("Melf's Acid Arrow"),
        name: "Melf's Acid Arrow",
        classes: ["Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous (plus delayed damage)",
        range: "90 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Acid"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "powdered rhubarb leaf" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A shimmering green arrow streaks to a target and bursts in acid. Make a ranged spell attack: on a hit, the target takes 4d4 Acid damage and 2d4 Acid at the end of its next turn. On a miss, it takes half of the initial damage only.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both the initial and delayed damages increase by 1d4 per slot level above 2nd.",
        imagePath: spellImgUrl("acidarrow")
    },
    {
        slug: slugify("Mind Spike"),
        name: "Mind Spike",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 hour",
        range: "120 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Damage", "Detection"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You drive a psionic spike into the mind of a creature you can see. The target makes a Wisdom save, taking 3d8 Psychic damage on a fail or half as much on a success. On a failed save, you also always know the target’s location while on the same plane; it can’t hide from you, and Invisible gives it no benefit against you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("mindspike")
    },
    {
        slug: slugify("Mirror Image"),
        name: "Mirror Image",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Deception", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Three illusory duplicates of yourself appear in your space and mimic your movements. When a creature hits you with an attack roll, roll a d6 for each remaining duplicate; on a 3+, a duplicate is hit and destroyed instead. The duplicates ignore all other damage and effects. The spell ends when all three are destroyed. Creatures with Blinded, Blindsight, or Truesight are unaffected.",
        scalingMd: "",
        imagePath: spellImgUrl("mirrorimage")
    },
    {
        slug: slugify("Misty Step"),
        name: "Misty Step",
        classes: ["Paladin", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Wreathed in silvery mist, you teleport up to 30 feet to an unoccupied space you can see.",
        scalingMd: "",
        imagePath: spellImgUrl("mistystep")
    },
    {
        slug: slugify("Moonbeam"),
        name: "Moonbeam",
        classes: ["Druid", "Paladin"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "5-foot-radius, 40-foot-high cylinder",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a moonseed leaf" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A silvery beam fills a 5-foot-radius, 40-foot-high cylinder. When it appears and when a creature enters the area or ends its turn there, that creature makes a Constitution save, taking 2d10 Radiant on a failed save or half as much on a success. Shapechangers revert to true form and can’t shape-shift while in the beam. As a Magic action on later turns, you can move the cylinder up to 60 feet.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d10 per slot level above 2nd.",
        imagePath: spellImgUrl("moonbeam")
    },
    {
        slug: slugify("Nystul's Magic Aura"),
        name: "Nystul's Magic Aura",
        classes: ["Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "24 hours",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Deception"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a small square of silk" },
        concentration: false,
        ritual: false,
        descriptionMd: "With a touch, you place an illusion on a willing creature or an object that isn’t being worn or carried. A creature gains the Mask effect below, and an object gains the False Aura effect below. The effect lasts for the duration. If you cast the spell on the same target every day for 30 days, the illusion lasts until dispelled.\n\n" +
            "**Mask (Creature).** Choose a creature type other than the target’s actual type. Spells and other magical effects treat the target as if it were a creature of the chosen type.\n\n" +
            "**False Aura (Object).** You change the way the target appears to spells and magical effects that detect magical auras, such as Detect Magic. You can make a nonmagical object appear magical, make a magic item appear nonmagical, or change the object’s aura so that it appears to belong to a school of magic you choose.",
        scalingMd: "",
        imagePath: spellImgUrl("magicaura")
    },
    {
        slug: slugify("Pass without Trace"),
        name: "Pass without Trace",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "30-foot emanation",
        tags: ["Player's Handbook", "Buff", "Exploration"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "ashes from burned mistletoe" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A 30-foot aura shrouds you. You and creatures you choose in the aura get +10 to Dexterity (Stealth) checks and leave no tracks.",
        scalingMd: "",
        imagePath: spellImgUrl("passwithouttrace")
    },
    {
        slug: slugify("Phantasmal Force"),
        name: "Phantasmal Force",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "10-foot cube",
        tags: ["Player's Handbook", "Damage", "Control", "Deception"],
        saveRequired: "Intelligence",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of fleece" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create a phantasm perceptible only to one creature that fails an Intelligence save. The target rationalizes illogic. The phantasm can deal 2d8 Psychic on your turns if the target is within 5 feet of, or inside, the phantasm. A Study action with an Intelligence (Investigation) check against your DC reveals the illusion and ends the spell.",
        scalingMd: "",
        imagePath: spellImgUrl("phantasmalforce")
    },
    {
        slug: slugify("Prayer of Healing"),
        name: "Prayer of Healing",
        classes: ["Cleric", "Paladin"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "10 minutes",
        duration: "Instantaneous",
        range: "Self",
        area: "30-foot radius",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Up to five creatures of your choice that remain within range for the entire casting gain the benefits of a Short Rest and also regain 2d8 Hit Points. A creature can’t benefit from this spell again until it finishes a Long Rest.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Healing increases by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("prayerofhealing")
    },
    {
        slug: slugify("Protection from Poison"),
        name: "Protection from Poison",
        classes: ["Artificer", "Cleric", "Druid", "Paladin", "Ranger"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Poison"],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Touch a creature to end the Poisoned condition on it. For the duration, the target has advantage on saves to avoid or end Poisoned and has resistance to Poison damage.",
        scalingMd: "",
        imagePath: spellImgUrl("protectionfrompoison")
    },
    {
        slug: slugify("Ray of Enfeeblement"),
        name: "Ray of Enfeeblement",
        classes: ["Warlock", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A weakening beam forces a Constitution save. Success: the target has disadvantage on its next attack roll until the start of your next turn. Failure: for the duration, it has disadvantage on Strength-based d20 tests and subtracts 1d8 from all damage rolls. It repeats the save at the end of each of its turns, ending the spell on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("rayofenfeeblement")
    },
    {
        slug: slugify("Rope Trick"),
        name: "Rope Trick",
        classes: ["Artificer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 rope; extradimensional space",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a segment of rope" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Touch a rope; one end rises and a 3-by-5-foot invisible portal opens to an extradimensional space. Up to eight Medium or smaller creatures can enter by climbing. Effects can’t pass in or out, but vision through the portal is possible. Anything inside drops out when the spell ends. You can pull the rope up or drop it.",
        scalingMd: "",
        imagePath: spellImgUrl("ropetrick")
    },
    {
        slug: slugify("Scorching Ray"),
        name: "Scorching Ray",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "1+ creature",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create three fiery rays and make a ranged spell attack for each against one or more targets. On a hit, a ray deals 2d6 Fire damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Create one additional ray per slot level above 2nd.",
        imagePath: spellImgUrl("scorchingray")
    },
    {
        slug: slugify("See Invisibility"),
        name: "See Invisibility",
        classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Invisible"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of talc" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "For the duration, you see creatures and objects with the Invisible condition as visible, and you can see into the Ethereal Plane (appearing ghostly).",
        scalingMd: "",
        imagePath: spellImgUrl("seeinvisibility")
    },
    {
        slug: slugify("Shatter"),
        name: "Shatter",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "10-foot-radius sphere",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Thunder"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a chip of mica" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A thunderous boom erupts at a point you choose. Creatures in a 10-foot-radius sphere make a Constitution save, taking 3d8 Thunder on a failure or half on a success. Constructs have disadvantage on the save. Unattended nonmagical objects in the area also take the damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("shatter")
    },
    {
        slug: slugify("Shining Smite"),
        name: "Shining Smite",
        classes: ["Paladin"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "1 creature",
        tags: ["Player's Handbook", "Damage", "Illumination"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Immediately after you hit a creature with a melee weapon or Unarmed Strike, the target takes an extra 2d6 Radiant damage. Until the spell ends, the target sheds bright light (5 ft.), attack rolls against it have advantage, and it can’t benefit from Invisible.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Extra damage increases by 1d6 per slot level above 2nd.",
        imagePath: spellImgUrl("shiningsmite")
    },
    {
        slug: slugify("Silence"),
        name: "Silence",
        classes: ["Bard", "Cleric", "Ranger"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action (ritual)",
        duration: "10 minutes",
        range: "120 feet",
        area: "20-foot-radius sphere",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Thunder"],
        conditions: ["Deafened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: true,
        descriptionMd:
            "No sound is created within or passes through a 20-foot-radius sphere. Creatures entirely inside are Deafened and immune to Thunder damage. Spells with Verbal components can’t be cast there.",
        scalingMd: "",
        imagePath: spellImgUrl("silence")
    },
    {
        slug: slugify("Spider Climb"),
        name: "Spider Climb",
        classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Player's Handbook", "Buff", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of bitumen and a spider" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A willing creature gains the ability to move across vertical surfaces and ceilings, leaving hands free, and gains a climb speed equal to its speed.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature per slot level above 2nd.",
        imagePath: spellImgUrl("spiderclimb")
    },
    {
        slug: slugify("Spike Growth"),
        name: "Spike Growth",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "150 feet",
        area: "20-foot-radius sphere",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "seven thorns" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Ground in a 20-foot-radius sphere sprouts spikes and becomes difficult terrain. A creature that moves into or within the area takes 2d4 Piercing damage for every 5 feet it travels. The change is camouflaged; creatures that couldn’t see the area when cast must succeed on a Wisdom (Perception or Survival) check against your DC (Search action) to recognize it as hazardous before entering.",
        scalingMd: "",
        imagePath: spellImgUrl("spikegrowth")
    },
    {
        slug: slugify("Spiritual Weapon"),
        name: "Spiritual Weapon",
        classes: ["Cleric"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot reach (spectral weapon)",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create a floating spectral force in range and immediately make a melee spell attack (reach 5 ft.): on a hit, deal 1d8 + your spellcasting modifier Force damage. As a bonus action on later turns, move it up to 20 feet and repeat the attack.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 2nd.",
        imagePath: spellImgUrl("spiritualweapon")
    },
    {
        slug: slugify("Suggestion"),
        name: "Suggestion",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "8 hours",
        range: "30 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control", "Social"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: false, material: true, materialText: "a drop of honey" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You suggest a reasonable course of action (25 words or fewer) to a creature that can hear and understand you. On a failed Wisdom save, the target is Charmed for the duration (or until you or your allies deal damage to it) and pursues the suggestion to the best of its ability. If the task would finish sooner, the spell ends when it’s completed.",
        scalingMd: "",
        imagePath: spellImgUrl("suggestion")
    },
    {
        slug: slugify("Summon Beast"),
        name: "Summon Beast",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "Bestial Spirit (stat block)",
        tags: ["Player's Handbook", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a feather, a tuft of fur, and a fish tail inside a gilded acorn worth 200+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a bestial spirit. It manifests in an unoccupied space that you can see within range and uses the Bestial Spirit stat block. When you cast the spell, choose an environment: Air, Land, or Water. The creature resembles an animal of your choice that is native to the chosen environment, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>SWARM SPIRIT</h2>
    <hr>
    <p><em>Medium swarm of Tiny beasts, unaligned</em></p>

    <p>
      <strong>AC</strong> 10 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 30 + 5 for each spell level above 1st<br>
      <strong>Speed</strong> 30 ft. (Spiders only), 5 ft. (Quippers or Wasps only), fly 30 ft. (Wasps only), swim 30 ft. (Quippers only)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 3</td><td>−4</td>
          <td><strong>INT</strong> 1</td><td>−5</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 13</td><td>+1</td>
          <td><strong>WIS</strong> 7</td><td>−1</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 10</td><td>+0</td>
          <td><strong>CHA</strong> 1</td><td>−5</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances</strong> Bludgeoning, Piercing, Slashing<br>
      <strong>Senses</strong> Blindsight 10 ft., Passive Perception 8<br>
      <strong>Languages</strong> Understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your bonus)
    </p>

    <p><strong>Spider Climb (Spider only).</strong> The swarm can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.</p>

    <p><strong>Web Walker (Spider only).</strong> The swarm ignores movement restrictions caused by webbing.</p>

    <p><strong>Swarm.</strong> The swarm can occupy another creature’s space and vice versa, and the swarm can move through any opening large enough for a Tiny creature. The swarm can’t regain hit points or gain temporary hit points.</p>

    <hr>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The swarm makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Bite (Spider and Wasp only).</strong>
      <em>Melee weapon attack:</em> your spell attack modifier, reach 0 ft., one target.
      <em>Hit:</em> 2d4 + the spell’s level Piercing damage + 1d4 Poison damage.
    </p>

    <p>
      <strong>Bite (Quipper only).</strong>
      <em>Melee weapon attack:</em> your spell attack modifier, reach 0 ft., one target.
      <em>Hit:</em> 3d4 + the spell’s level Piercing damage.
    </p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the slot’s level for AC, HP, and damage in the stat block.",
        imagePath: spellImgUrl("summonbeast")
    },
    {
        slug: slugify("Web"),
        name: "Web",
        classes: ["Artificer", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "20-foot cube",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of spiderweb" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure sticky webs filling a 20-foot cube. The webs are difficult terrain and lightly obscured. If not anchored between solid masses or layered on a surface, they collapse at the start of your next turn. When a creature first enters the webs on a turn or starts its turn there, it must succeed on a Dexterity save or be Restrained while in the webs or until it breaks free. A restrained creature can use an action to make a Strength (Athletics) check against your spell save DC, ending the effect on a success. The webs are flammable; any 5-foot cube that burns for 1 round deals 2d4 Fire damage to creatures starting their turn in the flames.",
        scalingMd: "",
        imagePath: spellImgUrl("web")
    },
    {
        slug: slugify("Warding Bond"),
        name: "Warding Bond",
        classes: ["Cleric", "Paladin"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Player's Handbook", "Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a pair of platinum rings worth 50+ gp each, worn by you and the target"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You forge a mystic bond with a willing creature you touch. While the target is within 60 feet of you, it gains +1 to AC and saving throws and resistance to all damage. Each time it takes damage, you take the same amount. The spell ends if you drop to 0 HP, if you and the target are ever more than 60 feet apart, or if the spell is cast again on either creature.",
        scalingMd: "",
        imagePath: spellImgUrl("wardingbond")
    },
    {
        name: "Air Bubble",
        classes: ["Druid", "Sorcerer", "Wizard", "Ranger", "Artificer"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "24 Hours",
        range: "60 feet",
        area: "20-foot cube",
        tags: ["Spelljammer", "Control", ],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a spectral globe around the head of a willing creature you can see within range. The globe is filled with fresh air that lasts until the spell ends. " +
            "If the creature has more than one head, the globe of air appears around only one of its heads (which is all the creature needs to avoid suffocation, assuming that all its heads share the same respiratory system).",
        scalingMd: "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, you can create two additional globes of fresh air for each slot level above 2nd.",
    },
    {
        slug: slugify("Zone of Truth"),
        name: "Zone of Truth",
        classes: ["Bard", "Cleric", "Paladin"],
        spellLevel: 2,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "15-foot sphere",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create a magical zone that hinders lies. A creature that enters the area for the first time on a turn or starts its turn there must make a Charisma save. On a failed save, it can’t speak a deliberate lie while in the area. You know whether each creature succeeds or fails its save. Affected creatures are aware of the spell and can avoid answering, but must remain truthful.",
        scalingMd: "",
        imagePath: spellImgUrl("zoneoftruth")
    },
    {
        slug: slugify("Ripplestone Ward"),
        name: "Ripplestone Ward",
        classes: ["Druid", "Ranger", "Sorcerer", "Warlock"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "60 feet",
        tags: ["Homebrew", "Damage", "Control", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a hovering, incorporeal stone that orbits you and can’t be damaged or moved. While you concentrate, when a hostile creature you can see within 60 feet first gains the prone condition on a turn, ripples of force lash out at it. The creature takes 2d6 Force damage. A creature can take this damage only once per turn.\n\nThe stone provides no cover and doesn’t hinder movement or vision.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d6 for each spell slot level above 2nd.",
        imagePath: spellImgUrl("ripplestoneward"),
    },
    {
        slug: slugify("Undying Vermin"),
        name: "Undying Vermin",
        classes: ["Druid", "Ranger"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "30 feet",
        area: "30-foot radius",
        tags: ["Homebrew", "Summoning", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a chunk of rat fur" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You summon a Giant Rat that appears in an unoccupied space you can see within range. The rat uses the Giant Rat stat block (the GM has the creature’s statistics). It is friendly to you and your companions. In combat, it acts immediately after your turn. It can move and use its reaction on its own, and it takes the Dodge action unless you use a Bonus Action to command it to take another action (Attack, Dash, Disengage, Help, or Hide). If you are incapacitated, it can take only the Dodge action.\n\n" +
            "Scurry Back. If the rat is reduced to 0 Hit Points, it disappears. At the start of your next turn, while you maintain concentration, it reappears with its Hit Points restored in an unoccupied space you can see within 30 feet of you. Conditions and effects on it don’t persist through this reappearance. You can dismiss the rat as a Magic action. You can have only one rat summoned by this spell at a time; casting it again ends the previous rat.",
        scalingMd: "",
        imagePath: spellImgUrl("undyingvermin"),
    },
    {
        slug: slugify("Bolide Shot"),
        name: "Bolide Shot",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", ],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You hurl a growing ember that accretes into a blazing meteor as it flies. Make a Ranged Spell Attack against one creature you can see within range. On a hit, the target takes 2d6 Fire damage, plus an additional 1d4 Fire damage for each full 30 feet between you and the target when the attack hits (minimum +0; e.g., +1d4 at 30–59 ft., +2d4 at 60–89 ft., up to +5d4 at 150 ft.).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The base hit damage (the 2d6) increases by 1d6 for each spell slot level above 2nd.",
        imagePath: spellImgUrl("bolideshot"),
    },
    {
        slug: slugify("Ghostwalk"),
        name: "Ghostwalk",
        classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 2,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Touch",
        area: "1 willing creature",
        tags: ["Homebrew", "Buff", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Invisible"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You touch a willing creature. Until the spell ends, the target has the invisible condition. The spell ends early immediately after the target makes an attack roll, deals damage, or casts a spell.\n\n" +
            "Return Step. When the spell ends for any reason, the target teleports to the space on the same plane where you cast this spell on it. If that space is occupied or unsafe, the target appears in the nearest unoccupied space to that location. If an effect prevents teleportation (such as forbiddance), the spell ends and the target doesn’t move.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, you can target one additional willing creature for each slot level above 2nd. Each target returns to its own original space when the spell ends.",
        imagePath: spellImgUrl("ghostwalk"),
    },
    {
        slug: slugify("Sanguine Seed"),
        name: "Sanguine Seed",
        classes: ["Bard", "Druid", "Warlock"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 living creature",
        tags: ["Homebrew", "Sangromancy", ],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Make a Ranged Spell Attack against one living creature you can see within range (the target can’t be a Construct, Elemental, Ooze, or Undead). On a hit, a tiny arcane seed lodges under the target’s skin; the attack deals no damage, and the spell lasts for the duration.\n\n" +
            "Bloodied Trigger. The first time during the spell’s duration that the target becomes bloodied (half its Hit Points or fewer), and at the start of each of its turns while it remains bloodied, the seed flares. The target takes 1d4 Necrotic damage that ignores resistance and immunity and can’t be reduced or prevented, and you regain Hit Points equal to the damage the target takes from this effect. If the target rises above half its Hit Point maximum, the seed becomes dormant until it becomes bloodied again before the spell ends.\n\n" +
            "Removing the Seed. A creature that is aware of the seed can use an Action to remove it from itself or from a creature within 5 feet, ending the spell on that target.\n\n" +
            "A creature can be affected by only one seed from this spell at a time.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The start-of-turn damage increases by 1d4 for every spell slot level above 2nd.",
        imagePath: spellImgUrl("sanguineseed"),
    },
    {
        slug: slugify("Death Armor"),
        name: "Death Armor",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Forgotten Realms", "Buff", "Damage", "Defense", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an onyx worth 50+ gp, which the spell consumes" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "For the duration, an inky aura surrounds one creature you touch. The target has Advantage on Death Saving Throws, and once per turn, when a creature within 5 feet of the target hits it with a melee attack roll, the attacker takes 2d4 Necrotic damage.",
        scalingMd: "",
        imagePath: spellImgUrl("deatharmor")
    },
    {
        slug: slugify("Deryan’s Helpful Homunculi"),
        name: "Deryan’s Helpful Homunculi",
        classes: ["Cleric", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action (ritual)",
        duration: "8 hours",
        range: "Self",
        area: "Self",
        tags: ["Forgotten Realms", "Summoning", "Utility", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "powdered gemstones worth 100+ gp, which the spell consumes, and one set of Artisan’s Tools with which you have proficiency"
        },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You summon a group of helpful spirits, which lasts for the duration. The spirits appear as homunculi or as another Construct of your choice but are intangible and invulnerable, and they are considered to have proficiency in the Arcana skill and with the set of Artisan’s Tools used in the spell’s casting.\n\n" +
            "If you are crafting an item, the spirits function as a single assistant for your crafting, halving the crafting time.",
        scalingMd: "",
        imagePath: spellImgUrl("deryanshelpfulhomunculi")
    },
    {
        slug: slugify("Elminster’s Elusion"),
        name: "Elminster’s Elusion",
        classes: ["Wizard"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 bonus action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Forgotten Realms", "Defense", "Buff", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Arcane wards protect you against magic for the duration. You have Advantage on saving throws against spells and magical effects. Additionally, if you succeed on a saving throw against a spell or magical effect and would normally take half as much damage, you instead take no damage.",
        scalingMd: "",
        imagePath: spellImgUrl("elminsterselusion")
    },
    {
        slug: slugify("Haste Mount"),
        name: "Haste Mount",
        classes: ["Paladin", "Ranger"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 willing mount",
        tags: ["Homebrew", "Buff", "Mobility", "Defense", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Incapacitated"],
        components: {
            verbal: true,
            somatic: true,
            material: false,
            materialText: ""
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a willing creature you can see within range that is serving as a mount (either a controlled mount you are riding or a creature conjured to serve as a mount, such as by the find steed spell). Until the spell ends, the target’s Speed is doubled, it gains a +2 bonus to AC, it has Advantage on Dexterity saving throws, and it gains one additional action on each of its turns. That additional action can be used only to take the Dash or Disengage action. If the target is a controlled mount, the rider chooses how the target uses this additional action.\n\n" +
            "When the spell ends, the target is Incapacitated and has a Speed of 0 until the end of its next turn, as lethargy washes over it.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can target one additional mount for each spell slot level above 2nd. Each target must qualify as a mount as described above.",
        imagePath: spellImgUrl("hastemount")
    },
    {
        slug: slugify("Farsafe Coffer"),
        name: "Farsafe Coffer",
        classes: ["Artificer", "Wizard"],
        spellLevel: 2,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "5 feet",
        area: "5-foot radius",
        tags: ["Homebrew", "Utility", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a small brass key worth 5 gp, not consumed"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You summon a sturdy chest bound to you into an unoccupied space on the ground that you can see within range. It is the same chest each time you cast this spell. The chest’s interior is roughly that of a typical traveling chest (about 3 feet by 2 feet by 2 feet), and it can hold up to 250 pounds. While present, the chest is a nonmagical object.\n\n" +
            "When the spell ends, or when you take a Magic action to dismiss it early, the chest and everything inside it return to a secure extradimensional space linked to you, where they remain until you summon the chest again with this spell. Only you can summon or dismiss this chest. Creatures can interact with the chest normally while it is present.\n\n" +
            "The chest occupies its space and is an object (AC 15; 20 Hit Points; immunity to Poison and Psychic damage). If the chest is reduced to 0 Hit Points, the spell ends and the chest and its contents return to the extradimensional space.",
        scalingMd: "",
        imagePath: spellImgUrl("farsafecoffer")
    },
    {
        slug: slugify("Alert"),
        name: "Alert",
        classes: ["Artificer", "Ranger", "Wizard", "Paladin", "Sorcerer"],
        spellLevel: 2,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "60 feet",
        area: "Invisible dome, 120-foot radius",
        tags: ["Homebrew", "Detection", "Utility", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a bell and silver wire"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create an invisible, intangible dome centered on a point on the ground you can see within range. The dome offers no protection and doesn’t impede movement, vision, or sound.\n\n" +
            "While the spell lasts, whenever any Tiny or larger creature enters the dome’s area or leaves it, you receive a mental alert (no action required), and you instantly learn that creature’s size category (Tiny, Small, Medium, Large, Huge, or Gargantuan). The alert reaches you if you are within 1 mile of the dome. When you cast the spell, you can designate any number of creatures to ignore; those creatures don’t trigger the alert.\n\n" +
            "You can have only one Alert spell active at a time; casting it again ends the previous casting.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The dome’s radius increases by 30 feet for each spell slot level above 2nd.",
        imagePath: spellImgUrl("alert")
    },
    {
        slug: slugify("Empower"),
        name: "Empower",
        classes: ["Artificer", "Bard", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a pinch of powdered iron"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "While you concentrate, your Strength surges. Your Strength score increases by 1 for the duration (maximum 30). This change affects your Strength modifier and anything that relies on it, such as attack and damage rolls that use Strength, Strength checks and saving throws, and carrying capacity.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 3rd level or higher, your Strength score increases by an additional 1 for each slot level above 2nd.",
        imagePath: spellImgUrl("empower")
    },
    {
        slug: slugify("Ember Burst"),
        name: "Ember Burst",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "10-foot cone",
        tags: ["Homebrew", "Damage", ],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: false,
            materialText: ""
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When you cast the spell, scorching flames erupt from you in a 10-foot cone. Each creature in the area must make a Dexterity saving throw, taking 2d6 Fire damage on a failed save, or half as much damage on a success. While the spell lasts, you can take a Magic action on later turns to create the cone again. The cone originates from you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage of each cone increases by 1d6 for each spell slot level above 2nd.",
        imagePath: spellImgUrl("emberburst")
    },
    {
        slug: slugify("Rime Burst"),
        name: "Rime Burst",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "10-foot cone",
        tags: ["Homebrew", "Damage", ],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Cold"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: false,
            materialText: ""
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When you cast the spell, freezing air erupts from you in a 10-foot cone. Each creature in the area must make a Constitution saving throw, taking 2d6 Cold damage on a failed save, or half as much damage on a success. While the spell lasts, you can take a Magic action on later turns to create the cone again. The cone originates from you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage of each cone increases by 1d6 for each spell slot level above 2nd.",
        imagePath: spellImgUrl("rimeburst")
    },
    {
        slug: slugify("Static Burst"),
        name: "Static Burst",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "10-foot cone",
        tags: ["Damage", "Homebrew"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Lightning"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: false,
            materialText: ""
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When you cast the spell, crackling energy erupts from you in a 10-foot cone. Each creature in the area must make a Dexterity saving throw, taking 2d6 Lightning damage on a failed save, or half as much damage on a success. While the spell lasts, you can take a Magic action on later turns to create the cone again. The cone originates from you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage of each cone increases by 1d6 for each spell slot level above 2nd.",
        imagePath: spellImgUrl("staticburst")
    },
    {
        slug: slugify("Mute"),
        name: "Mute",
        classes: ["Bard", "Cleric", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Debuff", ],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Muted"],
        components: {
            verbal: true,
            somatic: false,
            material: false,
            materialText: ""
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Choose one creature you can see within range. The target must succeed on a Constitution saving throw or have the Muted condition for the duration.\n\n" +
            "A Muted creature can’t speak or produce audible vocalizations, can’t cast spells with Verbal components, automatically fails ability checks that require speaking, and can’t activate items or features that require a command word. Sounds not produced by the creature’s voice (such as footsteps or weapon clashes) are unaffected.\n\n" +
            "At the end of each of its turns, the target repeats the saving throw, ending the spell on itself on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can target one additional creature for each spell slot level above 2nd.",
        imagePath: spellImgUrl("mute")
    },
    {
        slug: slugify("Landing Zone"),
        name: "Landing Zone",
        classes: ["Artificer", "Bard", "Sorcerer", "Wizard"],
        spellLevel: 2,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "300 feet",
        area: "30-foot-radius, 30-foot-high Cylinder",
        tags: ["Homebrew", "Utility", "Exploration", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: false,
            material: true,
            materialText: "a cotton from a pillow"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a point on the ground you can see within range. You create an invisible cushion of force in a 30-foot-radius, 30-foot-high cylinder centered on that point. A creature that would take damage from falling and lands within the cylinder takes no falling damage and lands on its feet instead.\n\n" +
            "If a falling creature enters the cylinder while descending, its fall slows enough that, if it lands within the cylinder, it takes no falling damage and lands on its feet. This spell doesn’t reduce damage from sources other than falling and doesn’t impede movement.",
        scalingMd: "",
        imagePath: spellImgUrl("landingzone")
    },



];