import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
// import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    currentUser: {
      id: null 
    }
  }

  loginUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  // componentDidMount() {
  //   const token = localStorage.getItem('token')
  //   fetch('http://localhost:3005/authenticate', {
  //     method: 'GET',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': token
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  // }

  render() {
    return(
      <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={() => <Signup loginUser={this.loginUser} />} />
        <Route exact path="/workouts" component={WorkoutContainer} />

        </div>
      </Router>
    )
  }
}

export default App;
