import React from "react";
import { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [uID, setUID] = useState("");
  const [dateofEntry, setDateofEntry] = useState(
    new Date().toString().slice(0, 10)
  );
  const [profession, setProfession] = useState("");

  

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h2>Welcome, test123@gmail.com</h2>
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
