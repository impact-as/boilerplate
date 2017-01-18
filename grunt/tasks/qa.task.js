/** QA custom grunt task setup.
 * @param {object} grunt - Grunt should be passed to module.
 */
module.exports = function (grunt) {
    grunt.registerTask("qa", ["clean:prebuild", "sass:dist", "postcss:dist", "ts:all", "tslint", "concat:all", "uglify:dist", "clean:postbuild"]);
};