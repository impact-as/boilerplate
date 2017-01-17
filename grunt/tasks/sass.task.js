
/** grunt-sass task options
 * @see https://github.com/sindresorhus/grunt-sass
 */
module.exports = function () {
    const vars = require("../configs/vars.config");

    //Final css files need to be defined here
    let files = {};
    files[vars.cssPath + vars.siteName + ".css"] = vars.scssPath + vars.siteName + ".scss";

    return {
        sass: {
            //Default options
            options: {
                sourceMap: true, //Consider disabling if compile is slow.
                sourceComments: true,
                outputStyle: "expanded"
            },
            dev: {
                files: files
            },
            dist: {
                options: {
                    sourceComments: false,
                    outputStyle: "compressed"
                },
                files: files
            }
        },
        //Watch task for sass files
        watch: {
            scss: {
                files: [vars.scssPath + "**/*.scss"],
                tasks: ["sass:dev"],
                options: {
                    spawn: false, //Cuts atleast 1 sec off compile time.
                    interrupt: true
                }
            },
        }
    }
};