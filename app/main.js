import React from 'react';
import ReactDOM from 'react-dom';
import Toggler from './toggler';

/**
 * Render
 */
ReactDOM.render(
  <Toggler
    onLabel="ON"
    offLabel="OFF"
    isActive={false}
  />,
  document.body.appendChild(document.createElement('div')),
);
