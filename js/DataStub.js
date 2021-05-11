FACTIONS = {
    battleBrothersId: { 
        val:"battle-brothers", 
        display: "Battle Brothers", 
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
        ]
    },
    // { val: "orc-marauders", display: "Orc Marauders"},
    // { val: "alien-hive", display: "Alien Hive"},
    // { val: "ratmen-clans", display: "Ratmen Clans"},
}