import React, { useState } from "react";
import RoutineList from "../RoutineList/RoutineList";
import RoutineTab from "../RoutineTab/RoutineTab";
import classes from "./Routine.module.css";

const TOPICS = ["여가", "공부", "운동"];

const Routine = ({ routineObj }) => {
  const [topicSelect, setTopicSelect] = useState(false);
  const [selectedTab, setSelectedTab] = useState("공부");
  const [tabActive, setTabActive] = useState(false);
  const onClickTopic = (e) => {
    e.preventDefault();
  };

  const addTopic = (e) => {
    e.preventDefault();
  };

  const onSelectTab = (topic) => {
    setSelectedTab(topic);
    setTabActive(true);
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
      <ul className={classes.tabs}>
        {Object.keys(routineObj).map((key) => (
          <RoutineTab
            key={key}
            topic={routineObj[key].topic}
            onSelectTab={onSelectTab}
            onActive={tabActive}
          />
        ))}
      </ul>
      {Object.keys(routineObj)
        .filter((key) => routineObj[key].topic === selectedTab)
        .map((key) => (
          <ul>
            <RoutineList key={key} routines={routineObj[key].routines} />
          </ul>
        ))}
    </section>
  );
};

export default Routine;
