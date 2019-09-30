import React from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import WorkoutContainer from './containers/WorkoutContainer'
import RoutineContainer from './containers/RoutineContainer'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import API from './Api'
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    currentUser: {
      id: null 
    },
    workouts: [],
    selectedWorkoutId: null
  }

  loginUser = (userObj) => {
    this.setState({
      currentUser: userObj
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    fetch(`${API}/authenticate`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        currentUser: {
          id: data.id
        }
      }, this.fetchWorkouts)
    })
  }

  render() {
    return(
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={() => <Login loginUser={this.loginUser}/>} />
          <Route exact path="/signup" component={() => <Signup loginUser={this.loginUser} />} />
          <Route 
            exact path="/workouts" 
            render={(props) => 
              <WorkoutContainer 
                {...props} 
                workouts={this.state.workouts} 
                selectedWorkout={this.findSelectedWorkout()} 
                selectWorkout={this.selectWorkout}
              />} 
          />
          <Route 
            exact path="/workouts/new" 
            render={(props) => 
              <RoutineContainer 
                {...props} 
                logWorkout={this.logWorkout} 
              />}
          />
        </div>
      </Router>
    )
  }

  fetchWorkouts = () => {
    fetch(`${API}/users/${this.state.currentUser.id}/workouts`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => res.json())
      .then(data => {
        this.setState({
          workouts: data
        })
      })
  }

  findSelectedWorkout = () => {
    if(this.state.selectedWorkoutId !== null) {
      return this.state.workouts.find(workout => {
        return workout.id === this.state.selectedWorkoutId
      })
    }
  }

  selectWorkout = (workout_id) => {
    this.setState({
      selectedWorkoutId: workout_id
    })
  }

  logWorkout = (workout_title, workout_photo, routine_id) => {
    fetch(`${API}/users/1/workouts`,{
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
      },
      body: JSON.stringify({
          title: workout_title,
          datetime: Date(),
          photo: workout_photo,
          routine_id: routine_id
      })
    })
    .then(res=>res.json())
    .then(data => {
      const updatedWorkouts = [...this.state.workouts, data]
      this.setState({
        workouts: updatedWorkouts
      })
    })
  }
}

export default App;
