/** Paths and other shared variables for reuse across tasks.
 * NOTE: siteName should be changed to reflect project customer.
 */
module.exports = {
    siteName: "main",
    devPath: "dev/",
    distPath: "dist/",
    viewsPath: "", //Razor views
    get devScriptsPath() { return this.devPath + "scripts/" },
    get distScriptsPath() { return this.distPath + "scripts/" },
    get devGraphicsPath() { return this.devPath + "graphics/" },
    get devGraphicsPath() { return this.distPath + "graphics/" },
    get scssPath() { return this.devPath + "scss/" },
    get cssPath() { return this.distPath + "css/" }
};