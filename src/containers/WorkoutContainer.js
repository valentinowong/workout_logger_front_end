import React from 'react';
import WorkoutList from '../components/WorkoutList'
import WorkoutDetails from '../components/WorkoutDetails'
import API from '../Api'
import { Redirect } from 'react-router-dom';

class WorkoutContainer extends React.Component {

  componentDidMount() {
    if (!localStorage.getItem('token')){
      return null
    } else if (!this.props.currentUser) {
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
      this.props.setCurrentUser(data.currentUser)
      this.props.fetchWorkouts();
    })
    } else {
      this.props.fetchWorkouts();
    }
    
  }

  render() {
    if (!localStorage.getItem('token')) {
      return <Redirect to="/login" />
    } else {
      return(
        <div className="container row">
          <WorkoutList workouts={this.props.workouts} selectWorkout={this.props.selectWorkout}/>
          <WorkoutDetails workout={this.props.selectedWorkout}/>
        </div>
      )
    }
  }
  
}

export default WorkoutContainer;
