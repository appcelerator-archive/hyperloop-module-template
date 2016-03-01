var UIScreen = require('UIKit/UIScreen'),
  UIView = require("UIKit/UIView");

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

  return view;
};
