import React, { useState } from "react";
import classes from "./RoutineForm.module.css";
const RoutineForm = ({ routineObj, addRoutine }) => {
  const [todo, setTodo] = useState("");
  const [hour, setHour] = useState("");
  const [minutes, setMinutes] = useState("");
  const [topic, setTopic] = useState("공부");
  const onClick = (e) => {
    e.preventDefault();
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

  const onSubmit = (e) => {
    e.preventDefault();
    addRoutine({
      topic: topic,
      routines: {
        time: hour * 60 + minutes,
        todo: todo,
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className={classes.routine_form}>
      <ul className={classes.topic}>
        {Object.keys(routineObj).map((key) => (
          <li key={key} onClick={onClick}>
            <button>{routineObj[key].topic}</button>
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
