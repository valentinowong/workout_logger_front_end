import React from 'react';
import WorkoutList from '../components/WorkoutList'
import WorkoutDetails from '../components/WorkoutDetails'
import API from '../Api'

class WorkoutContainer extends React.Component {
  state = {
    workouts: [],
    selectedWorkoutId: 1
  }  

  componentDidMount() {
    this.fetchWorkouts();
  }
  
  render() {
    return(
      <div className="container row">
        <WorkoutList workouts={this.state.workouts}/>
        <WorkoutDetails workout={this.findSelectedWorkout()}/>
      </div>
    )
  }

  fetchWorkouts = () => {
    fetch(`${API}/users/1/workouts`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          workouts: data
        })
      })
  }

  findSelectedWorkout = () => {
    return this.state.workouts.find(workout => {
      return workout.id === this.state.selectedWorkoutId
    })
  }

}

export default WorkoutContainer;
