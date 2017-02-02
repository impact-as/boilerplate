/** grunt-contrib-concat task config and watch task setup. This also runs ngAnnotate as part of the concat process.
 * @see https://github.com/gruntjs/grunt-contrib-concat
 * @see https://github.com/olov/ng-annotate
 */
module.exports = function (grunt) {
    const ngAnnotate = require("ng-annotate");
    const vars = require("../settings/vars.setting");

    const src = [
        //May need further ordering
        vars.devScriptsPath + "3rdparty/**/*.js",
        "!" + vars.devScriptsPath + "3rdparty/livereload/**",
        vars.distScriptsPath + vars.siteName + ".ts.js",
    ];
    const dest = vars.distScriptsPath + vars.siteName + ".js";

    return {
        concat: {
            options: {
                sourceMap: true,
                sourceMapStyle: "embed",
                process: function (src, filepath) {
                    //Run ng-annotate on typescript-generated files only.
                    if (filepath.indexOf(".ts.js") > -1) {
                        var annotated = ngAnnotate(src, {
                            add: true,
                            map: {
                                inline: true
                            }
                        });
                        if (annotated.errors) {
                            grunt.log.error("Errors occurred");
                            for (var i = 0; i < annotated.errors.length; i++) {
                                grunt.log.error(annotated.errors[i]);
                            }
                        } else {
                            return annotated.src;
                        }
                    }
                    return src;
                }
            },
            all: {
                src: src,
                dest: dest
            }
        },
        //Watch task for typescript output (*.ts.js file).
        watch: {
            javascript: {
                files: [
                    vars.distScriptsPath + "*.ts.js"
                ],
                tasks: ["concat:all"],
                options: {
                    spawn: false,
                    interrupt: false
                }
            }
        }
    };
};