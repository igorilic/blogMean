var gulp = require('gulp');
var args = require('yargs').argv;
var browserSync = require('browser-sync');
var $ = require('gulp-load-plugins')({lazy: true});

var config = require('./gulp-config')();

gulp.task('vet', function() {
	log('Analyzing javascript code with JSHint and JSCS');
	return gulp
			.src(config.js)
            .pipe($.if(args.verbose, $.print()))
            .pipe($.jscs())
			.pipe($.jshint())
			.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
			.pipe($.jshint.reporter('fail'));
});

// functions


/**
 * Log a message/messages using blue color
 * Can pass a string, object or array
 */
function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                $.util.log($.util.colors.cyan(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.cyan(msg));
    }
}