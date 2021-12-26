import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    // firebase login logic.
  };

  const register = (e) => {
    e.preventDefault();

    // firebase login logic.
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.event)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.event)}
          />
          <button type="submit" onClick={signIn}>
            Sign in
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon clone's Conditions of Use and
          Privacy Notice.
        </p>
      </div>
      <button
        className="login__registerButton"
        type="submit"
        onClick={register}
      >
        Create your Amazon account
      </button>
    </div>
  );
}

export default Login;
