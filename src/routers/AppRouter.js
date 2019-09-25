import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
import ExpenseDashboardPage from "./Dashboard";
import AddExpensePage from "./AddRouter";
import EditExpensePage from "./EditRouter";
import HelpPage from "./HelpRouter";
import NotFoundPage from "./404Router";
import Header from "./Header";

const AppRouter=()=>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;
