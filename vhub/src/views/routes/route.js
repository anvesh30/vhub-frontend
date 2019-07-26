import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "../home/home-connector";
import LoginPage from "../login/login-connector";
import Header from '../common/header';
import RequestList from "../request-list/request-list-connector";
import Request from '../request/request-connector';
import ConfirmPage from '../confirm/confirm-connector';

function Routing(){
    return (
        <div>
        <Header/>
        <Router>
            <Route path="/home" component={Home}/>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/request-list" component={RequestList}/>
            <Route path='/request' component={Request}/>
            <Route path='/confirm/:id' component={ConfirmPage}/>
        </Router>
        </div>
    )
}

export default Routing;