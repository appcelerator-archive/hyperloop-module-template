var View = require('android.view.View'),
  Activity = require('android.app.Activity'),
  TiActivity = new Activity(Ti.Android.currentActivity);

exports.create = function(params) {
  params = params || {};

  var view = new View(TiActivity);

  if (params.backgroundColor) {

    // Hyperloop should provide cross-platform helpers you can use anywhere in
    // the app to do stuff like this:
    var gColor = Hyperloop.colorFromString(params.backgroundColor);

    view.setBackgroundColor(gColor);
  }

  return view;
};
