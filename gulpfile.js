const gulp = require ('gulp');
const browserify = require ('browserify');
// const ngAnnotate = require ('gulp-ng-annotate');
const watchify = require ('watchify');
const gulpWatch = require ('gulp-watch');
const source = require('vinyl-source-stream');
const run = require('run-sequence');
const sass = require('gulp-sass');
const connect = require('gulp-connect');




global.isProd = false;

gulp.task ('watch', ['build'], watch);
gulp.task ('browserify', browserifyTask);
gulp.task ('templates', templates);
gulp.task ('sass', sassTask);
gulp.task ('build', ['templates', 'sass', 'browserify']);
gulp.task ('server', server);
gulp.task ('dev', ['watch', 'server']);


function watch() {
	gulpWatch (['./src/index.html', './src/**/*.tpl.html'], () => run('templates'));
	gulpWatch (['./src/**/*.js'], () => run('browserify'));
	gulpWatch (['./src/assets/sass/**/*.scss'], () => run('sass'));
}

function browserifyTask() {
	var bundle = browserify ({
		entries: './src/app/app.js',
		fullPaths: false
	})
		.bundle ()
		.on('error', function (e) {
		})
		.pipe(source('bundle.js'))
		.pipe (gulp.dest('./dist/'));

}

function templates() {
	gulp.src ('./src/index.html')
		.pipe (gulp.dest ('./dist'));

	return gulp.src ('./src/**/*.tpl.html')
		.pipe (gulp.dest ('./dist'));
}

function sassTask () {
	return gulp.src('./src/assets/sass/*.scss')
		.pipe(sass({}).on('error', sass.logError))
		.pipe(gulp.dest('./dist'));
}

function server () {
	connect.server({
		root: './dist',
		livereload: true
	});
}