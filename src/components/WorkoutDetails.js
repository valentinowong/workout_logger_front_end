import React from 'react';

const WorkoutDetails = (props) => { 
    
    const {title, routine_name, routine_description, photo} = props.workout

    return(
        <div className='col-md-8'>
            <h2>Workout Details</h2>
            <h1>{title}</h1>
            <img src={photo} alt={title} style={{maxHeight: '200px'}}/>
            <h3>{routine_name}</h3>
            <p>{routine_description}</p>
        </div>
    )
}
  
WorkoutDetails.defaultProps = {
    workout: {
        title: 'Workout Title',
        routine_name: 'Routine Name',
        routine_description: 'Routine Description'
    }
}

export default WorkoutDetails;