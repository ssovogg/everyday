import React, { useState } from "react";
import RoutineList from "../RoutineList/RoutineList";
import RoutineTab from "../RoutineTab/RoutineTab";
import classes from "./Routine.module.css";

const TOPICS = ["여가", "공부", "운동"];

const Routine = ({ routineObj }) => {
  const [topicSelect, setTopicSelect] = useState(false);
  const onClickTopic = (e) => {
    e.preventDefault();
  };

  const addTopic = (e) => {
    e.preventDefault();
  };

  const topicClasses = topicSelect ? `${classes.topic_active}` : null;
  return (
    <section className={classes.wrap}>
      <div className={classes.routine}>
        <h2 className={classes.title}>Routine</h2>
        <form className={classes.routine_form}>
          <ul className={classes.topic}>
            {TOPICS.map((topic) => (
              <li onClick={onClickTopic} className={topicClasses}>
                <button>{topic}</button>
              </li>
            ))}
            <li>
              <button onClick={addTopic}>+</button>
            </li>
          </ul>
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
      {Object.keys(routineObj).map((key) => (
        <div>
          <ul className={classes.tabs}>
            <RoutineTab
              key={key}
              topic={routineObj[key].topic}
            />
          </ul>
          <ul>
            <RoutineList routines={routineObj[key].routines}/>
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Routine;
