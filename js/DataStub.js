


FACTIONS = {
    battleSistersId: { 
        val: "battle-sisters", 
        display: "Battle Sisters", 
        upgradeTables: 
        [
            { 
                val="a", 
                upgrades:
                [
                    {
                        replace:"", 
                        range:-1, 
                        cost:0, 
                        isWeapon:true, 
                        value:"[assaultRifle]"
                    },
                    {
                        replace:"assault rifle", 
                        range:1, 
                        cost:15, 
                        isWeapon:true, 
                        value:"[heavyPistol]"
                    }
                ], 
            }, 
            { 
                val="b", 
                upgrades:
                [
                    {
                        replace:"", 
                        range:-1, 
                        cost:0, 
                        isWeapon:true, 
                        value:"Power Shields [regeneration]"
                    },
                    
                ], 
            }
        ],
        specialRules: {
            blindFaithId: {
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
            canticleMegaphoneId: {
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

SPECIAL_RULES = {
    Fast: {
        description: "Allows this unit to assault with a 9 inch movement and charge with 18 inch movement",
    },
    fearless: {
        name: "Fearless",
        description: "This units gets +1 to all morale checks"
    },
};