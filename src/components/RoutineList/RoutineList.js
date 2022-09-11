import React from 'react';
import classes from './RoutineList.module.css';

const RoutineList = (props) => (
  <div>
<ul className={classes.topic}>
  <li className={classes.topic_active}>여가</li>
  <li>공부</li>
  <li>운동</li>
</ul>
<ul className={classes.list}>
  <li>
    <p>그림 그리기</p>
    <span>30분</span>
    <button>edit</button>
    <button>add <i class="fa-solid fa-arrow-right"></i></button>
  </li>
  <li>
    <p>게임하기</p>
    <span>1시간</span>
    <button>edit</button>
    <button>add <i class="fa-solid fa-arrow-right"></i></button>
  </li>
</ul>
</div>
  );

export default RoutineList;