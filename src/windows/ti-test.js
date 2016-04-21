/**
 * ti-test
 *
 * Created by Appcelerator, Inc
 * Copyright (c) 2016 Appcelerator. All rights reserved.
 */

module.exports = {
    /**
     *  Lifecycle
     */
    moduleGUID: function() {
        return "35ebe7cc-0854-40f0-b67b-61014d67beaf";
    },
    moduleId: function() {
        return "ti-test";
    },
    startup: function() {
        Ti.API.info(moduleId + " loaded");
    },

    /**
     *  Public APIs
     */
     example: function() {
         return "hello word";
     },
     exampleProp: "hello world",
     createView: function(args) {
         var view = require("ti-test/ti-test-view").createView(args);
         return view;
     }
};
