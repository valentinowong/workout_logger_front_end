import React from 'react';
import WorkoutList from '../components/WorkoutList'
import WorkoutDetails from '../components/WorkoutDetails'

const WorkoutContainer = (props) => {

<<<<<<< HEAD
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
=======
  return(
    <div className="container row">
      <WorkoutList workouts={props.workouts} selectWorkout={props.selectWorkout}/>
      <WorkoutDetails workout={props.findSelectedWorkout()}/>
    </div>
  )
>>>>>>> workout-logging-part-1

}

export default WorkoutContainer;
