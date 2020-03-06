const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const run = require('gulp-run');
const del = require('del');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
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

const copyDocsCSS = () => gulp.src('./dist/autostat-ui.min.css')
  .pipe(rename('autostat-ui.min.css'))
  .pipe(gulp.dest('docs'));

const copyDocsJS = () => gulp.src('./dist/autostat-ui.min.js')
  .pipe(rename('autostat-ui.min.js'))
  .pipe(gulp.dest('docs'));

const docs = () => gulp.src(['src/**/*.scss'])
  .pipe(run('kss --config kss-config.json'));

const js = () => gulp.src('src/**/*.js')
  .pipe(concat('autostat-ui.js'))
  .pipe(gulp.dest('dist'))
  .pipe(rename('autostat-ui.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist'));

gulp.task('watch', () => gulp.watch(['./src/**/*.scss', './src/**/*.js'], gulp.series(compile, renameBundle, clean, minify, js, docs, copyDocsCSS, copyDocsJS)));

exports.default = gulp.series(compile, renameBundle, clean, minify, js, docs, copyDocsCSS, copyDocsJS);
