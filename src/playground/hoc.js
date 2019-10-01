import React from 'react';
import ReactDOM from 'react-dom'

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>The Info goes as this:{props.info}</p>
    </div>
);

const withAdminWarnig=(WrappedComponent)=>{
    return(props)=>(
        <div>
            {props.isAdmin && <p>This is secret page, Don't share information of this page</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? <p>This user is is Authenticated</p>
            : <p>Please vaerify yours account</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo=withAdminWarnig(Info);
const AuthInfo=requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"/>,document.getElementById('app'));