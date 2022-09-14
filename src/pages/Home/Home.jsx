import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Routine from "../../components/Routine/Routine";
import TimeTable from "../../components/TimeTable/TimeTable";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import classes from "./Home.module.css";
import { collection, doc, onSnapshot } from "firebase/firestore";

const Home = ({ auth, db }) => {
  const [topic, setTopic] = useState("여가");
  const [routines, setRoutines] = useState([]);
  const selectTopic = (topic) => setTopic(topic);
  const [tableRoutine, setTableRoutine] = useState([]);

  const addToTimeTable = (routine) => {
    setTableRoutine(prev => [...prev, routine]);
  }

  useEffect(() => {
    onSnapshot(collection(db, topic), (snapshot) => {
      const realTimeRoutines = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRoutines(realTimeRoutines);
    });
  }, [topic]);

  return (
    <div className={classes.wrap}>
      <Header auth={auth} />
      <div className={classes.content}>
        <Routine routines={routines} db={db} selectTopic={selectTopic} addToTimeTable={addToTimeTable}/>
        <TimeTable routine={tableRoutine} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
