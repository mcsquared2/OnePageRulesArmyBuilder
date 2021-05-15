DAL = {
    GetFactions: function() {
        return FACTIONS;
    },
    GetFaction: function(factionId) {
        return FACTIONS[factionId];
    },
    GetSpecialRules: function(factionId="", includeGeneral=false) {
        if (factionId == ""){
            return SPECIAL_RULES;
        } else if (!includeGeneral){
            return FACTIONS[factionId].specialRules;
        }
        return SPECIAL_RULES.concat(GetFaction(factionId).specialRules);
    }, 
    GetWeapons: function() {
        return WEAPONS;
    }
}