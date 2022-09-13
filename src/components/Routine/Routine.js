import React, { useState } from "react";
import RoutineForm from "../RoutineForm/RoutineForm";
import RoutineList from "../RoutineList/RoutineList";
import RoutineTab from "../RoutineTab/RoutineTab";
import classes from "./Routine.module.css";

const Routine = ({ routineObj }) => {
  const [selectedTab, setSelectedTab] = useState("공부");
  const [tabActive, setTabActive] = useState(false);

  const onSelectTab = (topic) => {
    setSelectedTab(topic);
    setTabActive(true);
  };

  const addRoutine = async (routine) => {
    const response = await fetch('https://everyday-549d9-default-rtdb.firebaseio.com/routine.json', {
      method: 'POST',
      body: JSON.stringify(routine),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };
  return (
    <section className={classes.wrap}>
      <div className={classes.routine}>
        <h2 className={classes.title}>Routine</h2>
      </div>
      <RoutineForm routineObj={routineObj} addRoutine={addRoutine} />
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
