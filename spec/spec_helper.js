import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import 'jasmine_dom_matchers';
import 'pivotal-js-react-test-helpers';

let globals;

console.log('in test helpers');

beforeAll(() => {
  globals = {
    $,
    jQuery: $,
    React,
    ReactDOM
  };
  console.log('in beforeAll');
  Object.assign(global, globals);
});

afterAll(() => {
  console.log('afterAll');
  Object.keys(globals).forEach(key => delete global[key]);
});

beforeEach(() => {
  console.log('beforeEach');
  $('body').find('#root').remove().end().append('<div id="root"/>');
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(root);
});