/** Helper for adding tasks to the grunt configuration object.
 * @param {object} tasksObject - An empty object to which the tasks will be added.
 * @author MAC
 */
module.exports = function (grunt, tasksObject) {

    /** lodash for coding happiness
     * @see https://lodash.com/docs/
     */
    let _ = require("lodash");

    /** Requires task via taskName.
     * @param {string} taskName - Name of the task. This must match the task-name used by the 3rd-party module.
     */
    function addTask(taskName) {
        const taskModule = require(`../tasks/${taskName}.task`)(grunt);
        let taskObject;

        if (_.isFunction(taskModule)) {
            taskObject = taskModule();
        } else {
            taskObject = taskModule;
        }

        if (_.isObject(taskObject)) {
            //Merge config objects.
            _.mergeWith(tasksObject, taskObject, (objectValue, sourceValue) => {
                //Custom handling of array-properties.
                if (_.isArray(objectValue)) {
                    //Concat and de-duplicate.
                    return _.union(objectValue, sourceValue);
                }
            });
        } else {
            throw new Error(`Export from "${taskName}" task should be either an object or a function returning an object.`);
        }
    }

    return addTask;
};