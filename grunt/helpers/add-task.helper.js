/** Helper for adding tasks to the grunt configuration object.
 * @param {object} tasksObject - An empty object to which the tasks will be added.
 * @author MAC
 */
module.exports = function (tasksObject) {

    /** lodash for coding happiness
     * @see https://lodash.com/docs/
     */
    let _ = require("lodash");

    /** Requires task via taskName.
     * @param {string} taskName - Name of the task. This must match the task-name used by the 3rd-party module.
     */
    function addTask(taskName) {
        const taskModule = require(`../tasks/${taskName}.task`);
        let taskObject;

        if (typeof taskModule === "function") {
            taskObject = taskModule();
        } else {
            taskObject = taskModule;
        }

        if (typeof taskObject === "object") {
            _.merge(tasksObject, taskObject);
        } else {
            console.error(`Export from ${taskName} should be either an object or a function returning an object.`);
        }
    }

    return addTask;
};