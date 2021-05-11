DAL = {
    GetFactions: function() {
        return FACTIONS;
    },
    GetFaction: function(factionId) {
        return FACTIONS[factionId];
    },
    GetSpecialRules: function(factionId) {
        if (factionId != ""){
            return SPECIAL_RULES;
        }
        return SPECIAL_RULES.concat(GetFaction(factionId).specialRules);
    }
}