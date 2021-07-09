import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Header() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="header">
          <Link to="/">
            <img
              src="/images/logo_app.png"
              className="headerLogo"
              alt="image-logo"
            />
          </Link>
          <div className="header__Login">
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
            <div className="header__menu">
              <MenuIcon />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Header;
