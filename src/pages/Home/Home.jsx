import React from "react";
import Header from "../../Layout/Header/Header";
import classes from "./Home.module.css";

const Home = ({ auth }) => {
  return (
    <div className={classes.wrap}>
      <Header auth={auth}/>
      <section>

      </section>
    </div>
  );
};

export default Home;
