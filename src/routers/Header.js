import React from 'react';
import { BrowserRouter, Route,Switch,Link,NavLink } from 'react-router-dom';
const Header=()=>(
    <div>
        <h1>Expensify App</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Go To Edit Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go To Create Page</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help Page</NavLink>
  </div>
);
export default Header;