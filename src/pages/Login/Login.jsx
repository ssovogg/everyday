import React from "react";
import { useState } from "react";
import classes from "./Login.module.css";

const Login = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [error, setError] = useState("");
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailIsTouched(true);
    if (e.target.value.includes("@")) {
      setEmailIsValid(true);
    } else {
      setEmailIsValid(false);
    }
  };
  const onBlurEmail = () => {
    setEmailIsTouched(true);
  }
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const emailClasses = emailIsValid || !emailIsTouched ? null : `${classes.input_invalid}`;

  return (
    <div className={classes.wrap}>
      <h1 className={classes.title}>
        ~ Everyday ~ <br /> Login
      </h1>
      <form className={classes.email_login} onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            className={emailClasses}
            type="email"
            id="email"
            onChange={onChangeEmail}
            onBlur={onBlurEmail}
          />
        </div>
        {!emailIsValid && emailIsTouched && <span>이메일 형식에 맞게 입력해주세요</span>}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={onChangePassword} />
        </div>
        <button type="submit">로그인</button>
      </form>
      <button className={classes.signin}>계정 만들기</button>
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
};

export default Login;
