const { stylelint } = require('@siberiacancode/stylelint');

module.exports = {
    ...stylelint,
    rules: {
        ...stylelint.rules,
        'custom-property-pattern': null
    }
};