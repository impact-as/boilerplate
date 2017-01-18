/** Main Gruntfile for project.
 * @author MAC
 * @see http://gruntjs.com/api/grunt
 */
module.exports = function (grunt) {
    /** Add timer to grunt task execution.
     * @see https://github.com/sindresorhus/time-grunt
     */
    require("time-grunt")(grunt);

    /** Load modules "just-in-time" automatically (don't use grunt.loadTask("taskName")).
     * @see https://github.com/shootaroo/jit-grunt
     */
    require("jit-grunt")(grunt, {});

    //Object to hold all grunt task configs.
    let taskConfigs = {};

    //Import helper for tasks configs.
    const importConfig = require("./grunt/helpers/import-config.helper")(grunt, taskConfigs);

    //Add tasks by name (e.g. sass, ts, tslint, etc.).
    //NOTE: Load order is important with regards to configs containing the same task-name (like the 'watch' task). I.e. "sass" should load before "postcss" to ensure correct execution order.
    importConfig("watch");
    importConfig("sass");
    importConfig("postcss");
    importConfig("ts");
    importConfig("tslint");
    importConfig("concat");
    importConfig("uglify");

    //Load custom tasks (e.g. dev, qa, prod, etc.).
    require("./grunt/tasks/default.task")(grunt);

    require("./grunt/tasks/dev.task")(grunt);
    require("./grunt/tasks/qa.task")(grunt);
    require("./grunt/tasks/prod.task")(grunt);

    require("./grunt/tasks/livereload.task")(grunt, taskConfigs);

    //Init grunt with added tasks.
    grunt.initConfig(taskConfigs);
};