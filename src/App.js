import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer'
import Login from './components/Login'
import Signup from './components/Signup'
// import NavBar from './components/NavBar'

class App extends React.Component {
  render() {
    return(
      <Router>
        <div className="App">
          {/* <NavBar /> */}
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/workouts" component={WorkoutContainer} />
          

        </div>
      </Router>
    )
  }
}

export default App;
