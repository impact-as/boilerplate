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

    //Load custom tasks (e.g. dev, qa, prod, etc.).
    require("./grunt/tasks-custom/default.custom")(grunt);
    require("./grunt/tasks-custom/dev.custom")(grunt);
    require("./grunt/tasks-custom/qa.custom")(grunt);
    require("./grunt/tasks-custom/prod.custom")(grunt);

    //Object to hold all grunt tasks.
    let tasks = {};

    //Import helper for tasks.
    const addTask = require("./grunt/helpers/add-task.helper")(tasks);

    //Add tasks by name (e.g. sass, ts, tslint, etc.).
    addTask("sass");
    addTask("postcss");

    //Init grunt with added tasks.
    grunt.initConfig(tasks);
};