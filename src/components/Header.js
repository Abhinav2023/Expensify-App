import React from 'react';
import {NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


export const Header=({startLogout})=>(
    <div>
        <h1>Expensify App</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact={true}>Home Page</NavLink>
        <NavLink to="/create" activeClassName="is-active">Go To Create Page</NavLink>
        <button onClick={startLogout}>Logout</button>
  </div>
);

const mapDispatchToProps=(dispatch)=>({
  startLogout: ()=>dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header)