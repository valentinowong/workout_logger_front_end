import React from 'react';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {
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
        fetch('http://localhost:3005/api/v1/users', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: this.state
            })
        })
        .then(res => res.json())
        .then(data => {
            this.props.loginUser(data);
        })
    }

    componentDidMount() {
        if (this.props.currentUser) {
            this.setState({
                redirectToMyWorkouts: true
            })
        }
    }

    render() {
        if (this.state.redirectToMyWorkouts) {
            return <Redirect to="/workouts" />
        } else {
            return (
                <div className="Signup-page">
                    <h1>Sign Up</h1>
                    <form onSubmit={this.handleSubmit} className="Sign-up-form">
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input name="username" type="username" value={this.state.username} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                        </div>
            
                        <button className="btn btn-secondary" type="submit">Sign up</button>
                    </form>
                </div>
            )
        }
    }

}


  
  export default Signup;
