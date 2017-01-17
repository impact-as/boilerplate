/** Main Gruntfile for project.
 * @author MAC
 * @see http://gruntjs.com/api/grunt
 */
module.exports = function (grunt) {

    /** Load modules "just-in-time" automatically (don't use grunt.loadTask("taskName")).
     * @see https://github.com/shootaroo/jit-grunt
     */
    require("jit-grunt")(grunt, {});

    //Object to hold all grunt tasks.
    let tasks = {};

    //Import helper.
    const addTask = require("./grunt/helpers/add-task.helper")(tasks);

    //Add tasks by name.
    addTask("sass");

    //Init grunt with added tasks.
    grunt.initConfig(tasks);

    //Load custom tasks
    require("./grunt/tasks-custom/default.custom")(grunt);
    require("./grunt/tasks-custom/dev.custom")(grunt);
    require("./grunt/tasks-custom/qa.custom")(grunt);
    require("./grunt/tasks-custom/prod.custom")(grunt);
};