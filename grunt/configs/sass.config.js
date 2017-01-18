/** grunt-sass task config and watch task setup
 * @see https://github.com/sindresorhus/grunt-sass
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function () {
    const vars = require("../settings/vars.setting");

    //Final css files need to be defined here
    let files = {};
    files[vars.cssPath + vars.siteName + ".css"] = vars.scssPath + vars.siteName + ".scss";

    return {
        sass: {
            dev: {
                options: {
                    sourceMap: true, //Consider disabling if compile is slow.
                    sourceComments: true,
                    outputStyle: "expanded"
                },
                files: files
            },
            dist: {
                options: {
                    sourceMap: false,
                    sourceComments: false,
                    outputStyle: "compressed"
                },
                files: files
            }
        },
        //Watch task for sass files (also present in postcss.task.js)
        watch: {
            scss: {
                files: [vars.scssPath + "**/*.scss"],
                tasks: ["sass:dev"],
                options: {
                    spawn: false, //Cuts atleast 1 sec off compile time.
                    interrupt: true
                }
            }
        }
    };
};