faction = DAL.GetFaction(PARAMS.get("factionId"));

function _getUnitRow(unit){
    equipmentContent = ``;
    unit.equipment.forEach( (item) => {
        equipmentContent += `<div>${item}</div>`;
    })
    specialRulesContent = ``;
    unit.specialRules.forEach((rule) => {
        specialRulesContent += `<div>${rule}</div>`;
    })
    upgradesContent = unit.upgrades.join(", ");
    row = `
        <tr>
            <td>${unit.display}</td>
            <td>${unit.size}</td>
            <td>${unit.qua}</td>
            <td>${unit.def}</td>
            <td>${equipmentContent}</td>
            <td>${specialRulesContent}</td>
            <td>${upgradesContent}</td>
            <td>${unit.cost}</td>
        </tr>`;
    return row;
}

function PopulateSpecialRulesDisplay(elementId) {
    content = ``;
    Object.entries(DAL.GetSpecialRules(`battleSisters`)).forEach(([key, rule]) => {
        content += `<div class="pure-u-1-5"><h4>${rule.name}</h4><p>${rule.description}</p></div>`;
    });
    $(elementId).empty();
    $(elementId).append(content);
}

function PopulateUnitDisplay() {
    lightContent = `
        <table class="pure-table pure-table-striped unit-display">
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Qua</th>
                <th>Def</th>
                <th>Equipment</th>
                <th>Special Rules</th>
                <th>Upgrades</th>
                <th>Cost</th>
    `;
    heavyContent = lightContent;
    Object.entries(DAL.GetUnits(`battleSisters`)).forEach(([key, unit]) => {
        if (unit.type == `light`) {
            lightContent += _getUnitRow(unit);
        } else if (unit.type == `heavy`) {
            heavyContent += _getUnitRow(unit);
        }
    });
    lightContent += `</table>`;
    heavyContent += `</table>`;
    $("#faction-unit-display-light").empty();
    $("#faction-unit-display-light").append(lightContent);
    $("#faction-unit-display-heavy").empty();
    $("#faction-unit-display-heavy").append(heavyContent);

}

function PopulateFactionDisplay() {
    $("#faction-name-display").append(faction.display);
    PopulateSpecialRulesDisplay("#faction-special-rules-display");
    PopulateUnitDisplay();

}



$("#faction-add-unit-btn").click(() => {
    
})

function toggleArea(toggleElementId, areaElementId) {
    $(areaElementId).toggle("slow", function (){});
    toggle = $(toggleElementId);
    if (toggle.html() == "Show") {
        toggle.empty();
        toggle.append("Hide");
    } else {
        toggle.empty();
        toggle.append("Show");
    }
}

$("#faction-background-toggle-btn").click( () => {
    toggleArea("#faction-background-toggle-btn", "#faction-background-container");
});

$("#faction-special-rules-toggle-btn").click( () => {
    toggleArea("#faction-special-rules-toggle-btn", "#faction-special-rules-container");
})

$("#faction-background-container").hide();
$("#faction-special-rules-container").hide();

function ToggleUnitType(isLight) {
    $("#faction-unit-display-light").toggle();
    $("#faction-unit-display-heavy").toggle();
    $(".unit-type-descriptor").each(function(element) {
        $(this).empty();
        if (isLight) {
            $(this).append("Light");
        } else {
            $(this).append("Heavy");
        }
    })
}

$("#faction-unit-display-heavy").hide();

$("#unit-type-light-btn").click(() => {
    ToggleUnitType(true);
})
$("#unit-type-heavy-btn").click(() => {
    ToggleUnitType(false);
})


PopulateFactionDisplay();