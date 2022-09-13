import React, { useState } from "react";
import RoutineForm from "../RoutineForm/RoutineForm";
import RoutineList from "../RoutineList/RoutineList";
import RoutineTab from "../RoutineTab/RoutineTab";
import classes from "./Routine.module.css";

const TOPICS = [{ tab: "여가" }, { tab: "공부" }, { tab: "운동" }];

const Routine = ({ db, routines, selectTopic }) => {
  const [selectedTab, setSelectedTab] = useState("공부");
  const [tabActive, setTabActive] = useState(false);

  const onSelectTab = (topic) => {
    selectTopic(topic);
    setSelectedTab(topic);
    setTabActive(true);
  };

  return (
    <section className={classes.wrap}>
      <div className={classes.routine}>
        <h2 className={classes.title}>Routine</h2>
        <RoutineForm routines={routines} db={db} TOPICS={TOPICS} />
        <ul className={classes.tabs}>
          {TOPICS.map((tab) => (
            <RoutineTab
              routine={tab.tab}
              topic={tab.tab}
              onSelectTab={onSelectTab}
              onActive={tabActive}
            />
          ))}
        </ul>
        <ul>
          <RoutineList key={routines.id} routines={routines} />
        </ul>
      </div>
    </section>
  );
};

export default Routine;
