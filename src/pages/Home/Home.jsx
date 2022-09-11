import React from "react";
import Routine from "../../components/Routine/Routine";
import TimeTable from "../../components/TimeTable/TimeTable";
import Header from "../../Layout/Header/Header";
import classes from "./Home.module.css";

const Home = ({ auth }) => {
  return (
    <div className={classes.wrap}>
      <Header auth={auth} />
      <div className={classes.content}>
        <Routine />
        <TimeTable />
      </div>
    </div>
  );
};

export default Home;
