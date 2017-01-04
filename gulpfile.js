"use strict";

const gulp = require('gulp');
const replace = require('gulp-replace');
const execSync = require('child_process').execSync;

gulp.task('progress', function () {

  const origFiles = run('ls -1 ./locales_orig/')
    .split('\n')
    .map(f => f.split('.js')[0])
    .filter(f => f !== 'locales');

  const miniFiles = run('ls -1 ./locales_mini/')
    .split('\n')
    .map(f => f.split('.js')[0]);

  const todoFiles = origFiles
    .filter(f => !miniFiles.includes(f));

  const origBytes = run('stat -f%z ./dist/timeago.locales.min-orig.js');
  const miniBytes = run('stat -f%z ./dist/timeago.locales.min.js');
  const diffPercent = (100 * miniBytes/origBytes).toFixed(2);
  const savedPercent = (100 - diffPercent).toFixed(2);

  return gulp
    .src('./README.md')
    .pipe(update('miniFiles',miniFiles.join(', ')))
    .pipe(update('miniFilesNum',miniFiles.length))
    .pipe(update('todoFiles',todoFiles.join(', ')))
    .pipe(update('todoFilesNum',todoFiles.length))
    .pipe(update('origBytes',origBytes))
    .pipe(update('miniBytes',miniBytes))
    .pipe(update('diffBytes', origBytes - miniBytes))
    .pipe(update('diffPercent',diffPercent))
    .pipe(update('savedPercent',savedPercent))
    .pipe(gulp.dest('./'));
});

function update(tag,content) {
  function tags(tag,content) {
    return `<!-- replace:${tag} -->${
      content
    }<!-- end:replace:${tag} -->`;
  }
  return replace(new RegExp(tags(tag,'(.*)'),'m'), tags(tag,content));
}

function run(command) {
  return execSync(command).toString().trim();
}
