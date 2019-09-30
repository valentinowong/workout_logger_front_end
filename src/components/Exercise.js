import React from 'react';

const Exercise = (props) => {

    const {name, routine_distance, routine_duration, routine_quantity, routine_weight} = props.exercise

    const renderDistanceExercise = () => {
        return `${routine_distance} mile ${name}${routine_weight ? ` (${routine_weight} lbs)` : ''} `
    }

    const renderDurationExercise = () => {
        return `${routine_duration/60} min ${name}${routine_weight ? ` (${routine_weight} lbs)` : ''} `
    }

    const renderQuantityExercise = () => {
        return `${routine_quantity} ${name}${routine_weight ? ` (${routine_weight} lbs)` : ''} `
    }

    const renderExercise = () => {
        if (routine_distance) {
            return renderDistanceExercise();
        } else if (routine_duration) {
            renderDurationExercise();
        } else if (routine_quantity) {
            return renderQuantityExercise();
        }
    }

    return(
        <li>
            {renderExercise()}
        </li>
    )
}
  
export default Exercise;