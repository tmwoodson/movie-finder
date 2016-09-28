import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import 'jasmine_dom_matchers';
import 'pivotal-js-react-test-helpers';
import 'spy-on-render';

let globals;

beforeAll(() => {
  globals = {
    $,
    jQuery: $,
    React,
    ReactDOM
  };
  Object.assign(global, globals);
});

afterAll(() => {
  Object.keys(globals).forEach(key => delete global[key]);
});

beforeEach(() => {
  $('body').find('#root').remove().end().append('<div id="root"/>');
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(root);
});