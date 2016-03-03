/**
 * Hyperloop configuration
 */
module.exports = {
    // Basic configuration
    type: 'module',
    group: 'titanium',
    minsdk: '6.0.0',
    platforms: {
        ios: {
            vendor: {

                // Q: How would we make sure this is unique accross modules?
                'MyFramework': {
                     // these can be an array or string
                     source: ['vendor'],
                     header: 'vendor',
                     resource: 'vendor'
                }
            }
        },
        android: {
            vendor: {}
        },
        windows: {
            vendor: {}
        }
    }
};
