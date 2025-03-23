import React from 'react';
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Coding = () => {

  const games = [
    { name: "INOVEX", url: "https://unstop.com/competitions/innovx-solutions-2k25-army-institute-of-technology-ait-pune-1433456" },
    { name: "MYSTERY BOX", url: "https://unstop.com/competitions/mystery-box-army-institute-of-technology-ait-pune-1434603" },
    
  ];

  return (
    <div>
      <Navbar/>
      <div className="background">
        <h1 className="heading">FUSION</h1>

        <div className="cards-container">
          {games.map((game, index) => (
            <div
              key={index}
              className="card"
              onClick={() => window.open(game.url, "_blank")} // Redirect on click
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
