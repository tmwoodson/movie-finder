require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';

// HORRIBLE HACK
if (!document.querySelector('#root')) {
  const fakeNode = document.createElement('div');
  fakeNode.id = 'root';
  (document.getElementsByTagName('html')[0]).insertBefore(fakeNode, document.getElementsByTagName('head')[0]);
};

ReactDOM.render(
  <Application/>,
  document.querySelector('#root')
);