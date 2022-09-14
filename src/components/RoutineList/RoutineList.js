import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import classes from "./RoutineList.module.css";

const RoutineList = ({ db, topic, routine }) => {
  const { id, todo, time } = routine;
  const onDelete = () => {
    console.log(id, topic);
    const ok = window.confirm("삭제?")
    if(ok){
      deleteDoc(doc(db, topic, id));
    }
  };
  return (
    <li key={id} className={classes.list}>
      <p>{todo}</p>
      <span>{time}분</span>
      <button onClick={onDelete}>X</button>
      <button>edit</button>
      <button>
        add <i className="fa-solid fa-arrow-right"></i>
      </button>
    </li>
  );
};

export default RoutineList;

