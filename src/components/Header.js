import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogout} from '../actions/auth';


export const Header=({startLogout})=>(
  <header className="header">
    <div className="content-container">
      <div className="header-content">
        <Link className="header__title" to="/dashboard" exact={true}>
          <h1>Expensify App</h1>
        </Link>
        <div className="button_cont" align="center">
          <a onClick={startLogout} className="example_d" >Logout</a>
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps=(dispatch)=>({
  startLogout: ()=>dispatch(startLogout())
})

export default connect(undefined,mapDispatchToProps)(Header)