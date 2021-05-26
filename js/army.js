function GetArmy() {
    if (QuerystingUtilities.GetParam("armyId")) {
        DAL.GetArmy(QuerystingUtilities.GetParam("armyId"));
    } else {
        return {
            squads: [{}]
        };
    }
}

function PopulateFactionSelect() {
    $("#army-faction-select").append(`<option disabled selected hidden>Choose Faction</option>`);
    DAL.GetFactions().forEach(([key, faction]) => {
        console.log(faction);
        $("#army-faction-select").append(`<option value="${faction.id}">${faction.display}</option>`);
    })
}

function PopulatePossibleArmyUnits(faction) {
    if (faction == "") {
        return [];
    }
    content = `<div class="pure-u-1">`
    DAL.GetPossibleArmyUnits(faction).forEach( (unit) => {
        content += `
            <div class="pure-u-11-24">
                <div class="pure-u-1">${unit.display}</div>
                <div class="pure-u-1">${unit.type} ${unit.faction}</div>
                <div class="pure-u-1-4">S: ${unit.size}</div><div class="pure-u-1-4">Qua: ${unit.qua}</div><div class="pure-u-1-4">Def: ${unit.def}</div><div class="pure-u-1-4">C: ${unit.cost}</div>`;
        content += `<div class="pure-u-1"><h5>Equipment</h5>`;
        console.log(unit);
        unit.equipment.forEach( (equipment) => {

        });
        content += `</div><div class="pure-u-1"><h5>Special Rules</h5>`;
        unit.specialRules.forEach( (rule) => {

        });
        content += `</div></div>`;
    });
    content += `</div>`;
    console.log(content);
    $("#army-units-display").empty();
    $("#army-units-display").append(content);

}

_army = GetArmy();

$("#army-faction-select").change( () => {
    console.log($("#army-faction-select").val());
    PopulatePossibleArmyUnits($("#army-faction-select").val());
})

PopulateFactionSelect();