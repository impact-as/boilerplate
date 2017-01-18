/** grunt-contrib-uglify task config and watch task setup.
 * @see https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function (grunt) {
    const vars = require("../settings/vars.setting");

    let files = {};
    files[vars.distScriptsPath + vars.siteName + ".min.js"] = [vars.distScriptsPath + vars.siteName + ".js"];

    return {
        uglify: {
            options: {
                preserveComments: false
            },
            dist: {
                files: files
            }
        }
    };
};