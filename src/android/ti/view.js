/**
 * test view
 *
 * Created by Appcelerator, Inc
 * Copyright (c) 2016 Appcelerator. All rights reserved.
 */
import AndroidView from 'android.view.View';
import Color from 'android.graphics.Color';
import Activity from 'android.app.Activity';

const TiActivity = new Activity(Ti.Android.currentActivity);

export default class View {
	constructor (opts = {}) {
		this.view = new AndroidView(TiActivity);
		this.view.setBackgroundColor(Color.RED);
	}
}
