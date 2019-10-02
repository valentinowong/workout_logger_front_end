import React from 'react';

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


    render() {
        console.log(this.state)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <h2>Create New Routine</h2>
                    <label>Routine Name</label>
                    <input name='name' onChange={this.handleChange} value={this.state.name} /><br/>
                    <label>Routine Description</label>
                    <textarea name='description' onChange={this.handleChange} value={this.state.description}/><br/>
                <h3>Select the Exercise</h3>
                <input
                    placeholder="Search for exercises"
                    name="query"
                    value={this.state.query}
                    onChange={this.handleInputChange}
                />
                <button>Select Exercises</button><br/>
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
                {/* <ul>
                    {this.mapDisplayExercises()}
                </ul> */}

                <br/>
                <select onChange={this.handleSelectChange}>
                    {this.mapDisplayExercises()}
                </select>
                
                </form>
            </div>
        )
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
            return <option>{exercise.name}</option>
        })
    }





}

export default NewRoutineForm;