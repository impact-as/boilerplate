/** grunt-contrib-watch task basic config.
 * NOTE: No actual "tasks" should be defined here. Task are defined in the associated config files i.e. "sass.config.js" etc.
 * @see https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = {
    watch: {
        options: {
            maxListeners: 1000 //Increase maxListeners to avoid errors
        }
    }
};