import './stylesheets/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';

import animals from './constants/data';
import App from './components/App'

ReactDOM.render(
  <App animals={animals}/>,
  document.getElementById('app')
);
