import React from 'react';
import './Footer.css';
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="lamp">
        <img src="/assets/lamp.svg" alt="Lamp" />
      </div>
      <div className="above">
        <div className="header-text">
          There will be great battles ahead. Only the Samurai will remain standing.
        </div>
        <div className="line"></div>
        
        <div className="footer-content">
          {/* Contact Section */}
          <div className="contact-section">
            <h2>CONTACT US</h2>
            <div className="contact-details">
                <div className="contact-card">
                    <img src="/assets/nabajit.svg" alt="Nabajit" />
                    
                </div>
                <div className="contact-card">
                    <img src="/assets/nisha.svg" alt="Nisha" />
                    
                </div>
            </div>
          </div>

          {/* Samurai Image */}
          <div className="samurai-image">
            <img src="/assets/footer.svg" alt="Samurai" />
          </div>
        </div>

        <div className="line"></div>

        {/* Social Media Section */}
        <div className="social-media">
          <div className="social-column">
            <h3>Get to know us</h3>
            <ul>
              <li><a href="/events">Events</a></li>
              {/* <li><a href="/">About us</a></li> */}
              <li><a href="/events/team">Our team</a></li>
            </ul>
          </div>
          <div className="social-column">
            <h3>Site Map</h3>
            <ul>
              <li><a href="/">Home</a></li>
              {/* <li><a href="https://www.linkedin.com">LinkedIn</a></li> */}
              <li><a href="/events/schedule">Schedule</a></li>
            </ul>
          </div>
          <div className="social-column">
            <h3>Follow us on</h3>
            <div className="social-icons">
              <a href="https://www.instagram.com/aittechnicalboard/" target="_blank"><img src="/assets/insta.svg" alt="Instagram" /></a>
              <a href="https://www.linkedin.com/company/ait-technical-board/" target="_blank"><img src="/assets/linkedin.svg" alt="LinkedIn" /></a>
              <a href="https://www.instagram.com/solutions.ait/" target="_blank"><img src="/assets/insta.svg" alt="solutions_IG" /></a>
              <a href="https://github.com/Sohail22515" target="_blank"><FaGithub size={20} color="white"/></a>
            </div>
          </div>
        </div>
        {/* Footer Note */}
        <div className="footer-note">Made with love Technical Board.</div>
      </div>
    </div>
  );
};

export default Footer;
