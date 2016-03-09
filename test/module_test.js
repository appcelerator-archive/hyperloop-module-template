var should = require('should'),
	IOSView, AndroidView;

describe('module', () => {

	before(() => {
		global.Ti = {};
		global.Ti.Android = {};
		IOSView = require('../lib/ios/ti/test').View;
		AndroidView = require('../lib/android/ti/test').View;
	});

	after(() => {
		global.Ti = null;
	});

	it('ios module should export view', () => {
		should(IOSView).be.ok;
	});

	it('ios module should create view', () => {
		var view = new IOSView();
		should(view).be.an.object;
	});

	it('android module should export view', () => {
		should(AndroidView).be.a.function;
	});

	it('android module should create view', () => {
		var view = new AndroidView();
		should(view).be.an.object;
	});

});
