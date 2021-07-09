import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { selectId, selectUserName, setSignOutState } from "../slices/userSlice";
import { auth, db } from "../firebase";
import { useHistory } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function Dashboard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const dispatch = useDispatch();
  const history = useHistory();

  const userName = useSelector(selectUserName);
  const uid = useSelector(selectId);

  // state variables for storing the form details
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userUID, setUserUID] = useState("");
  const [userDateOfEntry, setUserDateOfEntry] = useState(
    new Date().toString().slice(0, 10)
  );
  const [userProfession, setUserProfession] = useState("");

  // state variables for the dealing with user information from the database.
  const [userDetails, setUserDetails] = useState<any>("");
  const [exportDetails, setExportDetails] = useState<any | null>(null);

  if (exportDetails !== null) {
    let data =
      "\r First Name:" +
      exportDetails.firstName +
      " \r\n " +
      " Last Name:" +
      exportDetails.lastName +
      " \r\n " +
      "uID: " +
      exportDetails.uID +
      " \r\n" +
      "Country: " +
      exportDetails.dateofEntry +
      " \r\n " +
      "Message: " +
      exportDetails.profession;

    const textToBLOB = new Blob([data], { type: "text/plain" });
    const sFileName = "myData.txt"; // The file to save the data.

    const element = document.createElement("a");
    element.href = URL.createObjectURL(textToBLOB);
    element.download = sFileName;
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();

    setExportDetails(null);
  }

  //handling authentication, with Sign out functionality
  const handleAuthentication = () => {
    if (userName) {
      dispatch(setSignOutState());
      auth.signOut();
      history.push("/");
    }
  };

  //display functionality for the user to view the information.
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

  // adding user details in the cloud firestore.
  const addUserDetails = (e: any) => {
    e.preventDefault();

    let docRef = db.collection("usersData").doc(uid);

    docRef.get().then((doc) => {
      if (doc.exists) {
        alert(
          "Sorry!, Your information is there you cannot add information your again"
        );
      } else {
        docRef
          .set({
            dateofEntry: userDateOfEntry,
            firstName: userFirstName,
            lastName: userLastName,
            profession: userProfession,
            uID: userUID,
          })
          .then(() => {
            alert("Document successfully written");
          })
          .catch((error) => console.log("Error writing document", error));
      }
    });
  };

  //check the CSV functionality properly.
  const exportData = () => {
    console.log(uid);
    let docRef = db.collection("usersData").doc(uid);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setExportDetails(doc.data());
        } else {
          alert("Your information does not exist, please enter your data");
        }
      })
      .catch((error) => console.log("Error getting document:", error));
  };

  return (
    <>
      {loading === false ? (
        <div className="dashboard">
          <div className="dashboard__container">
            <div className="dashboard__welcomeMessage">
              <h2>Welcome, {userName}</h2>
              <div
                className="dashboard__signOut"
                onClick={handleAuthentication}
              >
                <span>Sign out</span>
              </div>
            </div>

            <form onSubmit={addUserDetails}>
              <div>
                <h4>First Name</h4>
                <input
                  type="text"
                  required
                  value={userFirstName}
                  onChange={(e) => setUserFirstName(e.target.value)}
                />
              </div>
              <div>
                <h4>Last Name</h4>
                <input
                  type="text"
                  required
                  value={userLastName}
                  onChange={(e) => setUserLastName(e.target.value)}
                />
              </div>
              <div>
                <h4>UID</h4>
                <input
                  type="text"
                  required
                  value={userUID}
                  onChange={(e) => setUserUID(e.target.value)}
                />
              </div>
              <div>
                <h4>Date of Entry</h4>
                <input
                  type="date"
                  required
                  value={userDateOfEntry}
                  onChange={(e) => setUserDateOfEntry(e.target.value)}
                />
              </div>
              <div>
                <h4>Profession</h4>
                <input
                  type="text"
                  required
                  value={userProfession}
                  onChange={(e) => setUserProfession(e.target.value)}
                />
              </div>
              <button className="submit_button" type="submit">
                Submit
              </button>
            </form>
            <div className="button__group">
              <button className="display__button" onClick={displayUserDetails}>
                Display
              </button>

              <button className="explain__button" onClick={exportData}>
                Export your result
              </button>
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
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Dashboard;
