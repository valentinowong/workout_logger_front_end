import React from 'react';
import RoutineCard from './RoutineCard'

const RoutineList = (props) => {
    
    const renderRoutineCards = () => {
        return props.routines.map(routine => {
            return <RoutineCard key={routine.id} routine={routine} selectRoutine={props.selectRoutine}/>
        })
    }
    
    return(
        <div className='col-md-4'>
            <h2>Routines List</h2>
            <ul className='list-group'>
                {renderRoutineCards()}
            </ul>
        </div>
    )
}
  
  export default RoutineList;