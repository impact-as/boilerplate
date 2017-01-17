

        
/** postcss task options (includes autoprefixer)
 * @see https://github.com/nDmitry/grunt-postcss
 * @see https://github.com/postcss/autoprefixer
 */
module.exports = function () {
    const vars = require("../configs/vars.config");
    const autoprefixer = require("autoprefixer");

    //Final css files need to be defined here
    let files = {};
    files[vars.cssPath + vars.siteName + ".css"] = vars.scssPath + vars.siteName + ".scss";

    return {
        postcss: {
			options: {
				map: true,
				//PostCSS plugins
				processors: [
					//Use autoprefixer plugin
                    autoprefixer({
                    	//Specify supported browsers: https://github.com/ai/browserslist
                    	browsers: [
							//Desktop:
							"> 1%", //Usage greater than 1% by global usage statistics
							"last 2 versions", //The last 2 versions for each major browser
							"Firefox ESR", //FireFox Extended Support Release
							"Opera >= 12", //Opera 12 and up
							"IE >= 9", //IE9 and up
							//Mobile:
							"Android >= 2.3", //Android mobile 2.3 and up
							"iOS >= 4", //Safari mobile 4 and up
							"FirefoxAndroid >= 33", //FF for android 33 and up
							"ChromeAndroid >= 40", //Chrome for android 40 and up
							"OperaMobile >= 12", //Opera mobile 12 and up
							"ExplorerMobile >= 10" //IE mobile 10 and up
                    	]
                    })
				]
			},
			all: {
				src: [vars.cssPath + vars.siteName + ".css"]
			}
		}
    }
};