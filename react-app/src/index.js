import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blueGrey, indigo } from '@material-ui/core/colors';

import registerServiceWorker from './registerServiceWorker';

import store from './createStore';

import './assets/css/index.css';

import App from './app/App';

const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: blueGrey
  },
  typography: {
    useNextVariants: true,
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();