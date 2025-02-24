import React from 'react'
import './Coding'
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Gaming = () => {

  const games = [
    { name: "VALORANT", url: "https://example.com/valorant" },
    { name: "BGMI", url: "https://unstop.com/competitions/bgmi-solutions-2k25-army-institute-of-technology-ait-pune-1376832" },
    
  ];
  return (
    <div>
      <Navbar />
      
      <div className="background">
        <h1 className="heading">GAMING</h1>

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
  )
}

export default Gaming