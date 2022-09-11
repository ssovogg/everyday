import React from "react";
import RoutineList from "../RoutineList/RoutineList";
import classes from "./Routine.module.css";

const Routine = (props) => {
  const onClick = e => {
    e.preventDefault();
  }
  return (
  <section className={classes.wrap}>
    <div className={classes.routine}>
      <h2 className={classes.title}>Routine</h2>
      <form className={classes.routine_form}>
        <div className={classes.topic}>
          <button className={classes.topic_active}>여가</button>
          <button>공부</button>
          <button>운동</button>
          <button>+</button>
        </div>
        <div className={classes.input}>
          <input type="text" placeholder="할 일" className={classes.todo} />
          <input type="number" placeholder="시간" className={classes.time} />
          <input type="number" placeholder="분" className={classes.time} />
          <button type="submit" className={classes.add_btn}>
            Add
          </button>
        </div>
      </form>
    </div>
    <RoutineList />
  </section>
)};

export default Routine;
