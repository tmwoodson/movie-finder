import 'babel-polyfill';
// import 'phantomjs-prebuilt';

import gulp from 'gulp';
import jasmineBrowser from 'gulp-jasmine-browser';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import connect from 'gulp-connect';

import webpack from 'webpack-stream';
import webpackConfig from './webpack.config';

const JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
const plugin = new JasminePlugin();
const testConfig = {
  watch: true,
  output: {filename: 'spec.js'},
  plugins: [plugin],
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            "es2015",
            "react",
            "stage-0"
          ]
        }
      }
    ]
  }
};

gulp.task('jasmine', () => {
  return gulp.src(['./spec/**/*_spec.js'])
    .pipe(webpack(testConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

gulp.task('sass', () => {
  return gulp.src('./app/styles/application.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy-html', () => {
  return gulp.src('./app/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('build-js', () => {
  return gulp.src('./app/index.js')
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(rename('index.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['build-js', 'sass', 'copy-html']);

gulp.task('watch', (callback) => {
  process.env.WEBPACK_WATCH = true;
  gulp.watch(['app/**/*.js'], ['build-js']);
  gulp.watch(['app/**/*.scss'], ['sass']);
  gulp.watch(['app/index.html'], ['copy-html'])
  callback();
});

gulp.task('webserver', ['watch', 'build'], () => {
  connect.server({root: 'dist'});
});


