import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import store from './store/store';
import ThemeProvider from './context/ThemeProvider';

import './styles/index.css';

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);