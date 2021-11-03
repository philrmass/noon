import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { registerServiceWorker } from './utilities/serviceWorker';
import store from './redux/store';
import './styles/index.css';

import App from './components/App';

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app'),
);

registerServiceWorker();
