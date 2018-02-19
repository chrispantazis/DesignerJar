'use strict';

const gulp = require('gulp');
const conf = require('../conf');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix', 'del', 'browser-sync', 'nunjucks-render', 'batch-replace']
});

function jquery() {
  return gulp.src([
  	'node_modules/jquery/dist/jquery.js',
  	'src/assets/js/**/*.js'
  	])
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'js')));
}
function images() {
  return gulp.src('src/assets/images/**/*.{png,jpg,gif,svg}')
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'images')));
}
exports.scripts = gulp.parallel(jquery, images);
