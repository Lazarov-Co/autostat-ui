const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require("gulp-rename");
const del = require('del');
const cleanCSS = require('gulp-clean-css');

sass.compiler = require('node-sass');

const compile = () => gulp.src('./src/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist'));

const renameBundle = () => gulp.src('./dist/main.css')
  .pipe(rename('autostat-ui.css'))
  .pipe(gulp.dest('dist'));

const clean = () => del('./dist/main.css');

const minify = () => gulp.src('./dist/autostat-ui.css')
    .pipe(rename('autostat-ui.min.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));

gulp.task('watch', () => gulp.watch('./src/**/*.scss', gulp.series(compile, renameBundle, clean, minify)));

exports.default = gulp.series(compile, renameBundle, clean, minify);