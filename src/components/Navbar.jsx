import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation
import "./Navbar.css";

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const location = useLocation(); // Get current path
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLogoClick = () => {
    setMenuActive(false); // Close menu when clicking the logo
    navigate("/"); // Navigate to home
  };

  const darkPages = ["/events", "/events/schedule", "/events/team","/events/Coding","/events/CyberSecurity","/events/Ev","/events/Gaming","/events/Gdxr","/events/MachineLearning","/events/openEvents","/events/Robotics"];
  const isDarkPage = darkPages.includes(location.pathname);

  return (
    <nav className="navbar">
      <img src="/assets/logo.svg"
        alt="Solutions logo"
        className={`solutions-logo ${isDarkPage ? "invert-logo" : ""}`}
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      />
      
      <div className={`hamburger-button ${menuActive ? "active" : ""} ${isDarkPage ? "dark-page" : ""}`}
        onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`main-navbar ${menuActive ? "active" : ""}`}>
        {/* Hide Home button on "/" */}
        {location.pathname !== "/" && (
          <a href="/"><img className="nav_btn_img" src="/assets/home.svg" alt="home-icon" /></a>
        )}
        <a href="/events"><img className="nav_btn_img" src="/assets/about us.svg" alt="Events" /></a>
        <a href="/events/schedule"><img className="nav_btn_img" src="/assets/schedule.svg" alt="Schedule" /></a>
        <a href="/events/team"><img className="nav_btn_img" src="/assets/our team.svg" alt="Our-Team" /></a>
        <a href="https://unstop.com/college-fests/solutions-2k25-army-institute-of-technology-ait-pune-312122/amp" target="blank">
          <img className="nav_btn_img" src="/assets/Register.svg" alt="register" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
