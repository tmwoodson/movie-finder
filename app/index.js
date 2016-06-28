require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';

import Application from './components/application';

ReactDOM.render(
  <Application/>,
  document.querySelector('#root')
);


