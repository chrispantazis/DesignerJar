'use strict';

const gulp = require('gulp');
const conf = require('../conf');
const scripts = require('./scripts');
const styles = require('./styles');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix', 'del', 'browser-sync', 'nunjucks-render', 'batch-replace']
});

function clean() {
  return $.del($.pathPosix.join(conf.paths.dist, '/'), {
    force: true
  });
}

function nunjucks() {
  return gulp.src($.pathPosix.join(conf.paths.src, '*.html'))
    .pipe($.nunjucksRender({
      data: conf.data,
      path: conf.paths.src,
      inheritExtension: true
    }))
    .pipe(gulp.dest(conf.paths.dist));
}

const build = gulp.parallel(
  scripts.scripts,
  styles.styles,
  nunjucks
);

exports.nunjucks = nunjucks;
exports.build = build;
exports.clean = clean;

gulp.task('build', build);
