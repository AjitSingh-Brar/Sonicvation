import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setSignOutState, setUserLoginDetails } from "./slices/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
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
  );
}

export default App;
