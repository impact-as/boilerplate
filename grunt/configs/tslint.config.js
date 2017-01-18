/** grunt-tslint task config and watch task setup using grunt-newer
 * @see https://github.com/palantir/grunt-tslint
 * @see https://palantir.github.io/tslint/rules/
 * @see https://github.com/gruntjs/grunt-contrib-watch
 * @see https://github.com/tschaub/grunt-newer
 */
module.exports = function (grunt) {
    const vars = require("../settings/vars.setting");

    return {
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: [
                    vars.devScriptsPath + "**/*.ts",
                    "!**/templates/**",
                    "!**/3rdparty/**",
                    "!**/node_modules/**"
                ]
            }
        },
        // Watch task for ts files (also present in ts.task.js)
        watch: {
            scripts: {
                files: [
                    vars.devScriptsPath + "**/*.ts"
                ],
                tasks: ["newer:tslint"],
                options: {
                    spawn: true, //This should be "true", otherwise the watcher exits when interrupting.
                    interrupt: true //Task is relatively slow, so interrupting is nice.
                }
            }
        }
    }
};