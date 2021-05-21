FACTIONS = {
    battleSisters: {
        id: `battleSisters`,
        display: "Battle Sisters", 
    },
    // { val: "orc-marauders", display: "Orc Marauders"},
    // { val: "alien-hive", display: "Alien Hive"},
    // { val: "ratmen-clans", display: "Ratmen Clans"},
};

PSYCHIC_SPELLS = {

}

UPGRADE_TABLES = {
    orcMaraudersA : {
        type: 'light',
        faction: `orcMarauders`,
        table: `a`,
        sections: [
            {
                action: `replace`,
                targets: [`pistol`],
                range: 1,
                options:[
                    {
                        type: `weapon`,
                        val: [`carbine`]
                    },
                    {
                        type: `weapon`,
                        val: [`twinCarbine`]
                    }
                ]
            },
            {
                action: `add`,
                range: 1,
                options: [
                    {
                        type: `weapon`,
                        val: `heavyFlamethrower`,
                    },
                    {
                        type: `weapon`,
                        val: `rocketLauncher`
                    }
                ]
            }
        ]
    },
    battleSistersLightA: {
        type: `light`,
        faction:`battleSisters`,
        table: `a`,
        sections: [
            {
                action: `replace`,
                targets: [`assaultRifle`, `ccw`],
                display: `Replace one Assault Rifle and CCW:`,
                options: [
                    {
                        type: `weapon`,
                        val: [`pistol`, `ccw[2]`],
                        cost: 0,
                    },
                    {
                        type: `weapon`,
                        val: [`heavyChainsawSword`],
                        cost: 10,
                    }
                ]
            },
            {
                action: `add`,
                targets: [`pistol`],
                display: `Upgrade with:`,
                options: [
                    {
                        type: `rule`,
                        val: [`holyAntiGravPulpit`],
                        cost:145
                    },
                    {
                        type: `rule`,
                        val: [`blindFaith`],
                        cost: 15,
                    },
                    {
                        type: `rule`,
                        val: [`fear`, `fearlessness`],
                        cost: 30,
                    }
                ]
            }
        ]
    },
    battleSistersHeavyA: {
        type: `heavy`,
        faction:`battleSisters`,
        table: `e`,
        sections: [
            {
                action: `replace`,
                targets: [`heavyFlamethrower`],
                display: `Replace any Heavy Flamethrower:`,
                options: [
                    {
                        type: `weapon`,
                        val: [`heavyMachineGun`],
                        cost: 10,
                    },
                ]
            }
        ]
    },
}

UNITS= [
    {
        faction: "battleSisters",
        type: "light",
        display: "Greater High Sister",
        size: 1,
        qua: 2,
        def: 2,
        equipment: ["holyEnergySword", "flamesOfRetribution"],
        specialRules: ["ambush", "fear", "flying", "hero", "regeneration"],
        upgrades: [],
        cost: 305,
    },
    {
        faction: `battleSisters`,
        type: "light",
        display: `Battle Sisters`,
        size: 5,
        qua: 4,
        def: 3,
        equipment: ["assaultRifle", "ccw"],
        specialRules: [],
        upgrades: ["a", "e"],
        cost: 95,
    },
    {
        faction: `orcMarauders`,
        display: `Orc Mob`,
        size: 10,
        qua: 4,
        def: 5,
        equipment: [`pistols`, `ccw[2]`],
        specialRules: [`badShot`, `furious`],
        upgrades: [`a`, `c`, `j`, `k`],
        cost: 155,
    },
    {
        faction: "battleSisters",
        type: "heavy",
        display: "Organ Tank",
        size: 1,
        qua: 4,
        def: 2,
        equipment: ["organMortar"],
        specialRules: ["fast", "impact[6]", "tough[12]"],
        upgrades: ["a", "c"],
        cost: 340,

    }
],

WEAPONS = {
    pistols: {
        range: "12",
        attacks: 1,
        specialRules: [],
        display: "Pistols"
    },
    heavyChainsawSword: {
        range: "melee",
        attacks: 6,
        specialRules: ["ap:1"],
        display: "Heavy Chainsaw Sword"
    },
    fusionRifle: {
        range: "12",
        attacks: 1,
        specialRules: ["ap:4", "deadly:6"],
        display: "Fusion Rifle"
    }
}

