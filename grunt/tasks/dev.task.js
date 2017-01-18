/** Development custom grunt task setup.
 * @param {object} grunt - Grunt should be passed to module.
 */
module.exports = function (grunt) {
    grunt.registerTask("dev", ["sass:dev", "postcss:all", "ts:all", "concat:all"]);
};