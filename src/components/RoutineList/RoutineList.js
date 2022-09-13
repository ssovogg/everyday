import React from "react";
import classes from "./RoutineList.module.css";

const RoutineList = ({ routines }) => {
  return (
      <ul className={classes.list}>
        {Object.keys(routines).map(key => (
          <li>
            <p>{routines[key].todo}</p>
            <span>{routines[key].time}분</span>
            <button>edit</button>
            <button>
              add <i class="fa-solid fa-arrow-right"></i>
            </button>

          </li>
        ))}
      </ul>
  );
};

export default RoutineList;
