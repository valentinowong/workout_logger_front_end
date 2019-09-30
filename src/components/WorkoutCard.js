import React from 'react';

const WorkoutCard = (props) => {
    
    const {title, routine_name} = props.workout

    return(
        <li className='list-group-item'>
            <h4>{title}</h4>
            <p>{routine_name}</p>
        </li>
    )
}
  
export default WorkoutCard;