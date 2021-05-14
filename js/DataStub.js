FACTIONS = {
    battleSistersId: { 
        val: "battle-sisters", 
        display: "Battle Sisters", 
        upgradeTables: 
        [
            { 
                val:"a", 
                upgrades:
                [
                    {
                        action: "replace",
                        replace: ["assaultRifle", "ccw"],
                        range:1, 
                        cost:0, 
                        isWeapon:true, 
                        value:["pistol", "ccw2"]
                    },
                    {
                        action: "replace",
                        replace:["assaultRifle", "ccw"], 
                        range:1, 
                        cost:10, 
                        isWeapon:true, 
                        value:["heavyChainsawSword"]
                    }
                ], 
            }, 
            { 
                val:"b", 
                upgrades:
                [
                    {
                        action: "add", 
                        range:-1, 
                        cost: 45, 
                        isWeapon:false, 
                        value:"powerShields"
                    },
                    {
                        action: "add",
                        range: -1,
                        cost: 5,
                        isWeapon: false,
                        value: ["blindFaith"]
                    }
                    
                ], 
            }
        ],
        specialRules: {
            blindFaith: {
                id: "blindFaithId",
                name: "Blind Faith",
                description: "When the hero and her unit are activated pick one of the following devotions, and they get one of these special rules until the end of the round:[subdescription]",
                subdescriptions: [
                    { name: "Passion", value: '+3” when moving'},
                    { name: "Guidance", value: 'AP(+1) when shooting'},
                    { name: "Spirit", value: 'AP(+1) when in melee'},
                    { name: "Aegis", value: 'enemies get -1 to melee hits'},
                ]
            },
            canticleMegaphone: {
                id: "canticleMegaphoneId",
                name: "Canticle Megaphone",
                description: "This model and her unit get the [fearless] rule."
            }
        }
    },
    // { val: "orc-marauders", display: "Orc Marauders"},
    // { val: "alien-hive", display: "Alien Hive"},
    // { val: "ratmen-clans", display: "Ratmen Clans"},
};

WEAPONS = {
    pistols: {
        range: "12",
        attacks: 1,
        keywords: [],
        display: "Pistols"
    },
    heavyChainsawSword: {
        range: "melee",
        attacks: 6,
        keywords: ["ap:1"],
        display: "Heavy Chainsaw Sword"
    },
    fusionRifle: {
        range: "12",
        attacks: 1,
        keywords: ["ap:4", "deadly:6"],
        display: "Fusion Rifle"
    }
}

SPECIAL_RULES = {
    fast: {
        description: "Allows this unit to assault with a 9 inch movement and charge with 18 inch movement",
    },
    fearless: {
        name: "Fearless",
        description: "This units gets +1 to all morale checks"
    },
};