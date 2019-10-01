import React from 'react';
import WorkoutList from '../components/WorkoutList'
import WorkoutDetails from '../components/WorkoutDetails'
import API from '../Api'

class WorkoutContainer extends React.Component {

  componentDidMount() {
    // const token = localStorage.getItem('token')
    // fetch(`${API}/authenticate`, {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': token
    //   }
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log('Workout Container Component Did Mount', data)
    //   this.props.setCurrentUser(data.currentUser)
    // })
    this.props.fetchWorkouts();
  }

  render() {
    return(
      <div className="container row">
        <WorkoutList workouts={this.props.workouts} selectWorkout={this.props.selectWorkout}/>
        <WorkoutDetails workout={this.props.selectedWorkout}/>
      </div>
    )
  }
  
}

export default WorkoutContainer;
