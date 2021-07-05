import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="headerLogo">
        <img src="/images/logo_app.png" alt="image-logo" />
      </div>
      <div className="headerLogin">
        <div className="headerLoginButton">LOGIN</div>
      </div>
    </div>
  );
}

export default Header;
