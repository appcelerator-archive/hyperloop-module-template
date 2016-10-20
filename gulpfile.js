'use strict';

var gulp = require('gulp'),
	$ = require('gulp-load-plugins')(),
	del = require('del'),
	appc = require("./appc"),
	babelRegister = require('babel-register');

/**
 * clean up intermediate directories
 */
gulp.task('clean', function (done) {
	del(['dist', 'lib']).then(function () { done(); });
});

/**
 * babel compile our source from ES6 to ES5
 */
gulp.task('compile', ['lint-src'], function () {
	
	var platforms = appc.timodule.platforms;
	var isCrossPlatform = (platforms.indexOf('ios') > -1 && platforms.indexOf('android') > -1);
	var platformIdentifier = isCrossPlatform ? '' : platforms.indexOf('ios') > -1 ? 'ios-' : platforms.indexOf('android') > -1 ? 'android-' : '';
	
	return gulp.src('src/**/*.js')
		.pipe(gulp.dest('dist/lib'))
		.pipe($.plumber())
		.pipe($.babel())
		.pipe($.zip(appc.timodule.moduleid + '-' + platformIdentifier + appc.timodule.version + '.zip'))
		.pipe(gulp.dest('dist'));
});

/*
 * lint tasks
 */
function lint(pattern) {
	return gulp.src(pattern)
		.pipe($.plumber())
		.pipe($.eslint())
		.pipe($.eslint.format())
		.pipe($.eslint.failAfterError());
}

/**
 * ensure our source code is lint
 */
gulp.task('lint-src', function () {
	return lint('src/**/*.js');
});

/**
 * ensure our test source code is lint
 */
gulp.task('lint-test', function () {
	return lint('test/**/*_test.js');
});

/**
 * execute mocha unit tests
 */
gulp.task('test-exec', ['lint-test', 'compile'], function () {
	return gulp.src('test/*_test.js')
		.pipe($.mocha({
			reporter: 'nyan',
			compilers: {js:babelRegister}
		}));
});

/**
 * standard task that will ensure that we run mocha with special
 * NODE_PATH for our mocks
 */
gulp.task('test', function (cb) {
	if (!process.env.NODE_PATH) {
		var spawn = require('child_process').spawn;
		var child = spawn('npm', ['test'], {NODE_PATH:'./dist/mocks', stdio:'inherit'});
		child.on('close', function() {
			del(['dist/lib/**']);
			cb();
		});
	}
});

/**
 * build tasks which performs the compile and then validates the unit tests
 */
gulp.task('build', ['clean', 'compile', 'test'], function () {
});

/**
 * default is to just build
 */
gulp.task('default', ['build'], function () {
});
