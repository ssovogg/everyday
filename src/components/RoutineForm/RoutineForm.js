import React, { useRef, useState } from "react";
import classes from "./RoutineForm.module.css";
import { addDoc, collection } from "firebase/firestore";

const RoutineForm = ({ db, routines, TOPICS }) => {
  const [todo, setTodo] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [topic, setTopic] = useState("공부");
  const onClickTopic = (e) => {
    setTopic(e.target.innerText);
  };

  const addTopic = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "todo") {
      setTodo(value);
    } else if (name === "hour") {
      setHour(value);
    } else if (name === "minutes") {
      setMinutes(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(topic);
    await addDoc(collection(db, topic), {
      topic: topic,
      todo: todo,
      time: Number(hour) * 60 + Number(minutes),
    });
    setTodo("");
    setHour("");
    setMinutes("");
  };

  return (
    <form onSubmit={onSubmit} className={classes.routine_form}>
      <ul className={classes.topic}>
        {TOPICS.map((topic) => (
          <li key={topic.tab}>
            <input type="radio" id={`${topic.tab}topic`} name="topic" />
            <label htmlFor={`${topic.tab}topic`} onClick={onClickTopic}>
              {topic.tab}
            </label>
          </li>
        ))}
        <li>
          <button onClick={addTopic}>+</button>
        </li>
      </ul>
      <div className={classes.input}>
        <input
          type="text"
          placeholder="할 일"
          className={classes.todo}
          name="todo"
          value={todo}
          onChange={onChange}
          required
        />
        <input
          type="number"
          placeholder="시간"
          className={classes.time}
          name="hour"
          value={hour}
          onChange={onChange}
        />
        <input
          type="number"
          placeholder="분"
          className={classes.time}
          name="minutes"
          value={minutes}
          onChange={onChange}
        />
        <button type="submit" className={classes.add_btn}>
          Add
        </button>
      </div>
    </form>
  );
};

export default RoutineForm;
