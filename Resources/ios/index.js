/*
I don't see much reason to, but any file should be able to be overriden from
the platform specific folder, including index.js and (more likely) module.js.
The examples here could just as well be done with code branching.
 */

// Best practice to group code that executes when this module is first required
(function() {

  // CommonJS modules should have NodeJS like module.* properties
  console.info('Module required on iOS: ' + module.id);

})();

exports.createExampleView = function(params) {
  params = params || {};

  // Always red on iOS
  params.backgroundColor = 'red';

  return require('./ExampleView').create(params);
};

exports.exampleMethod = function(who) {

  // iOS says bye instead of Hello
  console.info('Bye ' + who);
};
