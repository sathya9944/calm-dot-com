import {createMuiTheme, ThemeProvider} from '@material-ui/core';
import {deepOrange, green, grey, red} from '@material-ui/core/colors';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
import './index.css';
import {Navigation} from "./app/utils/Routes";

const RegisterRedux$MaterialTheme = () => {
    const theme = createMuiTheme({
        typography: {
            fontFamily: ['Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(',')
        },
        palette: {
            primary: {main: '#29a3c4', light: '#29a3c4'},
            secondary: deepOrange,
            success: green,
            info: grey,
            error: red,
            type: 'light'
        }
    });
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Navigation/>
            </ThemeProvider>
        </Provider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <RegisterRedux$MaterialTheme/>
    </React.StrictMode>,
    document.getElementById('root')
);
