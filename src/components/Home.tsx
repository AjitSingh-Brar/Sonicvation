import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="home">
          <div className="home__Container">
            <h2>Welcome to the Sonicvation</h2>
            <p>
              Dive into your Dashboard and enjoy the interface to experience
              something new. If you want to experience something more, please
              login below.
            </p>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default Home;
