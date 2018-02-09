'use strict';

const gulp = require('gulp');
const conf = require('../conf');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix']
});

function sass() {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe($.sass({
      'includePaths': [
        'src/assets/scss',
        'node_modules'
      ]
    }))
    .pipe(gulp.dest($.pathPosix.join(conf.paths.dist, 'assets', 'css')));
}

exports.styles = sass;
