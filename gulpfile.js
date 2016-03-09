var gulp = require('gulp'),
	babel = require('gulp-babel'),
	babelRegister = require('babel-register'),
	mocha = require('gulp-mocha');

gulp.task('compile', function () {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('lib'));
});

gulp.task('compile-tests', function () {
	return gulp.src('test/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('dist'));
});

gulp.task('test-exec', ['compile', 'compile-tests'], function () {
	return gulp.src('dist/*_test.js')
		.pipe(mocha({
			reporter: 'nyan',
			compilers: {js:babelRegister}
		}));
});

gulp.task('test', function (cb) {
	if (!process.env.NODE_PATH) {
		var spawn = require('child_process').spawn;
		var child = spawn('npm', ['test'], {NODE_PATH:'./dist/mocks', stdio:'inherit'});
		child.on('close', cb);
	}
});

gulp.task('default', ['compile'], function () {

});
