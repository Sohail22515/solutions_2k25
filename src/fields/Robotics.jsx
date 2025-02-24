import React from 'react'
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Robotics = () => {
  const games = [
    { name: "QUIZOTICS (SCHOOL EVENT)", url: "https://unstop.com/competitions/quizotics-solutions-2k25-army-institute-of-technology-ait-pune-1378207" },
    { name: "MAZE RUNNER (SCHOOL EVENT)", url: "https://unstop.com/competitions/maze-runner-solutions-2k25-army-institute-of-technology-ait-pune-1378142" },
    { name: "ROBO RACE (SCHOOL EVENT)", url: "https://unstop.com/competitions/robo-race-solutions-2k25-army-institute-of-technology-ait-pune-1376816" },
    { name: "ROBO SOCCER", url: "https://unstop.com/competitions/robo-soccer-solutions-2k25-army-institute-of-technology-ait-pune-1376540" },
    { name: "DRONE DRAG", url: "https://unstop.com/competitions/drone-drag-solutions-2k25-army-institute-of-technology-ait-pune-1378151" },
    { name: "MAZE RUNNER", url: "https://unstop.com/competitions/maze-runner-solutions-2k25-army-institute-of-technology-ait-pune-1378142" },
    { name: "ROBO CLENCH", url: "https://unstop.com/competitions/robo-clench-solutions-2k25-army-institute-of-technology-ait-pune-1376823" },
    { name: "RUSTY WHEEL", url: "https://unstop.com/competitions/rusty-wheels-solutions-2k25-army-institute-of-technology-ait-pune-1374650" },
    { name: "Robo War", url: "https://unstop.com/competitions/robo-war-solutions-2k25-army-institute-of-technology-ait-pune-1378282"},
  ];

  return (
    <div>
      <Navbar />
      
      <div className="background">
        <h1 className="heading">ROBOTICS</h1>

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

export default Robotics