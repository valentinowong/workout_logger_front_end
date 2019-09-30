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
