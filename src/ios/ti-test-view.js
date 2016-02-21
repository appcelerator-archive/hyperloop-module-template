/**
 * ti-test
 *
 * Created by Appcelerator, Inc
 * Copyright (c) 2016 Appcelerator. All rights reserved.
 */

var UIScreen = require('UIKit/UIScreen'),
    UIColor = require('UIKit/UIColor'),
    UIView = require("UIKit/UIView");

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
     *  @return UIView view The native view.
     */
    createView: function(args) {
        ENSURE_ARG_COUNT(args, 1);
        var view = new UIView();
        view.setFrame(UIScreen.mainScreen().bounds);
        view.setBackgroundColor(UIColor.redColor());

        return view;
    }
};
