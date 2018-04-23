'use strict';

const gulp = require('gulp');
const conf = require('../conf');
const build = require('./build');
const styles = require('./styles');
const scripts = require('./scripts');

const $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'path-posix', 'browser-sync', 'nunjucks-render']
});

function setPathDist(done) {
  conf.paths.dist = '.server';
  done();
}

function setBase(done) {
  conf.data.base = '/';
  done();
}


function setTargetDist(done) {
  conf.target.dist = '.server';
  done();
}

function browser() {
  $.browserSync({
    notify: false,
    port: 2001,
    server: {
      baseDir: ['.server'],
      index: 'index.html'
    }
  });

  gulp.watch([
    '.server/**/*.{html,js,png,jpg,gif,svg}',
  ], {
    delay: 500
  }, function(callback) {
    $.browserSync.reload();
    callback();
  });

  gulp.watch($.pathPosix.join(conf.paths.src, '**/*.html'), build.nunjucks);
  gulp.watch($.pathPosix.join(conf.paths.src, 'assets/**/*.scss'), styles.styles);
  gulp.watch($.pathPosix.join(conf.paths.src, 'assets/**/*.js'), scripts.scripts);
}

const serve = gulp.series(build.clean, setPathDist, setBase, build.build, browser);

gulp.task('serve', serve);
