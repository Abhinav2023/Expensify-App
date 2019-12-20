import React from 'react';
import {connect } from 'react-redux';
import {startLogin} from '../actions/auth';
export const LoginPage=({startLogin})=>(
    <div>
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">Expensify App</h1>
                <p>This is my first expensify app</p>
                <button onClick={startLogin}>Login</button>
            </div>
        </div>
    </div>
);

const mapDispatchProps=(dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
})

export default connect(undefined, mapDispatchProps)(LoginPage);