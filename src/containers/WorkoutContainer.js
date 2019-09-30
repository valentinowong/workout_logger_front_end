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
    //   console.log('props from app', this.props.loginUser(this.state.workouts))
    return(
      <div className="container row">
        <WorkoutList workouts={this.state.workouts} selectWorkout={this.selectWorkout}/>
        <WorkoutDetails workout={this.findSelectedWorkout()}/>
      </div>
    )
  }

  fetchWorkouts = () => {
    fetch(`${API}/users/${localStorage.id}/workouts`, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }).then(res => res.json())
      .then(data => {
        // console.log('Workout fetch', data)
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

  selectWorkout = (workout_id) => {
    this.setState({
      selectedWorkoutId: workout_id
    })
  }

}

export default WorkoutContainer;
