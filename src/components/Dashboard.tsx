import React from "react";
import { useState } from "react";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectId, selectUserName, setSignOutState } from "../slices/userSlice";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userUID, setUserUID] = useState("");
  const [userDateOfEntry, setUserDateOfEntry] = useState(
    new Date().toString().slice(0, 10)
  );
  const [userProfession, setUserProfession] = useState("");

  const userName = useSelector(selectUserName);
  const uid = useSelector(selectId);
  const [userDetails, setUserDetails] = useState<any | null>("");

  const handleAuthentication = () => {
    if (userName) {
      dispatch(setSignOutState());
      auth.signOut();
      history.push("/");
    }
  };

  const displayUserDetails = () => {
    let docRef = db.collection("usersData").doc(uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUserDetails(doc.data());
        } else {
          alert(
            "Your information is not in the record, Please add it via form"
          );
        }
      })
      .catch((error) => console.log("Error getting document:", error));
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
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
            />
          </div>
          <div>
            <h4>Last Name</h4>
            <input
              type="text"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </div>
          <div>
            <h4>UID</h4>
            <input
              type="text"
              value={userUID}
              onChange={(e) => setUserUID(e.target.value)}
            />
          </div>
          <div>
            <h4>Date of Entry</h4>
            <input
              type="date"
              value={userDateOfEntry}
              onChange={(e) => setUserDateOfEntry(e.target.value)}
            />
          </div>
          <div>
            <h4>Profession</h4>
            <input
              type="text"
              value={userProfession}
              onChange={(e) => setUserProfession(e.target.value)}
            />
          </div>
          <button
            className="submit_button"
            type="submit"
         
          >
            Submit
          </button>
        </form>
        <div className="button__group">
          <button className="display__button" onClick={displayUserDetails}>
            Display
          </button>
          <button className="explain__button">Export your result</button>
        </div>
      </div>
      <div className="dashboard__result">
        <div className="dashboard__displayedInfo">
          <div className="dashboard__userInfo">
            <h3>
              First Name:<span>{userDetails.firstName}</span>
            </h3>
            <h3>
              Last Name:<span>{userDetails.lastName}</span>
            </h3>
            <h3>
              UID:<span>{userDetails.uID}</span>
            </h3>
            <h3>
              Date of Entry:<span>{userDetails.dateofEntry}</span>
            </h3>
            <h3>
              Profession:<span>{userDetails.profession}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
