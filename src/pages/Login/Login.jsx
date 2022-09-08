import React from "react";
import classes from "./Login.module.css";

const Login = (props) => (
  <div className={classes.wrap}>
    <h1 className={classes.title}>
      ~ Everyday ~ <br /> Login
    </h1>
    <form className={classes.email_login}>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <button type="submit">로그인</button>
    </form>
    <div className={classes.social_login}>
      <p>다른 방법으로 로그인하기</p>
      <div>
        <button>
          <i className="fa-brands fa-google-plus"></i>
          <span>Google</span>
        </button>
        <button>
          <i className="fa-brands fa-github"></i>
          <span>Github</span>
        </button>
      </div>
    </div>
  </div>
);

export default Login;
