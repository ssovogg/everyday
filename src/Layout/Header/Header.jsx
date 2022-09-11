import React, { useState } from "react";
import classes from "./Header.module.css";

const Header = ({ auth }) => {
  const [toggleProfle, setToggleProfle] = useState(false);
  const [toggleLogout, setToggleLogout] = useState(false);
  const onLogout = () => auth.logout();
  const toggleProfileBtn = () => setToggleProfle((prev) => !prev);
  const toggleLogouteBtn = () => setToggleLogout((prev) => !prev);

  return (
    <header className={classes.header}>
      <h1 className={classes.title}>
        Everday Routine
      </h1>
      <ul className={classes.nav}>
        <li onMouseEnter={toggleProfileBtn} onMouseLeave={toggleProfileBtn}>
          {!toggleProfle ? (
            <div>
              <i class="fa-solid fa-user"></i>
            </div>
          ) : (
            <span>profile</span>
          )}
        </li>
        <li onMouseEnter={toggleLogouteBtn} onMouseLeave={toggleLogouteBtn}>
          <button onClick={onLogout}>
            {!toggleLogout ? (
              <div>
                <i class="fa-solid fa-right-from-bracket"></i>
              </div>
            ) : (
              <sapn>Logout</sapn>
            )}
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
