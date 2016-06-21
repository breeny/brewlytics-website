"use strict";

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var print = require('gulp-print');
var sassLocation = 'assets/sass/**/*.scss';

gulp.task('sass', function () {
  var output = 'assets/css';

  return gulp
    .src(sassLocation)
    .pipe(print())
    .pipe(sass())
    .pipe(gulp.dest(output));
});


gulp.task('watch', function(){
  gulp.watch(sassLocation, ['sass']);
});
