import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  return(
    <div className="navbar">
      <NavLink to="/workouts" exact >My Workouts</NavLink>
      <NavLink to="/workouts/new" exact>Log New Workout</NavLink>
      <NavLink to="/routines/new" exact>Log New Routine</NavLink>
      {
        localStorage.getItem('token') ? 
        <NavLink to="/login" onClick={logout}>Logout</NavLink> : 
        <>
          <NavLink to="/login" exact>Login</NavLink>
          <NavLink to="/signup" exact>Signup</NavLink>
        </>
      }
    </div>
  )
}

export default NavBar;
