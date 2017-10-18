import React from 'react';
import ReactDOM from 'react-dom';

import './css/reset.css'
import './css/timeline.css'
import './css/login.css'

import App from './App';
import Login from './components/Login';

import {BrowserRouter as Router, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
        {/* <App> */}
            <Route exact path="/" component={Login} />
            <Route path="/timeline/:user?" component={App} />
        {/* </App> */}
        </div>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
