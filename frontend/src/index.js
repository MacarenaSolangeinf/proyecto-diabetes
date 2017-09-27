import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { lightWhite, white, cyan400 } from 'material-ui/styles/colors';
import App from './App';

const muiTheme = getMuiTheme({
  tabs: {
    backgroundColor: cyan400,
    selectedTextColor: white,
    textColor: lightWhite
  }
});

const MyApp = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
