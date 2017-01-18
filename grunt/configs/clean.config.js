/** grunt-contrib-clean task config setup.
 * @see https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function (grunt) {
    const vars = require("../settings/vars.setting");

    return {
        clean: {
            prebuild: [vars.distPath],
            postbuild: [ //QA/Prod only
                vars.distScriptsPath + "*",
                "!" + vars.distScriptsPath + "*.min.js"
            ]
        }
    };
};