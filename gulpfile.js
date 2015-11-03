var gulp = require('gulp');
var args = require('yargs');
var $ = require('gulp-load-plugins')({lazy: true});

var config = require('./gulp-config')();

gulp.task('vet', function() {
	log('Analyzing javascript code with JSHint and JSCS');
	return gulp
			.src(config.js)
            .pipe($.if(args.verbose, $.print()))
			.pipe($.jshint())
			.pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
			.pipe($.jshint.reporter('fail'))
			.pipe($.jscs());
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
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}