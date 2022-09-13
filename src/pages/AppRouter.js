import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";

const AppRouter = ({ isLoggedIn, auth, db }) => {

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <Route path="/" element={<Home auth={auth} db={db} />} />
        ) : (
          <Route path="/" element={<Login auth={auth} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
