import React from "react";
import "./Header.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {


  return (
    <div className="header">
      <Link to="/">
        <img
          src="/images/logo_app.png"
          className="headerLogo"
          alt="image-logo"
        />
      </Link>
      <div className="headerLogin">
        <div className="header__NavBar">
          <a href="#">
            <span>HOME</span>
          </a>
          <a href="#">
            <span>ABOUT US</span>
          </a>
          <a href="#">
            <span>BLOGS</span>
          </a>
          <a href="#">
            <span>CONTACT</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
