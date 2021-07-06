import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();

    // some fancy firebase ogin shittt
  };

  const register = (e: any) => {
    e.preventDefault();

    //here do some fancy firbase register
  };

  return (
    <div className="login">
      <div className="login__container">
        <div>
          <h1>Sign-in</h1>
        </div>
        <form className="login__inputContainer">
          <div className="login__emailInput">
            <h4>Email</h4>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="login__passwordInput">
            <h4>Password</h4>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="login__buttonContainer">
            <button type="submit" className="login__button" onClick={signIn}>
              Sign In
            </button>

            <div className="choice">or</div>

            <button onClick={register} className="login__button register">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
