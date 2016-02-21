/**
 * ti-test
 *
 * Created by Appcelerator, Inc
 * Copyright (c) 2016 Appcelerator. All rights reserved.
 */

var View = require('android.view.View'),
    Color = require('android.graphics.Color'),
    Activity = require('android.app.Activity'),
    TiActivity = new Activity(Ti.Android.currentActivity);

function ENSURE_ARG_COUNT(x, c) {
    if (x.length < c) {
        // TODO: Expose TiProxy classes (https://jira.appcelerator.org/browse/TIMOB-20417)
        // utils.throwExceptionSubreasonLocation(TiExceptionNotEnoughArguments, "expected " + c + " arguments, received: " + x.length, location:CODELOCATION];
        Ti.API.error("expected " + c + " arguments, received: " + x.length);
    }
}

module.exports = {
    /**
     *  Creates a new native view based on passed arguments.
     *  @param args {Object} The arguments to be passed to the view.
     *  @return View view The native view.
     */
     createView: function(args) {
         ENSURE_ARG_COUNT(args, 1);

         var view = new View(TiActivity);
         view.setBackgroundColor(Color.RED);

         return view;
     }
};
