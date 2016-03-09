/**
 * test module
 *
 * Created by Appcelerator, Inc
 * Copyright (c) 2016 Appcelerator. All rights reserved.
 */
export { default as View } from './view';

export default class Test {

	constructor (app, module) {
		this.app = app;
		this.module = module;
	}

	startup () {
		this.app.logger.info(this.module.id + ' startup');
	}

	shutdown () {
		this.app.logger.info(this.module.id + ' shutdown');
	}

}
