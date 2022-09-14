import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import classes from "./RoutineList.module.css";

const RoutineList = ({ db, topic, routine, TOPICS, addToTimeTable }) => {
  const { id, todo, time } = routine;
  const [editMode, setEditMode] = useState(false);
  const [newTopic, setNewTopic] = useState(topic);
  const [newTodo, setNewTodo] = useState(todo);
  const [newHour, setNewHour] = useState(parseInt(time / 60));
  const [newMinute, setNewMinute] = useState(time % 60);

  const onDelete = () => {
    const ok = window.confirm("삭제?");
    if (ok) {
      deleteDoc(doc(db, topic, id));
    }
  };
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "topic") {
      setNewTopic(value);
      console.log(value);
    } else if (name === "todo") {
      setNewTodo(value);
    } else if (name === "hour") {
      setNewHour(value);
    } else if (name === "minute") {
      setNewMinute(value);
    }
  };
  const onEdit = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, topic, id), {
      topic: newTopic,
      todo: newTodo,
      time: Number(newHour) * 60 + Number(newMinute)
    })
    toggleEditMode();
  };

  const onAdd = () => {
    addToTimeTable({
      todo: todo,
      time: time,
      topic: topic
    })
  }

  return (
    <li key={id} className={classes.list}>
      {editMode ? (
        <form className={classes.edit_form} onSubmit={onEdit}>
          <select name="topic" onChange={onChange}>
            {TOPICS.map((item) => (
              <option
                value={item.tab}
                selected={item.tab === newTopic ? true : false}
              >
                {item.tab}
              </option>
            ))}
          </select>
          <input onChange={onChange} name="todo" type="text" value={newTodo} />
          <input
            onChange={onChange}
            name="hour"
            type="number"
            value={newHour}
            placeholder="시간"
          />
          <input
            onChange={onChange}
            name="minute"
            type="number"
            value={newMinute}
            placeholder="분"
          />
          <button type="submit">edit</button>
          <button onClick={toggleEditMode}>X</button>
        </form>
      ) : (
        <>
          <p>{todo}</p>
          <span className={classes.hour}>{parseInt(time / 60)}시간</span>
          <span>{time % 60}분</span>
          <button onClick={onDelete}>X</button>
          <button onClick={toggleEditMode}>edit</button>
          <button onClick={onAdd}>
            add <i className="fa-solid fa-arrow-right"></i>
          </button>
        </>
      )}
    </li>
  );
};

export default RoutineList;
