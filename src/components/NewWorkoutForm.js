import React from 'react';
import { Redirect } from 'react-router-dom';

class NewWorkoutForm extends React.Component { 

    state = {
        title: '',
        photo: '',
        redirectToMyWorkouts: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.logWorkout(this.state.title, this.state.photo, this.props.routine_id)
        this.setState({
            redirectToMyWorkouts: true
        })
    }
    render() {
        if (this.state.redirectToMyWorkouts) {
            return <Redirect to="/workouts" />
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <h3>Add Workout Details: </h3>
                    <input 
                        className="form-control"
                        placeholder="Workout Title"
                        name='title' 
                        value={this.state.title} 
                        onChange={this.handleChange} 
                    />
                    <br/>
                    <input 
                        className="form-control"
                        placeholder="Workout Photo"
                        name='photo' 
                        value={this.state.photo} 
                        onChange={this.handleChange}  
                    />
                    <button className='btn btn-primary' type='submit'>Log This Workout</button>
                </form>
            )
        }
    }
}

export default NewWorkoutForm