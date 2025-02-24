import React, { useState } from "react";
import "./Navbar2.css";

function Navbar2() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar2">
      <img src="/assets/logo.svg" alt="Solutions logo" className="solutions-logo2" />
      <div className={`hamburger-button2 ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`main-navbar2 ${menuActive ? "active" : ""}`}>
        <a href="/"><img className="nav_btn_img" src="/assets/home.svg" alt="home-icon" /></a>
        <a href="/events"><img className="nav_btn_img" src="/assets/about us.svg" alt="About-us" /></a>
        <a href="/events/team"><img className="nav_btn_img" src="/assets/our team.svg" alt="Our-Team" /></a>
        <a href="https://unstop.com/college-fests/solutions-2k25-army-institute-of-technology-ait-pune-312122/amp" target="blank"><img className="nav_btn_img" src="/assets/Register.svg" alt="register" /></a>
      </div>
    </nav>
  );
}

export default Navbar2;
