DAL = {
    GetFactions: function() {
        return FACTIONS;
    },
    GetFaction: function(factionId) {
        return FACTIONS[factionId];
    },
    GetSpecialRules: function(factionId="general") {
        rules = {};
        Object.entries(SPECIAL_RULES).forEach(([key, rule]) => {
            if (rule.faction == factionId) {
                rules[key] = rule;
            }
        })
        return rules;
    }, 
    GetWeapons: function() {
        return WEAPONS;
    },
    GetUnits: function (faction) {
        units = {},
        Object.entries(UNITS).forEach(([unitId, unit]) => {
            if (unit.faction == faction) {
                units[unitId] = unit;
            }
        })
        console.log(units);
        return units;
    }
}