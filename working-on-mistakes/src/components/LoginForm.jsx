import React, { useRef } from "react";
import classes from "./LoginForm.module.css";

const LoginForm = ({ onGetLoginData, errorMessage, submitLoading }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginRequest = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    onGetLoginData(email, password);
  };

  return (
    <form onSubmit={loginRequest}>
      <fieldset className={classes.fieldset}>
        <h1>Welcome to Gulag</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        {submitLoading ? (
          <p>Loading...</p>
        ) : (
          <button type="submit">Login</button>
        )}
      </fieldset>
    </form>
  );
};

export default LoginForm;
