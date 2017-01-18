/** GitPush custom grunt task setup. Intended for use with githooks.
 * @param {object} grunt - Grunt should be passed to module.
 * @see https://bitbucket.org/webdanmark/impact.tools.githooks
 */
module.exports = function (grunt) {
    grunt.registerTask("gitpush", ["ts:all", "tslint"]);
};