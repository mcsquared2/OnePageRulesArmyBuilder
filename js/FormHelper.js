var FormHelper = {
    AddItemToMultiSelect : function (itemId, destinationId) {
        $(destinationId).append("<div class='selected-class'>" + itemId + "</div>");
    },
    PopulateSelectIfExists: function(selectId, data) {
        if ($(selectId)){
            element = $(selectId);
            data.forEach((d) => {
                element.append(`<option value='${d.val}'>${d.display}</option>`)
            })
        }
    }
}