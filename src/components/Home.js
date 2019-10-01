import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = () => {

    if (localStorage.getItem('token')) {
        return <Redirect to="/workouts" />
    } else {
        return <Redirect to="/login" />
    }
    
}

export default Home;