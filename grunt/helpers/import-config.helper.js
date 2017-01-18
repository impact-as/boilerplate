/** Helper for adding tasks to the grunt configuration object.
 * @param {object} tasksObject - An empty object to which the tasks will be added.
 * @author MAC
 */
module.exports = function (grunt, taskConfigs) {

    /** lodash for coding happiness
     * @see https://lodash.com/docs/
     */
    let _ = require("lodash");

    /** Requires task config via taskName and extends the config object with it.
     * @param {string} taskName - Name of the task. This must match the task-name used by the 3rd-party module.
     */
    function importConfig(taskName) {
        const configModule = require(`../configs/${taskName}.config`)(grunt);
        let taskConfig;

        if (_.isFunction(configModule)) {
            taskConfig = configModule();
        } else {
            taskConfig = configModule;
        }

        if (_.isObject(taskConfig)) {
            //Merge config objects.
            _.mergeWith(taskConfigs, taskConfig, (objectValue, sourceValue) => {
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

    return importConfig;
};