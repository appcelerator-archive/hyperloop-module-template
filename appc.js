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
                'MyFramework': {
                     // these can be an array or string
                     source: ['src'],
                     header: 'src',
                     resource: 'src'
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
}
