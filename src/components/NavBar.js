import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {

  const text = {
    color: 'white'
  }

  return(
    <div className="navbar navbar-light bg-primary" >
      <span className="navbar-brand mb-0 h1" style={text}>WeFit</span>
      <NavLink to="/workouts" exact style={text}>My Workouts</NavLink>
      <NavLink to="/workouts/new" exact style={text}>Log New Workout</NavLink>
      <NavLink to="/routines/new" exact style={text}>Log New Routine</NavLink>
      {
        localStorage.getItem('token') ? 
        <NavLink to="/login" onClick={props.logout} style={text}>Logout</NavLink> : 
        <>
          <NavLink to="/login" exact style={text}>Login</NavLink>
          <NavLink to="/signup" exact style={text}>Signup</NavLink>
        </>
      }
    </div>
  )
}

export default NavBar;
