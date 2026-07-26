import { spellImgUrl, slugify } from "./spellUtils.js";

export const LEVEL6 = [
    {
        slug: slugify("Baba's Walking Hut"),
        name: "Baba's Walking Hut",
        classes: ["Druid", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "10 minutes",
        duration: "24 hours",
        range: "Touch",
        area: "15-foot cube",
        tags: ["Homebrew", "Summoning", "Utility"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a chicken leg" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a hut, cabin, or other building no more than 15×15×10 feet. The building sprouts legs and becomes a gargantuan creature (AC 12, HP 250, speed 20 ft.). If it drops to 0 HP, the spell ends. On your turn you can direct it to move (no action required). It can take no actions, but if it walks over a Large or smaller creature you can direct it to step on that creature (Dexterity save or take 2d10 Bludgeoning and be knocked prone). If cast on the same building every day for a year, the effect becomes permanent until dispelled or cast on another building.",
        scalingMd: "",
        imagePath: spellImgUrl("babaswalkinghut")
    },
    {
  slug: slugify("Lungburst"),
  name: "Lungburst",
  classes: ["Sorcerer", "Warlock", "Wizard"],
  spellLevel: 6,
  school: "Evocation",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "90 feet",
  area: "Single target",
  tags: ["Heliana's Guide to Monster Hunting", "Biomancy", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Thunder", "Necrotic"],
  conditions: ["Suffocating"],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You cause rapid, unpredictable changes in the internal air pressure of one creature you can see within range, rupturing its breathing apparatus. The target must make a Constitution saving throw. A creature holding its breath makes this saving throw with Disadvantage. " +
    "On a failed save, the target takes 7d6 Thunder damage and 7d6 Necrotic damage and immediately begins suffocating. On a successful save, it takes half as much damage and doesn’t begin suffocating.\n\n" +
    "A creature suffocating in this way repeats the saving throw at the end of each of its turns, ending the suffocation on itself on a success.\n\n" +
    "A creature that doesn’t need to breathe is immune to this spell. A greater restoration, heal, or wish spell can restore a creature’s ability to breathe and end this suffocation.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** The Thunder and Necrotic damage each increase by 1d6 for each spell slot level above 6.",
  imagePath: spellImgUrl("lungburst")
},
    {
        slug: slugify("Beam of Annihilation"),
        name: "Beam of Annihilation",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "3 rounds",
        range: "Self",
        area: "60-ft. by 10-ft. line",
        tags: ["Homebrew", "Damage", "Buff"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Cold", "Fire", "Force", "Lightning"],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You unleash a persistent beam of annihilating energy in a 60-foot-long, 10-foot-wide line. Choose Cold, Fire, Force, or Lightning when you cast the spell; the beam deals that damage type and persists until the start of your next turn.\n\nCreatures that start their turn in the beam must make a Dexterity saving throw, taking 8d8 damage of the chosen type on a failure, or half as much on a success.\n\nWhile concentrating, your speed is 0. At the start of each of your turns, you can use your action to maintain the beam or redirect it, rotating it up to 90°. Any creature the beam passes completely through during the rotation (and that won’t start its turn in the beam) must make a Dexterity save, taking 4d8 damage on a failure or no damage on a success. If you don’t use your action to maintain or redirect it, the spell ends early.",
        scalingMd: "",
        imagePath: spellImgUrl("beamofannihilation")
    },
    {
        slug: slugify("Blood Tide"),
        name: "Blood Tide",
        classes: ["Druid", "Sorcerer", "Wizard", "Blood Hunter"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "100-ft. line, 10-ft. wide",
        tags: ["Grim Hollow", "Sangromancy", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a shell" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend six Hit Point Dice or it automatically fails. A gout of blood blasts in a 100-ft. by 10-ft. line. Each creature in the area makes a Dexterity saving throw. On a failed save, a creature is pushed 100 feet, knocked prone, and takes Bludgeoning damage equal to the roll of the Hit Point Dice expended + your spellcasting modifier. On a success, it takes half damage and isn’t pushed or knocked prone.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** You can expend one additional Hit Point Die for each slot level above 6th.",
        imagePath: spellImgUrl("bloodtide")
    },
    {
        slug: slugify("Brand of Condemnation"),
        name: "Brand of Condemnation",
        classes: ["Cleric", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a suture" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a creature you can see within range. The target must succeed on a Constitution saving throw or be branded for the duration. While branded, it takes 1d8 Necrotic damage at the start of each of its turns, and whenever it would regain hit points from any source, that healing is halved. At the end of each of its turns, the target repeats the save, ending the spell on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 6th.",
        imagePath: spellImgUrl("brandofcondemnation")
    },
    {
        slug: slugify("Chain Devil's Chains"),
        name: "Chain Devil's Chains",
        classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "100 feet",
        area: "20-ft-radius sphere",
        tags: ["Grim Hollow", "Control", "Damage"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Piercing", "Bludgeoning"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a chain link" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "From a point you can see, barbed chains erupt in a 20-foot-radius sphere. Each creature makes a Dexterity save. On a failed save, it takes 8d6 Piercing and has the Restrained condition. The first time a creature enters the area on a turn or starts its turn there, it must succeed on a Dexterity save or be Restrained while in the area or until it breaks free (action: Strength (Athletics) vs. your spell save DC). A creature Restrained by the chains takes 3d6 Bludgeoning at the end of its turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the initial and subsequent damage by 1d6 per slot level above 6th.",
        imagePath: spellImgUrl("chaindevilschains")
    },
    {
        slug: slugify("Create Soul Coin"),
        name: "Create Soul Coin",
        classes: ["Warlock", "Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 reaction",
        duration: "Until dispelled or triggered",
        range: "120 feet",
        area: "1 creature",
        tags: ["Xanathar's Guide to Everything", "Buff", "Utility", "Healing"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a platinum coin" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Snatch the soul of a dying humanoid into a platinum coin, creating a Soul Coin. A soul trapped this way cannot be resurrected except by Wish. A Soul Coin can be exploited up to six times by its holder; after the sixth use, the soul is condemned, and the spell ends. The coin’s quality depends on the creature’s importance/power in life. A creature that can see the sensor (e.g., with see invisibility or truesight) sees a tormented image of the trapped soul.",
        scalingMd: "",
        imagePath: spellImgUrl("createsoulcoin")
    },
    {
        slug: slugify("Create Homunculus"),
        name: "Create Homunculus",
        classes: ["Wizard"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 hour",
        duration: "Instantaneous (permanent creature)",
        range: "30 feet",
        area: "1 creature",
        tags: ["Xanathar's Guide to Everything", "Summoning", "Creation"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "alchemical mixture worth 1,000 gp, consumed" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Sculpt a tiny construct and bind a fragment of your essence to it, creating a Greater Homunculus loyal to you (see stat block in description). It’s a permanent creature (not a summoned one), friendly to you and allies, and obeys your commands. You may have only one homunculus from this spell at a time; if destroyed, you can recast to rebuild it. It rolls its own initiative and benefits from Arcane Bond, Magical Conduit, and Reflexive Shield, plus its listed actions (Alchemical Sting; Channel Infusion).",
        scalingMd: "",
        imagePath: spellImgUrl("createhomunculus")
    },
    {
        slug: slugify("Crustacean Form"),
        name: "Crustacean Form",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Obojima", "Buff", "Summoning"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a rust crab shell" },
        concentration: true,
        ritual: false,
        descriptionMd: "A large ethereal crustacean form surrounds you. Your AC becomes 20 (if not already higher), you gain a 40-foot swim speed and blindsight to 30 feet. You can replace any attack with a claw strike or use a bonus action to make a claw attack using your spell attack bonus; on a hit, it deals 1d10 + your spellcasting modifier Bludgeoning damage. Your ethereal shell has a damage threshold of 15: you ignore any instance of damage below 15; damage that meets or exceeds 15 affects you normally.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage die becomes 1d12 (7th), 2d6 (8th), and 2d8 (9th). The damage threshold increases by +2 for each slot level above 6th.",
        imagePath: spellImgUrl("crustaceanform")
    },
    {
        slug: slugify("Devine Chain").replace("Devine", "Divine"),
        name: "Divine Chain",
        classes: ["Cleric"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "5 feet",
        area: "60-foot radius",
        tags: ["Homebrew",  "Damage", "Control"],
        saveRequired: "None",
        attackType: "Melee Spell Attack (via chain)",
        damageTypes: ["Piercing", "Bludgeoning"],
        conditions: ["Grappled (via chain)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of metal" },
        concentration: true,
        ritual: false,
        descriptionMd: "You open a small portal that always hovers 5 feet behind you as long as you maintain concentration. In this gate lies a divine chain that moves with snake like mannerisms at your command, but never fully exits the portal.\n\n" +
            "The portal is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The chain does not fill a space.\n\n" +
            "When you cast the spell and as a bonus action on your subsequent turns, you can cause one of the following effects with it.\n\n" +
            "**Piercing Shot.** The tip of the chain is pointed like a dagger. You can target one creature or object within 60 feet of you. Make a melee spell attack for the chain using your spell to hit. On a hit, the target takes 4d6 piercing damage and the chain returns to you.\n\n" +
            "**Knotted Chain.** The chain attempts to grapple a Huge or smaller creature within 60 feet of it. You use the chain’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the chain is grappling the target, you can use a bonus action to have the chain crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.\n\n" +
            "**Reactive Chain.** As a reaction when a target you can see attempts to attack a creature within 60 feet of you, you can lash the chain out to impose disadvantage on the attack roll.",
        scalingMd: "**Using a Higher-Level Spell Slot.** With an 8th-level slot or higher, you gain an additional chain that acts on the same bonus action but can take a different action and target.",
        imagePath: spellImgUrl("divinechain")
    },
    {
        slug: slugify("Druid Grove"),
        name: "Druid Grove",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "10 minutes",
        duration: "24 hours",
        range: "Touch",
        area: "90-foot cube",
        tags: ["Xanathar's Guide to Everything", "Summoning", "Debuff", "Utility"],
        saveRequired: "Varies",
        attackType: "None",
        damageTypes: [],
        conditions: ["Heavily Obscured", "Difficult Terrain"],
        components: { verbal: true, somatic: true, material: true, materialText: "a magical plant or seed from a druidic forest or grove" },
        concentration: false,
        ritual: false,
        descriptionMd: "You invoke the spirits of nature to protect an area outdoors or underground. The area can be as small as a 30-foot cube or as large as a 90-foot cube. Buildings and other structures are excluded from the affected area. If you cast this spell in the same area every day for a year, the spell lasts until dispelled.\n\n" +
            "The spell creates the following effects within the area. When you cast this spell, you can specify creatures as friends who are immune to the effects. You can also specify a password that, when spoken aloud, makes the speaker immune to these effects.\n\n" +
            "The entire warded area radiates magic. A dispel magic cast on the area, if successful, removes only one of the following effects, not the entire area. That spell’s caster chooses which effect to end. Only when all its effects are gone is this spell dispelled.\n\n" +
            "**Solid Fog.** You can fill any number of 5-foot squares on the ground with thick fog, making them heavily obscured. The fog reaches 10 feet high. In addition, every foot of movement through the fog costs 2 extra feet. To a creature immune to this effect, the fog obscures nothing and looks like soft mist, with motes of green light floating in the air.\n\n" +
            "**Grasping Undergrowth.** You can fill any number of 5-foot squares on the ground that aren’t filled with fog with grasping weeds and vines, as if they were affected by an entangle spell. To a creature immune to this effect, the weeds and vines feel soft and reshape themselves to serve as temporary seats or beds.\n\n" +
            "**Grove Guardians.** You can animate up to four trees in the area, causing them to uproot themselves from the ground. These trees have the same statistics as an awakened tree, which appears in the Monster Manual, except they can’t speak, and their bark is covered with druidic symbols. If any creature not immune to this effect enters the warded area, the grove guardians fight until they have driven off or slain the intruders. The grove guardians also obey your spoken commands (no action required by you) that you issue while in the area. If you don’t give them commands and no intruders are present, the grove guardians do nothing. The grove guardians can’t leave the warded area. When the spell ends, the magic animating them disappears, and the trees take root again if possible.\n\n" +
            "**Additional Spell Effect.** You can place your choice of one of the following magical effects within the warded area:\n\n" +
            "A constant gust of wind in two locations of your choice\n" +
            "Spike growth in one location of your choice\n" +
            "Wind wall in two locations of your choice\n" +
            "To a creature immune to this effect, the winds are a fragrant, gentle breeze, and the area of spike growth is harmless.",
        scalingMd: "**Using a Higher-Level Spell Slot.** For each slot level above 6th, choose one additional additional effect.",
        imagePath: spellImgUrl("druidgrove")
    },
    {
        slug: slugify("Earth Worm"),
        name: "Earth Worm",
        classes: ["Druid", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot radius",
        tags: ["Grim Hollow", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Melee Spell Attack (via worm)",
        damageTypes: ["Piercing", "Bludgeoning"],
        conditions: ["Blinded", "Restrained", "Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You transform the earth into a wormlike maw at an unoccupied point on the ground within range. As a Bonus Action, make a melee spell attack against a creature within 5 feet of the worm. On a hit, the target takes Piercing damage equal to 3d8 plus your spellcasting ability modifier. If the target is a Large or smaller creature, it must succeed on a Dexterity saving throw or be swallowed by the worm. A swallowed creature has the Blinded and Restrained conditions, it has Total Cover against attacks and other effects outside the worm, and it takes 6d6 Bludgeoning damage at the start of each of your turns.\n\n" +
            "A creature trapped within the worm can take an action to make a Strength (Athletics) check against your spell save DC. If it succeeds, it is regurgitated and has the Prone condition in an unoccupied space within 10 feet of the worm.\n\n" +
            "As a Bonus Action, you can move the worm up to 30 feet.",
        scalingMd: "",
        imagePath: spellImgUrl("earthworm")
    },
    {
        slug: slugify("Form of Fire"),
        name: "Form of Fire",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "30-foot line",
        tags: ["Homebrew",  "Damage", "Shapechanging"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You become elemental fire, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. Until the spell ends, you gain the following benefits:\n\n" +
            "You are immune to fire damage.\n\n" +
            "You can move through the space of other creatures and ignore difficult terrain. The first time on your turn when you enter the space of another creature, it takes 1d6 fire damage.\n\n" +
            "If a creature within 5 feet hits you with a melee attack, it takes 1d6 fire damage.\n\n" +
            "You can use your action to create a line of fire 30 feet long and 5 feet wide extending from you in a direction of your choice. Each creature in the line must make a Dexterity saving throw. A creature takes 6d6 fire damage on a failed save, or half as much damage on a successful one.\n\n" +
            "During your turn, if you roll fire damage, you can maximize one die of the fire damage dealt.",
        scalingMd: "",
        imagePath: spellImgUrl("formoffire")
    },
    {
        slug: slugify("Form of Ice"),
        name: "Form of Ice",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "30-foot cone",
        tags: ["Homebrew",  "Damage", "Shapechanging"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Cold"],
        conditions: ["Difficult Terrain"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You freeze over, taking on a form of elemental ice. Until the spell ends, you gain the following benefits:\n\n" +
            "You are immune to cold damage.\n\n" +
            "You can move across difficult terrain created by ice or snow without spending extra movement.\n\n" +
            "The ground in a 10-foot radius around you is icy and is difficult terrain for creatures other than you. The radius moves with you.\n\n" +
            "You can use your action to create a 30-foot cone of freezing wind extending from your outstretched hand in a direction you choose. Each creature in the cone must make a  Constitution saving throw. A creature takes 4d8 cold damage on a failed save, or half as much damage on a successful one. A creature that fails its save against this effect has its speed halved until the start of your next turn.\n\n" +
            "During your turn, if you roll cold damage, you gain temporary hit points equal to one die rolled (your choice).",
        scalingMd: "",
        imagePath: spellImgUrl("formofice")
    },
    {
  slug: slugify("Final Offering"),
  name: "Final Offering",
  classes: ["Sorcerer", "Warlock", "Wizard"],
  spellLevel: 6,
  school: "Necromancy",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "Self",
  area: "60-foot emanation",
  tags: ["Homebrew", "Buff", "New"],
  saveRequired: "None",
  attackType: "None",
  damageTypes: ["Necrotic"],
  conditions: [],
  components: {
    verbal: false,
    somatic: true,
    material: true,
    materialText: "a sacrificial weapon"
  },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You pierce yourself with a sacrificial weapon, sending creeping death magic through your body. You instantly drop to 0 Hit Points and suffer 2 failed death saving throws, which last until you finish a Long Rest. Effects that would protect you from dropping to 0 Hit Points don’t trigger for this spell.\n\n" +
    "When you fall, you create a wave of necromantic energy in a 60-foot Emanation that carries your life force. Each ally in the emanation gains Temporary Hit Points equal to half the Hit Points you had when you cast this spell. While a creature has these Temporary Hit Points, it deals an extra 1d6 Necrotic damage whenever it hits with an attack.",
  scalingMd: "",
  imagePath: spellImgUrl("finaloffering")
},
{
  slug: slugify("Weave Entaglement"),
  name: "Weave Entaglement",
  classes: ["Bard", "Sorcerer", "Warlock"],
  spellLevel: 6,
  school: "Abjuration",
  castingTime: "1 action",
  duration: "1 minute",
  range: "90 feet",
  area: "20-foot-radius sphere",
  tags: ["Heliana's Guide to Monster Hunting", "Control", "New"],
  saveRequired: "None",
  attackType: "None",
  damageTypes: [],
  conditions: [],
  components: {
    verbal: true,
    somatic: true,
    material: true,
    materialText: "a piece of felt"
  },
  concentration: true,
  ritual: false,
  descriptionMd:
    "You imperceptibly tangle the threads of the Weave in a 20-foot-radius sphere centered on a point you can see within range. Whenever a creature attempts to cast a spell of level 1 or higher in the area, it must make an ability check using its spellcasting ability against your spell save DC. On a success, the spell is cast as normal. On a failure, the creature casts the spell as normal and also produces an additional effect. Roll 1d10 and consult the table below.\n\n" +
    "| 1d10 | Additional Effect |\n" +
    "|---|---|\n" +
    "| 1 | The spellcaster casts erupting earth. |\n" +
    "| 2 | The spellcaster casts phantasmal killer. |\n" +
    "| 3 | The spellcaster casts confusion. |\n" +
    "| 4 | The spellcaster casts fireball. |\n" +
    "| 5 | The spellcaster casts grease. |\n" +
    "| 6 | The spellcaster casts web. |\n" +
    "| 7 | The spellcaster casts darkness. |\n" +
    "| 8 | The spellcaster casts silence. |\n" +
    "| 9 | The spellcaster regains 2d10 Hit Points. |\n" +
    "| 10 | The spellcaster doesn’t expend a spell slot to cast its spell. |\n\n" +
    "Any additional spell cast this way targets the spellcaster or is centered on it, and the spellcaster has no control over that spell’s effects. Any saving throw DC for the additional spell equals the spellcaster’s spell save DC. If the additional spell normally requires Concentration, it doesn’t require Concentration when created by this spell.\n\n" +
    "At Initiative count 20 of each round, roll 1d20 for each ongoing additional effect created by this spell. On an 11 or higher, that effect ends.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 7th level or higher, the radius of the affected area increases by 10 feet for each slot level above 6.",
  imagePath: spellImgUrl("weaveentaglement")
},
    {
    slug: slugify("Bigby's Mantle"),
    name: "Bigby's Mantle",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    spellLevel: 6,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "1 minute",
    range: "Self",
    area: "Self; 15 feet (Crushing Grasp)",
    tags: ["Damage", "Control", "Buff", "Homebrew", "New"],
    saveRequired: "STR",
    attackType: "Melee Spell Attack",
    damageTypes: ["Force", "Bludgeoning"],
    conditions: ["Grappled", "Restrained", "Prone"],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a leather glove stitched with silver thread worth at least 50 gp"
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You wrap your body in a towering sheath of shimmering force that mimics your silhouette like a colossal, invisible giant. Your forearms and hands appear oversized and spectral, as if reality itself is wearing you like a gauntlet.\n\n" +
        "You gain 20 Temporary Hit Points and grow to Huge size.\n\n" +
        "While Huge, your reach increases by 5 feet, your melee attacks deal an extra 1d8 Force damage, and you have Advantage on Strength checks and Strength saving throws. Additionally, you gain the siege property (double damage to structures, objects, and Constructs) with all weapon attacks and Bigby’s techniques.\n\n" +
        "**Bigby’s Techniques.** When you cast the spell and as a Bonus Action on your later turns, you can channel the mantle into one of the following effects:\n\n" +
        "**Crushing Grasp.** One Huge or smaller creature you can see within 15 feet of you must succeed on a Strength saving throw or have the Grappled condition (escape DC equals your spell save DC). While Grappled in this way, the target also has the Restrained condition. While you have a creature Grappled in this way, you can’t use Crushing Grasp on another creature. When you take this Bonus Action again, you can instead cause the grasping force to crush the Grappled creature, dealing 4d6 + your spellcasting ability modifier Bludgeoning damage to it.\n\n" +
        "**Force Uppercut.** Make a melee spell attack against a creature within your reach. On a hit, the target takes 5d8 Force damage, and you either push it up to 10 feet away from you or knock it Prone (your choice).",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 6th level or higher, the Temporary Hit Points increase by 10 for each slot level above 5th, and the damage of Force Uppercut increases by 1d8 for each slot level above 5th.",
    imagePath: spellImgUrl("bigbysmantle")
},
    {
        slug: slugify("Form of Stone"),
        name: "Form of Stone",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "15-foot radius",
        tags: ["Homebrew", "Damage", "Shapechanging"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Piercing"],
        conditions: ["Difficult Terrain"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You become made of stone. Until the spell ends, you gain the following benefits:\n\n" +
            "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.\n\n" +
            "You can move across difficult terrain made of earth or stone without spending extra movement. You can move through solid earth or stone as if it were air and without destabilizing it, but you can't end your movement there. If you do so, you are ejected to the nearest unoccupied space, this spell ends, and you are stunned until the end of your next turn.\n\n" +
            "You can use your action to call forth spikes of stone to raise from the ground. All creatures of your choice within 15 feet of you must make a Dexterity saving throw. A creature takes 4d8 piercing damage on a failed save, or half as much on a successful one. Their space becomes difficult terrain either way.",
        scalingMd: "",
        imagePath: spellImgUrl("formofstone")
    },
    {
        slug: slugify("Form of Water"),
        name: "Form of Water",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "15-foot line",
        tags: ["Homebrew", "Damage", "Shapechanging"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You become a surge of elemental water. Until the spell ends,  you gain the following benefits:\n\n" +
            "You have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks.\n\n" +
            "You can move through the space of other creatures and ignore difficult terrain; the first time you move through a Large or smaller creature, it must succeed on a Strength saving throw or be knocked prone.\n\n" +
            "You can use your action to unleash a blast of water 15 feet long and 5 feet wide extending from you in a direction of your choice. Each creature in the line must make a Strength saving  throw. A creature takes 5d6 bludgeoning damage and is knocked prone on a failed save, or half as much and isn't knocked prone on a successful one.",
        scalingMd: "",
        imagePath: spellImgUrl("formofwater")
    },
    {
        slug: slugify("Ghastly Charge"),
        name: "Ghastly Charge",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "90-foot line",
        tags: ["Crooked Moon", "Damage", "Control",],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: ["Frightened", "Forced movement"],
        components: { verbal: true, somatic: true, material: true, materialText: "a scrap of a banner" },
        concentration: false,
        ritual: false,
        descriptionMd: "Spectral knights charge in a 90-foot line (20-ft wide). Each chosen creature makes a Wisdom save. On a failure: 5d12 Necrotic, it is Frightened until the start of your next turn, and must use its Reaction to move as far from you as it can by a safe route. On a success: half damage only.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage increases by 1d12 per slot level above 6th.",
        imagePath: spellImgUrl("ghastlycharge")
    },
    {
        slug: slugify("Heartseeker"),
        name: "Heartseeker",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "300 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Sangromancy", "Debuff", "Damage"],
        saveRequired: "Constitution",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Piercing", "Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a ruby worth at least 100 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "As part of casting, expend six Hit Point Dice or the spell fails. Make a ranged spell attack; on a hit, roll the expended dice and the target takes Piercing damage equal to the total. Until the spell ends, the first successful attack against the target after its turn ends each round is an automatic Critical Hit. At the end of each of its turns, the target makes a CON save: on a success, it takes 3d8 Necrotic and the spell ends; on a failure, the effect continues.",
        scalingMd: "",
        imagePath: spellImgUrl("heartseeker")
    },
    {
  slug: slugify("Lungburst"),
  name: "Lungburst",
  classes: ["Sorcerer", "Warlock", "Wizard"],
  spellLevel: 6,
  school: "Evocation",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "90 feet",
  area: "Single target",
  tags: ["Heliana's Guide to Monster Hunting", "Biomancy", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Thunder", "Necrotic"],
  conditions: ["Suffocating"],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You cause rapid, unpredictable changes in the internal air pressure of one creature you can see within range, rupturing its breathing apparatus. The target must make a Constitution saving throw. A creature holding its breath makes this saving throw with Disadvantage. On a failed save, the target takes 7d6 Thunder damage and 7d6 Necrotic damage, and it immediately begins suffocating. On a successful save, the target takes half as much damage only.\n\n" +
    "A creature suffocating in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success.\n\n" +
    "A creature that doesn’t need to breathe is immune to this spell. A greater restoration, heal, or wish spell can restore a creature’s ability to breathe and end this suffocation.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 7th level or higher, the Thunder damage and the Necrotic damage each increase by 1d6 for each slot level above 6.",
  imagePath: spellImgUrl("lungburst")
},
    {
        slug: slugify("Luminous Edict"),
        name: "Luminous Edict",
        classes: ["Cleric", "Druid", "Sorcerer"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "60-foot emanation",
        tags: ["Homebrew", "Healing", "Damage"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Radiant power ripples out in a 60-foot emanation. Hostile creatures make a Constitution save, taking 3d8 Necrotic damage on a failure, or half on a success. Allies within range instead heal 3d8 hit points.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both damage and healing increase by 1d8 per slot level above 6th.",
        imagePath: spellImgUrl("luminousedict")
    },
    {
        slug: slugify("Martial Transformation"),
        name: "Martial Transformation",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Exhaustion"],
        components: { verbal: true, somatic: true, material: true, materialText: "a few hairs from a bull" },
        concentration: false,
        ritual: false,
        descriptionMd: "You endow yourself with endurance and martial prowess fueled by magic. Until the spell ends, you can’t cast spells, and you gain the following benefits:\n\n" +
            "You gain 50 temporary hit points. If any of these remain when the spell ends, they are lost.\n\n" +
            "You have advantage on attack rolls that you make with simple and martial weapons.\n\n" +
            "When you hit a target with a weapon attack, that target takes an extra 2d12 force damage.\n\n" +
            "You have proficiency with all armor, shields, simple weapons, and martial weapons.\n\n" +
            "You have proficiency in Strength and Constitution saving throws.\n\n" +
            "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that gives you extra attacks.\n\n" +
            "You can conjure and equip (as part of the action used to cast the spell) and set of heavy or medium armor and any simple or martial weapon of your choice. These items have no strength requirements and are magical in nature though have the same properties as their nonmagical counterparts, vanishing when the spell ends.\n\n" +
            "Immediately after the spell ends, you must succeed on a DC 15 Constitution saving throw or suffer one level of exhaustion.",
        scalingMd: "",
        imagePath: spellImgUrl("martialtransformation")
    },
    {
        slug: slugify("Master of the Weave"),
        name: "Master of the Weave",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Divination",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "120-foot radius",
        tags: ["Homebrew", "Buff", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a mithral sewing needle worth 300+ gp, which the spell consumes" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You sense magic within 120 feet, seeing faint auras and learning schools. You gain 13 threads you can spend (no action unless noted):\n\n• Enhance: When you cast a spell, expend 1 thread to treat it as if cast using a slot 1 level higher and gain Temporary HP equal to 1 + the spell’s level.\n• Counter: As a Reaction when a creature you can see casts a spell, expend 1 thread to interrupt it. If the spell is 3rd level or lower, it fails. If 4th+, make a check using your spellcasting ability (DC 10 + spell level); on a success it fails.\n• Amplify: When your spell heals or damages, expend up to 6 threads to increase the effect on one creature by 4×threads.\n\nYou lose any remaining threads when the spell ends; if you spend them all, the spell ends immediately.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Gain +2 threads per slot level above 6th.",
        imagePath: spellImgUrl("masteroftheweave")
    },
    {
        slug: slugify("Melting Curse"),
        name: "Melting Curse",
        classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "100 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a vial of quicksilver" },
        concentration: false,
        ritual: false,
        descriptionMd: "You target a creature and a metal object held or worn by that creature you can see within range. The creature makes a Dexterity saving throw. On a failed save, the creature takes 5d8 Fire damage and the targeted object melts and oozes to the ground, where it returns to its normal shape and temperature. If the object is magical, the creature has Advantage on the saving throw.\n\n" +
            "If the creature tries to retrieve or otherwise touch the object for the duration, the object heats and melts, and the creature takes 5d8 Fire damage. The object returns to normal once the creature is no longer touching it or the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 6th.",
        imagePath: spellImgUrl("meltingcurse")
    },
    {
        slug: slugify("Mental Prison"),
        name: "Mental Prison",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Xanathar's Guide to Everything", "Damage", "Control"],
        saveRequired: "Intelligence",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: ["Restrained (illusory cell; see text)"],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You attempt to bind a creature within an illusory cell that only it perceives. One creature you can see within range must make an Intelligence saving throw. The target succeeds automatically if it is immune to being Charmed.\n\n" +
            "On a successful save, the target takes 5d10 Psychic damage, and the spell ends. On a failed save, the target takes 5d10 Psychic damage, and you make the area immediately around the target’s space appear dangerous to it in some way. You might cause the target to perceive itself as being surrounded by fire, floating razors, or hideous maws filled with dripping teeth.\n\n" +
            "Whatever form the illusion takes, the target can’t see or hear anything beyond it and is Restrained for the spell’s duration even if they have Truesight or Blindsight as the mental image enters their brain. If the target is moved out of the illusion, makes a melee attack through it, or reaches any part of its body through it, the target takes 10d10 Psychic damage, and the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both the initial and trigger damage increase by 1d10 per slot level above 6th.",
        imagePath: spellImgUrl("mentalprison")
    },
    {
        slug: slugify("Otherworldly Guise"),
        name: "Otherworldly Guise",
        classes: ["Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Tasha's Cauldron of Everything", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an object engraved with a symbol of the Outer Planes, worth at least 500 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "Uttering an incantation, you draw on the magic of the Lower Planes or Upper Planes (your choice) to transform yourself. You gain the following benefits until the spell ends:\n\n" +
            "You are immune to fire and poison damage (Lower Planes) or radiant and necrotic damage (Upper Planes).\n\n" +
            "You are immune to the poisoned condition (Lower Planes) or the charmed condition (Upper Planes).\n\n" +
            "Spectral wings appear on your back, giving you a flying speed of 40 feet.\n\n" +
            "You have a +2 bonus to AC.\n\n" +
            "All your weapon attacks are magical, and when you make a weapon attack, you can use your spellcasting ability modifier, instead of Strength or Dexterity, for the attack and damage rolls.\n\n" +
            "You can attack twice, instead of once, when you take the Attack action on your turn. You ignore this benefit if you already have a feature, like Extra Attack, that lets you attack more than once when you take the Attack action on your turn.",
        scalingMd: "",
        imagePath: spellImgUrl("otherworldlyguise"),
    },
    {
        slug: slugify("Platinum Lances"),
        name: "Platinum Lances",
        classes: ["Cleric", "Sorcerer",],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "10-foot radius",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You call down four radiant lances at points you can see within range. Each creature in a 10-ft-radius, 100-ft-high cylinder makes a Dexterity save, taking 8d8 Radiant damage and being knocked prone on a fail, or half damage and not prone on a success. A creature in overlapping areas is affected only once.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 6th.",
        imagePath: spellImgUrl("platinumlances"),
    },
    {
        slug: slugify("Platinum Shield"),
        name: "Platinum Shield",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Fizban's Treasury of Dragons", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a platinum-plated dragon scale worth at least 500 gp",
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A silvery field encases a creature (shedding dim light 5 ft). While protected: Half Cover; Resistance to Acid, Cold, Fire, Lightning, Poison; and Evasion (Dex-save half-damage effects: no damage on a success, half on a failure). As a bonus action on later turns, move the field to another creature within 60 ft of it.",
        scalingMd: "",
        imagePath: spellImgUrl("platinumshield"),
    },
    {
        slug: slugify("Primordial Ward"),
        name: "Primordial Ward",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Touch",
        area: "1 creature",
        tags: ["Elemental Evil Player's Companion", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "The target gains resistance to Acid, Cold, Fire, Lightning, and Thunder. When it takes one of those damage types, it may use its reaction to gain immunity to that type (including the triggering damage) until the end of your next turn; if it does, the resistances end and the spell then ends at that time.",
        scalingMd: "",
        imagePath: spellImgUrl("primordialward"),
    },
    {
        slug: slugify("Spectral Warband"),
        name: "Spectral Warband",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "60-foot radius",
        tags: ["Homebrew", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create an illusory duplicate for each chosen ally within 60 ft. Duplicates move and act with their originals, making it hard to track the real one. When an ally with a duplicate deals damage, it deals an additional 1d6 Psychic. Each time a creature targets an affected ally with an attack, roll a d6; on 3+, the duplicate is targeted instead. If an attack hits a duplicate, it is destroyed. A creature that can’t see or perceives illusions as false (e.g., truesight) is unaffected.",
        scalingMd: "",
        imagePath: spellImgUrl("spectralwarband"),
    },
    {
        slug: slugify("Arcane Gate"),
        name: "Arcane Gate",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "500 feet",
        area: "Two linked portals (Large spaces)",
        tags: ["Player's Handbook", "Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create two linked Large circular portals: one within 10 feet of you and one within range. Each ring hovers inches above the ground and is open on only one side (your choice). Entering the open side of one portal exits from the open side of the other as if adjacent. As a Bonus Action, you can change the facing of the open sides.",
        scalingMd: "",
        imagePath: spellImgUrl("arcanegate")
    },
    {
        slug: slugify("Blade Barrier"),
        name: "Blade Barrier",
        classes: ["Cleric"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "90 feet",
        area: "100-foot line",
        tags: ["Player's Handbook","Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A wall of whirling blades appears, providing Three-Quarters Cover and making its space Difficult Terrain. When the wall appears, a creature in its space makes a Dexterity save, taking 6d10 Force on a fail or half on a success. A creature also saves when it enters the wall’s space or ends its turn there (once per turn).",
        scalingMd: "",
        imagePath: spellImgUrl("bladebarrier")
    },
    {
        slug: slugify("Chain Lightning"),
        name: "Chain Lightning",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "30-foot radius",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "three silver pins" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Hurl a bolt at a target you can see; three more bolts leap to up to three other targets within 30 feet of the first. Each target makes a Dexterity save, taking 10d8 Lightning on a fail or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** One additional bolt leaps to another target per slot level above 6.",
        imagePath: spellImgUrl("chainlightning")
    },
    {
        slug: slugify("Circle of Death"),
        name: "Circle of Death",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "60-foot-radius sphere",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "powder of a crushed black pearl worth 500+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Negative energy ripples out in a 60-foot-radius sphere from a point you choose within range. Creatures in the area make a Constitution save, taking 8d8 Necrotic on a fail or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 2d8 per slot level above 6.",
        imagePath: spellImgUrl("circleofdeath")
    },
    {
        slug: slugify("Conjure Fey"),
        name: "Conjure Fey",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "60-foot radius",
        tags: ["Player's Handbook", "Summoning", "Damage", "Debuff"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Psychic"],
        conditions: ["Frightened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Conjure a Medium fey spirit in an unoccupied space you can see. When it appears, make a melee spell attack against a creature within 5 feet of it: on a hit, it takes 3d12 + your spellcasting ability modifier Psychic, and is Frightened until the start of your next turn (you and the spirit are the fear sources). As a Bonus Action on later turns, you can teleport the spirit 30 ft. and repeat the attack.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The initial/bonus-attack damage increases by 1d12 per slot level above 6.",
        imagePath: spellImgUrl("conjurefey")
    },
    {
        slug: slugify("Contingency"),
        name: "Contingency",
        classes: ["Wizard"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "10 minutes",
        duration: "10 days",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a gem-encrusted statuette of yourself worth 1,500+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Cast a level 5 or lower spell (casting time 1 action, targets you) as a contingent spell alongside contingency, expending both slots. Define a trigger; when it occurs for the first time within 10 days, the contingent spell immediately takes effect on you, then contingency ends. You can have only one contingency active; it ends if its material component leaves your person.",
        scalingMd: "",
        imagePath: spellImgUrl("contingency")
    },
    {
        slug: slugify("Create Undead"),
        name: "Create Undead",
        classes: ["Cleric", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "10 feet",
        area: "1 corpse",
        tags: ["Player's Handbook", "Creation", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "one black onyx (150+ GP) per corpse" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Cast at night to animate up to three Medium or Small Humanoid corpses as Ghouls under your control (see stat blocks). As a Bonus Action, issue mental commands to any creatures made by this spell within 120 ft; uncommanded, they Dodge and avoid harm. Control lasts 24 hours; re-cast on them before it ends to reassert control (affects up to the number your slot allows).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Slot 7: animate/reassert 4 Ghouls. Slot 8: 5 Ghouls or 2 Ghasts/Wights. Slot 9: 6 Ghouls, 3 Ghasts/Wights, or 2 Mummies.",
        imagePath: spellImgUrl("createundead")
    },
    {
        slug: slugify("Disintegrate"),
        name: "Disintegrate",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a lodestone and dust" },
        concentration: false,
        ritual: false,
        descriptionMd: "You launch a green ray at a target you can see within range. The target can be a creature, a nonmagical object, or a creation of magical force, such as the wall created by Wall of Force.\n\n" +
            "A creature targeted by this spell makes a Dexterity saving throw. On a failed save, the target takes 10d6 + 40 Force damage. If this damage reduces it to 0 Hit Points, it and everything nonmagical it is wearing and carrying are disintegrated into gray dust. The target can be revived only by a True Resurrection or a Wish spell.\n\n" +
            "This spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If such a target is Huge or larger, this spell disintegrates a 10-foot-Cube portion of it.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 3d6 per slot level above 6.",
        imagePath: spellImgUrl("disintegrate")
    },
    {
        slug: slugify("Drawmij's Instant Summons"),
        name: "Drawmij's Instant Summons",
        classes: ["Wizard"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "Until dispelled",
        range: "Touch",
        area: "1 object ≤ 10 lb and ≤ 6 ft",
        tags: ["Player's Handbook", "Teleportation", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a sapphire worth 1,000+ GP" },
        concentration: false,
        ritual: true,
        descriptionMd: "You touch the sapphire used in the casting and an object weighing 10 pounds or less whose longest dimension is 6 feet or less. The spell leaves an Invisible mark on that object and invisibly inscribes the object’s name on the sapphire. Each time you cast this spell, you must use a different sapphire.\n\n" +
            "Thereafter, you can take a Magic action to speak the object’s name and crush the sapphire. The object instantly appears in your hand regardless of physical or planar distances, and the spell ends.\n\n" +
            "If another creature is holding or carrying the object, crushing the sapphire doesn’t transport it, but instead you learn who that creature is and where that creature is currently located.",
        scalingMd: "",
        imagePath: spellImgUrl("instantsummons")
    },
    {
        slug: slugify("Eyebite"),
        name: "Eyebite",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "1 creature",
        tags: ["Player's Handbook", "Debuff"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: ["Unconscious", "Frightened", "Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "For the duration, your eyes become an inky void. One creature of your choice within 60 feet of you that you can see must succeed on a Wisdom saving throw or be affected by one of the following effects of your choice for the duration.\n\n" +
            "On each of your turns until the spell ends, you can take a Magic action to target another creature but can’t target a creature again if it has succeeded on a save against this casting of the spell.\n\n" +
            "**Asleep.** The target has the Unconscious condition. It wakes up if it takes any damage or if another creature takes an action to shake it awake.\n\n" +
            "**Panicked.** The target has the Frightened condition. On each of its turns, the Frightened target must take the Dash action and move away from you by the safest and shortest route available. If the target moves to a space at least 60 feet away from you where it can’t see you, this effect ends.\n\n" +
            "**Sickened.** The target has the Poisoned condition.",
        scalingMd: "",
        imagePath: spellImgUrl("eyebite")
    },
    {
        slug: slugify("Find the Path"),
        name: "Find the Path",
        classes: ["Bard", "Cleric", "Druid"],
        spellLevel: 6,
        school: "Divination",
        castingTime: "1 minute",
        duration: "1 day",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "divination tools (cards, runes, etc.) worth 100+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Name a familiar location; you sense the most direct physical route to it while on the same plane. For the duration, you know distance and direction, and at each choice of paths, which is most direct. Fails if the destination is on another plane, moving, or unspecific.",
        scalingMd: "",
        imagePath: spellImgUrl("findthepath")
    },
    {
        slug: slugify("Flesh to Stone"),
        name: "Flesh to Stone",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained", "Petrified"],
        components: { verbal: true, somatic: true, material: true, materialText: "a cockatrice feather" },
        concentration: true,
        ritual: false,
        descriptionMd: "You attempt to turn one creature that you can see within range into stone. The target makes a Constitution saving throw. On a failed save, it has the Restrained condition for the duration. On a successful save, its Speed is 0 until the start of your next turn. Constructs automatically succeed on the save.\n\n" +
            "A Restrained target makes another Constitution saving throw at the end of each of its turns. If it successfully saves against this spell three times, the spell ends. If it fails its saves three times, it is turned to stone and has the Petrified condition for the duration. The successes and failures needn’t be consecutive; keep track of both until the target collects three of a kind.\n\n" +
            "If you maintain your Concentration on this spell for the entire possible duration, the target is Petrified until the condition is ended by Greater Restoration or similar magic.",
        scalingMd: "",
        imagePath: spellImgUrl("fleshtostone")
    },
    {
        slug: slugify("Forbiddance"),
        name: "Forbiddance",
        classes: ["Cleric"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "10 minutes",
        duration: "1 day",
        range: "Touch",
        area: "40,000 sq ft",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Radiant", "Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "ruby dust worth 1,000+ GP" },
        concentration: false,
        ritual: true,
        descriptionMd: "You create a ward against magical travel that protects up to 40,000 square feet of floor space to a height of 30 feet above the floor. For the duration, creatures can’t teleport into the area or use portals, such as those created by the Gate spell, to enter the area. The spell proofs the area against planar travel, and therefore prevents creatures from accessing the area by way of the Astral Plane, the Ethereal Plane, the Feywild, the Shadowfell, or the Plane Shift spell.\n\n" +
            "In addition, the spell damages types of creatures that you choose when you cast it. Choose one or more of the following: Aberrations, Celestials, Elementals, Fey, Fiends, and Undead. When a creature of a chosen type enters the spell’s area for the first time on a turn or ends its turn there, the creature takes 5d10 Radiant or Necrotic damage (your choice when you cast this spell).\n\n" +
            "You can designate a password when you cast the spell. A creature that speaks the password as it enters the area takes no damage from the spell.\n\n" +
            "The spell’s area can’t overlap with the area of another Forbiddance spell. If you cast Forbiddance every day for 30 days in the same location, the spell lasts until it is dispelled, and the Material components are consumed on the last casting.",
        scalingMd:
            "Casting daily for 30 days in the same location makes the effect permanent (components consumed on the last casting).",
        imagePath: spellImgUrl("forbiddance")
    },
    {
        slug: slugify("Globe of Invulnerability"),
        name: "Globe of Invulnerability",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "10-foot emanation",
        tags: ["Player's Handbook", "Negation", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a glass bead" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "An immobile shimmering barrier surrounds you in a 10-foot emanation. Spells of level 5 or lower cast from outside the barrier can’t affect anything within it, and areas of effect from such spells exclude the interior.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The barrier blocks spells one level higher per slot level above 6.",
        imagePath: spellImgUrl("globeofinvulnerability")
    },
    {
        slug: slugify("Guards and Wards"),
        name: "Guards and Wards",
        classes: ["Bard", "Wizard"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "1 hour",
        duration: "24 hours",
        range: "Touch",
        area: "2,500 sq ft",
        tags: ["Player's Handbook", "Control", "Warding", "Trap"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a silver rod worth 10+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a ward that protects up to 2,500 square feet of floor space. The warded area can be up to 20 feet tall, and you shape it as one 50-foot square, one hundred 5-foot squares that are contiguous, or twenty-five 10-foot squares that are contiguous.\n\n" +
            "When you cast this spell, you can specify individuals that are unaffected by the spell’s effects. You can also specify a password that, when spoken aloud within 5 feet of the warded area, makes the speaker immune to its effects.\n\n" +
            "The spell creates the effects below within the warded area. Dispel Magic has no effect on Guards and Wards itself, but each of the following effects can be dispelled. If all four are dispelled, Guards and Wards ends. If you cast the spell every day for 365 days on the same area, the spell thereafter lasts until all its effects are dispelled.\n\n" +
            "**Corridors.** Fog fills all the warded corridors, making them Heavily Obscured. In addition, at each intersection or branching passage offering a choice of direction, there is a 50 percent chance that a creature other than you believes it is going in the opposite direction from the one it chooses.\n\n" +
            "**Doors.** All doors in the warded area are magically locked, as if sealed by the Arcane Lock spell. In addition, you can cover up to ten doors with an illusion to make them appear as plain sections of wall.\n\n" +
            "**Stairs.** Webs fill all stairs in the warded area from top to bottom, as in the Web spell. These strands regrow in 10 minutes if they are destroyed while Guards and Wards lasts.\n\n" +
            "**Other Spell Effect.** Place one of the following magical effects within the warded area:\n\n" +
            "Dancing Lights in four corridors, with a simple program that the lights repeat as long as Guards and Wards lasts\n" +
            "Magic Mouth in two locations\n" +
            "Stinking Cloud in two locations (the vapors return within 10 minutes if dispersed while Guards and Wards lasts)\n" +
            "Gust of Wind in one corridor or room (the wind blows continuously while the spell lasts)\n" +
            "Suggestion in one 5-foot square; any creature that enters that square receives the suggestion mentally",
        scalingMd:
            "Cast daily for 365 days on the same area to make it last until dispelled.",
        imagePath: spellImgUrl("guardsandwards")
    },
    {
        slug: slugify("Harm"),
        name: "Harm",
        classes: ["Cleric"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A creature makes a Constitution save, taking 14d6 Necrotic on a fail or half on a success. On a failed save, its Hit Point maximum is reduced by the Necrotic damage taken (can’t reduce below 1).",
        scalingMd: "",
        imagePath: spellImgUrl("harm")
    },
    {
        slug: slugify("Heal"),
        name: "Heal",
        classes: ["Cleric", "Druid"],
        spellLevel: 6,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Healing"],
        conditions: ["Blinded", "Deafened", "Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Positive energy restores 70 HP to a creature you can see within range and ends the Blinded, Deafened, and Poisoned conditions on the target.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Healing increases by 10 per slot level above 6.",
        imagePath: spellImgUrl("heal")
    },
    {
        slug: slugify("Heroes' Feast"),
        name: "Heroes' Feast",
        classes: ["Bard", "Cleric", "Druid"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "10 minutes",
        duration: "Instantaneous",
        range: "Self",
        area: "12 creatures",
        tags: ["Player's Handbook", "Buff", "Social"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Poisoned", "Frightened"],
        components: { verbal: true, somatic: true, material: true, materialText: "a gem-encrusted bowl worth 1,000+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Conjure a feast in a 10-ft cube. Up to 12 creatures partake over 1 hour; after eating, for 24 hours each gains: Resistance to Poison damage; Immunity to Frightened and Poisoned; and +2d10 to Hit Point maximum and gains that many HP.",
        scalingMd: "",
        imagePath: spellImgUrl("heroesfeast")
    },
    {
        slug: slugify("Magic Jar"),
        name: "Magic Jar",
        classes: ["Wizard"],
        spellLevel: 6,
        school: "Necromancy",
        castingTime: "1 minute",
        duration: "Until dispelled",
        range: "Self",
        area: "Special",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: ["Incapacitated"],
        components: { verbal: true, somatic: true, material: true, materialText: "a gem, crystal, or reliquary worth 500+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd: "Your body falls into a catatonic state as your soul leaves it and enters the container you used for the spell’s Material component. While your soul inhabits the container, you are aware of your surroundings as if you were in the container’s space. You can’t move or take Reactions. The only action you can take is to project your soul up to 100 feet out of the container, either returning to your living body (and ending the spell) or attempting to possess a Humanoid’s body.\n\n" +
            "You can attempt to possess any Humanoid within 100 feet of you that you can see (creatures warded by a Protection from Evil and Good or Magic Circle spell can’t be possessed). The target makes a Charisma saving throw. On a failed save, your soul enters the target’s body, and the target’s soul becomes trapped in the container. On a successful save, the target resists your efforts to possess it, and you can’t attempt to possess it again for 24 hours.\n\n" +
            "Once you possess a creature’s body, you control it. Your Hit Points, Hit Point Dice, Strength, Dexterity, Constitution, Speed, and senses are replaced by the creature’s. You otherwise keep your game statistics.\n\n" +
            "Meanwhile, the possessed creature’s soul can perceive from the container using its own senses, but it can’t move and it is Incapacitated.\n\n" +
            "While possessing a body, you can take a Magic action to return from the host body to the container if it is within 100 feet of you, returning the host creature’s soul to its body. If the host body dies while you’re in it, the creature dies, and you make a Charisma saving throw against your own spellcasting DC. On a success, you return to the container if it is within 100 feet of you. Otherwise, you die.\n\n" +
            "If the container is destroyed or the spell ends, your soul returns to your body. If your body is more than 100 feet away from you or if your body is dead, you die. If another creature’s soul is in the container when it is destroyed, the creature’s soul returns to its body if the body is alive and within 100 feet. Otherwise, that creature dies.\n\n" +
            "When the spell ends, the container is destroyed.",
        scalingMd: "",
        imagePath: spellImgUrl("magicjar")
    },
    {
        slug: slugify("Mass Suggestion"),
        name: "Mass Suggestion",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "24 hours",
        range: "Self",
        area: "60-foot radius",
        tags: ["Homebrew", "Control", "Social"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: false, material: true, materialText: "a snake’s tongue" },
        concentration: false,
        ritual: false,
        descriptionMd: "You suggest a course of activity—described in no more than 25 words—to twelve or fewer creatures you can see within range that can hear and understand you. The suggestion must sound achievable and not involve anything that would obviously deal damage to any of the targets or their allies. For example, you could say, “Walk to the village down that road, and help the villagers there harvest crops until sunset.” Or you could say, “Now is not the time for violence. Drop your weapons, and dance! Stop in an hour.”\n\n" +
            "Each target must succeed on a Wisdom saving throw or have the Charmed condition for the duration or until you or your allies deal damage to the target. Each Charmed target pursues the suggestion to the best of its ability. The suggested activity can continue for the entire duration, but if the suggested activity can be completed in a shorter time, the spell ends for a target upon completing it.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Duration: slot 7 (10 days), 8 (30 days), 9 (366 days).",
        imagePath: spellImgUrl("masssuggestion")
    },
    {
        slug: slugify("Move Earth"),
        name: "Move Earth",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "2 hours",
        range: "120 feet",
        area: "40-foot square",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature shovel" },
        concentration: true,
        ritual: false,
        descriptionMd: "Choose an area of terrain no larger than 40 feet on a side within range. You can reshape dirt, sand, or clay in the area in any manner you choose for the duration. You can raise or lower the area’s elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can’t exceed half the area’s largest dimension. For example, if you affect a 40-foot square, you can create a pillar up to 20 feet high, raise or lower the square’s elevation by up to 20 feet, dig a trench up to 20 feet deep, and so on. It takes 10 minutes for these changes to complete. Because the terrain’s transformation occurs slowly, creatures in the area can’t usually be trapped or injured by the ground’s movement.\n\n" +
            "At the end of every 10 minutes you spend concentrating on the spell, you can choose a new area of terrain to affect within range.\n\n" +
            "This spell can’t manipulate natural stone or stone construction. Rocks and structures shift to accommodate the new terrain. If the way you shape the terrain would make a structure unstable, it might collapse.\n\n" +
            "Similarly, this spell doesn’t directly affect plant growth. The moved earth carries any plants along with it.",
        scalingMd: "",
        imagePath: spellImgUrl("moveearth")
    },
    {
        slug: slugify("Otiluke's Freezing Sphere"),
        name: "Otiluke's Freezing Sphere",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "300 feet",
        area: "60-foot-radius sphere",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Cold"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature crystal sphere" },
        concentration: false,
        ritual: false,
        descriptionMd: "A frigid globe streaks from you to a point of your choice within range, where it explodes in a 60-foot-radius Sphere. Each creature in that area makes a Constitution saving throw, taking 10d6 Cold damage on failed save or half as much damage on a successful one.\n\n" +
            "If the globe strikes a body of water, it freezes the water to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice and have the Restrained condition. A trapped creature can take an action to make a Strength (Athletics) check against your spell save DC to break free.\n\n" +
            "You can refrain from firing the globe after completing the spell’s casting. If you do so, a globe about the size of a sling bullet, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling’s normal range). It shatters on impact, with the same effect as a normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn’t already shattered, it explodes.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 6.",
        imagePath: spellImgUrl("otilukesfreezingsphere")
    },
    {
        slug: slugify("Otto's Irresistible Dance"),
        name: "Otto's Irresistible Dance",
        classes: ["Bard", "Wizard"],
        spellLevel: 6,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control", "Debuff"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "One creature that you can see within range must make a Wisdom saving throw. On a successful save, the target dances comically until the end of its next turn, during which it must spend all its movement to dance in place.\n\n" +
            "On a failed save, the target has the Charmed condition for the duration. While Charmed, the target dances comically, must use all its movement to dance in place, and has Disadvantage on Dexterity saving throws and attack rolls, and other creatures have Advantage on attack rolls against it. On each of its turns, the target can take an action to collect itself and repeat the save, ending the spell on itself on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("ottosirresistibledance")
    },
    {
        slug: slugify("Planar Ally"),
        name: "Planar Ally",
        classes: ["Cleric"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "10 minutes",
        duration: "Instantaneous",
        range: "60 feet",
        area: "60-foot radius",
        tags: ["Player's Handbook", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Beseech a known otherworldly entity to send aid: a Celestial, Elemental, or Fiend appears within range. The creature isn’t compelled; you must negotiate payment (typical rates: 100 GP/minute, 1,000 GP/hour, 10,000 GP/day, up to 10 days; DM may adjust). If terms are agreed, it performs the task and then returns to its home plane, reporting back if possible. If no agreement is reached, it departs immediately.",
        scalingMd: "",
        imagePath: spellImgUrl("planarally")
    },
    {
        slug: slugify("Programmed Illusion"),
        name: "Programmed Illusion",
        classes: ["Bard", "Wizard"],
        spellLevel: 6,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Until dispelled",
        range: "120 feet",
        area: "Illusion up to a 30-foot cube",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "jade dust worth 25+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create a scripted illusion (visual + audible) up to a 30-foot cube, imperceptible until a trigger occurs (based on visual/audible events within 30 feet). When triggered, the illusion performs for up to 5 minutes, then vanishes and lies dormant for 10 minutes before it can trigger again. Physical interaction reveals the image; a creature can take the Study action for an Intelligence (Investigation) check vs. your save DC to discern it, seeing through it and hearing its sounds as hollow thereafter.",
        scalingMd: "",
        imagePath: spellImgUrl("programmedillusion")
    },
    {
    slug: slugify("Scatter"),
    name: "Scatter",
    classes: ["Sorcerer", "Warlock", "Wizard"],
    spellLevel: 6,
    school: "Conjuration",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "120 feet",
    area: "30-foot radius",
    tags: ["Xanathar's Guide to Everything", "Teleportation", "Control"],
    saveRequired: "Wisdom",
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
        "The air quivers around up to five creatures of your choice that you can see within range. An unwilling creature must succeed on a Wisdom saving throw to resist this spell. You teleport each affected target to an unoccupied space that you can see within 120 feet of you. That space must be on the ground or on a floor.",
    scalingMd: "",
    imagePath: spellImgUrl("scatter")
},
    {
        slug: slugify("Summon Fiend"),
        name: "Summon Fiend",
        classes: ["Warlock", "Wizard"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "1 fiendish spirit (Demon, Devil, or Yugoloth)",
        tags: ["Player's Handbook", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: true, materialText: "a bloody vial worth 600+ GP" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a fiendish spirit. It manifests in an unoccupied space that you can see within range and uses the Fiendish Spirit stat block. When you cast the spell, choose Demon, Devil, or Yugoloth. The creature resembles a Fiend of the chosen type, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>FIENDISH SPIRIT</h2>
    <hr>
    <p><em>Large Fiend, Neutral</em></p>

    <p>
      <strong>AC</strong> 12 + the spell’s level<br>
      <strong>HP</strong> 50 <em>(Demon only)</em> or 40 <em>(Devil only)</em> or 60 <em>(Yugoloth only)</em> + 15 for each spell level above 6<br>
      <strong>Speed</strong> 40 ft.; Climb 40 ft. <em>(Demon only)</em>; Fly 60 ft. <em>(Devil only)</em>
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 13</td><td>+1</td><td>+1</td>
          <td><strong>INT</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>WIS</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 15</td><td>+2</td><td>+2</td>
          <td><strong>CHA</strong> 16</td><td>+3</td><td>+3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Resistances</strong> Fire<br>
      <strong>Immunities</strong> Poison; <a href="#">Poisoned</a><br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft.; Passive Perception 10<br>
      <strong>Languages</strong> Abyssal, Infernal; telepathy 60 ft.<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Death Throes (Demon Only).</strong>
      When the spirit drops to 0 Hit Points or the spell ends, the spirit explodes.
      <em>Dexterity Saving Throw:</em> DC equals your spell save DC, each creature in a 10-foot
      <a href="#">Emanation</a> originating from the spirit.
      <em>Failure:</em> 2d10 + the spell’s level Fire damage.
      <em>Success:</em> Half damage.</p>

    <p><strong>Devil’s Sight (Devil Only).</strong>
      Magical <a href="#">Darkness</a> doesn’t impede the spirit’s <a href="#">Darkvision</a>.</p>

    <p><strong>Magic Resistance.</strong>
      The spirit has Advantage on saving throws against spells and other magical effects.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong>
      The spirit makes a number of attacks equal to half this spell’s level (round down).</p>

    <p><strong>Bite (Demon Only).</strong>
      <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
      <em>Hit:</em> 1d12 + 3 + the spell’s level Necrotic damage.</p>

    <p><strong>Claws (Yugoloth Only).</strong>
      <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
      <em>Hit:</em> 1d8 + 3 + the spell’s level Slashing damage.
      Immediately after the attack hits or misses, the spirit can teleport up to 30 ft. to an unoccupied space it can see.</p>

    <p><strong>Fiery Strike (Devil Only).</strong>
      <em>Melee or Ranged Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft. or range 150 ft.
      <em>Hit:</em> 2d6 + 3 + the spell’s level Fire damage.</p>
  </div>
`
        ,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the slot’s level for the stat block; HP also increases by the spell’s rules.",
        imagePath: spellImgUrl("summonfiend")
    },
    {
        slug: slugify("Sunbeam"),
        name: "Sunbeam",
        classes: ["Cleric", "Druid", "Sorcerer", "Wizard"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "60-foot line",
        tags: ["Player's Handbook", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a magnifying glass" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Project a 5-ft-wide, 60-ft line of searing light. Creatures in the line make a Constitution save, taking 6d8 Radiant and becoming Blinded until the start of your next turn on a fail (half damage only on a success). Until the spell ends, you can take a Magic action each turn to create a new line. A radiant mote hovers above you, shedding sunlight (Bright 30 ft, Dim +30 ft).",
        scalingMd: "",
        imagePath: spellImgUrl("sunbeam")
    },
    {
        slug: slugify("Tasha's Bubbling Cauldron"),
        name: "Tasha's Bubbling Cauldron",
        classes: ["Warlock", "Wizard"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "5 feet",
        area: "Stationary cauldron; potions equal to spellcasting ability modifier",
        tags: ["Player's Handbook",],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a gilded ladle worth 500+ GP" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Conjure a claw-footed cauldron that can’t be moved and vanishes with the spell. Its liquid duplicates a Common or Uncommon potion you choose (e.g., potion of healing). As a Bonus Action, you or an ally can draw a potion (in a temporary vial). The cauldron can produce potions equal to your spellcasting ability modifier (min 1); when the last is drawn, the cauldron disappears and the spell ends. Unused potions vanish when you cast this spell again.",
        scalingMd: "",
        imagePath: spellImgUrl("tashasbubblingcauldron")
    },
    {
        slug: slugify("Transport via Plants"),
        name: "Transport via Plants",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "10 feet",
        area: "Link between two Large or larger plants",
        tags: ["Player's Handbook", "Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Link a Large or larger inanimate plant within range to another plant on the same plane that you have seen or touched. For the duration, creatures can step into the first plant and exit from the destination plant, spending 5 feet of movement.",
        scalingMd: "",
        imagePath: spellImgUrl("transportviaplants")
    },
    {
        slug: slugify("True Seeing"),
        name: "True Seeing",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 6,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Detection"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "mushroom powder worth 25+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A willing creature gains Truesight 120 ft. for the duration.",
        scalingMd: "",
        imagePath: spellImgUrl("trueseeing")
    },
    {
        slug: slugify("Wall of Ice"),
        name: "Wall of Ice",
        classes: ["Wizard"],
        spellLevel: 6,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "120 feet",
        area: "10-foot sphere",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Cold"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of quartz" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a globe with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panel. In any form, the wall is 1 foot thick and lasts for the duration.\n\n" +
            "If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (you choose which side) and makes a Dexterity saving throw, taking 10d6 Cold damage on a failed save or half as much damage on a successful one.\n\n" +
            "The wall is an object that can be damaged and thus breached. It has AC 12 and 30 Hit Points per 10-foot section, and it has Immunity to Cold, Poison, and Psychic damage and Vulnerability to Fire damage. Reducing a 10-foot section of wall to 0 Hit Points destroys it and leaves behind a sheet of frigid air in the space the wall occupied.\n\n" +
            "A creature moving through the sheet of frigid air for the first time on a turn makes a Constitution saving throw, taking 5d6 Cold damage on a failed save or half as much damage on a successful one.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** On creation, damage increases by 2d6, and the frigid air’s damage increases by 1d6 per slot level above 6.",
        imagePath: spellImgUrl("wallofice")
    },
    {
        slug: slugify("Wall of Thorns"),
        name: "Wall of Thorns",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "120 feet",
        area: "60-foot line",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Piercing", "Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a handful of thorns" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a wall of tangled brush bristling with needle-sharp thorns. The wall appears within range on a solid surface and lasts for the duration. You choose to make the wall up to 60 feet long, 10 feet high, and 5 feet thick or a circle that has a 20-foot diameter and is up to 20 feet high and 5 feet thick. The wall blocks line of sight.\n\n" +
            "When the wall appears, each creature in its area makes a Dexterity saving throw, taking 7d8 Piercing damage on a failed save or half as much damage on a successful one.\n\n" +
            "A creature can move through the wall, albeit slowly and painfully. For every 1 foot a creature moves through the wall, it must spend 4 feet of movement. Furthermore, the first time a creature enters a space in the wall on a turn or ends its turn there, the creature makes a Dexterity saving throw, taking 7d8 Slashing damage on a failed save or half as much damage on a successful one. A creature makes this save only once per turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Both damage types increase by 1d8 per slot level above 6.",
        imagePath: spellImgUrl("wallofthorns")
    },
    {
        slug: slugify("Wind Walk"),
        name: "Wind Walk",
        classes: ["Druid"],
        spellLevel: 6,
        school: "Transmutation",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Self",
        area: "30-foot radius",
        tags: ["Player's Handbook", "Buff", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Prone", "Stunned"],
        components: { verbal: true, somatic: true, material: true, materialText: "a candle" },
        concentration: false,
        ritual: false,
        descriptionMd: "You and up to ten willing creatures of your choice within range assume gaseous forms for the duration, appearing as wisps of cloud. While in this cloud form, a target has a Fly Speed of 300 feet and can hover; it has Immunity to the Prone condition; and it has Resistance to Bludgeoning, Piercing, and Slashing damage. The only actions a target can take in this form are the Dash action or a Magic action to begin reverting to its normal form. Reverting takes 1 minute, during which the target has the Stunned condition. Until the spell ends, the target can revert to cloud form, which also requires a Magic action followed by a 1-minute transformation.\n\n" +
            "If a target is in cloud form and flying when the effect ends, the target descends 60 feet per round for 1 minute until it lands, which it does safely. If it can’t land after 1 minute, it falls the remaining distance.",
        scalingMd: "",
        imagePath: spellImgUrl("windwalk")
    },
    {
        slug: slugify("Word of Recall"),
        name: "Word of Recall",
        classes: ["Cleric"],
        spellLevel: 6,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "5 feet",
        area: "You and up to 5 willing creatures",
        tags: ["Player's Handbook", "Teleportation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You and up to five willing creatures within 5 feet teleport to a sanctuary you previously prepared by casting this spell there. You arrive in the nearest unoccupied space to the designated spot. If you haven’t prepared a sanctuary, the spell has no effect.",
        scalingMd: "",
        imagePath: spellImgUrl("wordofrecall")
    },
{
  slug: slugify("Shadebind"),
  name: "Shadebind",
  classes: ["Cleric", "Wizard"],
  spellLevel: 6,
  school: "Necromancy",
  castingTime: "1 minute",
  duration: "Instantaneous",
  range: "10 feet",
  area: "1 creature",
  tags: ["Homebrew", "Creation", ],
  saveRequired: "None",
  attackType: "Spell",
  damageTypes: [],
  conditions: [],
  components: { verbal: true, somatic: true, material: true, materialText: "incense" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "Choose a Humanoid corpse you can touch. You wrench its spirit from the veil and manifest it as a Ghost in an unoccupied space you can see within 10 feet of the corpse. The Ghost uses the Ghost stat block (the GM has the creature’s statistics). It is friendly to you and your companions. In combat, it acts immediately after your turn; it can move and use its reaction on its own, and it takes the Dodge action unless you use a Bonus Action to command it to take another action (Attack, Dash, Disengage, Help, or Hide). If you are incapacitated, it can take only the Dodge action.\n\n" +
    "Quick Binding (1 Action). The Ghost remains for 1 minute, then vanishes.\n\n" +
    "Full Rite (10 Minutes). The Ghost remains for 24 hours or until it drops to 0 Hit Points, then vanishes. You can dismiss the Ghost as a Magic action. You can have only one Ghost created by this spell at a time; casting this spell again ends the previous Ghost.\n\n" +
    "Soul Sundering. A creature turned into a Ghost by this spell has its soul shattered and trapped in limbo when the spell ends or the Ghost is destroyed. While sundered in this way, that creature can’t be returned to life by revivify, raise dead, resurrection, or true resurrection; only wish or equally potent divine intervention can restore it. Most good-aligned faiths consider this act a grievous sin.",
  scalingMd: "",
  imagePath: spellImgUrl("shadebind"),
},
{
    slug: slugify("Dirge"),
    name: "Dirge",
    classes: ["Bard", "Cleric"],
    spellLevel: 6,
    school: "Enchantment",
    castingTime: "1 action",
    duration: "1 minute",
    range: "Self",
    area: "60-foot emanation",
    tags: ["Forgotten Realms", "Damage", "Control", "Debuff", ],
    saveRequired: "Constitution",
    attackType: "Spell",
    damageTypes: ["Necrotic"],
    conditions: ["Prone"],
    components: { verbal: true, somatic: false, material: false, materialText: "" },
    concentration: true,
    ritual: false,
    descriptionMd:
        "Deathly power fills a 60-foot Emanation originating from you for the duration.\n\n" +
        "When you cast this spell, you can designate creatures to be unaffected by it. Any other creature can’t regain Hit Points while in the Emanation. Whenever the Emanation enters a creature’s space and whenever a creature enters the Emanation or ends its turn there, the creature makes a Constitution saving throw. On a failed save, the creature takes 3d10 Necrotic damage and has the Prone condition. On a successful save, the creature takes half as much damage and its Speed is halved. A creature makes this save only once per turn.",
    scalingMd: "",
    imagePath: spellImgUrl("dirge")
},
{
    slug: slugify("Elminster’s Effulgent Spheres"),
    name: "Elminster’s Effulgent Spheres",
    classes: ["Druid", "Sorcerer", "Wizard"],
    spellLevel: 6,
    school: "Evocation",
    castingTime: "1 action",
    duration: "1 hour",
    range: "Self",
    area: "Self; 1 creature within 120 feet (Energy Blast)",
    tags: ["Forgotten Realms", "Damage", "Defense", "Buff", ],
    saveRequired: "None",
    attackType: "Ranged Spell Attack",
    damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "an opal worth 1,000+ gp"
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "Six chromatic spheres orbit you for the duration.\n\n" +
        "While the spheres are present, you can expend spheres to create the following effects:\n\n" +
        "Absorb Energy. When you take Acid, Cold, Fire, Lightning, or Thunder damage, you can use your Reaction to expend one sphere and give yourself Resistance to the triggering damage type until the start of your next turn.\n\n" +
        "Energy Blast. As a Bonus Action, you send one sphere hurtling toward a target within 120 feet of yourself. Make a ranged spell attack. On a hit, the target takes 3d6 Acid, Cold, Fire, Lightning, or Thunder damage (your choice). Regardless of whether you hit, the sphere is expended.\n\n" +
        "The spell ends early if you have no more spheres remaining.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The number of spheres increases by 1 for each spell slot level above 6th.",
    imagePath: spellImgUrl("elminsterseffulgentspheres")
},
{
    slug: slugify("Avalanche"),
    name: "Avalanche",
    classes: ["Druid", "Sorcerer"],
    spellLevel: 6,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "Self",
    area: "60-foot line",
    tags: ["Homebrew", "Damage", "Control", ],
    saveRequired: "Dexterity",
    attackType: "Spell",
    damageTypes: ["Bludgeoning"],
    conditions: ["Prone", "Stunned"],
    components: { verbal: true, somatic: true, material: false, materialText: "" },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You cause the earth to ripple, triggering an avalanche of rock and stone to surge forward in a 60-foot-long, 15-foot-wide line. Creatures caught in the surging tumble of rocks must make a Dexterity saving throw. On a failed save, a creature takes 6d10 Bludgeoning damage and is knocked Prone. If the creature fails the save by 5 or more, it is also Stunned until the end of its next turn. On a successful save, a creature takes half as much damage and suffers none of the spell’s other effects.\n\n" +
        "The spell creates a 15-by-15-foot area of difficult terrain at the end of the line created by the spell.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage increases by 1d10 for each spell slot level above 6th.",
    imagePath: spellImgUrl("avalanche")
},
{
    slug: slugify("Aether Torrent"),
    name: "Aether Torrent",
    classes: ["Sorcerer"],
    spellLevel: 6,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "Self",
    area: "60-foot line",
    tags: ["Homebrew", "Damage", "Negation", ],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: ["Force"],
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
        "You unleash a massive torrent of raw arcane energy, blasting a 60-foot-long, 15-foot-wide line with overwhelmingly raw magic. This spell deals double damage to structures and unattended objects. All creatures in the area take 4d12 + 4 Force damage.\n\n" +
        "All active spells or spell effects of 2nd level or lower on a creature that takes this damage are dispelled, and Constitution saving throws to maintain Concentration on spells triggered by this damage are made with Disadvantage.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** The damage increases by 1d12 + 1 for each spell slot level above 6th.",
    imagePath: spellImgUrl("aethertorrent")
},
{
    slug: slugify("Shellshock"),
    name: "Shellshock",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 6,
    school: "Enchantment",
    castingTime: "1 action",
    duration: "1 minute",
    range: "Self",
    area: "120-foot radius",
    tags: ["Homebrew", "Warding", "Debuff", "Buff", ],
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
    concentration: true,
    ritual: false,
    descriptionMd:
        "You draw off the defenses of nearby foes. When you cast the spell, each hostile creature within 120 feet of you must make a Charisma saving throw. On a failed save, the creature has a −1 penalty to AC for the duration. For each creature that fails, you gain a +1 bonus to AC for the duration. A creature that succeeds is unaffected.\n\n" +
        "This spell affects only creatures that are within range when you cast it; creatures that enter the area later aren’t affected. A given creature’s penalty from this spell can’t be increased by additional castings.",
    scalingMd: "",
    imagePath: spellImgUrl("shellshock")
},
{
    slug: slugify("Anchor Warp"),
    name: "Anchor Warp",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 6,
    school: "Conjuration",
    castingTime: "1 action",
    duration: "Until dispelled",
    range: "5 feet",
    area: "5-foot square",
    tags: ["Homebrew", "Teleportation", "Utility", ],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a small rune-stone or silvered chalk worth 25 gp, not consumed"
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You inscribe an invisible teleportation rune on a solid surface at least a 5-foot square that you can touch. The rune is invisible but detectable by magic (such as the detect magic spell) and can be ended by dispel magic (DC equals your spell save DC). You can have up to five active runes you created with this spell at a time. If you cast this spell when you already have five, the casting fails unless you choose one of your existing runes to end as part of the casting.\n\n" +
        "**Recall.** While at least one of your runes exists, you can take a Magic action to teleport yourself (and gear you’re wearing or carrying) to one of your runes, provided you are on the same plane of existence. You appear in the rune’s space or the nearest unoccupied space to it. After you teleport to a given rune, you can’t teleport to that same rune again for 7 days (other runes are unaffected).\n\n" +
        "This teleportation fails if the destination is blocked by an effect that prevents teleportation (such as the forbiddance spell); if it fails, the action is spent and you aren’t moved.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** For each spell slot level above 6th, your maximum number of active runes increases by 1.",
    imagePath: spellImgUrl("anchorwarp")
},

];