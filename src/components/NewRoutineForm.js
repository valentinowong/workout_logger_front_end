import React from 'react';
import { Redirect } from 'react-router-dom';
import Exercise from './Exercise';
import Select from 'react-select';

const API_URL = 'http://localhost:3005/api/v1/exercises'

class NewRoutineForm extends React.Component {
    state = {
        name: '',
        description: '',
        query: '',
        exercises: [],
        displayExercises: [],
        routineExercises: [],
        quantity: null,
        distance: null, 
        weight: null, 
        duration: null,
        redirectToNewWorkoutForm: false
    }

    componentDidMount() {
        this.fetchExercises();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleInputChange = e => {
        this.setState({
            query: e.target.value
        }, () => {
                this.filterExercises();
                this.mapDisplayExercises();
        })
    }

    handleSelectChange = option => {
        this.setState({
            query: option.label
        })
    }

    handleExerciseSubmit = e => {
        e.preventDefault();
        const exercise = this.state.exercises.find(exercise => exercise.name === this.state.query)
        const newExercise = {
            exercise_id: exercise.id,
            exercise_name: exercise.name,
            quantity: this.state.quantity,
            distance: this.state.distance,
            weight: this.state.weight,
            duration: this.state.duration
        }
        this.setState({
            routineExercises: [...this.state.routineExercises, newExercise]
        })
      
    }

    handleNewRoutineSubmit = e => {
        e.preventDefault();
        this.logRoutine();
        this.setState({
            redirectToNewWorkoutForm: true
        })
    }

    render() {
        if (!localStorage.getItem('token')) {
            return <Redirect to="/login" />
        } else if (this.state.redirectToNewWorkoutForm) {
            return <Redirect to="/workouts/new" />
        } else {
        return (
            <div className="container">

                <form onSubmit={this.handleNewRoutineSubmit}>
                <h2>Create New Routine</h2>
                <input 
                    className="form-control" 
                    type="text" 
                    name='name' 
                    onChange={this.handleChange} 
                    value={this.state.name} 
                    placeholder="Routine Name"
                />
                <br/>
                <textarea 
                    className="form-control" 
                    name='description' 
                    onChange={this.handleChange} 
                    value={this.state.description}
                    placeholder="Routine Description"
                />
                <br/>
                <button className="btn btn-primary">Submit Your New Routine</button><br/>
                </form>

                <div className="container row">
                    <div className='col-md-6' style={{textAlign: 'left'}}>
                        <h4>Added Exercises: </h4>
                        <ul>
                            {this.renderRoutineExercises()}
                        </ul>
                    </div>

                    <div className='col-md-6' style={{textAlign: 'left', padding: '20px'}}>
                        <form onSubmit={this.handleExerciseSubmit}>
                        <Select placeholder="Search for Exercises" options={this.renderDisplayExercises()} onChange={this.handleSelectChange}/>
                        <br/>
                        <input
                            placeholder="Quantity"
                            name="quantity"
                            value={this.state.quantity}
                            onChange={this.handleChange}
                            type="number"
                            className="form-control" 
                        /><br/>
                        <input
                            placeholder="Distance"
                            name="distance"
                            value={this.state.distance}
                            onChange={this.handleChange}
                            type="number"
                            className="form-control" 
                        /><br/>
                        <input
                            placeholder="Weight"
                            name="weight"
                            value={this.state.weight}
                            onChange={this.handleChange}
                            type="number"
                            className="form-control" 
                        /><br/>
                        <input
                            placeholder="Duration"
                            name="duration"
                            value={this.state.duration}
                            onChange={this.handleChange}
                            type="number"
                            className="form-control" 
                        /><br/>
                        <button className="btn btn-secondary" >Add Exercises</button><br/>

                        <br/>
                        </form>
                    </div>
                </div>
            </div>
        )}
    }

    fetchExercises = () => {
        fetch(`${API_URL}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => {
            this.setState({ 
                exercises: data
            }) 
        }) 
    }

    logRoutine = () => {
        fetch('http://localhost:3005/api/v1/routines',{
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': localStorage.getItem('token')
          },
          body: JSON.stringify({
              name: this.state.name,
              description: this.state.description,
              routine_exercises_attributes: this.state.routineExercises
          })
        })
        .then(res => res.json())
        .then('logNewRoutine', console.log)
      }

    filterExercises = () => {
        const updatedDisplayExercises = this.state.exercises.filter(exercise => {
            return exercise.name.toLowerCase().includes(this.state.query.toLowerCase())
        })
        this.setState({
            displayExercises: updatedDisplayExercises
        })

    }

    renderRoutineExercises = () => {
        const reformattedExercises = this.state.routineExercises.map(routineExercise => {
            const reformattedExercise = {};
            reformattedExercise.id = routineExercise.exercise_id;
            reformattedExercise.name = routineExercise.exercise_name;
            reformattedExercise.routine_distance = routineExercise.distance;
            reformattedExercise.routine_duration = routineExercise.duration;
            reformattedExercise.routine_quantity = routineExercise.quantity;
            reformattedExercise.routine_weight = routineExercise.weight;
        return reformattedExercise
        });
        return reformattedExercises.map( (exercise, idx) => {
            return <Exercise key={`${exercise.id}-${idx}`} exercise={exercise} />
        })
    }

    renderDisplayExercises = () => {
        return this.state.exercises.map(exercise => {
            return {label: exercise.name, value: exercise.id}
        })
    }
}

export default NewRoutineForm;