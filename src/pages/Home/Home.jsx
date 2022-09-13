import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Routine from "../../components/Routine/Routine";
import TimeTable from "../../components/TimeTable/TimeTable";
import Header from "../../Layout/Header/Header";
import classes from "./Home.module.css";

const Home = ({ auth }) => {
  const [routines, setRoutines] = useState([]);
  const fatchRoutines = async () => {
    const response = await fetch('https://everyday-549d9-default-rtdb.firebaseio.com/routine.json');
    const data = await response.json();
    // const transformMovies = data.results.map(())
    const loadedRoutines = [];
    for (const key in data){
      loadedRoutines.push({
        id: key,
        topic: data[key].topic,
        routines: data[key].routines,
      })
    }
    setRoutines(loadedRoutines);
    console.log(loadedRoutines);
  }

  useEffect(()=>{
    fatchRoutines()
  },[])
  return (
    <div className={classes.wrap}>
      <Header auth={auth} />
      <div className={classes.content}>
        <Routine routineObj={routines} />
        <TimeTable />
      </div>
    </div>
  );
};

export default Home;
