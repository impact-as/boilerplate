/** grunt-ts task options and watch task setup
 * @see https://github.com/TypeStrong/grunt-ts
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function () {
    const vars = require("../configs/vars.config");

    return {
        ts: {
            options: {
                fast: "never", //Full compile
                htmlOutputTemplate: "namespace Templates { export const <%= modulename %> = '<%= content %>'; }" //Export template as a string inside the "Templates" namespace.
            },
            all: {
                tsconfig: {
                    overwriteFilesGlob: true,
                    updateFiles: true,
                    ignoreFiles: true,
                    ignoreSettings: false,
                    passThrough: false
                },
                html: [vars.devScriptsPath + "**/*.html"], //Look for html templates
                reference: vars.devScriptsPath + "definitions/references.d.ts", //Create reference file
                src: [
                    vars.devScriptsPath + "definitions/references.d.ts",
                    vars.devScriptsPath + "**/*.ts"
                ], //Paths for .ts and .d.ts files
                out: vars.distScriptsPath + vars.siteName + ".js" //dist file
            }
        },
        //Watch task for ts and template-html files
        watch: {
            scripts: {
                files: [
                    vars.devScriptsPath + "**/*.ts",
                    vars.devScriptsPath + "**/*.html",
                    "!" + vars.devScriptsPath + "**/*.html.ts"
                ],
                tasks: ["ts:full"],
                options: {
                    spawn: true, //This should be "true", otherwise the watcher exits when interrupting.
                    interrupt: true //Task is relatively slow, so interrupting is nice.
                }
            }
        }
    }
};