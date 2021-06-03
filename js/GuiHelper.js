GuiHelper = {
    DisplayRuleKeyword: function (rule) {
        ruleDisplay = DAL.GetRule(rule.id).display
        if (rule.X) {
            ruleDisplay.replace("[x]", rule.X);
        }
        return ruleDisplay
    },
    DisplayRuleDescription: function (rule) {
        return DAL.GetRule(rule.id).description.replaceAll("[x]", rule.X);
    }
}