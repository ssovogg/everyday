import React from 'react';
import classes from './RoutineTab.module.css';

const RoutineTab = ({ topic, onSelectTab, onActive }) => {
  const onClick = (e) => {
    onSelectTab(e.target.innerText);
  }
  const activeClasses = onActive ? `${classes.tab_active}` : `${classes.tab}`;
  return (
    <li onClick={onClick} className={activeClasses}>
      {topic}
    </li>
  )};

export default RoutineTab;