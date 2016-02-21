// This is a test harness for your module
// You should do something interesting in this harness
// to test out the module and to provide instructions
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var myModule = require('ti-test');
Ti.API.info("module is => " + myModule);

label.text = myModule.example();

Ti.API.info("module exampleProp is => " + myModule.exampleProp);
myModule.exampleProp = "This is a test value";

var view = myModule.createView({
	message: "Creating an example Proxy",
	backgroundColor: "red",
	width: 100,
	height: 100,
	top: 100,
	left: 150
});
win.add(view);
