// Best practice to group code that executes when this module is first required
(function() {

  // CommonJS modules should have NodeJS like module.* properties
  console.info('Module required: ' + module.id);

})();

exports.createExampleView = function(params) {
  return require('./ExampleView').create(params);
};

exports.exampleMethod = function(who) {
  console.info('Hello ' + who);

  // To prevent conflicts, all assets will be under `Resources/ti-test` except
  // for images, which will be under `images/ti-test/foo/platfor.png` just like
  // Alloy does. The module needs a way to resolve this path. We could have
  // `MPATH()` like Alloy has `WPATH()` but it might also make sense to
  // implement NodeJS it's `module.resolve()`.
  var imagePath = module.resolve('images/foo/platform.png');

};
