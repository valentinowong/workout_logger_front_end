import React from 'react';

const Signup = props => (
    <div className="Login-page">
        <h1>Sign Up</h1>
        <form className="Sign-up-form">
            <div className="form-control">
                <label htmlFor="username">Username:</label>
                <input name="username" type="username"/>
            </div>
            <div className="form-control">
                <label htmlFor="password">Password:</label>
                <input name="password" type="password"/>
            </div>

            <button type="submit">Sign up</button>
        </form>

    </div>
)
  
  export default Signup;
