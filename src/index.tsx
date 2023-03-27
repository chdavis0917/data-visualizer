import React from 'react';
import { render } from 'react-dom';
import App from './app';

// uncomment so that webpack can bundle styles
import './styles/styles.scss'

render(
  <App />,
  document.getElementById('root')
);
