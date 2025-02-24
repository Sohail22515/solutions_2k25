import React from 'react';
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Coding = () => {

  const games = [
    { name: "SHORTEST CODE", url: "https://unstop.com/hackathons/shortcode-solutions-2k25-army-institute-of-technology-ait-pune-1376802" },
    { name: "SHE CODE", url: "https://unstop.com/hackathons/she-code-solutions-2k25-army-institute-of-technology-ait-pune-1376549" },
    
  ];

  return (
    <div>
      <Navbar/>
      <div className="background">
        <h1 className="heading">CODING</h1>

        <div className="cards-container">
          {games.map((game, index) => (
            <div
              key={index}
              className="card"
              onClick={() => window.location.href = game.url} // Redirect on click
              style={{ cursor: 'pointer' }} // Show pointer cursor on hover
            >
              {game.name}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Coding;
