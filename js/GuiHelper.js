GuiHelper = {
    DisplayRuleKeyword: function (rule) {
        ruleDisplay = DAL.GetRule(rule.id).display;
        if (rule.X) {
            ruleDisplay = ruleDisplay.replace("[x]", rule.X);
        }
        return ruleDisplay
    },
    DisplayRuleDescription: function (rule) {
        description = DAL.GetRule(rule.id).description;
        if (rule.X) 
            description = description.replaceAll("[x]", rule.X);
        return description;
    },
    CreateToolTip(puresize, content, tooltip) {
        return `<div class="${puresize} tooltip">${content}<span class="tooltiptext">${tooltip}</span></div>`
    },
    GetRangeString(range) {
        if (range == 0) {
            return "Melee";
        }
        return range.toString() + "\"";
    },
    GetAttackString(attacks) {
        return "A" + attacks.toString();
    }
}