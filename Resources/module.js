/*
I'm not sure about this file, but if we need to provide HL modules with a way
to execute logic when the app loads, regardless and before the module is
required, it should be in a separate file. Since CommonJS modules are cached
it might not be a problem that a user could require this file as well, but if
we don't want that we should move it out of `Resources`.

@see http://docs.appcelerator.com/platform/latest/#!/guide/iOS_Module_Architecture-section-43288765_iOSModuleArchitecture-ModuleLifecycle
*/

// Best practice to group code that executes when this module is first required
(function load() {

  // CommonJS modules should have NodeJS like module.* properties
  console.info('Module loaded: ' + module.id);

  // Register to lifecycle events
  Ti.App.addEventListener('application:didFinishLaunchingWithOptions', function(e) {
    console.info('Application launch detected by module: ' + module.id);
  });

})();
