import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter, Route} from "react-router-dom";
import DashboardMaster from './DashboardMaster';
import Navigation from "./Navigation"
import Login from './Login';

ReactDOM.render(
    <HashRouter>
        <div>
            <Navigation />
            <Route exact={true} path="/login" component={Login} />
            <Route exact={true} path="/dashboard" component={DashboardMaster} />
        </div>
    </HashRouter>, 
        document.getElementById('root')
);
        

