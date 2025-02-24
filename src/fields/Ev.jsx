import React from 'react'
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
const Ev = () => {

  const games = [
    { name: "ETHON", url: "https://unstop.com/competitions/ethon-solutions-2k25-army-institute-of-technology-ait-pune-1378273" },
    { name: "DRIVE LINK", url: "https://unstop.com/competitions/drive-link-solutions-2k25-army-institute-of-technology-ait-pune-1376753" },
    { name: "CIRCUITCRAFT", url: "https://unstop.com/competitions/circuit-craft-solutions-2k25-army-institute-of-technology-ait-pune-1376840" },
    { name: "CURRENTCLASH", url: "https://example.com/valorant" },
  ];

  return (
    <div>
      <Navbar />
      
      <div className="background">
        <h1 className="heading">EV</h1>

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
  )
}

export default Ev