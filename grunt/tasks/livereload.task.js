/** Custom livereload watch task.
 * @param {object} grunt - Grunt should be passed to module.
 * @param {object} taskConfigs - Current configs object. Needed for this task. Special case.
 * @see https://github.com/gruntjs/grunt-contrib-watch 
 * @see https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html 
 * @see https://www.markbrilman.nl/2011/08/howto-convert-a-pfx-to-a-seperate-key-crt-file/
 */
module.exports = function (grunt, taskConfigs) {
    const vars = require("../settings/vars.setting");

    //Add Livereload (watch) config to config object (this is done here to avoid Livereload running on regular watch).
    taskConfigs.watch.livereload = {
        files: [
            vars.cssPath + "*.css",
            vars.distScriptsPath + "**/*.js",
            vars.viewsPath + "**/*.cshtml"
        ],
        options: {
            livereload: {
                port: 9000,
                //Certificates have to be created from the certificate used for the site (see links). Comment if not using https.
                cert: grunt.file.read("grunt/certificates/livereload.crt"),
                key: grunt.file.read("grunt/certificates/livereload-decrypted.key")

            },
            spawn: true,
            interrupt: true
        }
    };

    grunt.registerTask("livereload", ["watch"]);
};