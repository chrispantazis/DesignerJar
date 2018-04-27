/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

/**
 *  The main paths of your project handle these with care
 */

const argv = require('yargs').argv;

exports.strings = [
];

exports.target = {
  src: 'src',
  dist: '../dist'
};

exports.data = {
  base: argv.prod === true ? '/' : '/'
};

exports.paths = {
  src: exports.target.src,
  dist: exports.target.dist
};
