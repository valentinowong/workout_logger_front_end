import React from 'react';

const Login = props => (
    <div className="Login-page">
        <h1>Login</h1>
        <form className="Log-in-form">
            <div className="form-control">
                <label htmlFor="username">Username:</label>
                <input name="username" type="username"/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password:</label>
                <input name="password" type="password"/>
            </div>

            <button type="submit">Log In</button>
        </form>

    </div>
)
  export default Login;

