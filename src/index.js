import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import resource from './components/resources/resource'
import Home from './components/home/home'

import 'bootstrap/dist/css/bootstrap.min.css';


const route = (
    <Router>
        <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/resource' component={resource}/>
        </div>
    </Router>)

ReactDOM.render(route, document.getElementById('root'));


