import React from 'react'
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";


const Gdxr = () => {

  const games = [
    { name: "IMAGINATE", url: "https://unstop.com/competitions/imaginate-solutions-2k25-army-institute-of-technology-ait-pune-1376274" },
    { name: "AR-CADE", url: "https://unstop.com/competitions/ar-cade-solutions-2k25-army-institute-of-technology-ait-pune-1376530" },
    
  ];


  return (
    <div>
      <Navbar />
      
      <div className="background">
        <h1 className="heading">GDXR</h1>

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

export default Gdxr