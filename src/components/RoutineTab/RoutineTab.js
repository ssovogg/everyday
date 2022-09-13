import React from 'react';
import classes from './RoutineTab.module.css';

const RoutineTab = ({ topic, onSelectTab, onActive }) => {
  const onClick = (e) => {
    onSelectTab(e.target.innerText);
  }
  return (
    <li onClick={onClick} className={`onActive ? ${classes.tab_active} : ${classes.tab}`}>
      {topic}
    </li>
  )};

export default RoutineTab;