/** Development custom grunt task setup.
 * @param {object} grunt - Grunt should be passed to module.
 */
module.exports = function (grunt) {
    grunt.registerTask("dev", ["clean:prebuild", "sass:dev", "postcss:dev", "tslint", "ts:all", "concat:all", "checkLivereload"]);
};