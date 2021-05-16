var faction = DAL.GetFaction("battleSisters");

// var selectUpgradeTablesContainer = $("#select-upgrade-tables-container");
// faction.upgradeTables.forEach( (table) => {
//     content = "";
//     table.upgrades.forEach( (upgrade) => {
//         content+= `<hr>`;
//         content += `<h5>${upgrade}</h5`;
//     })
//     selectUpgradeTablesContainer.append(`<h5>${table.val().toUppercase()}</h5>`)
// })

function PopulateWeaponDisplay (elementId) {
    content = `<table class="pure-table"><tr><th></th><th>Name</th><th>Range</th><th>Attacks</th><th>Keywords</th>`;
    Object.entries( DAL.GetWeapons() ).forEach( ([_, weapon]) => { 
        keywordContent = ``;
        console.log(weapon);

        weapon.keywords.forEach( (keyword) => {
            
            keywordContent += `<span>:${keyword}:</span>`;
        });

        content += `<tr>
            <td><input type="checkbox"></td>
            <td> <span>${weapon.display}</span></td>
            <td> <span> ${weapon.range} </td>
            <td> </span> ${weapon.attacks}</td>
            <td> ${keywordContent}</td>
        </tr>`
    });
    content += "</table>";
    $(elementId).empty();
    $(elementId).append(content);
}

function PopulateSpecialRulesDisplay (elementId, factionId="", includeGeneral=false) {
    
    content = ``;
    rules = DAL.GetSpecialRules(factionId, includeGeneral);
    Object.entries( rules ).forEach( ([key, rule]) => {
        content += `<div><input type="checkbox" value=${key}> ${rule.name}</div>`;
    });
    $(elementId).empty();
    $(elementId).append(content);
}

PopulateWeaponDisplay("#unit-weapon-display");
PopulateSpecialRulesDisplay("#unit-general-special-rules-display");
PopulateSpecialRulesDisplay("#unit-faction-special-rules-display", "battleSisters");