import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        redirectToMyWorkouts: false
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
            console.log('Login',data)
            localStorage.setItem('token', data.token);
            this.props.loginUser(data.currentUser);
        })
        this.setState({
            redirectToMyWorkouts: true
        })
    }

    render() {
        if (this.state.redirectToMyWorkouts) {
            return <Redirect to="/workouts" />
        } else {
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
}

export default Login;

