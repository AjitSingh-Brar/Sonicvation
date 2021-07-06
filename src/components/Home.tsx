import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__Container">
        <h2>Welcome to the Sonicvation</h2>
        <p>
          Dive into your Dashboard and enjoy the interface to experience
          something new. If you want to experience something more, please login
          below.
        </p>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
