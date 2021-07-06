import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h2>Form</h2>
        <form>
          <div>
            <h4>First Name</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Last Name</h4>
            <input type="text" />
          </div>
          <div>
            <h4>UID</h4>
            <input type="text" />
          </div>
          <div>
            <h4>Date of Entry</h4>
            <input type="date" />
          </div>
          <div>
            <h4>Profession</h4>
            <input type="text" />
          </div>
          <button className="submit_button">Submit</button>
        </form>
        <div className="button__group">
          <button className="display__button">Register</button>
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
