/** grunt-ts task options and watch task setup
 * @see https://github.com/TypeStrong/grunt-ts
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function () {
    const vars = require("../configs/vars.config");

    //Setup reusable paths and options
    const srcPaths = [
        vars.devScriptsPath + "definitions/references.d.ts",
        vars.devScriptsPath + "**/*.ts"
    ];
    const referencePath = vars.devScriptsPath + "definitions/references.d.ts";
    const htmlPath = [vars.devScriptsPath + "**/*.html"];
    const tsconfigOptions = {
        overwriteFilesGlob: true,
        updateFiles: true,
        ignoreFiles: false,
        ignoreSettings: false,
        passThrough: false
    };

    return {
        ts: {
            //Default options
            options: {
                fast: "never", //Full compile
                htmlOutputTemplate: "namespace Templates { export const <%= modulename %> = '<%= content %>'; }" //Export template as a string inside the "Templates" namespace.
            },
            full: {
                tsconfig: tsconfigOptions,
                src: srcPaths, //Paths for .ts and .d.ts files
                reference: referencePath, //Create reference file
                html: htmlPath //Look for html templates
            },
            watcher: {
                tsconfig: tsconfigOptions,
                src: srcPaths,
                reference: referencePath,
                html: htmlPath,
                options: {
                    fast: "always" //Compile changed only
                }
            },
        },
        //Watch tasks for ts and js files
        watch: {
            
        }
    }
};		