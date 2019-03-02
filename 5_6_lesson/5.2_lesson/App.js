import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './src/app/layouts/Layuot';
import MainPage from './src/app/pages/Main';
import Users from './src/app/pages/Users';
import User from './src/app/pages/User'
import PageNotFound from './src/app/pages/PageNotFound'


const app = document.querySelector('#root');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={MainPage} />
            <Route path='users' components={Users}>
                <Route path=':userId' components={User} />
            </Route>
            <Route path='*' component={PageNotFound} />
        </Route>
    </Router>
    , app
);