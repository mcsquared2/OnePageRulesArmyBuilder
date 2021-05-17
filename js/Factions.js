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
        <table class="pure-table pure-table-striped almost-full-table">
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
    Object.entries(DAL.GetUnits(faction.id)).forEach(([key, unit]) => {
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

function PopulateUpgradesDisplay() {
    lightContent = ``;
    heavyContent = ``;
    DAL.GetUpgradeTables(faction.id).forEach( (table) => {
        console.log(table);
        sectionContent = ``;
        table.sections.forEach( (section) => {
            sectionContent += `<tr><th colspan="2">${section.display}</th></tr>`
            section.options.forEach( (option) => {
                sectionContent += `<tr><td>${option.val.join(", ")}</td><td>${option.cost}</td></tr>`;
            })
        });
        tableContent = `
            <div>
                <strong>${table.table}</strong>
                <table class="pure-table pure-table-striped">
                    ${sectionContent}
                </table>
            </div>
        `;
        if (table.type == "light") {
            console.log("adding light table")
            console.log(tableContent);
            lightContent += tableContent;
        } else {

            console.log("adding heavy table")
            console.log(tableContent);
            heavyContent += tableContent;
        }
    })
    $("#faction-upgrades-display-light").empty();
    $("#faction-upgrades-display-light").append(lightContent);
    $("#faction-upgrades-display-heavy").empty();
    $("#faction-upgrades-display-heavy").append(heavyContent);
}

function PopulateFactionDisplay() {
    $("#faction-name-display").append(faction.display);
    PopulateSpecialRulesDisplay("#faction-special-rules-display");
    PopulateUnitDisplay();
    PopulateUpgradesDisplay();

}

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
    $("#faction-upgrades-display-light").toggle();
    $("#faction-upgrades-display-heavy").toggle();
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
$("#faction-upgrades-display-heavy").hide();

$("#unit-type-light-btn").click(() => {
    ToggleUnitType(true);
})
$("#unit-type-heavy-btn").click(() => {
    ToggleUnitType(false);
})


PopulateFactionDisplay();