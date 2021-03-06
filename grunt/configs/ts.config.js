/** grunt-ts task config and watch task setup
 * @see https://github.com/TypeStrong/grunt-ts
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function (grunt) {
    const vars = require("../settings/vars.setting");

    return {
        ts: {
            options: {
                fast: "never", //Full compile
                htmlOutputTemplate: "namespace Templates { export const <%= modulename %> = '<%= content %>'; }" //Export template as a string inside the "Templates" namespace.
            },
            all: {
                tsconfig: false,
                options: grunt.file.readJSON("tsconfig.json").compilerOptions,
                html: [vars.devScriptsPath + "**/*.html"], //Look for html templates
                reference: vars.devScriptsPath + "definitions/references.d.ts", //Create reference file
                src: [
                    vars.devScriptsPath + "**/*.ts"
                ], //Paths for .ts and .d.ts files
                out: vars.distScriptsPath + vars.siteName + ".ts.js" //dist file
            }
        },
        //Watch task for ts and template-html files (also present in tslint.task.js)
        watch: {
            typescript: {
                files: [
                    vars.devScriptsPath + "**/*.ts",
                    vars.devScriptsPath + "**/*.html",
                    "!" + vars.devScriptsPath + "**/*.html.ts",
                    "!" + vars.devScriptsPath + "definitions/references.d.ts"
                ],
                tasks: ["ts:all"],
                options: {
                    spawn: true, //This should be "true", otherwise the watcher exits when interrupting.
                    interrupt: true //Task is relatively slow, so interrupting is nice.
                }
            }
        }
    };
};