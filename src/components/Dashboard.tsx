import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName, setSignOutState } from "../slices/userSlice";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [uID, setUID] = useState("");
  const [dateofEntry, setDateofEntry] = useState(
    new Date().toString().slice(0, 10)
  );
  const [profession, setProfession] = useState("");

  const userName = useSelector(selectUserName);

  const handleAuthentication = () => {
    if (userName) {
      dispatch(setSignOutState());
      auth.signOut();
      history.push("/");
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <div className="dashboard__welcomeMessage">
          <h2>Welcome, {userName}</h2>
          <div className="dashboard__signOut" onClick={handleAuthentication}>
            <span>Sign out</span>
          </div>
        </div>

        <form>
          <div>
            <h4>First Name</h4>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div>
            <h4>Last Name</h4>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div>
            <h4>UID</h4>
            <input
              type="text"
              value={uID}
              onChange={(e) => setUID(e.target.value)}
            />
          </div>
          <div>
            <h4>Date of Entry</h4>
            <input
              type="date"
              value={dateofEntry}
              onChange={(e) => setDateofEntry(e.target.value)}
            />
          </div>
          <div>
            <h4>Profession</h4>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
            />
          </div>
          <button className="submit_button">Submit</button>
        </form>
        <div className="button__group">
          <button className="display__button">Display</button>
          <button className="explain__button">Export your result</button>
        </div>
      </div>
      <div className="dashboard__result">
        <div className="dashboard__displayedInfo"></div>
      </div>
    </div>
  );
}

export default Dashboard;
