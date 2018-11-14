import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Demo from '../components/Demo';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
    <div className="container">
        <Header />
        <Switch>
            <Route path="/" component={Demo} exact={true}/>
            <Route path="/help" component={Help} />
            <Route component={NotFoundPage}/>
    </Switch>
    </div>
    
    </BrowserRouter>
)

export default AppRouter;