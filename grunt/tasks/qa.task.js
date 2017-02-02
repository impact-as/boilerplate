/** QA custom grunt task setup.
 * @param {object} grunt - Grunt should be passed to module.
 */
module.exports = function (grunt) {
    grunt.registerTask("qa", ["clean:prebuild", "sass:dist", "postcss:dist", "tslint", "ts:all", "concat:all", "uglify:dist", "clean:postbuild"]);
};