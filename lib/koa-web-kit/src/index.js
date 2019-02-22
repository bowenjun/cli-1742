import 'scss/vendors.scss';
import 'scss/index.scss';

import 'modules/env';

import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import App from './App';
import AppError from 'components/AppError';

const elRoot = document.getElementById('app');

const render = Component => {
  if (__SSR__) {
    console.log('in SSR mode');
    loadableReady(() => {
      ReactDOM.hydrate(
        <AppError>
          <Component />
        </AppError>,
        elRoot
      );
    });
    return;
  }
  ReactDOM.render(
    <AppError>
      <Component />
    </AppError>,
    elRoot
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(require('./App').default);
  });
}
