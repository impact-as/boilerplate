/** Default grunt task setup
 * @param {object} grunt - Grunt should be passed to module.
 */
module.exports = function (grunt) {
    grunt.registerTask("default", ["sass:dev", "postcss:all", "ts:all", "concat:dev"]);
    // grunt.registerTask("default", ["sass:dev", "postcss:all", "ts:all", "tslint", "concat:dev"]);
};