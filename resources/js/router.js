
import React from 'react';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from '../js/pages/Home';
import Login from '../js/pages/Login';
const Main = props => (
<Switch>
<Route exact path='/' component={Login}/>
<Route exact path='/dashboard' component={Home}/>
</Switch>
);
export default Main;