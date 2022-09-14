import React, { useState } from "react";
import classes from "./TimeTable.module.css";

const TimeTable = ({ routine }) => {
  const totalTime = routine.filter(item => item.time);
  console.log(totalTime);

  const changeTheme = (e) => {
  }
  const onDelete = (e) => {
      window.alert("삭제 예정..")
  }

  return (
    <section className={`${classes.wrap}`}>
      <h2 className={classes.title}>Time Table</h2>
      <div className={classes.time_table}>
        <h3>2022. 9. 11(일)</h3>
        <ul className={classes.list}>
          {routine.map((item) => (
            <li onDoubleClick={onDelete}>
              <input type="checkbox" id={item.todo} />
              <label htmlFor={item.todo}>{item.todo}</label>
              <span>{parseInt(item.time / 60)}시간</span>
              <span>{item.time % 60}분</span>
            </li>
          ))}
        </ul>
        <div className={classes.total}>
          <p>total</p>
          <span>2시간 30분</span>
        </div>
      </div>
      <em>* 더블클릭하면 삭제</em>
      <div className={classes.theme}>
        <span>theme</span>
        <input type="radio" name="theme" id="light" />
        <label htmlFor="light" onClick={changeTheme}>light</label>
        <input type="radio" name="theme" id="dark" />
        <label htmlFor="dark" onClick={changeTheme}>dark</label>
        <input type="radio" name="theme" id="yellow" />
        <label htmlFor="yellow" onClick={changeTheme}>yellow</label>
      </div>
    </section>
  );
};

export default TimeTable;
