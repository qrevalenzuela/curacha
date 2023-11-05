import React from "react";
import "./NavBar.css";
import logo from "../../assets/logo-curacha.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <div className="menu">
        <Link to="/req-quote" className="menuItem">
          Request a Quote
        </Link>

        <a href="#about" className="menuItem">
          Items
        </a>
        <a href="#services" className="menuItem">
          Services
        </a>
        <a href="#contact" className="menuItem">
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
