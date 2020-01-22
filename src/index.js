import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import './assets/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Redux store
import { Provider } from 'react-redux';
import store from './index';
window.store = store;

// App is wrapped in Redux Provider, to allow for global store
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// Enable service worker: register().
// Disable service worker: unregister().
serviceWorker.unregister();