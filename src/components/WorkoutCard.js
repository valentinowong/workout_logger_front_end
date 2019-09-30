import React from 'react';

const WorkoutCard = (props) => {
    
    const {id, title, routine_name} = props.workout

    return(
        <li className='list-group-item' onClick={() => props.selectWorkout(id)}>
            <h4>{title}</h4>
            <p>{routine_name}</p>
        </li>
    )
}
  
export default WorkoutCard;