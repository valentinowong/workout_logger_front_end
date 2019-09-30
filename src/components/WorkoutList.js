import React from 'react';
import WorkoutCard from './WorkoutCard'

const WorkoutList = (props) => {
    
    const renderWorkoutCards = () => {
        return props.workouts.map(workout => {
            return <WorkoutCard key={workout.id} workout={workout}/>
        })
    }
    
    return(
        <div className='col-md-4'>
            <h2>Workout List</h2>
            <ul className='list-group'>
                {renderWorkoutCards()}
            </ul>
        </div>
    )
}
  
  export default WorkoutList;