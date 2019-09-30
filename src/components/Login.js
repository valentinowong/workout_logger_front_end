import React from 'react';

class Login extends React.Component {
    state = {
        username: "",
        password: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:3005/api/v1/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('token', data.token)
        })
    }

    render() {
        return (
            <div className="Login-page">
            <h1>Login</h1>
            <form 
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                className="Log-in-form">
                <div className="form-control">
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="username" value={this.state.username}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" value={this.state.password}/>
                </div>
    
                <button type="submit">Log In</button>
            </form>
    
        </div>
        )
    }
}
  export default Login;

