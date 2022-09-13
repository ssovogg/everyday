import React from 'react';
import classes from './RoutineTab.module.css';

const RoutineTab = ({ topic, routines }) => (
    <li className={classes.topic}>
      {topic}
    </li>
  );

export default RoutineTab;