SPECIAL_RULES = {
    aircraft: {
        faction: `general`,
        display: "Aircraft",
        description: `This model doesn’t interact
        physically with other models and terrain,
        and can’t be moved into contact with.
        Non-aircraft units count as being an
        extra 12” away when measuring and get
        -1 to shooting. When activated this
        model must always move 18”-36” in a
        straight line, and if it goes off-table then
        its activation ends and it may be placed
        back on any table edge.`
    },
    ambush: {
        faction: `general`,
        display: "Ambush",
        description: `This model may be kept in
        reserve instead of deploying. At the start
        of any round after the first you may
        place the model anywhere over 9” away
        from enemy units. If both player have
        Ambush they roll-off to see who deploys
        first, and then alternate in placing them.`
    },
    antiAir: {
        faction: `general`,
        display: "Anti-Air",
        description: `This unit doesn’t count as being
        an extra 12” away and doesn’t get -1 to
        shooting against aircraft.`
    },
    ap: {
        faction: `general`,
        display: `AP[x]`,
        description: `Targets get -[x] to Defense rolls
        when blocking hits.`
    },
    blast: {
        faction: `general`,
        display: `Blast[x]`,
        description: `All hits are multiplied by [x].`
    },
    fast: {
        faction: `general`,
        display: "Fast",
        description: "Allows this unit to assault with a 9 inch movement and charge with 18 inch movement",
    },
    fear: {
        faction: `general`,
        display: `Fear`,
        description: `Always counts as having dealt +D3
        wounds for seeing who won melee.`
    },
    fearless: {
        faction: `general`,
        display: "Fearless",
        description: "This units gets +1 to all morale checks"
    },
    hero: {
        faction: `general`,
        display: `Hero`,
        description: `May be deployed as part of friendly
        units, and they may use his quality value
        for morale tests. When taking hits you
        must use the defense value of the hero’s
        unit until all non-hero models are killed.`
    },
    regeneration: {
        faction: `general`,
        display: `Regeneration`,
        description: `When taking a wound, roll
        one die. On a 5+ it is ignored.`
    },
    rending: {
        faction: `general`,
        display: `Rending`,
        description: `Unmodified rolls of 6 to hit
        count as having AP(4) and ignore the
        regeneration rule.`
    },
    tough: {
        faction: `general`,
        display: `Tough[x]`,
        description: `This model must take [x]
        wounds before being killed. If a model
        with tough joins a unit without it, then it
        is removed last when the unit takes
        wounds. Note that you must continue to
        put wounds on the tough model with
        most wounds until it is killed, before
        starting to put them on the next tough
        model (heroes must still be assigned
        wounds last).`
    },
    blindFaith: {
        faction: `battleSisters`,
        id: "blindFaith",
        name: "Blind Faith",
        description: "When the hero and her unit are activated pick one of the following devotions, and they get one of these special rules until the end of the round:<br>&bull; <strong>Passion</strong>: +3\" when moving<br>&bull; <strong>Guidance</strong>: AP(+1) when shooting.<br>&bull; <strong>Spirit</strong>: AP(+1) when in melee.<br>&bull; <strong>Aegis</strong>: enemies get -1 to melee hits"
        // description: "When the hero and her unit are activated pick one of the following devotions, and they get one of these special rules until the end of the round:[subdescription]",
        // subdescriptions: [
        //     { name: "Passion", value: '+3” when moving'},
        //     { name: "Guidance", value: 'AP(+1) when shooting'},
        //     { name: "Spirit", value: 'AP(+1) when in melee'},
        //     { name: "Aegis", value: 'enemies get -1 to melee hits'},
        // ]
    },
    canticleMegaphone: {
        faction: `battleSisters`,
        id: "canticleMegaphone",
        name: "Canticle Megaphone",
        description: "This model and her unit get the [fearless] rule."
    }
};