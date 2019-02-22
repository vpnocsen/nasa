import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import reducer from './redux/reducer';
import 'font-awesome/css/font-awesome.min.css';
import './index.scss';
import App from './app';


// Create store
export const store = createStore(reducer, {items: []});

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
