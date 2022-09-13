import React, { useEffect, useState } from 'react';
import classes from './RoutineTab.module.css';

const RoutineTab = ({ topic, onSelectTab, onActive }) => {
  const onClick = (e) => {
    onSelectTab(e.target.id);
  }
  return (
    <li className={classes.tab}>
      <input type="radio" id={topic} onClick={onClick} name="tab"/>
      <label htmlFor={topic}>{topic}</label>
    </li>
  )};

export default RoutineTab;