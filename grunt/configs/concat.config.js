/** grunt-contrib-concat task config and watch task setup.
 * @see https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function (grunt) {
    const ngAnnotate = require("ng-annotate");
    const vars = require("../settings/vars.setting");

    const src = [
        //May need further ordering
        vars.devScriptsPath + "3rdparty/**/*.js",
        vars.distScriptsPath + vars.siteName + ".ts.js",
    ];
    const dest = vars.distScriptsPath + vars.siteName + ".js";

    return {
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: "inline"
            },
            dev: {
                src: src,
                dest: dest
            },
            dist: {
                src: src,
                dest: dest,
                options: {
                    process: function (src, filepath) {
                        if (filepath.indexOf(".ts.js") > -1) {
                            //Run ng-annotate on typescript output.
                            //You should enabled strict-di for dist build.
                            var annotated = ngAnnotate(src, {
                                add: true
                            });
                            return annotated.src;
                        }
                        return src;
                    }
                }
            }
        },
        //Watch task for typescript output (*.ts.js file).
        watch: {
            javascript: {
                files: [
                    vars.distScriptsPath + "*.ts.js"
                ],
                tasks: ["concat:dev"],
                options: {
                    spawn: false,
                    interrupt: false
                }
            }
        }
    };
};