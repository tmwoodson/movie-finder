import 'babel-polyfill';
import gulp from 'gulp';
import jasmineBrowser from 'gulp-jasmine-browser';
import webpack from 'webpack-stream';
import 'phantomjs-prebuilt';

const JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
const plugin = new JasminePlugin();
const webpackConfig = {
  watch: true,
  output:{filename: 'spec.js'},
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
    .pipe(webpack(webpackConfig))
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});
