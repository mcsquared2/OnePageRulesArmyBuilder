faction = DAL.GetFaction(PARAMS.get("factionId"));

function PopulateSpecialRulesDisplay(elementId) {
    content = ``;
    Object.entries(faction.specialRules).forEach(([key, rule]) => {
        content += `<div><h4>${rule.name}</h4><p>${rule.description}</p>`;
    });
    $(elementId).empty();
    $(elementId).append(content);
}

function PopulateFactionDisplay() {
    console.log(faction.display);
    $("#faction-name-display").append(faction.display);
    PopulateSpecialRulesDisplay("#faction-special-rules-display")

}


$("#faction-add-unit-btn").click(() => {
    
})

bgToggle = $("#faction-background-toggle-btn");
bgDisplay = $("#faction-background-display");
bgDisplay.hide();
bgShowing = false;
bgToggle.click( () => {
    bgToggle.empty();
    if (bgShowing){
        bgToggle.append("Show");
        bgDisplay.hide();
    } else {
        bgToggle.append("Hide");
        bgDisplay.show();
    }
    bgShowing = !bgShowing;
})


function ToggleUnitType(isLight) {
    $(".unit-type-descriptor").each(function(element) {
        $(this).empty();
        if (isLight) {
            $(this).append("Light");
        } else {
            $(this).append("Heavy");
        }
    })
}

$("#unit-type-light-btn").click(() => {
    ToggleUnitType(true);
})
$("#unit-type-heavy-btn").click(() => {
    ToggleUnitType(false);
})


PopulateFactionDisplay();