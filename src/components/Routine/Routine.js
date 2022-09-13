import React, { useEffect, useState } from "react";
import RoutineForm from "../RoutineForm/RoutineForm";
import RoutineList from "../RoutineList/RoutineList";
import RoutineTab from "../RoutineTab/RoutineTab";
import classes from "./Routine.module.css";

// 현재 선택한 탭과 이름이 같으면 클래스 추가
const TOPICS = [{ tab: "여가" }, { tab: "공부" }, { tab: "운동" }];

const Routine = ({ db, routines, selectTopic }) => {
  const onSelectTab = (topic) => {
    selectTopic(topic);
  };
  return (
    <section className={classes.wrap}>
      <div className={classes.routine}>
        <h2 className={classes.title}>Routine</h2>
        <RoutineForm routines={routines} db={db} TOPICS={TOPICS} />
        <ul className={classes.tabs}>
          {TOPICS.map((tab) => (
            <RoutineTab
              key={tab.tab}
              routine={tab.tab}
              topic={tab.tab}
              onSelectTab={onSelectTab}
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
