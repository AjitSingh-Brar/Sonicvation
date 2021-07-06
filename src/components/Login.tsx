import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__inputContainer">
          <div>
            <h2>Sign In Here</h2>
          </div>
          <div className="login__emailInput">
            <h4>Email</h4>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="login__passwordInput">
            <h4>Password</h4>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="login__buttonContainer">
          <div className="login__button"> Sign In</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
