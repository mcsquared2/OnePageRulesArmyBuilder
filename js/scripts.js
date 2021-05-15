$("#unit-add-upgrade-btn").click(function(){
    console.log("Val: " + $("#unit-upgrade-select").val());
    FormHelper.AddItemToMultiSelect($("#unit-upgrade-select").val(), "#unit-upgrades-display")
})

factions = DAL.GetFactions();

function PopulateFactionsDisplay (factions, elementId) {
    content = ``;
    Object.entries(factions).forEach(([key, faction]) => {
        content += `<a href="./faction.html?factionId=${key}"><div>${faction.display}</div></a>`
    });
    $(elementId).empty();
    $(elementId).append(content);
}

PopulateFactionsDisplay(factions, "#index-faction-display");