import React from 'react';
import Suggestions from './Suggestions'

class NewRoutineForm extends React.Component {
    state = {
        name: '',
        description: '',
        query: '',
        exercises: []
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleInputChange = () => {
        this.setState({
            query: this.serach.value 
        }, () => {
            if (this.state.query && this.state.query.length > 1) {
                this.fetchExercises()
            }
         else if(!this.state.query) {
            
        }
        })
    }

    fetchExercises = () => {
        fetch('http://localhost:3005/api/v1/exercises', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({ exercises: data }) 
        }) 
    }

    render() {
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
                    ref={input => this.serach = input}
                    onChange={this.handleInputChange}
                />
                <Suggestions results={this.state.exercises} />
                
                </form>
            </div>
        )
    }





}

export default NewRoutineForm;