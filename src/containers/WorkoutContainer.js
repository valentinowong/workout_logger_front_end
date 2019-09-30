import React from 'react';
import WorkoutList from '../components/WorkoutList'
import WorkoutDetails from '../components/WorkoutDetails'

const WorkoutContainer = (props) => {

  return(
    <div className="container row">
      <WorkoutList workouts={props.workouts} selectWorkout={props.selectWorkout}/>
      <WorkoutDetails workout={props.selectedWorkout}/>
    </div>
  )

}

export default WorkoutContainer;
