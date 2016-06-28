import 'babel-polyfill';
import gulp from 'gulp';
import {Jasmine, Lint} from 'pui-react-tools';

Lint.install();
Jasmine.install();

gulp.task('default', ['jasmine']);
