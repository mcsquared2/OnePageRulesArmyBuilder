
function PopulateFactionDisplay() {
    faction = DAL.GetFaction(PARAMS.get("factionId"));
    console.log(faction.display);
    $("#faction-name-display").append(faction.display);

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
        bgShowing=false;
    } else {
        bgToggle.append("Hide");
        bgDisplay.show();
        bgShowing=true;
    }
})


PopulateFactionDisplay();