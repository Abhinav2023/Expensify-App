import React from 'react';
import {connect } from 'react-redux';
import {startLogin} from '../actions/auth';
export const LoginPage=({startLogin})=>(
    <div>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchProps=(dispatch)=>({
    startLogin: ()=>dispatch(startLogin())
})

export default connect(undefined, mapDispatchProps)(LoginPage);