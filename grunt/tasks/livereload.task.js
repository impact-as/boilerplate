/** Custom livereload watch task.
 * @param {object} grunt - Grunt should be passed to module.
 * @param {object} taskConfigs - Current configs object. Needed for this task. Special case.
 * @see https://github.com/gruntjs/grunt-contrib-watch 
 * @see https://github.com/gruntjs/grunt-contrib-watch/blob/master/docs/watch-examples.md#enabling-live-reload-in-your-html 
 * @see https://www.markbrilman.nl/2011/08/howto-convert-a-pfx-to-a-seperate-key-crt-file/
 * @author MAC
 * @example 
 * //Please include this script at the bottom of the page.
 * //NOTE: Script should be included only on .localhost i.e. @if (HttpContext.Current.Request.Url.Host.EndsWith(".localhost"))
 * <script src="dev/scripts/3rdparty/livereload/livereload-wrapper.js"></script>
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
                // cert: grunt.file.read("grunt/certificates/livereload.crt"),
                // key: grunt.file.read("grunt/certificates/livereload-decrypted.key")
            },
            spawn: true,
            interrupt: true
        }
    };

    //Register livereload-enabled watch-task.
    grunt.registerTask("livereload", () => {
        enableWrapper();
        grunt.task.run(["watch"]);
    });

    //Register task to allow other tasks to modify wrapper on build (i.e. ensure file exists to avoid 404 in browser).
    grunt.registerTask("checkLivereload", checkWrapper);

    //Setup livereload wrapper.
    const liveReloadWrapperPath = vars.devScriptsPath + "3rdparty/livereload/livereload-wrapper.js";

    function disableWrapper() {
        grunt.file.write(liveReloadWrapperPath, "//Does nothing unless 'grunt livereload' is running");
    }

    function enableWrapper() {
        grunt.file.write(liveReloadWrapperPath, "document.write('<script src=\"//' + location.hostname + ':9000/livereload.js\"></' + 'script>');");

        process.on("exit", disableWrapper);
        process.on("SIGINT", disableWrapper);
        process.on("uncaughtException", disableWrapper);
    }

    function checkWrapper() {
        if (!grunt.file.exists(liveReloadWrapperPath)) {
            disableWrapper();
        }
    }
};