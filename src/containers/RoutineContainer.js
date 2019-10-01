import React from 'react';
import RoutineList from '../components/RoutineList'
import RoutineDetails from '../components/RoutineDetails'
import API from '../Api'

class RoutineContainer extends React.Component {
  state = {
    routines: [],
    selectedRoutineId: 1,
  } 

  componentDidMount() {
    // const token = localStorage.getItem('token')
    // fetch(`${API}/authenticate`, {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': token
    //   }
    // })
    // .then(res => res.json())
    // .then(data => {
    //   console.log('Routine Container Component Did Mount', data)
    //   this.props.setCurrentUser(data.currentUser)
    // })
    this.fetchRoutines();
  }

  render() {
    return(
      <div className="container row">
        <RoutineList routines={this.state.routines} selectRoutine={this.selectRoutine}/>
        <RoutineDetails routine={this.findSelectedRoutine()} logWorkout={this.props.logWorkout}/>
      </div>
    )
  }

  fetchRoutines = () => {
    fetch(`${API}/routines`, {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    }).then(res => res.json())
      .then(data => {
        this.setState({
          routines: data
        })
      })
  }

  findSelectedRoutine = () => {
    return this.state.routines.find(routine => {
      return routine.id === this.state.selectedRoutineId
    })
  }

  selectRoutine = (routine_id) => {
    this.setState({
      selectedRoutineId: routine_id
    })
  }

}
  
export default RoutineContainer;
