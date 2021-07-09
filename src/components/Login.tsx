import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
import "./Login.css";
import { selectUserName, setUserLoginDetails } from "../slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

function Login() {
  // state variables
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const dispatch = useDispatch();
  const user = useSelector(selectUserName);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Login functionality via email and password
  const signIn = (e: any) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully logging in the system
        console.log(auth, "hERE IS THE USER");
        if (auth) {
          dispatch(
            setUserLoginDetails({
              name: auth.user?.email,
              id: auth.user?.uid,
            })
          );
        }
        history.push("/dashboard");
      })
      .catch((error) => alert(error.message));
  };

  // register functionality via Login/Password
  const register = (e: any) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //successfully created a user with email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      {loading === false ? (
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
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="login__passwordInput">
                <h4>Password</h4>
                <input
                  type="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="login__buttonContainer">
                <button
                  type="submit"
                  className="login__button"
                  onClick={signIn}
                >
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Login;
