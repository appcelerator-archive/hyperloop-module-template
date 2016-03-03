var UIScreen = require('UIKit/UIScreen'),
  UIView = require("UIKit/UIView");

// The Swift file we have in vendor
var MySwiftView = require('MyFramework/MySwiftView');

exports.create = function(params) {
  params = params || {};

  var view = new UIView();
  view.setFrame(UIScreen.mainScreen().bounds);

  if (params.backgroundColor) {

    // Hyperloop should provide cross-platform helpers you can use anywhere in
    // the app to do stuff like this:
    var uiColor = Hyperloop.colorFromString(params.backgroundColor);

    view.setBackgroundColor(uiColor);
  }

  var view2 = new MySwiftView();
  view2.frame = CGRectMake(0, 0, 128, 128);
  view2.center = CGPointMake(bounds.size.width / 2, (bounds.size.height / 2) + 50);

  view.add(view2);

  return view;
};
