import React from 'react';
import { Router, Route,Switch,Link,NavLink } from 'react-router-dom';
import ExpenseDashboardPage from "../components/Dashboard";
import createHistory from 'history/createBrowserHistory'
import AddExpensePage from "../components/AddRouter";
import EditExpensePage from "../components/EditRouter";
import HelpPage from "../components/HelpRouter";
import NotFoundPage from "../components/404Router";
import LoginPage from '../components/LoginRouter';
import PrivateRoute from './PrivateRoute';
export const history =createHistory();

const AppRouter=()=>(
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;
