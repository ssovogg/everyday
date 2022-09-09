import React from 'react';
import classes from './Home.module.css';

const Home = ({ auth }) => {
  const onLogout = () => auth.logout();
  return (
  <>
    <h1>Home</h1>
    <button onClick={onLogout}>Logout</button>
  </>
  )};

export default Home;