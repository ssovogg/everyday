import React from "react";
import classes from "./RoutineList.module.css";

const RoutineList = ({ routines }) => {
  return (
      <ul className={classes.list}>
        {routines.map(routine => (
          <li key={routine.id}>
            <p>{routine.todo}</p>
            <span>{routine.time}분</span>
            <button>X</button>
            <button>edit</button>
            <button>
              add <i className="fa-solid fa-arrow-right"></i>
            </button>
          </li>
        ))}
      </ul>
  );
};

export default RoutineList;
