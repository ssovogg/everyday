import React from "react";
import classes from "./TimeTable.module.css";

const TimeTable = (props) => (
  <section className={classes.wrap}>
    <h2 className={classes.title}>Time Table</h2>
    <div className={classes.time_table}>
      <h3>2022. 9. 11(일)</h3>
      <ul className={classes.list}>
        <li>
          <input type="checkbox" />
          <p>그림 그리기</p>
          <span>30분</span>
        </li>
      </ul>
      <div className={classes.total}>
        <p>total</p>
        <span>2시간 30분</span>
      </div>
    </div>
    <em>* 더블클릭하면 삭제</em>
    <div className={classes.theme}>
      <button>light</button>
      <button>dark</button>
      <button>yellow</button>
    </div>
  </section>
);

export default TimeTable;
