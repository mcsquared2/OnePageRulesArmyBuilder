
let PARAMS = (new URL(document.location)).searchParams;

let QuerystingUtilities = {
    ConstructQuerystring: function (location, params) {
        qstring = location + "?";
        isFirst = true;
        Object.entries(params).forEach(([key, value]) => {
            qstring += `${key}=${value}&`;
        });
        return qstring;
    }
}