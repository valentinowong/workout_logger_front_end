import React from 'react';
import Exercise from './Exercise'

const WorkoutDetails = (props) => { 

    const {title, datetime, routine_name, routine_description, photo, exercises} = props.workout

    var formattedDateTime = Intl.DateTimeFormat('en-US',{
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
    }).format(Date.parse(datetime));

    const renderExercises = () => {
        return exercises.map( (exercise, idx) => {
            return <Exercise key={`${exercise.id}-${idx}`} exercise={exercise} />
        })
    }

    return(
        <div className='col-md-8' style={{textAlign: 'left'}}>
            <h2>Workout Details</h2>
            <h3>
                {formattedDateTime}
            </h3>
            <h1>{title}</h1>
            <img src={photo} alt={title} style={{maxHeight: '200px'}}/>
            <h3>{routine_name}</h3>
            <p>{routine_description}</p>
            <ol>
                {renderExercises()}
            </ol>
        </div>
    )
}
  
WorkoutDetails.defaultProps = {
    workout: {
        title: 'Workout Title',
        routine_name: 'Routine Name',
        routine_description: 'Routine Description',
        datetime: '2019-01-01T00:00:00.000Z',
        exercises: []
    }
}

export default WorkoutDetails;