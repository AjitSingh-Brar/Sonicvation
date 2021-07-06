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
            <input type="date" min="2018-01-01" max="2018-12-31" />
          </div>
          <div>
            <h4>Profession</h4>
            <input type="text" />
          </div>
          <button className="submit_button">Submit</button>
        </form>
      </div>
      <div className="dashboard__result"></div>
    </div>
  );
}

export default Dashboard;
