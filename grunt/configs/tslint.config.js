/** grunt-tslint task config and watch task setup using grunt-newer
 * @see https://github.com/palantir/grunt-tslint
 * @see https://palantir.github.io/tslint/rules/
 * @see https://github.com/gruntjs/grunt-contrib-watch
 * @see https://github.com/tschaub/grunt-newer
 */
module.exports = function (grunt) {
    const vars = require("../settings/vars.setting");

    const src = [
        vars.devScriptsPath + "**/*.ts",
        "!" + vars.devScriptsPath + "3rdparty/**",
        "!" + vars.devScriptsPath + "definitions/**"
    ];

    return {
        tslint: {
            options: {
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: { src: src }
        },
        // Watch task for ts files.
        //TODO: Test if this is still slow on OSX.
        // watch: {
        //     typescript: {
        //         files: src,
        //         tasks: ["newer:tslint"],
        //         options: {
        //             spawn: true, //This should be "true", otherwise the watcher exits when interrupting.
        //             interrupt: true //Task is relatively slow, so interrupting is nice.
        //         }
        //     }
        // }
    };
};