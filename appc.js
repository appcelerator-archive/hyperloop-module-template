/**
 * Hyperloop configuration
 */
module.exports = {
  // Basic configuration
  type: 'timodule',
  group: 'hyperloop',
  subtype: 'hyperloop',
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
  },
  timodule: {
    apiversion: '1',
    guid: '35ebe7cc-0854-40f0-b67b-61014d67beaf',
    moduleid: 'ti.test',
    platforms: ['ios', 'android']
  }
}
