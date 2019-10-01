import React from 'react';

class Signup extends React.Component {
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
            console.log('Sign-up',data)
            localStorage.setItem('token', data.token);
            this.props.loginUser(data.currentUser);
        })
    }
    render() {
        return (
            <div className="Signup-page">
            <h1>Sign Up</h1>
            <form 
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                className="Sign-up-form">
                <div className="form-control">
                    <label htmlFor="username">Username:</label>
                    <input name="username" type="username" value={this.state.username}/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password:</label>
                    <input name="password" type="password" value={this.state.password}/>
                </div>
    
                <button type="submit">Sign up</button>
            </form>
    
        </div>
        )
    }

}


  
  export default Signup;
