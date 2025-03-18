import React from 'react';
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Coding = () => {

  const games = [
    { name: "REGISTER HERE", url: "https://unstop.com/competitions/solvex-solutions-2k25-army-institute-of-technology-ait-pune-1406713" },
    { name: "RROBLEM STATEMENT", url: "https://drive.google.com/file/d/13fKNNZ5DKzNYHPbYjUzKJwWF9nqrEHBL/view?usp=drivesdk" },
    
  ];

  return (
    <div>
      <Navbar/>
      <div className="background">
        <h1 className="heading">SOLVEX</h1>

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
