import { spellImgUrl, slugify } from "./spellUtils.js";

export const LEVEL3 = [
    
    {
        slug: slugify("Blood Iron"),
        name: "Blood Iron",
        classes: ["Bard", "Cleric", "Druid", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "Self",
        area: "Self",
        tags: ["Grim Hollow", "Sangromancy", "Utility", "New"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a rusty knife"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend three Hit Dice or the spell automatically fails. Roll the expended Hit Dice and extract a number of pounds of iron from your blood equal to the roll’s total.\n\n" +
            "You fashion this iron into nonmagical metal objects. The combined weight of these objects must be equal to or less than the total rolled on the expended Hit Dice. The quality of these created objects is poor but functional.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For each spell slot level above 3rd, you can expend one additional Hit Die when you cast this spell, and you create additional iron based on that die’s roll.",
        imagePath: spellImgUrl("bloodiron")
    },
    {
        slug: slugify("Fast Friends"),
        name: "Fast Friends",
        classes: ["Bard", "Cleric", "Wizard"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 hour",
        range: "30 feet",
        area: "1 creature",
        tags: ["Acquisitions Incorporated",  "Control", "Debuff"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Charmed"],
        components: {
            verbal: true,
            somatic: false,
            material: false,
            materialText: ""
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When you cast this spell, choose one Humanoid within range that can see and hear you and that can understand you. The creature must succeed on a Wisdom saving throw or become Charmed by you for the duration. While the creature is Charmed in this way, it undertakes to perform any services or activities you ask of it in a friendly manner, to the best of its ability.\n\n" +
            "You can set the creature new tasks when a previous task is completed, or if you decide to end its current task. If the service or activity might cause harm to the creature, or if it conflicts with the creature’s normal activities and desires, the creature can make another Wisdom saving throw to try to end the effect. This save is made with Advantage if you or your companions are fighting the creature. If the activity would result in certain death for the creature, the spell ends.\n\n" +
            "When the spell ends, the creature knows it was Charmed by you.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
        imagePath: spellImgUrl("fastfriends")
    },
    {
        slug: slugify("Animate Shadow"),
        name: "Animate Shadow",
        classes: ["Warlock"],
        spellLevel: 3,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Creation", "Damage"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a smoke-stained mirror" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You bring a target’s shadow to life under your control. If the creature’s CR exceeds 3 or it has no shadow, the spell fails; creatures without CR (such as player characters) are immune.\n\nOtherwise, a shadow copy appears adjacent to the target (on the side away from the brightest nearby light) using the target’s statistics with the following changes: it has no legendary actions or resistances, cannot cast spells, has hit points equal to half the target’s current hit points, and appears as a mirrored silhouette of inky black smoke. The shadow is resistant to nonmagical bludgeoning, piercing, and slashing in darkness; it is vulnerable to all damage in bright light, and is always vulnerable to fire, lightning, and radiant. If destroyed, the target casts no shadow for 8 hours.\n\nThe shadow acts immediately after the target’s turn. As a reaction at the start of the shadow’s turn, you can seize control and direct its movement and action.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 5th or 6th level, the maximum target CR becomes 4; at 7th or 8th, CR 5; at 9th, CR 6.",
        imagePath: spellImgUrl("animateshadow")
    },
    {
        slug: slugify("Aether Lance"),
        name: "Aether Lance",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-ft. by 5-ft. line",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You gather raw aether and expel it in a lance of power forming a 30-foot line that is 5 feet wide. Each creature in the line must make a Dexterity saving throw, taking 8d4 Force damage on a failed save, or half as much on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd.",
        imagePath: spellImgUrl("aetherlance")
    },
    {
        slug: slugify("Antagonize"),
        name: "Antagonize",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard",],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature",
        tags: ["The Book of Many Things", "Damage", "Control"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a playing card depicting a rogue" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You whisper goading magic that needles a creature within range. The target makes a Wisdom saving throw. On a failed save, it takes 4d4 Psychic damage and must immediately use its reaction, if available, to make a melee attack against another creature of your choice that you can see. If no other creature is within range, the target has disadvantage on the next attack roll it makes before the start of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a spell slot of 4th level or higher, the damage increases by 1d4 for each slot level above 3rd.",
        imagePath: spellImgUrl("antagonize")
    },
    {
        slug: slugify("Blood Bond"),
        name: "Blood Bond",
        classes: ["Druid", "Blood Hunter",],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Grim Hollow", "Sangromancy", "Buff", "Communication"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a rag soaked in your own blood" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "As part of casting this spell, you must expend three Hit Point Dice or the spell automatically fails. Roll the expended dice; the target gains temporary hit points equal to the total.\n\nFor the duration, you know the target’s direction and distance, and you and the target can speak telepathically. You can also target that creature when you cast a spell with a range of Self or Touch, regardless of distance, though this is suppressed if on different planes.\n\nAt any time, the target can choose to end the spell early, losing all remaining temporary hit points and taking Necrotic damage equal to that amount.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Duration increases to 8 hours (slot level 5–6), 24 hours (slot level 7–8), or 7 days (slot level 9).",
        imagePath: spellImgUrl("bloodbond")
    },
    {
        slug: slugify("Bramble Barrier"),
        name: "Bramble Barrier",
        classes: ["Druid", "Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "30-ft.-long, 5-ft.-wide line (six contiguous 5-ft. squares on the ground)",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Piercing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Low brambles erupt in a 30-foot line (5 feet wide) composed of six contiguous 5-foot squares placed on the ground. The squares are difficult terrain. A creature that enters a bramble square takes 4d4 Piercing damage and must make a Constitution saving throw; on a failure, its speed becomes 0 until the end of its turn.\n\nThe brambles wither after 1 day if the area isn't suitable. Each 5-ft square takes 1 minute to clear by hand, or is cleared if it takes 5+ Fire damage. The brambles crumble if you cast this spell again.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Create two additional 5-foot squares of brambles for each slot level above 3rd.",
        imagePath: spellImgUrl("bramblebarrier")
    },
    {
        slug: slugify("Butterfly Storm"),
        name: "Butterfly Storm",
        classes: ["Bard", "Druid", "Ranger"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "20-foot-radius Sphere",
        tags: ["Obojima", "Control", "New"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "insect legs"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You create a chaotic cloud of butterflies in a 20-foot-radius Sphere centered on a point you choose within range. The area is heavily obscured, and resting smoke or fog in the area is dispersed.\n\n" +
            "When you cast this spell, choose creatures to be unaffected by it. For the duration, the area is difficult terrain. When a creature attempts to leave the spell’s area, it must make a Strength saving throw. On a failed save, it is pulled back to an unoccupied space closest to the center of the sphere.",
        scalingMd: "",
        imagePath: spellImgUrl("butterflystorm")
    },
    {
        slug: slugify("Burning Strides"),
        name: "Burning Strides",
        classes: ["Artificer", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "Trail",
        tags: ["Fizban's Treasury of Dragons", "Damage"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Dragon flame blasts from your steps. Your speed increases by 20 feet, and moving doesn’t provoke opportunity attacks. When you move within 5 feet of a creature or unattended object, it takes 1d6 Fire from your searing wake (once per turn per creature/object).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For each slot level above 3rd, your speed increases by +5 ft. and the trail deals +1d6 Fire.",
        imagePath: spellImgUrl("burningstrides")
    },
    {
        slug: slugify("Conjure Plants"),
        name: "Conjure Plants",
        classes: ["Druid", "Ranger", "Warlock"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "Large animated plant (moves with you)",
        tags: ["Grim Hollow", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a Large mass of animated vegetation in an unoccupied space. While within 5 feet of it (or sharing its space), you’re lightly obscured. Other creatures cannot enter its space. When you move, you can also move the plants up to 30 feet to another unoccupied space you can see.\n\nWhenever the plants move within 5 feet of a creature you can see, or whenever a creature you can see enters or ends its turn within 5 feet of the plants, you can force it to make a Dexterity save. On a failed save, it takes 3d6 Slashing. A creature makes this save only once per turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the damage by 1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("conjureplants")
    },
    {
        slug: slugify("Creeping Rot"),
        name: "Creeping Rot",
        classes: ["Druid", "Ranger", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "90 feet",
        area: "Primary target + up to three secondary targets within 30 feet",
        tags: ["Crooked Moon", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Send tendrils of black rot to a creature you can see; then up to three tendrils leap to other targets within 30 feet of the first (each target only once). Each creature target makes a Constitution save. Failed: 3d8 Necrotic and it is Poisoned for the duration; a Poisoned creature takes 1d8 Necrotic at the start of each of its turns and repeats the save at the end of each turn, ending the spell on itself on a success. Plant creatures automatically fail the initial save; nonmagical plants simply wither and die.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** One additional tendril leaps to a new target per slot level above 3.",
        imagePath: spellImgUrl("creepingrot")
    },
    {
        slug: slugify("Crimson Harvest"),
        name: "Crimson Harvest",
        classes: ["Sorcerer", "Warlock", "Wizard",],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "15-foot emanation",
        tags: ["Crooked Moon", "Sangromancy", "Damage", "Healing"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a vial of blood" },
        concentration: false,
        ritual: false,
        descriptionMd: "A wave of blood sweeps out from you in a 15-foot Emanation. Each creature of your choice in the wave must make a Dexterity saving throw, taking 3d10 Necrotic damage on a failed save, or half as much on a successful one.\n\n" +
            "If you damage at least one Small or larger creature, one creature of your choice that you can see within the Emanation regains a number of Hit Points equal to half the damage roll.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d10 per slot level above 3.",
        imagePath: spellImgUrl("crimsonharvest")
    },
    {
        slug: slugify("Crooked Ward"),
        name: "Crooked Ward",
        classes: ["Druid", "Ranger", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "10 minutes (see scaling)",
        range: "Touch",
        area: "Invisible 30-foot-radius sphere",
        tags: ["Crooked Moon", "Control", "Warding"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Frightened", "Disadvantage"],
        components: { verbal: true, somatic: true, material: true, materialText: "a five-pointed wicker star" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Mark an immobile surface; an Invisible 30-foot-radius sphere springs from that point. Aberrations, Fey, Fiends, Monstrosities, and Undead in the sphere have Disadvantage on ability checks and attack rolls. When an affected creature enters the sphere for the first time on a turn or starts its turn there, it must make a Wisdom save or have the Frightened condition until the start of its next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** 4th level: duration up to 1 hour. 5th: up to 8 hours. 6th+: no Concentration, duration 24 hours.",
        imagePath: spellImgUrl("crookedward")
    },
    {
        slug: slugify("Cruel Puppetry"),
        name: "Cruel Puppetry",
        classes: ["Blood Hunter"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Homebrew", "Control", "Debuff"],
        saveRequired: "Charisma",
        attackType: "Spell",
        damageTypes: ["Piercing", "Necrotic"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: true, materialText: "a small humanoid doll worth at least 5 gp and something from the target (blood, hair, or scales); both are consumed" },
        concentration: true,
        ritual: true,
        descriptionMd: "You attempt to bind a creature’s soul to a doll, linking the creature to it through a sympathetic connection. The target must make a Charisma saving throw. On a failed save, the creature becomes bound to the doll. On a successful save, the creature is not bound, and the spell ends.\n\n" +
            "As part of casting the spell when the creature fails the save—and on subsequent turns using your action until the spell ends—you can perform one of the following actions:\n\n" +
            "• Hold the doll still, causing the creature to be Restrained until the start of your next turn.\n" +
            "• Force the doll to move, causing the creature to move 15 feet in a direction of your choice that it can move.\n" +
            "• Stab the doll, causing the creature to take 4d6 Piercing damage.\n" +
            "• Rip the doll in half, ending the spell, destroying the doll, and dealing 4d12 Necrotic damage to the creature.\n\n" +
            "Each time after the first that you use an action to manipulate the doll, after the effect takes place, the creature can repeat the Charisma saving throw with Disadvantage, ending the effect on a success.\n\n" +
            "Once a creature has been targeted by this spell, it cannot be targeted again for 24 hours.",
        scalingMd: "**Using a Higher-Level Spell Slot.** With a 5th-level slot or higher, the range becomes unlimited provided the target is on the same plane.",
        imagePath: spellImgUrl("cruelpuppetry")
    },
    {
        slug: slugify("Crushing Singularity"),
        name: "Crushing Singularity",
        classes: ["Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Until the start of your next turn",
        range: "60 feet",
        area: "15-foot radius (centered on a point)",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create an overwhelming gravitational singularity. When it appears, each creature within 15 feet must make a Strength save. On a failure, a creature is pulled to the nearest space adjacent to the center and takes 3d6 Bludgeoning damage plus 1d6 for each other creature that also failed (maximum 6d6 total). While within 15 feet, moving away from the center costs double movement. If a creature ends its turn within 15 feet, it must make a Strength save or take 2d6 Bludgeoning damage and be dragged back to the closest space to the center.",
        scalingMd: "",
        imagePath: spellImgUrl("crushingsingularity")
    },
    {
        slug: slugify("Culling Sickle"),
        name: "Culling Sickle",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "30-foot reach (sickle strikes)",
        tags: ["Crooked Moon", "Damage", "Sustain"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a hovering ghostly sickle that follows you. When you cast the spell, and as a bonus action on subsequent turns, you can direct it to strike a creature within 30 feet. Make a ranged spell attack; on a hit, the target takes 2d8 Necrotic damage, and you gain Temporary Hit Points equal to half the damage dealt. The sickle returns to hover in your space after the attack.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The damage increases by 1d8 for each slot level above 3rd.",
        imagePath: spellImgUrl("cullingsickle")
    },
    {
        slug: slugify("Cursed Cacophony"),
        name: "Cursed Cacophony",
        classes: ["Bard", "Sorcerer", "Warlock"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Unlimited",
        area: "1 creature",
        tags: ["Crooked Moon", "Debuff"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Disadvantage"],
        components: { verbal: false, somatic: true, material: true, materialText: "a sheet of music" },
        concentration: true,
        ritual: true,
        descriptionMd: "You curse a familiar creature on the same plane. The target must succeed on a Wisdom save or be cursed for the duration. While cursed, it hears haunting, discordant music and has Disadvantage on d20 Tests. The first time it fails a d20 Test during a turn, it immediately repeats the save (neither Advantage nor Disadvantage), ending the spell on a success. Once a creature fails against this spell, you can’t target it again with a ritual casting for 24 hours.",
        scalingMd: "",
        imagePath: spellImgUrl("cursedcacophony")
    },
    {
        slug: slugify("Dispel Construct"),
        name: "Dispel Construct",
        classes: ["Wizard", "Artificer"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Control", "Damage"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: ["Stunned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You purge the magic animating a construct within range. The target takes 4d10 Force damage and must make a Constitution save or be Stunned for up to 1 minute. The target can repeat the save at the end of each of its turns, ending the effect on a success. If it has fewer than 50 hit points remaining when it fails this save, it is reduced to 0 hit points.",
        scalingMd: "",
        imagePath: spellImgUrl("dispelconstruct")
    },
    {
        slug: slugify("Electrocute"),
        name: "Electrocute",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Lightning"],
        conditions: ["Stunned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "A massive arc of lightning lashes a target you can see within range. The target makes a Constitution save, taking 4d12 Lightning damage and becoming Stunned until the start of its next turn on a failure, or half damage and no Stun on a success.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The damage increases by 1d12 for each slot level above 3rd.",
        imagePath: spellImgUrl("electrocute")
    },
    {
        slug: slugify("Divine Pardon"),
        name: "Divine Pardon",
        classes: ["Cleric", "Paladin",],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Healing", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a divine symbol" },
        concentration: false,
        ritual: false,
        descriptionMd: "You bathe yourself in a healing coat of the divine, swearing to seek only their protection. For 1 minute, you regain 2 hit points at the start of each of your turns as long as you have at least 1 hit point. The spell ends if you fall unconscious or receive healing from another spell or magic item.",
        scalingMd: "",
        imagePath: spellImgUrl("divinepardon")
    },
    {
        slug: slugify("Elemental Exhalation"),
        name: "Elemental Exhalation",
        classes: ["Druid", "Sorcerer"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-foot cone",
        tags: ["Grim Hollow", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Thunder", "Cold", "Bludgeoning", "Fire", "Acid"],
        conditions: ["Forecful Movement", "Frightened", "Speed 0", "Burning", "Prone"],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "When you cast this spell, choose one of the following effects that determine the spell’s damage type:\n\n" +
            "**Air.** The damage type is Thunder. Each creature that fails the saving throw is pushed 10 feet away from you.\n\n" +
            "**Coldfire.** The damage type is Cold. Each creature that fails the saving throw has the Frightened condition until the start of your next turn.\n\n" +
            "**Earth.** The damage type is Bludgeoning. Each creature that fails the saving throw has its Speed reduced to 0 until the end of its next turn.\n\n" +
            "**Fire.** The damage type is Fire. Each creature that fails the saving throw is engulfed in flames and takes 2d6 Fire damage at the end of its next turn. As an Action, it can extinguish the flames on itself by giving itself the Prone condition and rolling on the ground. The fire also goes out if it is doused, submerged, or suffocated.\n\n" +
            "**Water.** The damage type is Acid. Each creature that fails the saving throw has the Prone condition.\n\n" +
            "Each creature within a 30-foot Cone of destructive elemental energy must make a Dexterity saving throw. On a failed save, a target takes 5d6 damage of the chosen type. On a successful save, the target takes half as much damage only.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("elementalexhalation")
    },
    {
        slug: slugify("Suffocate"),
        name: "Suffocate",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Control", "Debuff"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: [],
        conditions: ["Restrained"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a leather glove"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You create a pair of grasping hands made from invisible force. Make a ranged spell attack against a creature you can see within range. On a hit, the creature has the Restrained condition and can’t breathe.\n\n" +
            "A creature can hold its breath for a number of rounds equal to 1 + its Constitution modifier (minimum 30 seconds) before suffocation begins. When a creature runs out of breath, it gains 1 Exhaustion level at the end of each of its turns. When a creature can breathe again, it removes all levels of Exhaustion it gained from suffocating.\n\n" +
            "A creature Restrained by the hands can take an action to make a Strength (Athletics) check against your spell save DC. If it succeeds, it is no longer Restrained.",
        scalingMd: "",
        imagePath: spellImgUrl("suffocate")
    },
    {
        slug: slugify("Erode"),
        name: "Erode",
        classes: ["Druid", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous (plus ongoing)",
        range: "20 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Debuff"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Acid"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "You hurl a glob of acid. The target makes a Dexterity save, taking 8d4 Acid damage and becoming covered in acid on a failure (half damage and not covered on a success). A covered target takes 2d4 Acid at the end of each of its turns until an adjacent creature uses an action to clear the acid.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Both the initial and ongoing damage increase by 1d4 per slot level above 3rd.",
        imagePath: spellImgUrl("erode")
    },
    {
        slug: slugify("Erupting Earth"),
        name: "Erupting Earth",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "20-foot cube (ground)",
        tags: ["Elemental Evil Player's Companion", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Difficult Terrain"],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of obsidian" },
        concentration: false,
        ritual: false,
        descriptionMd: "Choose a point on the ground; earth and stone erupt in a 20-foot cube centered there. Creatures in the area make a Dexterity save, taking 3d12 Bludgeoning damage on a failure, or half on a success. The ground becomes difficult terrain until cleared (each 5-foot square requires 1 minute to clear by hand).",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage increases by 1d12 per slot level above 3rd.",
        imagePath: spellImgUrl("eruptingearth")
    },
    {
        slug: slugify("Essence Extraction"),
        name: "Essence Extraction",
        classes: ["Ranger", "Sorcerer", "Wizard", "Bard",],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Touch",
        area: "1 corpse",
        tags: ["Grim Hollow", "Shapechanging"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a broken mirror" },
        concentration: false,
        ritual: true,
        descriptionMd: "You touch a corpse, extract its essence (the corpse crumbles to ash), and take on its appearance while retaining your gear and abilities. If the form would alter movement speed (e.g., Small races), your speed adjusts accordingly for the duration. You can end this spell as a bonus action; to assume a new guise, you must cast the spell again on a different corpse.",
        scalingMd: "",
        imagePath: spellImgUrl("essenceextraction")
    },
    {
        slug: slugify("Essence Infusion"),
        name: "Essence Infusion",
        classes: ["Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "8 hours",
        duration: "Special",
        range: "Touch",
        area: "1 nonmagical weapon",
        tags: ["Homebrew", "Buff", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a diamond vial with at least 1 oz. of blood worth 100+ GP (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "When you cast this spell, you target one nonmagical weapon within range. That weapon becomes magical and gains a special benefit based on the creature type of the blood used as the material component for this spell. The item requires Attunement, and only the creature attuned to this weapon gains these benefits.\n\n" +
            "Aberration. Your attacks with the weapon deal an extra 1d6 Psychic damage on a hit. In addition, you can telepathically speak with any creature that has taken at least 1 point of damage from this weapon in the last 24 hours, provided you are both on the same plane.\n\n" +
            "Celestial. Your attacks with the weapon deal an extra 1d6 Radiant damage on a hit. In addition, you can use a Bonus Action to cause the weapon to shed Bright Light in a 30-foot radius and Dim Light for an additional 30 feet. You can end this effect by using another Bonus Action.\n\n" +
            "Dragon. Your attack rolls with this weapon can score a Critical Hit on a roll of 19 or 20 on the d20. In addition, you have Advantage on saving throws you make to avoid or end the Frightened condition.\n\n" +
            "Fey. Your attacks with the weapon deal an extra 1d4 Force damage on a hit. In addition, once per turn when you hit a creature within 30 feet with this weapon, you can teleport to an unoccupied space you can see within 5 feet of it.\n\n" +
            "Fiend. Your attacks with the weapon deal an extra 1d6 Necrotic damage on a hit. You can use a Bonus Action to change this extra damage to Cold or Fire.\n\n" +
            "When you cast this spell, you attune to the magic weapon. The spell’s duration lasts as long as you have Attunement to the weapon. During the spell’s duration, the magic item is susceptible to the Dispel Magic spell. If you maintain Attunement to the magic weapon for 1 year, the enchantment becomes permanent and this spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("essenceinfusion")
    },
    {
        slug: slugify("Fire Cyclone"),
        name: "Fire Cyclone",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "5-foot-radius, 30-foot-high cylinder",
        tags: ["Homebrew", "Damage",  "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: ["Pulled (nearby)", "Launched (if fully inside)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of ashes from a forest fire" },
        concentration: true,
        ritual: false,
        descriptionMd: "At a visible point within range, a flaming cyclone forms (radius 5 ft., height 30 ft.). A creature that starts its turn inside or enters for the first time on a turn makes a Strength save, taking 3d6 Fire damage on a failure (half on success). If the creature is fully inside on a failed save, it’s also flung 15 feet up and lands 15 feet away in a random horizontal direction. Creatures within 10 feet of the center (but outside the radius) must save or be pulled 5 feet toward the center. Moving away from the cyclone costs 2 feet per 1 foot (3 feet if flying) while within 30 feet of its center.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage increases by 1d6, and both the cyclone’s height and the launch height increase by 5 feet per slot level above 3rd.",
        imagePath: spellImgUrl("firecyclone")
    },
    {
        slug: slugify("Fireburst Mine"),
        name: "Fireburst Mine",
        classes: ["Artificer"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Touch",
        area: "20-foot sphere",
        tags: ["Homebrew", "Creation", "Damage", "Control", "Trap"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "any tiny nonmagical item, destroyed on detonation" },
        concentration: false,
        ritual: false,
        descriptionMd: "You infuse a tiny item as a magical mine. You can set it to detonate when a creature comes within 5 feet, or by verbal command as a reaction (you may detonate multiple mines). On detonation, creatures in a 20-foot-radius sphere make a Dexterity save, taking 5d8 Fire damage on a failure, or half on a success. If a creature is in multiple mine areas during a turn, it takes half damage from each mine beyond the first. A mine must be placed at least 5 feet from any other mine and can’t be moved once set (moving it detonates it unless you, the caster, disarm it with an action).",
        scalingMd: "",
        imagePath: spellImgUrl("fireburstmine")
    },
    {
        slug: slugify("Flash Fever"),
        name: "Flash Fever",
        classes: ["Druid", "Warlock"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Grim Hollow", "Damage", "Debuff", "New"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Fire"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "flint and steel"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose a creature you can see within range. The creature breaks into a cold sweat and must make a Constitution saving throw. On a failed save, it becomes diseased as the cold sweat becomes a burning fever. On a successful save, the spell ends.\n\n" +
            "For the duration, the target takes 1d6 Fire damage at the start of each of its turns. The target then repeats the saving throw at the end of each of its turns until it gets three successes or three failures. If the target succeeds on three of these saves, the spell ends on the target. If the target fails three of the saves, it takes 4d6 Fire damage and the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage at the start of each of the target’s turns increases by 1d6 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("flashfever")
    },
    {
        slug: slugify("Flame Arrows"),
        name: "Flame Arrows",
        classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard",],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 quiver (up to 20 pieces of ammunition)",
        tags: ["Elemental Evil Player's Companion", "Damage", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You touch a quiver of arrows or bolts. When a piece of affected ammunition hits, the target takes an extra 1d8 Fire damage. The magic ends on that piece when it hits or misses, and the spell ends after 20 pieces have been drawn.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Fire damage becomes 1d10 with a 4th-level slot or 1d12 with a 5th-level slot.",
        imagePath: spellImgUrl("flamearrows")
    },
    {
        slug: slugify("Flash Freeze"),
        name: "Flash Freeze",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-foot cone",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Cold"],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "A freezing wind ripples outward. Each creature in a 30-foot cone must make a Constitution save. On a failure, it takes 4d8 Cold damage and is Restrained by ice until the start of your next turn; on a success, it takes half damage and isn’t Restrained.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 3rd.",
        imagePath: spellImgUrl("flashfreeze")
    },
    {
        slug: slugify("Forge Familiar Bond"),
        name: "Forge Familiar Bond",
        classes: ["Wizard"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "10 feet",
        area: "1 creature",
        tags: ["Homebrew", "Summoning",],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Bound"],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of your blood pressed into a silver thread loop worth 50 gp (consumed)" },
        concentration: true,
        ritual: true,
        descriptionMd: "You attempt to force a magical contract between you and one creature you can see within range. The target must succeed on a Wisdom saving throw or become Bound as described below. The save is modified by the target’s current condition:\n\n" +
            "Legendary Resistance. If the target has any uses of Legendary Resistance remaining, it is immune to this spell.\n\n" +
            "Default. The target makes the save with Advantage.\n\n" +
            "Bloodied (≤ 50% hit points). The target makes a normal save.\n\n" +
            "Near Death (≤ 10% hit points). The target makes the save with Disadvantage.\n\n" +
            "Willing creature. A willing target can choose to fail the save.\n\n" +
            "While you concentrate (up to 1 minute), faint sigils and chains of blue light coil between you and the target. If your concentration ends early, the spell ends with no effect. If the target fails the save and you maintain concentration for the full minute, the bond seals and the creature becomes your Contract-Bound Familiar. If you already have one, you must replace it with the new one.",
        scalingMd: "",
        imagePath: spellImgUrl("forgefamiliarbond")
    },
    {
        slug: slugify("Gale Shot"),
        name: "Gale Shot",
        classes: ["Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Touch",
        area: "1 weapon",
        tags: ["Homebrew", "Damage"],
        saveRequired: "None",
        attackType: "Ranged Weapon Attack",
        damageTypes: ["Bludgeoning"],
        conditions: ["Knocked back (30 feet on hit)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of ammunition or a thrown weapon worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd: "You imbue one ammunition piece or thrown weapon with hurricane force until the end of the turn. The first time you attack with it, on a hit the target takes an extra 4d8 weapon damage and is knocked 30 feet away. Any creature it collides with takes 2d8 Bludgeoning. On a miss, the target takes half of the extra damage and isn’t pushed. The spell ends after that one attack.",
        scalingMd: "**Using a Higher-Level Spell Slot.** For each slot level above 3rd, the shot deals an additional 1d8 extra damage and the knockback distance increases by 10 feet.",
        imagePath: spellImgUrl("galeshot")
    },
    {
        slug: slugify("Harvest Moonglow"),
        name: "Harvest Moonglow",
        classes: ["Cleric", "Druid", "Ranger"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "20-foot sphere",
        tags: ["Crooked Moon", "Utility", "Support"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Reveals Invisible (as shimmering, translucent)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of moonstone" },
        concentration: false,
        ritual: false,
        descriptionMd: "Silvery Dim Light fills a 20-foot-radius sphere. Creatures/objects with the Invisible condition in the light become visible as translucent images. An ally in the light can use a Bonus Action to gain 2d6 Temporary HP.",
        scalingMd: "**Using a Higher-Level Spell Slot.** The Temporary HP increases by 1d6 for each slot level above 4th.",
        imagePath: spellImgUrl("harvestmoonglow")
    },
    {
        slug: slugify("Heavy Stomp"),
        name: "Heavy Stomp",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "120 feet",
        area: "15-foot sphere",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Trigger: you fall, or a creature within range falls. When the creature hits the ground, it takes normal falling damage; then it and all other creatures within 15 feet make a Dexterity, taking 4d8 Bludgeoning on a failure, or half on a success.",
        scalingMd: "**Using a Higher-Level Spell Slot.** Area damage increases by 1d8 per slot above 3rd.",
        imagePath: spellImgUrl("heavystomp")
    },
    {
        slug: slugify("House of Cards"),
        name: "House of Cards",
        classes: ["Wizard",],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 minute",
        duration: "24 hours",
        range: "Touch",
        area: "Structure (30-ft square base; 3 floors)",
        tags: ["Homebrew", "Utility", "Creation", "Defense"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a deck of cards" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch the ground and conjure a defensive structure made of enormous playing cards, rising with you at its center. The base is a 30-foot square; three floors with 10-foot ceilings stack smaller above: 2nd floor 20-foot square, top floor 10-foot square, each centered. Ramps connect floors, and empty doorframes connect interior and exterior. Creatures inside or on top have half cover.\n\nEach card is 5 feet wide and 10 feet tall (AC 10; 1 HP; immune to Poison and Psychic). Reducing a card to 0 HP destroys it. Each time a card is destroyed, roll 1d6; on a 5–6, the house collapses and the spell ends. The house and all cards vanish when the spell ends.",
        scalingMd: "",
        imagePath: spellImgUrl("houseofcards")
    },
    {
        slug: slugify("Illusionary Fireball"),
        name: "Illusionary Fireball",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Illusion",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "20-foot-radius sphere",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "something that looks like bat guano" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A bright streak flashes to a point you choose within range and blossoms into an illusionary explosion of flame. Each creature of your choice in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw. A target takes 6d6 Psychic damage on a failed save. A creature that succeeds realizes the fire is illusionary and takes no damage.\n\nYou can style the illusion as ice, lightning, or pure force.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When cast using a slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        imagePath: spellImgUrl("illusionaryfireball")
    },
    {
        slug: slugify("Leader’s Soliloquy"),
        name: "Leader’s Soliloquy",
        classes: ["Bard", "Cleric", "Paladin", "Sorcerer",],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Self",
        area: "30-foot radius",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Advantage"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You address up to five allied creatures that can hear you. For the duration, each gains 2d4 + 5 Temporary Hit Points and has Advantage on Wisdom saving throws. If an affected creature loses its Temporary Hit Points, it has Advantage on the next attack roll it makes; once it loses the Temporary Hit Points, the spell ends for that creature.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The Temporary Hit Points increase by 5 for each slot level above 3rd.",
        imagePath: spellImgUrl("leaderssoliloquy")
    },
    {
        slug: slugify("Lightning Shot"),
        name: "Lightning Shot",
        classes: ["Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "1 round",
        range: "Touch",
        area: "100-foot line",
        tags: ["Homebrew", "Damage", "Buff"],
        saveRequired: "None",
        attackType: "Weapon Attack",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of ammunition or a thrown weapon worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a piece of ammunition or a thrown weapon, imbuing it with crackling lightning. The first time you attack with it, it transforms into a bolt of lightning that blasts in a 100-foot line, 5 feet wide. Make the weapon’s single attack roll against each creature in the line (using the same roll). On a hit, a creature takes 4d8 Lightning damage; on a miss, it takes half as much. This damage does not add ability or weapon damage modifiers. The lightning ignites unattended flammables. The spell ends after the attack.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 3rd (to a maximum of 6d8 at 5th).",
        imagePath: spellImgUrl("lightningshot")
    },
    {
        slug: slugify("Meteorite"),
        name: "Meteorite",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "3 rounds",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Speed 0 while casting"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A void above you rains small meteorites. Choose a creature you can see within range; it makes a Dexterity save, taking 6d6 Bludgeoning damage on a failure, or half on a success. On subsequent turns you can use your action to select a new target within range and repeat the effect. The spell ends if you use your action for anything else. While channeling this spell, your movement speed is 0.",
        scalingMd: "",
        imagePath: spellImgUrl("meteorite")
    },
    {
        slug: slugify("Mind Palace"),
        name: "Mind Palace",
        classes: ["Artificer", "Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "30 feet",
        area: "You or 1 willing creature",
        tags: ["Homebrew", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [ "Advantage"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "For the duration, you or one willing creature you can see within range has Resistance to Psychic damage and Advantage on Intelligence, Wisdom, and Charisma saving throws.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target one additional creature for each slot level above 3rd (targets must be within 30 feet of each other).",
        imagePath: spellImgUrl("mindpalace")
    },
    {
        slug: slugify("Martyr"),
        name: "Martyr",
        classes: ["Cleric", "Paladin", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Crooked Moon", "Restoration"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a dagger worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch a creature that died within the last minute and transfer your life essence. The target returns to life with Hit Points equal to your current HP total. You immediately drop to 0 HP with two failed death saves and must immediately make a death save. You can’t regain Hit Points until after that save is made.",
        scalingMd: "",
        imagePath: spellImgUrl("martyr")
    },
    {
        slug: slugify("Miniature Meteors"),
        name: "Miniature Meteors",
        classes: ["Sorcerer", "Wizard",],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "5-foot radius",
        tags: ["Elemental Evil Player's Companion", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "niter, sulfur, and pine tar formed into a bead" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Six tiny meteors orbit you. When you cast the spell, and as a bonus action on later turns, you can expend one or two meteors, sending them to points within 120 ft to explode. Creatures within 5 ft of a point make a Dexterity save, taking 2d6 Fire damage on a fail, or half on a success. A creature can only be affected by one meteor per turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Each meteor’s damage increases by 1d6 for every 2 slot levels above 3rd.",
        imagePath: spellImgUrl("miniaturemeteors"),
    },
    {
        slug: slugify("Minimize"),
        name: "Minimize",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "10 minutes",
        duration: "Until dispelled or triggered",
        range: "Touch",
        area: "1 object",
        tags: ["Homebrew", "Utility",],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "the object you are targeting" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You compress a nonliving object (no larger than 5 ft on a side) into a tiny marble. Speaking its command word while setting it down dispels the magic and restores the object. The effect lasts until dispelled or triggered.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For every 2 slot levels above 3rd, the maximum dimension increases by 5 feet.",
        imagePath: spellImgUrl("minimize"),
    },
    {
        slug: slugify("Mist of Mourning"),
        name: "Mist of Mourning",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "20-foot-radius sphere",
        tags: ["Crooked Moon", "Control", "Debuff"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a vial of tears" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A sorrowful mist fills a 20-foot-radius sphere centered on a point in range. A creature in the area, entering it, or ending its turn there must succeed on a Charisma save or be overcome with melancholy until the end of its next turn: its Speed is halved, it has Disadvantage on attack rolls, and it subtracts 1d8 from all its damage rolls.",
        scalingMd: "",
        imagePath: spellImgUrl("mistofmourning"),
    },
    {
        slug: slugify("Mutate"),
        name: "Mutate",
        classes: ["Druid", "Sorcerer", "Warlock", "Blood Hunter", "Wizard",],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "Self",
        tags: ["Homebrew", "Shapechanging", "Buff", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an item from a rare or endangered creature" },
        concentration: true,
        ritual: false,
        descriptionMd: "You manipulate the nature of your body with magic, temporarily giving it new properties. You can select three of the following properties:\n\n" +
            "Malleable Form. Your body becomes amorphous. You have Advantage on checks and saving throws to resist grapples and the Restrained condition, you don’t suffer Disadvantage from squeezing into smaller spaces, and you can squeeze through openings two sizes smaller than you.\n\n" +
            "Extra Appendage. You grow one additional appendage that functions as an arm and hand (it may appear as an arm, tentacle, or similar limb).\n\n" +
            "Extended Reach. Your limbs lengthen; your reach for melee attacks, touch spells, and object interactions increases by 5 feet.\n\n" +
            "Hardened Flesh. Your base AC becomes 14 + your Dexterity modifier if it isn’t already higher.\n\n" +
            "Targeted Resilience. You gain Advantage on one type of saving throw of your choice.\n\n" +
            "Aquatic Adaptation. You sprout gills and webbing. You can breathe underwater and gain a Swim Speed equal to your Walking Speed.\n\n" +
            "Ablative Armor. You gain Temporary Hit Points equal to your spellcasting ability modifier at the start of each of your turns.\n\n" +
            "Size Shift. You grow one size larger or smaller.\n\n" +
            "Wings. You sprout wings and gain a Fly Speed of 30 feet.\n\n" +
            "Natural Weapon. You grow a natural weapon with the statistics of any martial melee weapon without the thrown property, taking on a form reminiscent of it. You are proficient with this weapon and are considered to be holding it. You may use your spellcasting ability modifier instead of Strength or Dexterity for attack and damage rolls with it; it is magical and has a +1 bonus to attack and damage rolls.\n\n" +
            "For the duration, you can use an action to change one or all properties, losing any previously selected properties and gaining the new ones.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 4th level or higher, select one additional property per slot level above 3rd.",
        imagePath: spellImgUrl("mutate"),
    },
    {
        slug: slugify("Plummet"),
        name: "Plummet",
        classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "300 feet",
        area: "1 flying creature",
        tags: ["Obojima", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A glowing force yanks a flying creature toward the ground. On a failed Dexterity save, it is pulled to the ground and takes normal falling damage (max 20d6). On a success, it drops halfway to the ground and takes no damage.",
        scalingMd: "",
        imagePath: spellImgUrl("plummet"),
    },
    {
        slug: slugify("Psychosomatic Manifestation"),
        name: "Psychosomatic Manifestation",
        classes: ["Bard", "Druid", "Sorcerer", "Wizard",],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Control", "Social"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Psychic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "One creature you can see within range that is under the effects of the Frightened, Charmed, or Sleep condition becomes afflicted by psychic torment. The creature takes 1d4 Psychic damage at the start of its turns while the condition remains or until this spell ends, whichever occurs first. This damage does not cause the creature to break its condition or repeat its saving throws, and it cannot reduce the creature below 1 Hit Point.\n\n" +
            "The target also gains an additional effect based on its condition:\n\n" +
            "Frightened. The creature’s Armor Class is reduced by 2 for the duration.\n\n" +
            "Charmed. The creature cannot speak a lie and is unaware of this compulsion.\n\n" +
            "Sleep. The creature falls into a deeper slumber and cannot be awakened unless it takes at least 10 points of damage in a single attack.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Duration becomes 10 minutes at 5th level, 1 hour at 7th.",
        imagePath: spellImgUrl("psychosomaticmanifestation"),
    },
    {
        slug: slugify("Quick Sand"),
        name: "Quick Sand",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "20-foot-radius area",
        tags: ["Homebrew", "Control"],
        saveRequired: "STR Save (end of turn)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of sand" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Ground in a 20-ft radius becomes quicksand. Movement there costs 4 ft for every 1 ft moved. A creature that ends its turn in the area must make a Strength save or falls prone.",
        scalingMd: "",
        imagePath: spellImgUrl("quicksand"),
    },
    {
        slug: slugify("Rabid Transformation"),
        name: "Rabid Transformation",
        classes: ["Bard", "Cleric", "Druid", "Ranger", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Touch",
        area: "1 creature",
        tags: ["Grim Hollow", "Buff", "Control"],
        saveRequired: "WIS Save (at start of each turn; DC 10 to retain control)",
        attackType: "None",
        damageTypes: [],
        conditions: ["Immune to Frightened; cannot concentrate or cast spells"],
        components: { verbal: true, somatic: true, material: true, materialText: "a fang from a rabid animal" },
        concentration: true,
        ritual: false,
        descriptionMd: "A creature you touch transforms into a rabid monster, filled with primal fury. The target sprouts thick fur and its mouth elongates into a fanged maw. While transformed into a seething monster, the creature gains the following benefits:\n\n" +
            "• Gains 20 Temporary Hit Points and has an AC of 17 if its AC is lower than that.\n" +
            "• Deals an additional +5 damage on Strength-based attacks.\n" +
            "• Can make a Bite attack as a Bonus Action.\n" +
            "• Bite. 1d6 + the creature’s Strength modifier Slashing damage.\n" +
            "• Is Immune to the Frightened condition.\n" +
            "• Can’t maintain Concentration, and can’t cast spells.\n\n" +
            "At the start of each of the creature’s turns, it must succeed on a DC 10 Wisdom saving throw or lose control. On a failed save, it must take the Attack action on each of its turns to attack the closest creature within reach, whether ally or enemy. If none are within reach, it must use its movement, and if necessary, a Dash action to move within reach of the nearest creature.",
        scalingMd: "",
        imagePath: spellImgUrl("rabidtransformation"),
    },
    {
        slug: slugify("Enemies Abound"),
        name: "Enemies Abound",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "1 creature",
        tags: ["Xanathar's Guide to Everything", "Control", "Debuff"],
        saveRequired: "Intelligence",
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
            "You reach into the mind of one creature you can see and force it to make an Intelligence saving throw. A creature automatically succeeds if it is immune to being Frightened. On a failed save, the target loses the ability to distinguish friend from foe, regarding all creatures it can see as enemies until the spell ends. Each time the target takes damage, it can repeat the saving throw, ending the effect on itself on a success.\n\n" +
            "Whenever the affected creature chooses another creature as a target, it must choose the target at random from among the creatures it can see within range of the attack, spell, or other ability it’s using. If an enemy provokes an Opportunity Attack from the affected creature, the creature must make that attack if it is able to.",
        scalingMd: "",
        imagePath: spellImgUrl("enemiesabound")
    },
    {
        slug: slugify("Radiant Missile"),
        name: "Radiant Missile",
        classes: ["Cleric"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "20-foot-radius sphere",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a holy parchment" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A bright streak detonates in a 20-ft-radius sphere. Creatures make a Dexterity save, taking 6d6 Radiant damage and are Blinded until the start of their next turn on a failure, or half damage and not blinded on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("radiantmissile"),
    },
    {
        slug: slugify("Reanimate"),
        name: "Reanimate",
        classes: ["Druid"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Grim Hollow", "Sangromancy"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Exhaustion"],
        components: { verbal: true, somatic: true, material: true, materialText: "wilted daisies & herbal powders worth 300+ gp, consumed" },
        concentration: false,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend three Hit Point Dice or the spell automatically fails. You touch a creature that has died within the last 10 minutes and return it to life with 1 Hit Point. In addition, roll the Hit Point Dice expended to cast the spell, and the creature gains Temporary Hit Points equal to the roll.\n\n" +
            "At the start of each of the target’s turns, it loses 1 Temporary Hit Point granted by this spell. While the creature has Temporary Hit Points granted by this spell, it moves with unnatural vigor, gaining a +2 bonus to ability checks, attack rolls, and saving throws. Once it loses the Temporary Hit Points granted by this spell, the creature gains 1 level of Exhaustion.\n\n" +
            "This spell can’t revive a creature that has died of old age, nor does it restore any missing body parts.",
        scalingMd: "",
        imagePath: spellImgUrl("reanimate"),
    },
    {
        slug: slugify("Reveal"),
        name: "Reveal",
        classes: ["Bard", "Ranger", "Wizard"],
        spellLevel: 3,
        school: "Divination",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "20-foot sphere",
        tags: ["Homebrew", "Detection"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "an eagle’s eye encased in glass" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A massive eye appears, revealing hidden creatures and objects in a 20-ft-radius sphere. Hidden creatures are revealed and emit a loud ringing when discovered. Invisible unattended objects have their invisibility dispelled. Invisible creatures make a Charisma save; on a failure, their invisibility is dispelled and their position revealed; on a success, they remain hidden.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase the sphere radius by 10 ft per slot level above 3rd.",
        imagePath: spellImgUrl("reveal"),
    },
    {
        slug: slugify("Sanctum of the Flock"),
        name: "Sanctum of the Flock",
        classes: ["Bard", "Cleric", "Paladin"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 minute",
        duration: "24 hours",
        range: "5 feet",
        area: "20-foot-radius sphere",
        tags: ["Crooked Moon", "Support", "Rest"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "powdered silver worth 25+ gp, consumed",
        },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a 20-foot-radius Sphere of faint, shimmering light centered on a point within range. You and a number of creatures of your choice up to your spellcasting ability modifier (minimum of 1 other creature) can absorb empowering magic from the Sphere.\n\n" +
            "When any of the chosen creatures finish a Short Rest in the area, the Sphere vanishes, and those creatures gain 2d10 Temporary Hit Points. For the remainder of the duration, they also have Advantage on Charisma checks that use one of their skill proficiencies.\n\n" +
            "Chosen creatures who don’t finish a Short Rest in the Sphere gain no benefit.",
        scalingMd: "",
        imagePath: spellImgUrl("sanctumoftheflock"),
    },
    {
        slug: slugify("Sanguine Poppet"),
        name: "Sanguine Poppet",
        classes: ["Bard", "Warlock",],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 minute",
        duration: "1 hour",
        range: "Touch",
        area: "1 creature",
        tags: ["Grim Hollow", "Sangromancy"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "an object shaped like a creature worth 1+ cp",
        },
        concentration: true,
        ritual: false,
        descriptionMd: "As part of casting this spell, you must expend three Hit Point Dice or the spell automatically fails. You smear the spell’s material component with your blood. The object shudders and becomes a poppet under your control.\n\n" +
            "The poppet’s AC equals 10 plus your Proficiency Bonus and your spellcasting ability modifier, and it has 30 Hit Points. If your poppet is ever reduced to 0 Hit Points or it is more than 1 mile away, the spell ends immediately. As a Bonus Action, you can command your poppet to move 30 feet, and you can see and hear through it until the start of your next turn.\n\n" +
            "As a Magic Action, you can cause the poppet to detonate in an explosion of blood, ending this spell. Roll the Hit Point Dice expended to cast this spell. Each creature in a 30-foot-radius Sphere centered on the poppet makes a Dexterity saving throw, taking Necrotic damage equal to the roll on a failed save or half as much damage on a successful one.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Expend +1 Hit Die per slot level above 3rd; duration +1 hour per slot level above 3rd.",
        imagePath: spellImgUrl("sanguinepoppet"),
    },
    {
        slug: slugify("Scarlet Dawn"),
        name: "Scarlet Dawn",
        classes: ["Cleric", "Druid", "Paladin", "Ranger", "Warlock", "Wizard",],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "20-foot-radius, 60-foot-high cylinder",
        tags: ["Crooked Moon", "Damage", "Healing (Constructs/Undead)"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "Crimson light shines down in a 20-foot-radius, 60-foot high Cylinder centered on a point within range. Each creature in that area that isn’t a Construct or Undead must make a Constitution saving throw, taking 4d10 Necrotic damage on a failed save or half as much damage on a successful one. Constructs and Undead in the area regain 4d10 Hit Points.\n\n" +
            "If any of this spell’s area overlaps with an area of Darkness created by a spell of level 3 or lower, that other spell is dispelled.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +1d10 and dispel threshold +1 level per slot level above 3rd.",
        imagePath: spellImgUrl("scarletdawn"),
    },
    {
        slug: slugify("Shadow Drain"),
        name: "Shadow Drain",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "15-foot emanation",
        tags: ["Crooked Moon", "Damage", "Control"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: ["Disadvantage"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Siphon vitality via shadow in a 15-ft emanation. You may designate creatures to be unaffected. A creature entering, starting its turn in, or when the emanation moves into its space must make a CHA save: on a fail, it takes 2d6 Necrotic and has disadvantage on attack rolls and ability checks until the end of its next turn (half damage only on success). A creature saves only once per turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("shadowdrain"),
    },
    {
        slug: slugify("Spider Bite"),
        name: "Spider Bite",
        classes: ["Druid", "Ranger", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Constitution",
        attackType: "Melee Spell Attack",
        damageTypes: ["Poison"],
        conditions: ["Poisoned (on failed save, up to 1 minute)"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Make a melee spell attack. On hit the target takes 4d12 Poison and must make a CON save or be Poisoned for 1 minute. It repeats the save at the end of each of its turns, ending the effect on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Plus an additional 1d12 Poison damage per spell slot level above 3rd.",
        imagePath: spellImgUrl("spiderbite"),
    },
    {
        slug: slugify("Summon Lesser Demons"),
        name: "Summon Lesser Demons",
        classes: ["Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "Multiple demons (hostile)",
        tags: ["Xanathar's Guide to Everything", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a vial of blood from a humanoid killed within 24 hours" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Summon 2 CR1, 4 CR 1/2, or 8 CR 1/4 demons (DM chooses). They are hostile to all. Roll group initiative. You can ward yourself with a blood circle that they can’t cross/target.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 6th–7th, double the number; at 8th–9th, triple.",
        imagePath: spellImgUrl("summonlesserdemons"),
    },
    {
        slug: slugify("Summon Monstrosity"),
        name: "Summon Monstrosity",
        classes: ["Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "1 monstrosity spirit",
        tags: ["Homebrew", "Summoning"],
        saveRequired: "None",
        attackType: "Melee",
        damageTypes: ["Piercing", "Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bone/fang statuette worth ≥ 300 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a magical monstrosity spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Monstrosity Spirit stat block. When you cast the spell, choose Blinker, Burrower, or Displacer. The creature resembles the creature of your choice, which determines certain traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>MONSTROSITY SPIRIT</h2>
    <hr>
    <p><em>Medium Monstrosity, Unaligned</em></p>

    <p>
      <strong>AC</strong> 11 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 35 + 15 for each spell level above 3rd<br>
      <strong>Speed</strong> 40 ft., Burrow 40 ft. <em>(Burrower only)</em>
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>INT</strong> 4</td><td>−3</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 12</td><td>+1</td><td>+1</td>
          <td><strong>WIS</strong> 16</td><td>+3</td><td>+3</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>CHA</strong> 5</td><td>−3</td><td>−3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Immunities</strong> —<br>
      <strong>Senses</strong> <a href="#">darkvision</a> 60 ft., <a href="#">tremorsense</a> 30 ft. <em>(Burrower only)</em>; Passive Perception 13<br>
      <strong>Languages</strong> Understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Blink (Blinker only).</strong> As a bonus action, the monstrosity magically teleports up to 30 feet to an unoccupied space it can see.</p>

    <p><strong>Displace (Displacer only).</strong> Attack rolls against the monstrosity have Disadvantage. If it’s hit by an attack this trait ceases to function until the start of its next turn.</p>

    <p><strong>Evasion (Displacer and Blinker only).</strong> If the monstrosity is subjected to an effect that allows a saving throw to take only half damage, it takes no damage on a success, and only half damage on a failure.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The monstrosity makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p><strong>Chomp.</strong> <em>Melee Weapon Attack:</em> your spell attack modifier to hit, reach 5 ft., one target.
       <em>Hit:</em> 1d10 + 3 + the spell’s level Piercing damage.</p>

    <p><strong>Lash (Displacer only).</strong> <em>Melee Weapon Attack:</em> your spell attack modifier to hit, reach 10 ft., one target.
       <em>Hit:</em> 1d4 + 3 + the spell’s level Slashing damage.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the higher slot wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("summonmonstrosity"),
    },
    {
        slug: slugify("Summon Plant"),
        name: "Summon Plant",
        classes: ["Druid", "Ranger"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "1 plant spirit",
        tags: ["Homebrew", "Summoning"],
        saveRequired: "None",
        attackType: "Melee",
        damageTypes: ["Bludgeoning", "Piercing"],
        conditions: ["Heavily Obscured (area, Blooming)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a herb-filled pot worth ≥ 200 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a plant spirit. It manifests in an unoccupied space you can see within range. This corporeal form uses the Plant Spirit stat block. When you cast the spell, choose a floral feature: Blooming, Oaken, or Thorny. The creature resembles an animated plant marked by the chosen floral feature, which determines one of the traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>PLANT SPIRIT</h2>
    <hr>
    <p><em>Medium (Large for Oak) Plant, Unaligned</em></p>

    <p>
      <strong>AC</strong> 11 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 35 + 10 for each spell level above 3rd<br>
      <strong>Speed</strong> 30 ft.; Climb 30 ft. <em>(Blooming and Thorny only)</em>
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>INT</strong> 4</td><td>−3</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 13</td><td>+1</td><td>+1</td>
          <td><strong>WIS</strong> 12</td><td>+1</td><td>+1</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 19</td><td>+4</td><td>+4</td>
          <td><strong>CHA</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Immunities</strong> <a href="#">Blinded</a>, <a href="#">Deafened</a>, Exhaustion, <a href="#">Stunned</a><br>
      <strong>Senses</strong> Tremorsense 30 ft. <em>(blind beyond this radius)</em>; Passive Perception 11<br>
      <strong>Languages</strong> Sylvan; understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your bonus)
    </p>

    <hr>

    <p><strong>Sylvan Regeneration.</strong> The spirit regains 1 Hit Point at the start of its turn if it has at least 1 Hit Point and is in direct sunlight.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The plant makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p><strong>Petal Burst (Blooming Only).</strong> The plant causes a burst of petals to fill the air within a 10-foot <em>Emanation</em>. The area is <em>Heavily Obscured</em> for 1 minute.</p>

    <p><strong>Slam.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d8 + 3 + the spell’s level Bludgeoning or Piercing damage <em>(Thorny only)</em>.</p>

    <h3>Reactions</h3>
    <p><strong>Oaken Shield (Oaken Only).</strong> When a creature within 5 feet of the plant takes damage from an attack, the plant takes the damage instead.</p>

    <p><strong>Prickly Protection (Thorny Only).</strong> When a creature within 5 feet of the plant attacks it, the plant makes a Slam attack with <em>Advantage</em> against that creature.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the higher slot wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("summonplant"),
    },
    {
        slug: slugify("Summon Sea Spirit"),
        name: "Summon Sea Spirit",
        classes: ["Druid", "Warlock"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "90-foot radius",
        tags: ["Grim Hollow", "Summoning"],
        saveRequired: "Varies",
        attackType: "Melee",
        damageTypes: ["Piercing", "Bludgeoning", "Psychic"],
        conditions: ["Charmed"],
        components: { verbal: true, somatic: true, material: true, materialText: "a jeweled sea-serpent statuette worth ≥ 300 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth an abyssal spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Sea Serpent stat block. When you cast the spell, choose an abhorrent feature: an Enormous Mouth, Glowing Lantern, or Scaled Wings. The creature resembles a monstrous sea creature marked by the chosen abhorrent feature, which determines one of the traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>SEA SERPENT SPIRIT</h2>
    <hr>
    <p><em>Large Monstrosity, Neutral</em></p>

    <p>
      <strong>AC</strong> 11 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 30 + 10 for each spell level above 3<br>
      <strong>Speed</strong> 30 ft., Fly 40 ft. <em>(Scaled Wings only)</em>, Swim 60 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td>
          <td><strong>INT</strong> 4</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 14</td><td>+2</td>
          <td><strong>WIS</strong> 10</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 13</td><td>+1</td>
          <td><strong>CHA</strong> 10</td><td>+0</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances</strong> Cold<br>
      <strong>Immunities</strong> Prone<br>
      <strong>Senses</strong> Darkvision 60 ft., Passive Perception 10<br>
      <strong>Languages</strong> Understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your bonus)
    </p>

    <p><strong>Flyby (Scaled Wings only).</strong> The sea serpent doesn’t provoke Opportunity Attacks when it flies out of an enemy’s reach.</p>

    <hr>

    <h3>Traits</h3>
    <p>
      <strong>Allure (Glowing Lantern only).</strong>
      The sea serpent causes a lantern hanging from one of its fins to glow eerily.
      <em>Wisdom Saving Throw:</em> DC equals your spell save DC, each creature in a 30-foot
      <a href="#">Emanation</a> originating from the sea serpent.
      <em>Failure:</em> The target is <a href="#">Charmed</a> by the sea serpent until the start of its next turn.
      Creatures have <a href="#">Advantage</a> on the saving throw if the sea serpent has dealt damage to them
      already this turn, and the Charmed condition ends immediately if the sea serpent deals damage to a creature
      Charmed by this ability.
    </p>

    <p>
      <strong>Inhale (Enormous Mouth only).</strong>
      <em>Strength Saving Throw:</em> DC equals your spell save DC, each creature in a 15-foot
      <a href="#">Cone</a>.
      <em>Failure:</em> 1d6 + the spell’s level Psychic damage and the creature is pulled 5 feet straight toward the serpent,
      or, if the creature is already within 5 feet of the sea serpent, it takes an additional 2d6 Piercing damage.
      <em>Success:</em> Half damage.
    </p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The sea serpent makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Bite.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
      <em>Hit:</em> 1d6 + 3 + the spell’s level Piercing damage and the creature has the
      <a href="#">Grappled</a> condition (escape DC equals your spell save DC). The Grappled condition ends if the sea serpent bites a different creature.
    </p>

    <p>
      <strong>Thrash.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 10 ft.
      <em>Hit:</em> 1d10 + 3 + the spell’s level Bludgeoning damage and the target is pushed 5 feet away from the sea serpent.
    </p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the slot level wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("summonseaspirit"),
    },
    {
        slug: slugify("Summon Shadowspawn"),
        name: "Summon Shadowspawn",
        classes: ["Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "90-foot radius",
        tags: ["Tasha's Cauldron of Everything", "Summoning"],
        saveRequired: "Wisdom",
        attackType: "Melee",
        damageTypes: ["Cold"],
        conditions: ["Frightened (scream)"],
        components: { verbal: true, somatic: true, material: true, materialText: "tears in a gem worth ≥ 300 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a shadowy spirit. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Shadow Spirit stat block. When you cast the spell, choose an emotion: Fury, Despair, or Fear. The creature resembles a misshapen biped marked by the chosen emotion, which determines certain traits in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your companions. In combat, the creature shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>SHADOW SPIRIT</h2>
    <hr>
    <p><em>Medium Monstrosity</em></p>

    <p>
      <strong>AC</strong> 11 + the level of the spell (natural armor)<br>
      <strong>HP</strong> 35 + 15 for each spell level above 3rd<br>
      <strong>Speed</strong> 40 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 13</td><td>+1</td>
          <td><strong>INT</strong> 4</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td>
          <td><strong>WIS</strong> 10</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 15</td><td>+2</td>
          <td><strong>CHA</strong> 16</td><td>+3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Resistances</strong> Necrotic<br>
      <strong>Condition Immunities</strong> <a href="#">Frightened</a><br>
      <strong>Senses</strong> Darkvision 120 ft., Passive Perception 10<br>
      <strong>Languages</strong> Understands the languages you speak<br>
      <strong>CR</strong> None (XP 0; PB equals your bonus)
    </p>

    <p><strong>Terror Frenzy (Fury Only).</strong> The spirit has Advantage on attack rolls against <a href="#">Frightened</a> creatures.</p>
    <p><strong>Weight of Sorrow (Despair Only).</strong> Any creature, other than you, that starts its turn within 5 feet of the spirit has its Speed reduced by 20 feet until the start of that creature’s next turn.</p>

    <hr>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Chilling Rend.</strong>
      <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft., one target.
      <em>Hit:</em> 1d12 + 3 + the spell’s level Cold damage.
    </p>

    <p>
      <strong>Dreadful Scream (1/Day).</strong>
      The spirit screams. Each creature within 30 feet of it must succeed on a Wisdom saving throw against your spell save DC or be
      <a href="#">Frightened</a> of the spirit for 1 minute. A Frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
    </p>

    <h3>Bonus Actions</h3>
    <p><strong>Shadow Stealth (Fear Only).</strong> While in dim light or darkness, the spirit takes the <a href="#">Hide</a> action.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the higher slot wherever the spell’s level appears in the stat block.",
        imagePath: spellImgUrl("summonshadowspawn"),
    },
    {
        slug: slugify("Summon Warrior Spirit"),
        name: "Summon Warrior Spirit",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
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
        components: { verbal: true, somatic: true, material: true, materialText: "a gilded playing card depicting a knight worth at least 300 gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a warrior spirit from the legendary Deck of Many Things. It manifests in an unoccupied space that you can see within range. This corporeal form uses the Warrior Spirit stat block. When you cast the spell, choose a type of warrior: Barbarian, Fighter, or Monk. The warrior resembles a humanoid armed appropriately to the chosen class, which determines certain traits in its stat block. The warrior disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The warrior is an ally to you and your companions. In combat, the warrior shares your initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>WARRIOR SPIRIT</h2>
    <hr>
    <p><em>Medium undead</em></p>

    <p>
      <strong>AC</strong> 13 + the level of the spell + 2 (Fighter only)<br>
      <strong>HP</strong> 30 (Barbarian &amp; Fighter only) or 20 (Monk only) + 10 for each spell level above 3rd<br>
      <strong>Speed</strong> 30 ft.; 40 ft. (Monk only)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th></th><th>MOD</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 16</td><td>+3</td>
          <td><strong>INT</strong> 10</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td>
          <td><strong>WIS</strong> 16</td><td>+3</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 14</td><td>+2</td>
          <td><strong>CHA</strong> 9</td><td>−1</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Saving Throws</strong> Str +3, Dex +3<br>
      <strong>Damage Resistances</strong> Poison<br>
      <strong>Senses</strong> Darkvision 60 ft., Passive Perception 13<br>
      <strong>Languages</strong> Common, understands the languages you speak<br>
      <strong>Challenge — Proficiency Bonus</strong> equals your bonus
    </p>

    <hr>

    <h3>Actions</h3>

    <p><strong>Multiattack.</strong> The warrior makes a number of attacks equal to half this spell’s level (rounded down).</p>

    <p>
      <strong>Reckless Strike (Barbarian Only).</strong>
      <em>Melee Weapon Attack:</em> your spell attack modifier to hit (with advantage), reach 5 ft., one target.
      <em>Hit:</em> 1d12 + 3 + the spell’s level slashing damage, and attacks made against the warrior until the start of its next turn are made with advantage.
    </p>

    <p>
      <strong>Rallying Strike (Fighter Only).</strong>
      <em>Melee or Ranged Weapon Attack:</em> your spell attack modifier to hit, reach 5 ft., or range 20/60 ft., one target.
      <em>Hit:</em> 1d6 + 3 + the spell’s level piercing damage, and the warrior can choose another creature it can see within 20 feet; the chosen gains 1d6 temporary hit points.
    </p>

    <p>
      <strong>Unarmed Strike (Monk Only).</strong>
      <em>Melee Weapon Attack:</em> your spell attack modifier to hit, reach 5 ft., one target.
      <em>Hit:</em> 1d4 + 3 + the spell’s level bludgeoning damage, and the target must succeed on a Strength saving throw against your spell save DC or be knocked prone.
    </p>

    <p>
      <strong>Flurry of Blows (Monk Only).</strong> The monk makes one <em>Unarmed Strike</em> attack as a bonus action.
    </p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the creature assumes the higher level for that casting wherever it uses the spell’s level in its stat block."
    },
    {
        slug: slugify("Swap"),
        name: "Swap",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "90 feet",
        area: "1 creature",
        tags: ["Heliana's Guide to Monster Hunting", "Utility"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You attempt to switch places with a Large or smaller target within range that you can see. The target must succeed on a Charisma saving throw or instantly teleport to your space whilst you teleport to the one it previously occupied.\n\nA creature automatically succeeds on this saving throw if there is not enough space to accommodate either of the teleporting creatures. A willing creature may choose to fail the saving throw.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the range of this spell increases by 30 feet for each slot level above 3rd. The maximum size of this spell’s target increases to Huge when cast at 6th level or higher, and to Gargantuan when cast at 9th level."
    },
    {
        slug: slugify("Thunder Pulse"),
        name: "Thunder Pulse",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "15-foot cone (repeatable each turn)",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Thunder"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You gather sonic energy and can expel as a shockwave in a 15 foot cone. Each creature in that area must make a Constitution saving throw. On a failed save, a creature takes 3d8 Thunder damage is knocked 10 feet away. On a successful save, the creature takes half as much damage and not being knocked away.\n\nYou can create a new shockwave as your action on subsequent turn until the spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a higher-level slot, the damage increases by 1d8 for each slot level above 3rd."
    },
    {
        slug: slugify("Thunder Step"),
        name: "Thunder Step",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "90 feet",
        area: "10-foot radius (from origin space)",
        tags: ["Xanathar's Guide to Everything", "Teleportation", "Damage"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Thunder"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You teleport yourself to an unoccupied space you can see within range. Immediately after you disappear, a thunderous boom sounds, and each creature within 10 feet of the space you left must make a Constitution saving throw, taking 3d10 Thunder damage on a failed save, or half as much damage on a successful one. The thunder can be heard from up to 300 feet away.\n\nYou can bring along objects as long as their weight doesn’t exceed what you can carry. You can also teleport one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell, and there must be an unoccupied space within 5 feet of your destination space for the creature to appear in; otherwise, the creature is left behind.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd."
    },
    {
        slug: slugify("Vigor Mortis"),
        name: "Vigor Mortis",
        classes: ["Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 undead creature",
        tags: ["Homebrew", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You take 2d4 necrotic damage (this damage cannot be reduced and ignores resistances and immunities). One undead of your choice that you can see within range regains Hit Points equal to twice the amount of damage you took.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 2d4 for each spell slot level above 3."
    },
    {
        slug: slugify("Vortex Blast"),
        name: "Vortex Blast",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-foot cone",
        tags: ["Homebrew", "Damage"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You create a sudden violent vortex that blasts outwards in a 30-foot cone, tossing characters and objects within the area. Creatures in the area take 2d6 Bludgeoning damage and must succeed a Strength saving throw or be knocked 20 feet backward and 40 feet upward.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
    },
    {
        slug: slugify("Wall of Sand"),
        name: "Wall of Sand",
        classes: ["Druid", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "90 feet",
        area: "30-foot line",
        tags: ["Elemental Evil Player's Companion", "Control", "Debuff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a handful of sand" },
        concentration: true,
        ritual: false,
        descriptionMd: "You conjure up a wall of swirling sand on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 10 feet thick, and it vanishes when the spell ends. It blocks line of sight but not movement. A creature is blinded while in the wall’s space and must spend 3 feet of movement for every 1 foot it moves there."
    },
    {
        slug: slugify("Wall of Water"),
        name: "Wall of Water",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "30x10x1 ft wall or 20-ft ring (1 ft thick)",
        tags: ["Elemental Evil Player's Companion", "Control", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of water" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create a wall of water on the ground at a point you can see within range. You can make the wall up to 30 feet long, 10 feet high, and 1 foot thick, or you can make a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall vanishes when the spell ends. The wall’s space is difficult terrain.\n\n" +
            "Any ranged weapon attack that enters the wall’s space has disadvantage on the attack roll, and fire damage is halved if the fire effect passes through the wall to reach its target. Spells that deal cold damage that pass through the wall cause the area of the wall they pass through to freeze solid (at least a 5-foot-square section is frozen). Each 5-foot-square frozen section has AC 5 and 15 hit points. Reducing a frozen section to 0 hit points destroys it. When a section is destroyed, the wall’s water doesn’t fill it."
    },
    {
        slug: slugify("Water Cannon"),
        name: "Water Cannon",
        classes: ["Druid", "Sorcerer", "Wizard",],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "30-foot line",
        tags: ["Homebrew", "Damage"],
        saveRequired: "Strength",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Unleash a spout of water in a 30-foot line, 5 feet wide. Creatures must make a Strength save or take 6d6 Bludgeoning and be pushed to an open space at the line’s end. If no open space, they are pushed to the closest space, take an additional 2d6 and are knocked prone. On a success, they take half and aren’t pushed."
    },
    {
        slug: slugify("Whirling Conflagration"),
        name: "Whirling Conflagration",
        classes: ["Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "15-foot radius",
        tags: ["Homebrew", "Damage"],
        saveRequired: "None",
        attackType: "Melee Weapon Attack",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: false, material: true, materialText: "a melee weapon you are proficient with worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Flourish the weapon used in the casting, then whirl it, igniting it in conflagration. Make a melee weapon attack against each creature within 15 feet (same roll vs. each). Each target takes 6d6 Fire on a hit, or half as much on a miss.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Deals an additional 1d6 per slot level above 3rd (on hit)."
    },
    {
        slug: slugify("Wither"),
        name: "Wither",
        classes: ["Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 round",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Debuff"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of powdered bone and sand" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Tear moisture from a body. The target makes a Constitution save. On a failed save, it takes 4d10 Necrotic and becomes withered until the start of your next turn; on a success, half damage and not withered. A withered creature gains vulnerability to fire if not resistant, or loses fire resistance if it had it.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d10 per slot level above 4th."
    },
    {
        slug: slugify("Wizard's Tower"),
        name: "Wizard's Tower",
        classes: ["Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "10 minutes",
        duration: "24 hours",
        range: "30 feet",
        area: "Two-story tower (each level up to 100 sq. ft.)",
        tags: ["Lost Laboratory of Kwalish", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a fragment of stone, wood, or other building material" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You conjure a two-story tower made of stone, wood, or similar suitably sturdy materials. The tower can be round or square; each level is 10 feet tall and up to 100 square feet with a ladder and hatch between levels. Choose each level’s form when you cast the spell:\n\n• Bedroom (bed, chairs, chest, magical fireplace)\n• Study (desks, books, shelves, parchments, ink, pens)\n• Dining space (table, chairs, magical fireplace, containers, utensils)\n• Lounge (couches, armchairs, side tables, footstools)\n• Washroom (toilets, washtubs, magical brazier, sauna benches)\n• Observatory (telescope, maps of the night sky)\n• Unfurnished\n\nThe interior is warm and dry. Furnishings dissipate if removed. When the duration ends, non-created creatures/objects appear safely outside and all traces of the tower vanish.\n\nCasting again while active maintains the tower for another 24 hours. Casting in the same location with the same configuration every week for a year creates a permanent tower.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** At 4th level or higher, the tower can have one additional story per slot level above 3rd."
    },
    {
        slug: slugify("Brimstone Nimbus"),
        name: "Brimstone Nimbus",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "150 feet",
        area: "15-foot-radius Sphere",
        tags: ["Illrigger Revised", "Damage", "Control", "Debuff", "New"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: ["Fire", "Psychic"],
        conditions: ["Blinded"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a piece of sulfur"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You manifest a pocket of Hell. A 15-foot-radius Sphere of darkness, brimstone, and blasting heat appears, centered on a point within range and lasting for the duration. The cloud of hellfire echoes with the cries of damned souls that can be heard by creatures within 30 feet of it. No light, even magical light, can illuminate the cloud, and any creatures fully within that area are Blinded.\n\n" +
            "The cloud warps the timescape, making the cloud’s area difficult terrain. A creature that starts its turn in the area takes 3d6 Fire damage. A creature that ends its turn in the area must succeed on a Wisdom saving throw or take 3d6 Psychic damage as the voices of the damned crowd its mind.",
        scalingMd: "",
        imagePath: spellImgUrl("brimstonenimbus")
    },
    {
        slug: slugify("Word of Binding"),
        name: "Word of Binding",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "1 creature",
        tags: ["Homebrew", "Damage", "Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Restrained"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You bind a foe in spectral chains.\n\n• If the target has 50 HP or fewer, it is Restrained for the duration.\n• Otherwise, the creature must succeed on a Strength saving throw or be Restrained until the end of its next turn.",
        scalingMd: ""
    },
    {
        slug: slugify("Animate Dead"),
        name: "Animate Dead",
        classes: ["Cleric", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 minute",
        duration: "Instantaneous",
        range: "10 feet",
        area: "1 pile of bones or 1 Humanoid corpse (Medium or Small)",
        tags: ["Player's Handbook", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a drop of blood, a piece of flesh, and a pinch of bone dust"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Choose bones or a Humanoid corpse within range: it becomes an Undead—Skeleton (bones) or Zombie (corpse). On each of your turns, you can use a bonus action to mentally command any creatures you created with this spell within 60 feet (same command to multiple at once). Without commands, they Dodge and move only to avoid harm. The creature obeys for 24 hours, after which it stops. To keep control for another 24 hours, cast this spell again on it; this recast can reassert control over up to four of your own undead.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Animate or reassert control over two additional undead per slot level above 3 (each from a different corpse or pile of bones).",
        imagePath: spellImgUrl("animatedead")
    },
    {
        slug: slugify("Aura of Vitality"),
        name: "Aura of Vitality",
        classes: ["Cleric", "Druid", "Paladin"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "30-foot emanation",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A 30-foot healing aura radiates from you. When the aura appears and at the start of each of your turns, you can restore 2d6 HP to one creature in it.",
        scalingMd: "",
        imagePath: spellImgUrl("auraofvitality")
    },
    {
        slug: slugify("Beacon of Hope"),
        name: "Beacon of Hope",
        classes: ["Cleric"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "Any number of creatures within 30 feet",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Choose any number of creatures in range. Until the spell ends, each target has advantage on Wisdom and Death saving throws and regains the maximum possible HP from any healing.",
        scalingMd: "",
        imagePath: spellImgUrl("beaconofhope")
    },
    {
        slug: slugify("Bestow Curse"),
        name: "Bestow Curse",
        classes: ["Bard", "Cleric", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Debuff"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd: "You touch a creature, which must succeed on a Wisdom saving throw or become cursed for the duration. Until the curse ends, the target suffers one of the following effects of your choice:\n\n" +
            "• **Choose one ability.** The target has Disadvantage on ability checks and saving throws made with that ability.\n" +
            "• The target has Disadvantage on attack rolls against you.\n" +
            "• In combat, the target must succeed on a Wisdom saving throw at the start of each of its turns or be forced to take the Dodge action on that turn.\n" +
            "• If you deal damage to the target with an attack roll or a spell, the target takes an extra 1d8 Necrotic damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** 4th level: up to 10 minutes. 5th–6th: no concentration, 8 hours. 7th–8th: no concentration, 24 hours. 9th: lasts until dispelled.",
        imagePath: spellImgUrl("bestowcurse")
    },
    {
        slug: slugify("Blinding Smite"),
        name: "Blinding Smite",
        classes: ["Paladin"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "1 creature",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Immediately after you hit with a melee weapon or Unarmed Strike, the target takes +3d8 Radiant and has Blinded until the spell ends. At the end of each of its turns, the target makes a Constitution save, ending the spell on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Extra radiant damage increases by 1d8 per slot level above 3rd.",
        imagePath: spellImgUrl("blindingsmite")
    },
    {
        slug: slugify("Blink"),
        name: "Blink",
        classes: ["Artificer", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Self",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "At the end of each of your turns, roll 1d6. On 4–6, you shift to the Ethereal Plane until the start of your next turn (or the spell ends if you’re already there). While ethereal, you can see the previous plane in grayscale out to 60 feet and interact only with ethereal creatures. You return to an unoccupied space within 10 feet of where you vanished (nearest if none within 10 feet).",
        scalingMd: "",
        imagePath: spellImgUrl("blink")
    },
    {
        slug: slugify("Call Lightning"),
        name: "Call Lightning",
        classes: ["Druid"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "120 feet",
        area: "Storm cloud cylinder (10 ft. tall, 60 ft. radius); 5-foot strike point",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A storm cloud forms overhead. When cast, choose a point under the cloud: creatures within 5 feet make a Dexterity save, taking 3d10 Lightning on a fail or half on a success. On later turns, take a Magic action to strike again at the same or a different point. If you cast this during a natural storm, the damage increases by 1d10.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d10 per slot level above 3rd.",
        imagePath: spellImgUrl("calllightning")
    },
    {
  slug: slugify("Intercept"),
  name: "Intercept",
  classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
  spellLevel: 3,
  school: "Divination",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "30 feet",
  area: "30-foot-radius sphere",
  tags: ["Heliana's Guide to Monster Hunting", "Communication", "New"],
  saveRequired: "None",
  attackType: "None",
  damageTypes: [],
  conditions: [],
  components: {
    verbal: true,
    somatic: true,
    material: true,
    materialText: "a copper wire twisted into a loop and a drop of ink"
  },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You establish a fixed field of magical interception centered on a point you can see within range. The field fills a 30-foot-radius sphere and is invisible unless revealed by magic or by its effects.\n\n" +
    "While the field lasts, whenever a magical message would pass through any part of the sphere by means of a spell such as sending or similar magic, you receive that message first. You immediately learn the message’s contents and the direction from which it entered the field.\n\n" +
    "When you receive the message, choose one of the following effects:\n\n" +
    "**Pass Through.** The message continues to its intended recipient normally.\n\n" +
    "**Hold.** The message is delayed and doesn’t reach its intended recipient unless you take an action while within 1 mile of the field to release it. If you don’t release the message within 1 minute, it is lost.\n\n" +
    "**Block.** The message is intercepted and fails to reach its intended recipient.\n\n" +
    "You know when a held message expires and when a passed-through message leaves the field.\n\n" +
    "This spell intercepts only magical messages that travel through the area. It doesn’t affect magical effects that merely target a creature in the area without transmitting a message through it.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 5th level or higher, the radius increases by 30 feet for each slot level above 4.",
  imagePath: spellImgUrl("intercept")
},
    {
        slug: slugify("Clairvoyance"),
        name: "Clairvoyance",
        classes: ["Bard", "Cleric", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Divination",
        castingTime: "10 minutes",
        duration: "10 minutes",
        range: "1 mile",
        area: "Invisible sensor at a familiar or obvious location",
        tags: ["Player's Handbook", "Scrying", "Detection", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a jeweled horn (hearing) or a glass eye (seeing) worth 100+ gp"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create an invisible, invulnerable sensor at a familiar or obvious location. Choose seeing or hearing and perceive through the sensor as if present; as a bonus action you can switch senses. Creatures that can see invisibility or have truesight perceive the sensor as a small luminous orb.",
        scalingMd: "",
        imagePath: spellImgUrl("clairvoyance")
    },
    {
        slug: slugify("Conjure Animals"),
        name: "Conjure Animals",
        classes: ["Druid", "Ranger"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "Large spectral pack (your choice of animal form)",
        tags: ["Player's Handbook", "Damage", "Buff"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Slashing"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Spectral nature spirits appear as a Large pack in an unoccupied space. While within 5 feet of the pack, you have advantage on Strength saves. When you move on your turn, you can also move the pack up to 30 feet. When the pack moves within 10 feet of a creature you can see—or a creature enters/ends its turn within 10 feet—you can force a Dexterity save; on a failure it takes 3d10 Slashing (once per creature per turn).",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d10 per slot level above 3rd.",
        imagePath: spellImgUrl("conjureanimals")
    },
    {
        slug: slugify("Conjure Barrage"),
        name: "Conjure Barrage",
        classes: ["Ranger"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "60-foot cone",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a melee or ranged weapon worth at least 1 cp" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You brandish the casting weapon and conjure spectral copies that surge forward. Creatures of your choice in a 60-foot cone make a Dexterity save, taking 5d8 Force on a fail or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d8 per slot level above 3rd.",
        imagePath: spellImgUrl("conjurebarrage")
    },
    {
        slug: slugify("Counterspell"),
        name: "Counterspell",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 reaction",
        duration: "Instantaneous",
        range: "60 feet",
        area: "60-foot radius",
        tags: ["Player's Handbook", "Negation"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: false, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "When you see a creature within 60 feet casting a spell with V/S/M components, you interrupt it. The caster makes a Constitution save. Failure: the spell fizzles, its action is wasted, and if it used a slot, the slot isn’t expended. Reaction trigger: seeing a creature cast such a spell.",
        scalingMd: "",
        imagePath: spellImgUrl("counterspell")
    },
    {
        slug: slugify("Create Food and Water"),
        name: "Create Food and Water",
        classes: ["Artificer", "Cleric", "Paladin"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "Food and water in containers or on ground",
        tags: ["Player's Handbook", "Creation"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Create 45 pounds of food and 30 gallons of fresh water within range. The food is bland but nourishing (appearance of your choice) and spoils after 24 hours if uneaten.",
        scalingMd: "",
        imagePath: spellImgUrl("createfoodandwater")
    },
    {
        slug: slugify("Crusader's Mantle"),
        name: "Crusader's Mantle",
        classes: ["Paladin"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "30-foot emanation",
        tags: ["Player's Handbook", "Damage", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Radiant"],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A 30-foot aura surrounds you. While inside it, you and your allies deal +1d4 Radiant when you hit with a weapon or Unarmed Strike.",
        scalingMd: "",
        imagePath: spellImgUrl("crusadersmantle")
    },
    {
        slug: slugify("Daylight"),
        name: "Daylight",
        classes: ["Cleric", "Druid", "Paladin", "Ranger", "Sorcerer"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "60 feet",
        area: "60-foot sphere",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Sunlight fills a 60-foot-radius sphere (bright light, plus 60 feet of dim light). Alternatively enchant an unattended object, causing a 60-foot emanation from it; covering the object blocks the light. If any area overlaps magical darkness of level 3 or lower, that darkness is dispelled.",
        scalingMd: "",
        imagePath: spellImgUrl("daylight")
    },
    {
        slug: slugify("Dispel Magic"),
        name: "Dispel Magic",
        classes: ["Artificer", "Bard", "Cleric", "Druid", "Paladin", "Ranger", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "1 creature",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "End one or more spells affecting a target. Spells of 3rd level or lower end automatically. For each spell of 4th level or higher, make a check using your spellcasting ability (DC 10 + spell’s level); on a success, that spell ends.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Automatically end a spell if its level is ≤ your slot level.",
        imagePath: spellImgUrl("dispelmagic")
    },
    {
        slug: slugify("Elemental Weapon"),
        name: "Elemental Weapon",
        classes: ["Artificer", "Druid", "Paladin", "Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1 nonmagical weapon",
        tags: ["Player's Handbook", "Damage", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A nonmagical weapon becomes magical. Choose Acid, Cold, Fire, Lightning, or Thunder. For the duration, the weapon gains +1 to attack rolls and deals an extra 1d4 of the chosen damage type on a hit.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** 5th–6th level: +2 to hit and 2d4 extra damage. 7th+: +3 and 3d4 extra damage.",
        imagePath: spellImgUrl("elementalweapon")
    },
    {
        slug: slugify("Fear"),
        name: "Fear",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "30-foot cone",
        tags: ["Player's Handbook", "Control", "Debuff"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Frightened"],
        components: { verbal: true, somatic: true, material: true, materialText: "a white feather" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Creatures in a 30-foot cone make a Wisdom save or drop what they’re holding and have Frightened for the duration. A frightened creature must Dash away by the safest route each turn if possible. If it ends its turn where it can’t see you, it makes a Wisdom save; on a success, the effect ends for it.",
        scalingMd: "",
        imagePath: spellImgUrl("fear")
    },
    {
        slug: slugify("Feign Death"),
        name: "Feign Death",
        classes: ["Bard", "Cleric", "Druid", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action (ritual)",
        duration: "1 hour",
        range: "Touch",
        area: "1  creature",
        tags: ["Player's Handbook", "Buff", "Debuff", "Deception"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Blinded", "Incapacitated", "Poisoned (Immunity)"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pinch of graveyard dirt" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You place a willing creature in a cataleptic state indistinguishable from death. For the duration, the target appears dead, is Blinded, Incapacitated, has Speed 0, has resistance to all damage except Psychic, and has immunity to the Poisoned condition.",
        scalingMd: "",
        imagePath: spellImgUrl("feigndeath")
    },
    {
        slug: slugify("Fireball"),
        name: "Fireball",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "150 feet",
        area: "20-foot-radius sphere",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Fire"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a ball of bat guano and sulfur" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A bright streak blossoms into a fiery explosion at a point you choose. Creatures in a 20-foot-radius sphere make a Dexterity save, taking 8d6 Fire on a failure or half on a success. Unattended flammables ignite.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage increases by 1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("fireball")
    },
    {
        slug: slugify("Fly"),
        name: "Fly",
        classes: ["Artificer", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Touch",
        area: "1  creature",
        tags: ["Player's Handbook", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a feather" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A willing creature gains a Fly speed 60 ft. and can hover. When the spell ends, the target falls if still aloft unless it can stop the fall.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target +1 creature per slot level above 3rd.",
        imagePath: spellImgUrl("fly")
    },
    {
        slug: slugify("Gaseous Form"),
        name: "Gaseous Form",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1  creature",
        tags: ["Player's Handbook", "Buff", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of gauze" },
        concentration: true,
        ritual: false,
        descriptionMd: "A willing creature you touch shape-shifts, along with everything it’s wearing and carrying, into a misty cloud for the duration. The spell ends on the target if it drops to 0 Hit Points or if it takes a Magic action to end the spell on itself.\n\n" +
            "While in this form, the target’s only method of movement is a Fly Speed of 10 feet, and it can hover. The target can enter and occupy the space of another creature. The target has Resistance to Bludgeoning, Piercing, and Slashing damage; it has Immunity to the Prone condition; and it has Advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through narrow openings, but it treats liquids as though they were solid surfaces.\n\n" +
            "The target can’t talk or manipulate objects, and any objects it was carrying or holding can’t be dropped, used, or otherwise interacted with. Finally, the target can’t attack or cast spells.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Target +1 creature per slot level above 3rd.",
        imagePath: spellImgUrl("gaseousform")
    },
    {
        slug: slugify("Glyph of Warding"),
        name: "Glyph of Warding",
        classes: ["Artificer", "Bard", "Cleric", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 hour",
        duration: "Until dispelled or triggered",
        range: "Touch",
        area: "Glyph ≤10-foot diameter on surface or in closable object",
        tags: ["Player's Handbook", "Damage", "Control", "Warding", "Trap"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "powdered diamond worth 200+ gp (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You inscribe a glyph that later unleashes a magical effect. You inscribe it either on a surface (such as a table or a section of floor) or within an object that can be closed (such as a book or chest) to conceal the glyph. The glyph can cover an area no larger than 10 feet in diameter. If the surface or object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered.\n\n" +
            "The glyph is nearly imperceptible and requires a successful Wisdom (Perception) check against your spell save DC to notice.\n\n" +
            "When you inscribe the glyph, you set its trigger and choose whether it’s an explosive rune or a spell glyph, as explained below.\n\n" +
            "**Set the Trigger.** You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, common triggers include touching or stepping on the glyph, removing another object covering it, or approaching within a certain distance of it. For glyphs inscribed within an object, common triggers include opening that object or seeing the glyph. Once a glyph is triggered, this spell ends.\n\n" +
            "You can refine the trigger so that only creatures of certain types activate it (for example, the glyph could be set to affect Aberrations). You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password.\n\n" +
            "**Explosive Rune.** When triggered, the glyph erupts with magical energy in a 20-foot-radius Sphere centered on the glyph. Each creature in the area makes a Dexterity saving throw. A creature takes 5d8 Acid, Cold, Fire, Lightning, or Thunder damage (your choice when you create the glyph) on a failed save or half as much damage on a successful one.\n\n" +
            "**Spell Glyph.** You can store a prepared spell of level 3 or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way.\n\n" +
            "When the glyph is triggered, the stored spell takes effect. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons Hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires Concentration, it lasts until the end of its full duration.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Explosive Rune damage +1d8 per slot level above 3rd. Spell Glyph can store any spell up to the slot level used.",
        imagePath: spellImgUrl("glyphofwarding")
    },
    {
        slug: slugify("Tidal Wave"),
        name: "Tidal Wave",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "120 feet",
        area: "30-foot line",
        tags: ["Elemental Evil Player's Companion", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a drop of water"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You conjure up a wave of water that crashes down on an area within range. The area can be up to 30 feet long, up to 10 feet wide, and up to 10 feet tall. Each creature in that area must make a Dexterity saving throw. On a failed save, the creature takes 4d8 Bludgeoning damage and is knocked Prone. On a successful save, the creature takes half as much damage and isn’t knocked Prone.\n\n" +
            "The water then spreads out across the ground in all directions, extinguishing unprotected flames in its area and within 30 feet of it, and then it vanishes.",
        scalingMd: "",
        imagePath: spellImgUrl("tidalwave")
    },
    {
        slug: slugify("Haste"),
        name: "Haste",
        classes: ["Artificer", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "1  creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a shaving of licorice root" },
        concentration: true,
        ritual: false,
        descriptionMd: "Choose a willing creature that you can see within range. Until the spell ends, the target’s Speed is doubled, it gains a +2 bonus to Armor Class, it has Advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used to take only the Attack (one attack only), Dash, Disengage, Hide, or Utilize action.\n\n" +
            "When the spell ends, the target is Incapacitated and has a Speed of 0 until the end of its next turn, as a wave of lethargy washes over it.",
        scalingMd: "",
        imagePath: spellImgUrl(" haste")
    },
    {
        slug: slugify("Hunger of Hadar"),
        name: "Hunger of Hadar",
        classes: ["Warlock"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "150 feet",
        area: "20-foot-radius sphere of magical darkness",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Cold", "Acid"],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: true, materialText: "a pickled tentacle" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Open a Far Realm void: a whispering, slurping darkness that no light illuminates; the area is difficult terrain and creatures fully inside are Blinded. Creatures that start their turn in it take 2d6 Cold. Creatures that end their turn in it make a Dexterity or take 2d6 Acid.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase either the Cold or Acid damage (your choice) by 1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("hungerofhadar")
    },
    {
        slug: slugify("Hypnotic Pattern"),
        name: "Hypnotic Pattern",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Illusion",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "30-foot cube",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed", "Incapacitated"],
        components: { verbal: false, somatic: true, material: true, materialText: "a pinch of confetti" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A twisting pattern flashes and vanishes. Creatures in the area who can see it make a Wisdom save or are Charmed, Incapacitated, and Speed 0 for the duration. The effect ends for a creature if it takes damage or if another creature uses an action to shake it out of the stupor.",
        scalingMd: "",
        imagePath: spellImgUrl("hypnoticpattern")
    },
    {
        slug: slugify("Incite Greed"),
        name: "Incite Greed",
        classes: ["Bard", "Wizard"],
        spellLevel: 3,
        school: "Enchantment",
        castingTime: "1 action",
        duration: "1 minute",
        range: "30 feet",
        area: "Any number of creatures within 30 feet",
        tags: ["Acquisitions Incorporated", "Control", "Debuff"],
        saveRequired: "Wisdom",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Charmed"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a gem worth at least 50 gp"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "When you cast this spell, you present the gem used as the material component and choose any number of creatures within range that can see you. Each target must succeed on a Wisdom saving throw or be Charmed by you until the spell ends, or until you or your companions do anything harmful to it.\n\n" +
            "While Charmed in this way, a creature can do nothing but use its movement to approach you in a safe manner. While an affected creature is within 5 feet of you, it can’t move and instead simply stares greedily at the gem you present.\n\n" +
            "At the end of each of its turns, an affected target can make a Wisdom saving throw, ending the effect on itself on a success.",
        scalingMd: "",
        imagePath: spellImgUrl("incitegreed")
    },
    {
        slug: slugify("Life Transference"),
        name: "Life Transference",
        classes: ["Cleric", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "30 feet",
        area: "1 creature",
        tags: ["Xanathar's Guide to Everything", "Healing"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Necrotic"],
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
            "You sacrifice some of your health to mend another creature’s injuries. You take 4d8 Necrotic damage, which can’t be reduced in any way, and one creature of your choice that you can see within range regains a number of Hit Points equal to twice the Necrotic damage you take.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
        imagePath: spellImgUrl("lifetransference")
    },
    {
        slug: slugify("Light Snare"),
        name: "Light Snare",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "60 feet",
        area: "1 creature",
        tags: ["Obojima", "Control", "Debuff", "New"],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: [],
        conditions: ["Restrained"],
        components: {
            verbal: true,
            somatic: true,
            material: false,
            materialText: ""
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A shimmering band of light streaks toward a target within range and envelops it in a spectacular burst of light. Make a ranged spell attack against the target. On a hit, the target is Restrained, and it is magically fixed in place until the end of its next turn.",
        scalingMd: "",
        imagePath: spellImgUrl("lightsnare")
    },
    {
        slug: slugify("Leomund's Tiny Hut"),
        name: "Leomund's Tiny Hut",
        classes: ["Bard", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Self",
        area: "10-foot emanation",
        tags: ["Player's Handbook", "Utility"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a crystal bead" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "A comfortable, opaque-from-outside dome encloses a 10-ft emanation centered on you. Creatures/objects inside at casting can pass freely; others can’t. Spells of 3rd level or lower can’t be cast through, nor can their effects extend inside. Interior lighting can be Dim or Darkness. The dome ends early if you leave or recast.",
        scalingMd: "",
        imagePath: spellImgUrl("leomundstinyhut")
    },
    {
        slug: slugify("Lightning Arrow"),
        name: "Lightning Arrow",
        classes: ["Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "Target + 10-foot burst",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd: "As your attack hits or misses the target, the weapon or ammunition you’re using transforms into a lightning bolt. Instead of taking any damage or other effects from the attack, the target takes 4d8 Lightning damage on a hit or half as much damage on a miss. Each creature within 10 feet of the target then makes a Dexterity saving throw, taking 2d8 Lightning damage on a failed save or half as much damage on a successful one.\n\n" +
            "The weapon or ammunition then returns to its normal form.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Increase both damage values by 1d8 per slot level above 3rd.",
        imagePath: spellImgUrl("lightningarrow")
    },
    {
        slug: slugify("Lightning Bolt"),
        name: "Lightning Bolt",
        classes: ["Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "100-foot line",
        tags: ["Player's Handbook", "Damage"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: ["Lightning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of fur and a crystal rod" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A 100-foot-long, 5-foot-wide lightning bolt blasts out from you. Creatures in the line make a Dexterity, taking 8d6 Lightning on a failure or half on a success.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("lightningbolt")
    },
    {
        slug: slugify("Magic Circle"),
        name: "Magic Circle",
        classes: ["Cleric", "Paladin", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 minute",
        duration: "1 hour",
        range: "10 feet",
        area: "10-foot-radius, 20-foot-tall cylinder",
        tags: ["Player's Handbook", "Warding"],
        saveRequired: "Charisma",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "salt and powdered silver worth 100+ gp (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd: "You create a 10-foot-radius, 20-foot-tall Cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the Cylinder intersects with the floor or other surface.\n\n" +
            "Choose one or more of the following types of creatures: Celestials, Elementals, Fey, Fiends, or Undead. The circle affects a creature of the chosen type in the following ways:\n\n" +
            "• The creature can’t willingly enter the Cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw.\n" +
            "• The creature has Disadvantage on attack rolls against targets within the Cylinder.\n" +
            "• Targets within the Cylinder can’t be possessed by or gain the Charmed or Frightened condition from the creature.\n\n" +
            "Each time you cast this spell, you can cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the Cylinder and protecting targets outside it.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Duration +1 hour per slot level above 3rd.",
        imagePath: spellImgUrl("magiccircle")
    },
    {
        slug: slugify("Major Image"),
        name: "Major Image",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Illusion",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "120 feet",
        area: "Image up to a 20-foot cube",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a bit of fleece" },
        concentration: true,
        ritual: false,
        descriptionMd: "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot Cube. The image appears at a spot that you can see within range and lasts for the duration. It seems real, including sounds, smells, and temperature appropriate to the thing depicted, but it can’t deal damage or cause conditions.\n\n" +
            "If you are within range of the illusion, you can take a Magic action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\n\n" +
            "Physical interaction with the image reveals it to be an illusion, for things can pass through it. A creature that takes a Study action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** With a 4th-level+ slot, the illusion lasts until dispelled and doesn’t require concentration.",
        imagePath: spellImgUrl("majorimage")
    },
    {
        slug: slugify("Mass Healing Word"),
        name: "Mass Healing Word",
        classes: ["Bard", "Cleric"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 bonus action",
        duration: "Instantaneous",
        range: "Self",
        area: "60-foot radius",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Up to six creatures regain 2d4 + your spellcasting modifier Hit Points.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Healing +1d4 per slot level above 3rd.",
        imagePath: spellImgUrl("masshealingword")
    },
    {
        slug: slugify("Meld into Stone"),
        name: "Meld into Stone",
        classes: ["Cleric", "Druid", "Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action (ritual)",
        duration: "8 hours",
        range: "Touch",
        area: "1  creature (self typically) and a contiguous stone",
        tags: ["Player's Handbook", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Force"],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "You merge into a stone object/surface large enough to contain you. You are hidden from nonmagical senses, can’t see outside, and have disadvantage on hearing checks. You can cast spells on yourself. Use 5 ft. of movement to exit where you entered (ending the spell). Partial destruction or reshaping that ejects you deals 6d6 Force; complete destruction/transmutation ejects you for 50 Force and leaves you Prone in the nearest space.",
        scalingMd: "",
        imagePath: spellImgUrl("meldintostone")
    },
    {
        slug: slugify("Nondetection"),
        name: "Nondetection",
        classes: ["Bard", "Ranger", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "8 hours",
        range: "Touch",
        area: "1  creature, place, or object ≤10 ft. in any dimension",
        tags: ["Player's Handbook", "Deception"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "diamond dust worth 25+ gp (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "The target can’t be targeted by Divination spells or perceived by magical scrying sensors for the duration.",
        scalingMd: "",
        imagePath: spellImgUrl("nondetection")
    },
    {
        slug: slugify("Phantom Steed"),
        name: "Phantom Steed",
        classes: ["Wizard"],
        spellLevel: 3,
        school: "Illusion",
        castingTime: "1 minute",
        duration: "1 hour",
        range: "30 feet",
        area: "1 quasi-real Large mount",
        tags: ["Player's Handbook", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Conjure a Large, horse-like mount (with saddle, bit, bridle) in an unoccupied space. It uses the Riding Horse stat block but has Speed 100 ft. and can travel 13 miles/hour. Equipment vanishes if taken >10 ft. from it. The steed ends early if it takes any damage; when the spell ends, it fades and the rider has 1 minute to dismount.",
        scalingMd: "",
        imagePath: spellImgUrl("phantomsteed")
    },
    {
        slug: slugify("Plant Growth"),
        name: "Plant Growth",
        classes: ["Bard", "Druid", "Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "Special",
        duration: "Instantaneous",
        range: "150 feet",
        area: "Overgrowth: 100-foot-radius sphere; Enrichment: 1/2 mile radius",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Overgrowth (Action): Normal plants in a 100-ft-radius sphere become thick; movement costs 4 ft./1 ft. You can exclude areas. Enrichment (8 hours): Plants in a ½-mile radius are enriched for 365 days, doubling food yield (one plant growth benefit per year).",
        scalingMd: "",
        imagePath: spellImgUrl("plantgrowth")
    },
    {
        slug: slugify("Protection from Energy"),
        name: "Protection from Energy",
        classes: ["Artificer", "Cleric", "Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1  creature",
        tags: ["Player's Handbook", "Buff", "Warding"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: ["Acid", "Cold", "Fire", "Lightning", "Thunder"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "The target gains resistance to one damage type of your choice: Acid, Cold, Fire, Lightning, or Thunder.",
        scalingMd: "",
        imagePath: spellImgUrl("protectionfromenergy")
    },
    {
        slug: slugify("Remove Curse"),
        name: "Remove Curse",
        classes: ["Cleric", "Paladin", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Abjuration",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "End all curses affecting one creature or object. On a cursed magic item, the curse remains on the item, but this spell breaks attunement so it can be removed or discarded.",
        scalingMd: "",
        imagePath: spellImgUrl("removecurse")
    },
    {
        slug: slugify("Revivify"),
        name: "Revivify",
        classes: ["Artificer", "Cleric", "Druid", "Paladin", "Ranger"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Touch",
        area: "1 creature",
        tags: ["Player's Handbook", "Healing"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a diamond worth 300+ gp (consumed)" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Touch a creature that died within the last minute; it returns to life with 1 HP. Doesn’t work on old-age death and doesn’t restore missing body parts.",
        scalingMd: "",
        imagePath: spellImgUrl("revivify")
    },
    {
        slug: slugify("Sending"),
        name: "Sending",
        classes: ["Bard", "Cleric", "Wizard"],
        spellLevel: 3,
        school: "Divination",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Unlimited",
        area: "1 creature",
        tags: ["Player's Handbook", "Communication"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a copper wire" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Send a 25-word message to a creature you’ve met (or described by someone who has). The target hears it in its mind, recognizes you if it knows you, and can reply immediately in kind. Works across any distance and across planes (5% failure if on another plane, which you learn). A recipient can block further messages from you for 8 hours.",
        scalingMd: "",
        imagePath: spellImgUrl("sending")
    },
    {
        slug: slugify("Sleet Storm"),
        name: "Sleet Storm",
        classes: ["Druid", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "150 feet",
        area: "20-foot-radius, 40-foot-tall cylinder",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Dexterity",
        attackType: "None",
        damageTypes: [],
        conditions: ["Prone"],
        components: { verbal: true, somatic: true, material: true, materialText: "a miniature umbrella" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "A cylinder of heavy sleet creates heavy obscurement and douses flames. Ground becomes difficult terrain. When a creature enters or starts its turn in the area, it must succeed on a Dexterity or fall Prone and lose concentration (if concentrating).",
        scalingMd: "",
        imagePath: spellImgUrl("sleetstorm")
    },
    {
        slug: slugify("Slow"),
        name: "Slow",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "40-foot cube",
        tags: ["Player's Handbook", "Control", "Debuff"],
        saveRequired: "WIS Save",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a drop of molasses" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Alter time around up to six creatures in a 40-ft cube. On a failed Wisdom save: Speed halved, –2 to AC and Dexteritys, no reactions, and on its turn it can take either an action or a bonus action (not both) and can make only one attack with the Attack action. 25% chance a spell with Somatic components fails. Affected targets repeat the save at end of each of their turns to end the effect.",
        scalingMd: "",
        imagePath: spellImgUrl("slow")
    },
    {
        slug: slugify("Speak with Dead"),
        name: "Speak with Dead",
        classes: ["Bard", "Cleric", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "10 feet",
        area: "1 corpse",
        tags: ["Player's Handbook", "Communication", "Social"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "burning incense" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Animate a corpse’s animating spirit (not the soul) to answer up to five questions. It knows only what it knew in life, in its known languages, and may be brief, cryptic, or evasive—especially if hostile. Fails if the corpse was Undead at death or was targeted by this spell in the last 10 days.",
        scalingMd: "",
        imagePath: spellImgUrl("speakwithdead")
    },
    {
    slug: slugify("Rejuvenate"),
    name: "Rejuvenate",
    classes: ["Bard", "Cleric", "Druid", "Paladin"],
    spellLevel: 3,
    school: "Abjuration",
    castingTime: "1 action",
    duration: "1 hour",
    range: "Touch",
    area: "1 creature",
    tags: ["Healing", "Buff", "Homebrew", "New"],
    saveRequired: "None",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: ""
    },
    concentration: false,
    ritual: false,
    descriptionMd:
        "You awaken a deep restorative pattern in a creature’s body. Choose one creature you touch. For the duration, whenever the target regains Hit Points through a spell, it regains additional Hit Points equal to your spellcasting ability modifier (minimum 1).\n\n" +
        "A creature can gain this additional healing only once on each of its turns.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the additional Hit Points increase by 1 for each slot level above 3rd.",
    imagePath: spellImgUrl("rejuvenate")
},
{
  slug: slugify("Will of The Wisps"),
  name: "Will of The Wisps",
  classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
  spellLevel: 3,
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 minute",
  range: "Self",
  area: "Self",
  tags: ["Homebrew", "Damage", "New"],
  saveRequired: "None",
  attackType: "Ranged",
  damageTypes: ["Cold", "Necrotic"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "You conjure 3 Will-o'-Wisps that hover around you, humming gently, for the duration. While you have 2 or more of these wisps, your Armor Class increases by 2.\n\n" +
    "As a Bonus Action, you can cause one Will-o'-Wisp to fly at one creature you can see within 60 feet of yourself. Make a ranged spell attack against the target. On a hit, the target takes 2d6 Cold damage plus 2d4 Necrotic damage. Hit or miss, the attacking wisp then dissipates.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** The number of wisps created increases by 1 when you cast this spell using a spell slot 2 levels higher than 3rd, and again for every 2 slot levels thereafter.",
  imagePath: spellImgUrl("willofthewisps")
},
{
  slug: slugify("Lip Weld"),
  name: "Lip Weld",
  classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
  spellLevel: 3,
  school: "Transmutation",
  castingTime: "1 reaction",
  duration: "1 minute",
  range: "60 feet",
  area: "Single target",
  tags: ["Heliana's Guide to Monster Hunting", "Biomancy", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Slashing"],
  conditions: ["Silenced"],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "You take this Reaction when a creature within range vocalizes. You make a sharp sound and hold up a finger in an attempt to interrupt it. The target must make a Constitution saving throw. On a failed save, the target is silenced for the duration as its mouth fuses shut.\n\n" +
    "If you silence a target that is casting a spell with Verbal components, the spell slot isn’t expended, but the target’s action is wasted.\n\n" +
    "At the end of each of its turns, the target can make a Strength saving throw, trying to tear open its mouth. On a successful save, the target takes 1d8 Slashing damage and the spell ends for it. Alternatively, the target can take the Utilize action to use a bladed implement to cut open its mouth, taking 1d8 Slashing damage and ending the silence.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3.",
  imagePath: spellImgUrl("lipweld")
},
{
  slug: slugify("Chemical Rupture"),
  name: "Chemical Rupture",
  classes: ["Druid", "Sorcerer", "Warlock", "Wizard"],
  spellLevel: 3,
  school: "Transmutation",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "90 feet",
  area: "Single target",
  tags: ["Heliana's Guide to Monster Hunting", "Biomancy", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Poison"],
  conditions: ["Poisoned"],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You assault the internal chemistry of one creature you can see within range, causing bubbles of nitrogen to precipitate in its blood. The target must make a Constitution saving throw. On a failed save, the target takes 5d8 Poison damage and has the [condition]Poisoned[/condition] condition for 1 minute. On a successful save, the target takes half as much damage only.\n\n" +
    "If the target is completely submerged in water, this spell’s damage dice become d10s instead of d8s.\n\n" +
    "The target repeats the saving throw at the end of each of its turns, ending the Poisoned condition on itself on a success.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3.",
  imagePath: spellImgUrl("chemicalrupture")
},
{
    slug: slugify("Gravebloom Toxin"),
    name: "Gravebloom Toxin",
    classes: ["Druid", "Ranger", "Sorcerer", "Warlock", "Wizard"],
    spellLevel: 3,
    school: "Necromancy",
    castingTime: "1 action",
    duration: "1 minute",
    range: "60 feet",
    area: "10-foot radius",
    tags: ["Damage", "Debuff", "Control", "New", "Homebrew"],
    saveRequired: "Constitution",
    attackType: "Spell",
    damageTypes: ["Poison", "Bludgeoning"],
    conditions: ["Poisoned"],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: "a thorn dipped in venom"
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You lace a creature’s blood with a doom-slow poison. Choose one creature you can see within range. The target must make a Constitution saving throw. On a failed save, it has the Poisoned condition for the duration. On a successful save, the spell ends.\n\n" +
        "While Poisoned in this way, the target takes 1d6 Poison damage at the start of each of its turns. At the end of each of its turns, it repeats the saving throw, ending the spell on itself on a success.\n\n" +
        "**Death Implosion.** If the target drops to 0 Hit Points while Poisoned in this way, its body collapses inward with violent force. Each creature of your choice within 10 feet of it must make a Dexterity saving throw. On a failed save, the creature takes 3d8 Bludgeoning damage and is pushed 5 feet away from the corpse. On a successful save, the creature takes half as much damage and isn’t pushed.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the poison damage increases by 1d6 for each slot level above 3rd, and the Death Implosion damage increases by 2d8 for each slot level above 3rd.",
    imagePath: spellImgUrl("gravebloomtoxin")
},
{
    slug: slugify("Crackfate"),
    name: "Crackfate",
    classes: ["Bard", "Warlock", "Wizard"],
    spellLevel: 3,
    school: "Enchantment",
    castingTime: "1 action",
    duration: "1 minute",
    range: "60 feet",
    area: "1 creature",
    tags: ["Debuff", "New", "Homebrew"],
    saveRequired: "Charisma",
    attackType: "Spell",
    damageTypes: [],
    conditions: ["Cursed"],
    components: {
        verbal: true,
        somatic: true,
        material: false,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "You brand a creature’s fate with a hairline fracture. Choose one creature you can see within range. The target must succeed on a Charisma saving throw or be cursed for the duration.\n\n" +
        "While cursed, attacks against the target score a Critical Hit on a roll of 19–20.\n\n" +
        "This effect doesn’t stack with any other feature that expands a creature’s critical-hit range. If multiple such effects would apply, only the largest expansion applies.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 5th level or higher, the target’s critical-hit threshold is reduced by 1 for every 2 slot levels above 3rd (to a minimum of 17–20).",
    imagePath: spellImgUrl("crackfate")
},
{
  slug: slugify("Death Ray"),
  name: "Death Ray",
  classes: ["Warlock", "Wizard"],
  spellLevel: 3,
  school: "Necromancy",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "60 feet",
  area: "Single target",
  tags: ["Homebrew", "Damage", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Necrotic"],
  conditions: [],
  components: { verbal: true, somatic: true, material: false, materialText: "" },
  concentration: false,
  ritual: false,
  descriptionMd:
    "A beam of destructive necrotic energy shoots toward one creature within range. The target must make a Constitution saving throw. " +
    "On a failed save, it takes 3d8 Necrotic damage. On a successful save, it takes half as much damage.\n\n" +
    "If a creature is killed by this spell, the beam immediately leaps to another target of your choice within 30 feet of the slain creature, which must make the saving throw against the spell as well.\n\n" +
    "You can target a corpse with this spell. When you do, the beam immediately leaps from that corpse to a creature of your choice within 30 feet of it, and the damage of that leap is 6d8 Necrotic damage instead.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for either damage roll for each slot level above 3.",
  imagePath: spellImgUrl("deathray")
},
{
  slug: slugify("Soul Bomb"),
  name: "Soul Bomb",
  classes: ["Sorcerer", "Warlock", "Wizard"],
  spellLevel: 3,
  school: "Necromancy",
  castingTime: "1 action",
  duration: "1 minute",
  range: "60 feet",
  area: "10-foot radius",
  tags: ["Homebrew", "Damage", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Necrotic"],
  conditions: [],
  components: { verbal: true, somatic: false, material: false, materialText: "" },
  concentration: true,
  ritual: false,
  descriptionMd:
    "You hurl an orb of intense necrotic energy at a point you can see within range, where it erupts with the released souls of the condemned. Each creature in a 10-foot radius must make a Constitution saving throw. " +
    "On a failed save, a creature takes 3d8 Necrotic damage immediately and takes 3d8 Necrotic damage again at the start of your next turn. " +
    "On a successful save, a creature takes half the initial damage only and doesn’t take the recurring damage.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the initial damage and the recurring damage each increase by 1d8 for each slot level above 3.",
  imagePath: spellImgUrl("soulbomb")
},
{
    slug: slugify("Missile Salvo"),
    name: "Missile Salvo",
    classes: ["Sorcerer", "Wizard"],
    spellLevel: 3,
    school: "Evocation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "120 feet",
    area: "120-foot radius",
    tags: ["Damage", "New", "Homebrew"],
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
        "You create volleys of darting force and split them between foes. Choose up to 3 creatures you can see within range. Each target is struck by 4 magic missiles. The missiles hit their targets automatically, and you roll damage for each target separately.\n\n" +
        "For each target, the missiles deal a single combined impact: the target takes 4d4 + 4 Force damage.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
    imagePath: spellImgUrl("missilesalvo")
},
{
    slug: slugify("Primal Howl"),
    name: "Primal Howl",
    classes: ["Druid"],
    spellLevel: 3,
    school: "Transmutation",
    castingTime: "1 bonus action",
    duration: "Instantaneous",
    range: "Self",
    area: "20-foot emanation",
    tags: ["Healing", "Control", "Debuff", "New", "Homebrew"],
    saveRequired: "Wisdom",
    attackType: "Spell",
    damageTypes: [],
    conditions: ["Frightened"],
    components: {
        verbal: true,
        somatic: false,
        material: false,
        materialText: ""
    },
    
    concentration: false,
    ritual: false,
    descriptionMd:
        "You can cast this spell only while you are transformed by Wild Shape or by a spell that changes your form (such as polymorph). This spell ignores any restrictions that would prevent you from casting spells while transformed, as long as you are otherwise capable of using magic.\n\n" +
        "You unleash a feral howl that shakes bone and spirit. Choose any number of creatures you can see within the Emanation. Each chosen creature must make a Wisdom saving throw. On a failed save, the creature has the Frightened condition until the end of your next turn. On a successful save, it isn’t Frightened.\n\n" +
        "Your body answers the call as well—you regain 2d12 Hit Points.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the healing increases by 1d12 for each spell slot level above 3rd.",
    imagePath: spellImgUrl("primalhowl")
},{
    slug: slugify("Primal Shred"),
    name: "Primal Shred",
    classes: ["Druid"],
    spellLevel: 3,
    school: "Transmutation",
    castingTime: "1 action",
    duration: "Instantaneous",
    range: "Self",
    area: "1 creature",
    tags: ["Damage", "Homebrew", "New"],
    saveRequired: "None",
    attackType: "Melee Spell Attack",
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
        "You explode into a flurry of tearing strikes. Make three melee spell attacks against one creature within your reach. On a hit, the target takes 2d8 + your spellcasting ability modifier Slashing damage.",
    scalingMd:
        "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, you make one additional attack for each spell slot level above 3rd.",
    imagePath: spellImgUrl("primalshred")
},
{
    slug: slugify("Shift Focus"),
    name: "Shift Focus",
    classes: ["Cleric", "Paladin"],
    spellLevel: 3,
    school: "Abjuration",
    castingTime: "1 bonus action",
    duration: "1 minute",
    range: "Self",
    area: "Self; up to any number of creatures within 60 feet",
    tags: ["Buff", "Control", "Defense", "New", "Homebrew"],
    saveRequired: "Wisdom",
    attackType: "Spell",
    damageTypes: [],
    conditions: [],
    components: {
        verbal: true,
        somatic: true,
        material: true,
        materialText: ""
    },
    concentration: true,
    ritual: false,
    descriptionMd:
        "A warding mantle settles over you, marking you as a target of imminent threat and focus.\n\n" +
        "While the spell is active, when you take the Taunt action, you can choose any number of creatures you can see within 60 feet of you that can hear and understand you. Each chosen creature must make a Wisdom saving throw against your Taunt action.\n\n" +
        "When you successfully Taunt a creature, you can additionally take a Bonus Action to take the Block or Dodge action.",
    scalingMd: "",
    imagePath: spellImgUrl("shiftfocus")
},
    {
        slug: slugify("Speak with Plants"),
        name: "Speak with Plants",
        classes: ["Bard", "Druid", "Ranger"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "30-foot emanation",
        tags: ["Player's Handbook", "Communication", "Social"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Plants in a 30-ft emanation gain limited sentience and animation. You can question them about events in the last day and give simple commands. You can neutralize plant Difficult Terrain in the area or create it where plants are present for the duration. Doesn’t let plants uproot or move. You can converse normally with Plant creatures.",
        scalingMd: "",
        imagePath: spellImgUrl("speakwithplants")
    },
    {
        slug: slugify("Spirit Guardians"),
        name: "Spirit Guardians",
        classes: ["Cleric"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "15-foot emanation",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Wisdom",
        attackType: "None",
        damageTypes: ["Radiant", "Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a prayer scroll" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Spectral guardians swirl in a 15-ft emanation. You can exempt chosen creatures. Others have Speed halved in the area and when the area moves into a creature, a creature enters it, or a creature ends its turn there, it makes a WIS save for 3d8 Radiant (good/neutral) or 3d8 Necrotic (evil), half on success. A creature saves only once per turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +1d8 per slot level above 3rd.",
        imagePath: spellImgUrl("spiritguardians")
    },
    {
        slug: slugify("Stinking Cloud"),
        name: "Stinking Cloud",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "90 feet",
        area: "20-foot-radius sphere",
        tags: ["Player's Handbook", "Control"],
        saveRequired: "Constitution",
        attackType: "None",
        damageTypes: [],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: true, materialText: "a rotten egg" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Create a 20-ft-radius sphere of nauseating yellow gas (heavily obscured). Each creature that starts its turn in the cloud makes a CON save or is Poisoned until the end of the current turn and can’t take actions or bonus actions. The cloud lingers unless dispersed by strong wind (e.g., gust of wind).",
        scalingMd: "",
        imagePath: spellImgUrl("stinkingcloud")
    },
    {
        slug: slugify("Summon Fey"),
        name: "Summon Fey",
        classes: ["Druid", "Ranger", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "1 fey spirit (Small)",
        tags: ["Player's Handbook", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Charmed", "Darkness"],
        components: { verbal: true, somatic: true, material: true, materialText: "a gilded flower worth 300+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth a Fey spirit. It manifests in an unoccupied space that you can see within range and uses the Fey Spirit stat block. When you cast the spell, choose a mood: Fuming, Mirthful, or Tricksy. The creature resembles a Fey creature of your choice marked by the chosen mood, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>FEY SPIRIT</h2>
    <hr>
    <p><em>Small Fey, Neutral</em></p>

    <p>
      <strong>AC</strong> 12 + the spell’s level<br>
      <strong>HP</strong> 30 + 10 for each spell level above 3<br>
      <strong>Speed</strong> 30 ft., Fly 30 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 13</td><td>+1</td><td>+1</td>
          <td><strong>INT</strong> 14</td><td>+2</td><td>+2</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>WIS</strong> 11</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 14</td><td>+2</td><td>+2</td>
          <td><strong>CHA</strong> 16</td><td>+3</td><td>+3</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Immunities</strong> <a href="#">Charmed</a><br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft.; Passive Perception 10<br>
      <strong>Languages</strong> Sylvan, understands the languages you know<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of Fey Blade attacks equal to half this spell’s level (round down).</p>
    <p><strong>Fey Blade.</strong> <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 2d6 + 3 + the spell’s level Force damage.</p>

    <h3>Bonus Actions</h3>
    <p><strong>Fey Step.</strong> The spirit magically teleports up to 30 feet to an unoccupied space it can see.
       Then one of the following effects occurs, based on the spirit’s chosen mood:</p>

    <p><strong>Fuming.</strong> The spirit has Advantage on the next attack roll it makes before the end of this turn.</p>

    <p><strong>Mirthful.</strong> <em>Wisdom Saving Throw:</em> DC equals your spell save DC, one creature the spirit can see within 10 feet of itself.
       <em>Failure:</em> The target is <a href="#">Charmed</a> by you and the spirit for 1 minute or until the target takes any damage.</p>

    <p><strong>Tricksy.</strong> The spirit fills a 10-foot <a href="#">Cube</a> within 5 feet of it with magical <a href="#">Darkness</a>,
       which lasts until the end of its next turn.</p>
  </div>
`,
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Use the spell slot’s level for the spirit’s AC/HP/attacks/damage as indicated in the stat block.",
        imagePath: spellImgUrl("summonfey")
    },
    {
        slug: slugify("Stench"),
        name: "Stench",
        classes: ["Bard", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "90 feet",
        area: "20-foot-radius Sphere",
        tags: ["Heliana's Guide to Monster Hunting", "Damage", "Debuff", "Control", "New"],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Poison"],
        conditions: ["Poisoned"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a skunk’s tail"
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Emanating from a point within range, a noxious, 20-foot-radius Sphere of colourless fumes creates a choking, eye-watering miasma that penetrates through creatures’ skin.\n\n" +
            "When a creature enters the spell’s area for the first time on its turn or starts its turn there, it must make a Constitution saving throw. On a failed save, it takes 3d6 Poison damage and has the Poisoned condition until the end of its next turn. On a successful save, it takes half as much damage and isn’t Poisoned. While Poisoned in this way, a creature has Disadvantage on saving throws made to maintain Concentration.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
        imagePath: spellImgUrl("stench")
    },
    {
        slug: slugify("Tiny Servant"),
        name: "Tiny Servant",
        classes: ["Artificer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 minute",
        duration: "8 hours",
        range: "Touch",
        area: "1 creature",
        tags: ["Xanathar's Guide to Everything", "Utility", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You touch one Tiny, nonmagical object that isn’t attached to another object or a surface and isn’t being carried by another creature. The target animates and sprouts little arms and legs, becoming a creature under your control until the spell ends or the creature drops to 0 Hit Points.\n\n" +
            "As a Bonus Action, you can mentally command the creature if it is within 120 feet of you. (If you control multiple creatures with this spell, you can command any or all of them at the same time, issuing the same command to each one.) You decide what action the creature will take and where it will move during its next turn, or you can issue a simple, general command, such as to fetch a key, stand watch, or stack some books. If you issue no commands, the servant does nothing other than defend itself against hostile creatures. Once given an order, the servant continues to follow that order until its task is complete.\n\n" +
            "When the creature drops to 0 Hit Points, it reverts to its original form, and any remaining damage carries over to that form.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, you can animate two additional objects for each slot level above 3rd.",
        statblockHtml: `
  <div class="statblock">
    <h2>TINY SERVANT</h2>
    <hr>
    <p><em>Tiny Construct, Unaligned</em></p>

    <p>
      <strong>AC</strong> 15<br>
      <strong>HP</strong> 10 (4d4)<br>
      <strong>Speed</strong> 30 ft., Climb 30 ft.
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 4</td><td>-3</td><td>-3</td>
          <td><strong>INT</strong> 2</td><td>-4</td><td>-4</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>WIS</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 10</td><td>+0</td><td>+0</td>
          <td><strong>CHA</strong> 1</td><td>-5</td><td>-5</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Damage Immunities</strong> Poison, Psychic<br>
      <strong>Condition Immunities</strong> All conditions except <a href="#">Prone</a>, <a href="#">Restrained</a><br>
      <strong>Senses</strong> Blindsight 60 ft. (blind beyond this range); Passive Perception 10<br>
      <strong>Languages</strong> —<br>
      <strong>CR</strong> 0
    </p>

    <hr>

    <p><strong>Followed Orders.</strong> When you issue an order, it follows it to the best of its abilities until it is reduced to 0 Hit Points or the spell ends.</p>

    <h3>Actions</h3>
    <p><strong>Slam.</strong> <em>Melee Attack Roll:</em> +5 to hit, reach 5 ft., one target.
       <em>Hit:</em> 1d4 + 3 Bludgeoning damage.</p>
  </div>
`,
        imagePath: spellImgUrl("tinyservant")
    },
    {
        slug: slugify("Spirit Shroud"),
        name: "Spirit Shroud",
        classes: ["Cleric", "Paladin", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 bonus action",
        duration: "1 minute",
        range: "Self",
        area: "10-foot radius",
        tags: ["Tasha's Cauldron of Everything", "Damage", "Debuff"],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Radiant", "Necrotic", "Cold"],
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
            "You call forth spirits of the dead, which flit around you for the spell’s duration. The spirits are intangible and invulnerable.\n\n" +
            "Until the spell ends, any attack you make deals 1d8 extra damage when you hit a creature within 10 feet of you. This damage is Radiant, Necrotic, or Cold (your choice when you cast the spell). Any creature that takes this damage can’t regain Hit Points until the start of your next turn.\n\n" +
            "In addition, any creature of your choice that you can see that starts its turn within 10 feet of you has its Speed reduced by 10 feet until the start of your next turn.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the extra damage increases by 1d8 for every two slot levels above 3rd.",
        imagePath: spellImgUrl("spiritshroud")
    },
    {
        slug: slugify("Summon Undead"),
        name: "Summon Undead",
        classes: ["Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 hour",
        range: "90 feet",
        area: "1 undead spirit (Medium): Ghostly, Putrid, or Skeletal",
        tags: ["Player's Handbook", "Summoning"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: ["Frightened", "Poisoned", "Paralyzed"],
        components: { verbal: true, somatic: true, material: true, materialText: "a gilded skull worth 300+ gp" },
        concentration: true,
        ritual: false,
        descriptionMd: "You call forth an Undead spirit. It manifests in an unoccupied space that you can see within range and uses the Undead Spirit stat block. When you cast the spell, choose the creature’s form: Ghostly, Putrid, or Skeletal. The spirit resembles an Undead creature with the chosen form, which determines certain details in its stat block. The creature disappears when it drops to 0 Hit Points or when the spell ends.\n\n" +
            "The creature is an ally to you and your allies. In combat, the creature shares your Initiative count, but it takes its turn immediately after yours. It obeys your verbal commands (no action required by you). If you don’t issue any, it takes the Dodge action and uses its movement to avoid danger.",
        statblockHtml: `
  <div class="statblock">
    <h2>UNDEAD SPIRIT</h2>
    <hr>
    <p><em>Medium Undead, Neutral</em></p>

    <p>
      <strong>AC</strong> 11 + the spell’s level<br>
      <strong>HP</strong> 30 <em>(Ghostly and Putrid only)</em> or 20 <em>(Skeletal only)</em> + 10 for each spell level above 3<br>
      <strong>Speed</strong> 30 ft.; Fly 40 ft. (hover; <em>Ghostly only</em>)
    </p>

    <table>
      <thead>
        <tr><th></th><th>MOD</th><th>SAVE</th><th></th><th>MOD</th><th>SAVE</th></tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>STR</strong> 12</td><td>+1</td><td>+1</td>
          <td><strong>INT</strong> 4</td><td>−3</td><td>−3</td>
        </tr>
        <tr>
          <td><strong>DEX</strong> 16</td><td>+3</td><td>+3</td>
          <td><strong>WIS</strong> 10</td><td>+0</td><td>+0</td>
        </tr>
        <tr>
          <td><strong>CON</strong> 15</td><td>+2</td><td>+2</td>
          <td><strong>CHA</strong> 9</td><td>−1</td><td>−1</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Immunities</strong> Necrotic, Poison; 
      <a href="#">Exhaustion</a>, <a href="#">Frightened</a>, <a href="#">Paralyzed</a>, <a href="#">Poisoned</a><br>
      <strong>Senses</strong> <a href="#">Darkvision</a> 60 ft.; Passive Perception 10<br>
      <strong>Languages</strong> Understands the languages you know<br>
      <strong>CR</strong> None (XP 0; PB equals your Proficiency Bonus)
    </p>

    <hr>

    <h3>Traits</h3>
    <p><strong>Festering Aura (Putrid Only).</strong>
       <em>Constitution Saving Throw:</em> DC equals your spell save DC,
       any creature (other than you) that starts its turn within a 5-foot
       <a href="#">Emanation</a> originating from the spirit.
       <em>Failure:</em> The creature has the <a href="#">Poisoned</a> condition until the start of its next turn.</p>

    <p><strong>Incorporeal Passage (Ghostly Only).</strong>
       The spirit can move through other creatures and objects as if they were
       <a href="#">Difficult Terrain</a>. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes 1d10 Force damage for every 5 feet traveled.</p>

    <h3>Actions</h3>
    <p><strong>Multiattack.</strong> The spirit makes a number of attacks equal to half this spell’s level (round down).</p>

    <p><strong>Deathly Touch (Ghostly Only).</strong>
       <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d8 + 3 + the spell’s level Necrotic damage, and the target has the <a href="#">Frightened</a> condition until the end of its next turn.</p>

    <p><strong>Grave Bolt (Skeletal Only).</strong>
       <em>Ranged Attack Roll:</em> Bonus equals your spell attack modifier, range 150 ft.
       <em>Hit:</em> 2d4 + 3 + the spell’s level Necrotic damage.</p>

    <p><strong>Rotting Claw (Putrid Only).</strong>
       <em>Melee Attack Roll:</em> Bonus equals your spell attack modifier, reach 5 ft.
       <em>Hit:</em> 1d6 + 3 + the spell’s level Slashing damage. If the target has the <a href="#">Poisoned</a> condition, it has the <a href="#">Paralyzed</a> condition until the end of its next turn.</p>
  </div>
`,
        scalingMd: "**Using a Higher-Level Spell Slot.** Use the slot’s level for the spirit’s AC/HP/attacks/damage as indicated in the stat block.",
        imagePath: spellImgUrl("summonundead")
    },
    {
        slug: slugify("Tongues"),
        name: "Tongues",
        classes: ["Bard", "Cleric", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Divination",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Touch",
        area: "1  creature",
        tags: ["Player's Handbook", "Communication", "Social"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: false, material: true, materialText: "a miniature ziggurat" },
        concentration: false,
        ritual: false,
        descriptionMd:
            "The target understands any spoken or signed language it hears or sees, and when it speaks or signs, any creature that knows at least one language can understand if it can hear/see the communication.",
        scalingMd: "",
        imagePath: spellImgUrl("tongues")
    },
    {
        slug: slugify("Vampiric Touch"),
        name: "Vampiric Touch",
        classes: ["Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Necromancy",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "Melee 5 feet",
        tags: ["Player's Handbook", "Healing", "Damage"],
        saveRequired: "None",
        attackType: "Melee Spell Attack",
        damageTypes: ["Necrotic"],
        conditions: [],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Make a melee spell attack: on hit, deal 3d6 Necrotic and regain HP equal to half the Necrotic damage dealt. You can repeat the attack on each of your turns as a Magic action while the spell lasts.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** Damage +1d6 per slot level above 3rd.",
        imagePath: spellImgUrl("vampirictouch")
    },
    {
        slug: slugify("Water Breathing"),
        name: "Water Breathing",
        classes: ["Artificer", "Druid", "Ranger", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action (ritual)",
        duration: "24 hours",
        range: "Self",
        area: "30-foot radius",
        tags: ["Player's Handbook", "Buff"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a short reed" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Up to ten willing creatures gain the ability to breathe underwater for the duration; they retain their normal respiration as well.",
        scalingMd: "",
        imagePath: spellImgUrl("waterbreathing")
    },
    {
        slug: slugify("Water Walk"),
        name: "Water Walk",
        classes: ["Artificer", "Cleric", "Druid", "Ranger", "Sorcerer"],
        spellLevel: 3,
        school: "Transmutation",
        castingTime: "1 action",
        duration: "1 hour",
        range: "Self",
        area: "30-foot radius",
        tags: ["Player's Handbook", "Movement"],
        saveRequired: "None",
        attackType: "None",
        damageTypes: [],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a piece of cork" },
        concentration: false,
        ritual: true,
        descriptionMd:
            "Up to ten willing creatures can move across liquid surfaces (water, acid, mud, snow, quicksand, lava—heat may still deal damage). A target can use a bonus action to submerge or re-surface; if it falls into liquid, it passes through into the liquid below.",
        scalingMd: "",
        imagePath: spellImgUrl("waterwalk")
    },
    {
        slug: slugify("Wind Wall"),
        name: "Wind Wall",
        classes: ["Druid", "Ranger"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "120 feet",
        area: "Wall up to 50 ft long, 15 ft high, 1 ft thick (continuous path)",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "STR Save",
        attackType: "None",
        damageTypes: ["Bludgeoning"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a fan and a feather" },
        concentration: true,
        ritual: false,
        descriptionMd: "A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.\n\n" +
            "When the wall appears, each creature in its area makes a Strength saving throw, taking 4d8 Bludgeoning damage on a failed save or half as much damage on a successful one.\n\n" +
            "The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can’t pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and miss automatically. Boulders hurled by Giants or siege engines, and similar projectiles, are unaffected. Creatures in gaseous form can’t pass through it.",
        scalingMd: "",
        imagePath: spellImgUrl("windwall")
    },
    {
        slug: slugify("Conjure Flock"),
        name: "Conjure Flock",
        classes: ["Druid", "Ranger"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "20-foot-radius, 20-foot-high cylinder",
        tags: ["Homebrew", "Summoning", ],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: [],
        conditions: ["Blinded"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a circling murder of spectral ravens that continually dive through the area, which becomes lightly obscured. Choose a point on the ground you can see within range; the swarm fills a 20-foot-radius, 20-foot-high cylinder centered on that point.\n\n" +
            "Eye-Pecking Swarm. Each hostile creature that starts its turn in the area and isn’t wearing a helmet or fully enclosing headgear must make a Constitution saving throw. On a failed save, the creature has the blinded condition until the start of its next turn. The blinded condition from this spell ends early if the creature leaves the area. Creatures wearing a helmet or similar eye-protective headgear are immune to this effect.\n\n" +
            "Shift the Murder. As a Bonus Action, you can move the area up to 40 feet to a point you can see. The swarm’s obscuring effect and saving throws apply in the new area starting immediately.",
        scalingMd: "",
        imagePath: spellImgUrl("conjureflock"),
    },
    {
  slug: slugify("Mireball"),
  name: "Mireball",
  classes: ["Bard", "Druid", "Sorcerer", "Warlock"],
  spellLevel: 3,
  school: "Conjuration",
  castingTime: "1 action",
  duration: "1 minute",
  range: "150 feet",
  area: "15-foot-radius sphere",
  tags: ["Heliana's Guide to Monster Hunting", "Damage", "Control", "New"],
  saveRequired: "Strength",
  attackType: "None",
  damageTypes: ["Bludgeoning"],
  conditions: ["Prone"],
  components: {
    verbal: true,
    somatic: true,
    material: true,
    materialText: "a tiny ball of guano and mud"
  },
  concentration: false,
  ritual: false,
  descriptionMd:
    "A blob of gloopy mud splunks from your pointed finger to a point you choose within range, where it splooges with a wet burp into an explosion of sludge. Each creature in a 15-foot-radius sphere centered on that point must make a Strength saving throw. On a failed save, a creature takes 3d10 Bludgeoning damage and has the [condition]Prone[/condition] condition. On a successful save, it takes half as much damage only.\n\n" +
    "In addition, surfaces in the area become covered in unpredictably slick and sticky patches of mud for 1 minute. The first time on a turn that a creature moves through the muddy area, it must succeed on a Dexterity saving throw against your spell save DC or have the [condition]Prone[/condition] condition. A creature moving through the area at half its Speed doesn’t need to make this save.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3.",
  imagePath: spellImgUrl("mireball")
},
{
  slug: slugify("Mass Leech"),
  name: "Mass Leech",
  classes: ["Cleric", "Warlock", "Wizard"],
  spellLevel: 3,
  school: "Necromancy",
  castingTime: "1 action",
  duration: "Instantaneous",
  range: "Self",
  area: "20-foot radius",
  tags: ["Heliana's Guide to Monster Hunting", "Damage", "Healing", "New"],
  saveRequired: "Constitution",
  attackType: "None",
  damageTypes: ["Necrotic"],
  conditions: [],
  components: {
    verbal: true,
    somatic: true,
    material: true,
    materialText: "a live leech that has fed on humanoid blood in the past 24 hours"
  },
  concentration: false,
  ritual: false,
  descriptionMd:
    "You drain the life force of those around you, turning their limbs heavy and their bones cold. Each creature of your choice within 20 feet of you must make a Constitution saving throw. On a failed save, a target takes 2d8 Necrotic damage. On a successful save, it takes half as much damage.\n\n" +
    "You regain Hit Points equal to half the total Necrotic damage dealt to Small or larger creatures by this spell.",
  scalingMd:
    "**Using a Higher-Level Spell Slot.** When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3.",
  imagePath: spellImgUrl("massleech")
},
    {
        slug: slugify("Conjure Venom Pit"),
        name: "Conjure Venom Pit",
        classes: ["Druid", "Ranger"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "1 minute",
        range: "60 feet",
        area: "20-foot-radius, 10-foot-high cylinder",
        tags: ["Homebrew", "Summoning", ],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Poison"],
        conditions: ["Poisoned"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a writhing swarm of rattlesnakes that churn across the ground, making the area difficult terrain. Choose a point on the ground you can see within range; the swarm fills a 20-foot-radius, 10-foot-high cylinder centered on that point.\n\n" +
            "When a creature enters the area for the first time on a turn or ends its turn there, it must make a Constitution saving throw. On a failed save, the creature takes 2d4 Poison damage and has the poisoned condition until the end of its next turn. On a successful save, the creature takes half as much damage and isn’t poisoned. A creature makes this save at most once per turn.\n\n" +
            "Shift the Nest. As a Bonus Action, you can move the area up to 20 feet to a point you can see. The difficult terrain and saving throws apply in the new area immediately.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d4 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("conjurevenompit"),
    },
    {
        slug: slugify("Cacophonic Shield"),
        name: "Cacophonic Shield",
        classes: ["Bard", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "10-foot emanation",
        tags: ["Forgotten Realms", "Damage", "Control", "Defense", ],
        saveRequired: "Constitution",
        attackType: "Spell",
        damageTypes: ["Thunder"],
        conditions: ["Deafened"],
        components: { verbal: true, somatic: true, material: false, materialText: "" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Thunderous reverberations fill a 10-foot Emanation originating from you for the duration. Whenever the Emanation enters a creature’s space and whenever a creature enters the Emanation or ends its turn there, the creature must make a Constitution saving throw. On a failed save, the creature takes 3d6 Thunder damage and has the Deafened condition until the start of your next turn. On a successful save, the creature takes half as much damage only. A creature makes this save only once per turn. When you cast this spell, you can designate creatures to be unaffected by it.\n\n" +
            "In addition, you have Resistance to Thunder damage, and ranged attack rolls against you are made with Disadvantage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d6 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("cacophonicshield")
    },
    {
        slug: slugify("Conjure Constructs"),
        name: "Conjure Constructs",
        classes: ["Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "60 feet",
        area: "Medium group; 1 target within 5 feet of the spirits",
        tags: ["Forgotten Realms", "Damage", "Summoning", "Buff", ],
        saveRequired: "Dexterity",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: [],
        components: { verbal: true, somatic: true, material: true, materialText: "a brass cog" },
        concentration: true,
        ritual: false,
        descriptionMd:
            "You conjure a group of intangible, orderly spirits that appear as a Medium group of modrons or other Constructs in an unoccupied space you can see within range. The spirits last for the duration.\n\n" +
            "When you cast this spell and as a Magic action on subsequent turns, you can command the spirits to target one creature or object you can see within 5 feet of the spirits and create one of the following effects:\n\n" +
            "Clockwork Force. The target must make a Dexterity saving throw, taking 3d6 Force damage on a failed save, or half as much damage on a successful one.\n\n" +
            "Orderly Ward. The target gains Temporary Hit Points equal to 1d6 + your spellcasting ability modifier.\n\n" +
            "When you move on your turn, you can also move the spirits up to 30 feet to an unoccupied space you can see.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage and Temporary Hit Points both increase by 1d6 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("conjureconstructs")
    },
    {
        slug: slugify("Laeral’s Silver Lance"),
        name: "Laeral’s Silver Lance",
        classes: ["Cleric", "Sorcerer", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "Instantaneous",
        range: "Self",
        area: "120-foot-long, 5-foot-wide Line",
        tags: ["Player's Handbook", "Damage", "Control"],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Force"],
        conditions: ["Prone"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a silver pin worth 250+ gp"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "Silver energy bursts out from you in a 120-foot-long, 5-foot-wide Line. Each creature of your choice in the Line must make a Strength saving throw. On a failed save, the creature takes 3d10 Force damage and has the Prone condition. On a successful save, the creature takes half as much damage only.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d10 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("laeralssilverlance")
    },
    {
        slug: slugify("Syluné’s Viper"),
        name: "Syluné’s Viper",
        classes: ["Druid", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 bonus action",
        duration: "1 hour",
        range: "Self",
        area: "Self; 1 creature within 50 feet",
        tags: ["Forgotten Realms", "Buff", "Damage", "Debuff", "Control", ],
        saveRequired: "None",
        attackType: "Ranged Spell Attack",
        damageTypes: ["Force"],
        conditions: ["Poisoned", "Incapacitated"],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a snake fang"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "A shimmering, spectral snake encircles your body for the duration. You gain 15 Temporary Hit Points; the spell ends early if you have no Temporary Hit Points left.\n\n" +
            "While the spell is active, you gain the following benefits:\n\n" +
            "Climbing. You gain a Climb Speed equal to your Speed.\n\n" +
            "Venomous Bite. As a Magic action, you can make a ranged spell attack using the snake against one creature within 50 feet. On a hit, the target takes 1d6 Force damage and has the Poisoned condition until the start of your next turn. While Poisoned, the target has the Incapacitated condition.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** For each spell slot level above 3rd, the number of Temporary Hit Points you gain from this spell increases by 5, and the damage of Venomous Bite increases by 1d6.",
        imagePath: spellImgUrl("sylunesviper")
    },
    {
        slug: slugify("Blade Vortex"),
        name: "Blade Vortex",
        classes: ["Bard", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Conjuration",
        castingTime: "1 action",
        duration: "Until the start of your next turn",
        range: "Self",
        area: "10-foot radius",
        tags: ["Homebrew", "Damage", "Defense", ],
        saveRequired: "None",
        attackType: "Spell",
        damageTypes: ["Slashing"],
        conditions: [],
        components: {
            verbal: true,
            somatic: true,
            material: true,
            materialText: "a spinning top"
        },
        concentration: false,
        ritual: false,
        descriptionMd:
            "You fill the air in a 10-foot radius centered on you with spinning blades until the start of your next turn. A creature that starts its turn in the area or enters the area for the first time on its turn takes 4d4 Slashing damage. Until the spell ends, you have Half Cover against all ranged attacks.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d4 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("bladevortex")
    },
    {
        slug: slugify("Grave Sight"),
        name: "Grave Sight",
        classes: ["Cleric", "Druid", "Paladin", "Ranger"],
        spellLevel: 3,
        school: "Divination",
        castingTime: "1 action",
        duration: "10 minutes",
        range: "Self",
        area: "120-foot radius",
        tags: ["Homebrew", "Detection", ],
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
        ritual: true,
        descriptionMd:
            "While you concentrate, you perceive the stark aura of Undead within 120 feet of you—even through walls and total cover. Each Undead creature appears to you as an outlined silhouette in its space. You learn each outlined creature’s exact location and size category, and you can tell whether it is moving.\n\n" +
            "This perception doesn’t grant line of sight and can’t be used to target a creature with an effect that requires you to see it or that can’t target a creature behind total cover. The spell doesn’t reveal identity, statistics, or Hit Points, and it doesn’t outline living creatures, Constructs, or objects.",
        scalingMd: "",
        imagePath: spellImgUrl("gravesight")
    },
    {
        slug: slugify("Flame Cloak"),
        name: "Flame Cloak",
        classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "5-foot aura",
        tags: ["Homebrew", "Damage", "Buff", "Defense", ],
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
            "Scalding flames wreath you in a 5-foot aura that moves with you. When a creature enters the aura for the first time on a turn or starts its turn there, it must make a Dexterity saving throw, taking 5d6 Fire damage on a failed save, or half as much damage on a success. A creature takes this damage only once per turn.\n\n" +
            "When you cast the spell, you can designate any number of creatures you can see to be unaffected by the aura for the duration. While this spell is active, you have Resistance to Fire damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d6 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("flamecloak")
    },
    {
        slug: slugify("Storm Cloak"),
        name: "Storm Cloak",
        classes: ["Cleric", "Druid", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "5-foot aura",
        tags: ["Homebrew", "Damage", "Buff", "Defense", ],
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
            "Crackling electricity wreathes you in a 5-foot aura that moves with you. When a creature enters the aura for the first time on a turn or starts its turn there, it must make a Dexterity saving throw, taking 5d6 Lightning damage on a failed save, or half as much damage on a success. A creature takes this damage only once per turn.\n\n" +
            "When you cast the spell, you can designate any number of creatures you can see to be unaffected by the aura for the duration. While this spell is active, you have Resistance to Lightning damage.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d6 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("stormcloak")
    },
    {
        slug: slugify("Swirling Cloak"),
        name: "Swirling Cloak",
        classes: ["Cleric", "Druid", "Ranger", "Sorcerer", "Warlock", "Wizard"],
        spellLevel: 3,
        school: "Evocation",
        castingTime: "1 action",
        duration: "1 minute",
        range: "Self",
        area: "5-foot aura",
        tags: ["Homebrew", "Damage", "Buff", "Control", ],
        saveRequired: "Strength",
        attackType: "Spell",
        damageTypes: ["Bludgeoning"],
        conditions: ["Prone"],
        components: {
            verbal: true,
            somatic: true,
            material: false,
            materialText: ""
        },
        concentration: true,
        ritual: false,
        descriptionMd:
            "Turbulent winds wreath you in a 5-foot aura that moves with you. When a creature enters the aura for the first time on a turn or starts its turn there, it must make a Strength saving throw, taking 3d6 Bludgeoning damage on a failed save, or half as much damage on a success. On a failed save, the creature is also pushed up to 15 feet straight away from you and has the Prone condition. A creature takes this damage only once per turn.\n\n" +
            "When you cast the spell, you can designate any number of creatures you can see to be unaffected by the aura for the duration. While this effect is active, a creature within the aura that is targeted by a ranged weapon attack imposes Disadvantage on that attack roll.",
        scalingMd:
            "**Using a Higher-Level Spell Slot.** The damage increases by 1d6 for each spell slot level above 3rd.",
        imagePath: spellImgUrl("swirlingcloak")
    },


];