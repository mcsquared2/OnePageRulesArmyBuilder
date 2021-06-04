DAL = {
    GetFactions: function() {
        return Object.entries(FACTIONS);
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
        units = [],
        Object.entries(UNITS).forEach(([unitId, unit]) => {
            if (unit.faction == faction) {
                units.push(unit);
            }
        })
        return units;
    },
    GetUpgradeTables: function (factionId) {
        tables = [];
        Object.entries(UPGRADE_TABLES).forEach(([key, table]) => {
            if (table.faction == factionId) {
                tables.push(table);
            }
        });
        return tables;
    },
    GetPossibleArmyUnits: function(faction, showAll=false) {
        units = this.GetUnits(faction);
        if (showAll) {
            this.GetFaction(faction).supplementalFactions.forEach( (sFaction) => {
                units.concat(this.GetUnits(sFaction));
            });
            units.sort();
        }
        return units;
    },
    GetEquipment: function (equipmentId) {
        for ( i = 0; i < WEAPONS.length; i++) {
            if (WEAPONS[i].id == equipmentId) {
                return WEAPONS[i];
            }
        }
    }, 
    GetRule: function (ruleId) {
        for ( i= 0; i < SPECIAL_RULES.length; i++) {
            if (SPECIAL_RULES[i].id == ruleId)
            {
                return SPECIAL_RULES[i]
            }
        } 
        return {};
    }
}