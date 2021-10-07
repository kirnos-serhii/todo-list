import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import { store } from "./todo-list/store/store"

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

reportWebVitals();
