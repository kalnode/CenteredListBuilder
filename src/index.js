import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from "react-router-dom" // We use HashRouter because github-pages has a problem with BrowserRouter
import './assets/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

// Redux store
import { Provider } from 'react-redux'
import store from './store/index.js'
window.store = store

// App is wrapped in Redux Provider, to allow for global store
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)

// Enable service worker: register()
// Disable service worker: unregister()
serviceWorker.unregister()