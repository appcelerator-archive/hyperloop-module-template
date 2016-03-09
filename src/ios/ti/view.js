/**
 * test view
 *
 * Created by Appcelerator, Inc
 * Copyright (c) 2016 Appcelerator. All rights reserved.
 */
import UIScreen from 'UIKit/UIScreen';
import UIColor from 'UIKit/UIColor';
import UIView from 'UIKit/UIView';

export default class View {
	constructor (opts = {}) {
		this.view = new UIView();
		this.view.setFrame(UIScreen.mainScreen().bounds);
		this.view.setBackgroundColor(UIColor.redColor());
	}
}
