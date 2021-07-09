import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setSignOutState, setUserLoginDetails } from "./slices/userSlice";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);

    // it runs only once when app component loads..

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user just logged in or use was logged in
        dispatch(
          setUserLoginDetails({ name: authUser.email, id: authUser.uid })
        );
      } else {
        //user is logged out.
        dispatch(setSignOutState());
      }
    });
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </Router>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
