import React from 'react';
import Exercise from './Exercise'
import NewWorkoutForm from './NewWorkoutForm'

class RoutineDetails extends React.Component { 
    
    state = {
        renderNewWorkoutForm: false
    }

    renderExercises = () => {
        return this.props.routine.exercises.map( (exercise, idx) => {
            return <Exercise key={`${exercise.id}-${idx}`} exercise={exercise} />
        })
    }

    render() {
        const {id, name, description} = this.props.routine
        return(
            <div className='col-md-8' style={{textAlign: 'left'}}>
                <h2>Routine Details</h2>
                <h1>{name}</h1>
                <p>{description}</p>
                <ol>
                    {this.renderExercises()}
                </ol>
                <button className='btn btn-secondary' onClick={this.revealNewWorkoutForm}>Select This Workout</button>
                {this.state.renderNewWorkoutForm ? <NewWorkoutForm logWorkout={this.props.logWorkout} routine_id={id}/> : null}
            </div>
        )
    }

    revealNewWorkoutForm = () => {
        this.setState({
            renderNewWorkoutForm: !this.state.renderNewWorkoutForm
        })
    }
    
}
  
RoutineDetails.defaultProps = {
    routine: {
        name: 'Routine Name',
        description: 'Routine Description',
        exercises: []
    }
}

export default RoutineDetails;