var gulp = require('gulp');
var debug = require('gulp-debug');
var xmlValidator = require('gulp-xml-validator');

gulp.task('lint', function () {
  return gulp.src('./Source/**/*.svg')
    .pipe(debug({title: 'lint:'}))
    .pipe(xmlValidator())
});