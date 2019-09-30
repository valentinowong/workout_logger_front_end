import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
  return(
    <div className="navbar">
      <NavLink to="/workouts" exact >My Workouts</NavLink>
      <NavLink to="/workouts/new" exact>Log New Workout</NavLink>
      <NavLink to="/login" exact>Login</NavLink>
      <NavLink to="/signup" exact>Signup</NavLink>
    </div>
  )
}

export default NavBar;
