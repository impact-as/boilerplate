
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
                sourceMap: true,
                sourceComments: true,
                outputStyle: "nested"
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
            
        }
    }
};