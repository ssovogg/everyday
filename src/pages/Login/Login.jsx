import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

const Login = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [pwIsTouched, setPwIsTouched] = useState(false);
  const [pwIsValid, setPwIsValid] = useState(false);
  const [error, setError] = useState(null);
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
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
    setPwIsTouched(true);
    e.target.value.length > 5 ? setPwIsValid(true) : setPwIsValid(false);
  };
  const onBlurPassword = () => {
    setPwIsTouched(true);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) {
        await auth.createAccount(email, password);
      } else {
        await auth.login(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <>
      <div className={classes.wrap}>
        <h1 className={classes.title}>
          ~ Everyday ~ <br /> {newAccount ? "Sign in" : "Login"}
        </h1>
        <form className={classes.email_login} onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              id="email"
              onChange={onChangeEmail}
              onBlur={onBlurEmail}
            />
          </div>
          {!emailIsValid && emailIsTouched && (
            <span>이메일 형식에 맞게 입력해주세요</span>
          )}
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={onChangePassword}
              onBlur={onBlurPassword}
            />
          </div>
          {!pwIsValid && pwIsTouched && <span>6글자 이상 입력해주세요</span>}
          <button type="submit">{!newAccount ? "로그인" : "회원가입"}</button>
          {error}
        </form>
        <button onClick={toggleAccount} className={classes.signin}>
          {!newAccount ? "계정 만들기" : "로그인하기"}
        </button>
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
      <p className={classes.copy}>&copy; coding everyday!</p>
    </>
  );
};

export default Login;
