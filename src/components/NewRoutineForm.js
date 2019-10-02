import React from 'react';
import { Redirect } from 'react-router-dom';

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
        duration: null
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
            // if (this.state.query && this.state.query.length > 1) {
                this.filterExercises();
                this.mapDisplayExercises();
            // }
        })
    }

    handleSelectChange = e => {
        this.setState({
            query: e.target.value
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
    }


    render() {
        if (!localStorage.getItem('token')) {
            return <Redirect to="/login" />
        } else {
        return (
            <div>
                <form onSubmit={this.handleNewRoutineSubmit}>
                <h2>Create New Routine</h2>
                    <label>Routine Name</label>
                    <input name='name' onChange={this.handleChange} value={this.state.name} /><br/>
                    <label>Routine Description</label>
                    <textarea name='description' onChange={this.handleChange} value={this.state.description}/><br/>
                    <button>Submit Your New Routine</button><br/>
                </form>
                
                <form>
                    <h4>Added Exercises</h4>
                    <ul>
                        {this.state.routineExercises.map(attributes => {
                            return (
                            <li>
                            Name: {attributes.exercise_name}<br/>
                            Quantity: {attributes.quantity}<br/>
                            Distance: {attributes.distance}<br/>
                            Weight: {attributes.weight}<br/>
                            Duration: {attributes.duration}<br/>
                            </li>
                            )
                        })}
                        
                    </ul>
                </form>

                <form onSubmit={this.handleExerciseSubmit}>
                <h3>Select the Exercise</h3>
                <input
                    placeholder="Search for exercises"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                />
                <select onChange={this.handleSelectChange}>
                    {this.mapDisplayExercises()}
                </select><br/>
                <input
                    placeholder="Quantity"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                    type="number"
                /><br/>
                <input
                    placeholder="Distance"
                    name="distance"
                    value={this.state.distance}
                    onChange={this.handleChange}
                    type="number"
                /><br/>
                <input
                    placeholder="Weight"
                    name="weight"
                    value={this.state.weight}
                    onChange={this.handleChange}
                    type="number"
                /><br/>
                <input
                    placeholder="Duration"
                    name="duration"
                    value={this.state.duration}
                    onChange={this.handleChange}
                    type="number"
                /><br/>
                <button>Select Exercises</button><br/>

                <br/>
                </form>
            </div>
        )}
    }

    fetchExercises = () => {
        fetch(`${API_URL}`, {
            headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json',
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

    mapDisplayExercises = () => {
        return this.state.displayExercises.map(exercise => {
            return <option id={exercise.id} >{exercise.name}</option>
        })
    }
}

export default NewRoutineForm;