// This should require `Resources/index.js`
var test = require('ti-test');

// This
test.exampleMethod('World');

var win = Ti.UI.createWindow({
  backgroundColor: 'white'
});

var exampleView = test.createExampleView();

win.add(exampleView);

win.open();
