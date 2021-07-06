import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src="/images/logo_app.png" alt="image-logo" />
      </div>
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
