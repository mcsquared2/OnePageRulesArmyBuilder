$("#unit-add-upgrade-btn").click(function(){
    console.log("Val: " + $("#unit-upgrade-select").val());
    FormHelper.AddItemToMultiSelect($("#unit-upgrade-select").val(), "#unit-upgrades-display")
})