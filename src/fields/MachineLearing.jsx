import React from 'react'
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const MachineLearing = () => {
  const games = [
    { name: "PROJECT JUPYTER", url: "https://unstop.com/competitions/project-jupyter-solutions-2k25-army-institute-of-technology-ait-pune-1376836" },
    { name: "FLASH 500", url: "https://unstop.com/competitions/flash-500-solutions-2k25-army-institute-of-technology-ait-pune-1376844" },
    { name: "DataViz", url: "https://unstop.com/competitions/dataviz-2025-empowering-decisions-through-data-visualization-solutions-2k25-army-institute-of-technology-ai-1389578" },
    { name: "TrainIT", url: "https://unstop.com/hackathons/trainit-where-data-meets-creativity-solutions-2k25-army-institute-of-technology-ait-pune-1390420" },
  ];

  return (
    <div>
      <Navbar />
      
      <div className="background">
        <h1 className="heading">MACHINE LEARNING</h1>

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

export default MachineLearing