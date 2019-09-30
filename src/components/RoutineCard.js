import React from 'react';

const RoutineCard = (props) => {
    
    const {id, name} = props.routine

    return(
        <li className='list-group-item' onClick={() => props.selectRoutine(id)}>
            <h4>{name}</h4>
        </li>
    )
}
  
export default RoutineCard;