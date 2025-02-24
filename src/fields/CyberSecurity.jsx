import React from 'react'
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const CyberSecurity = () => {

  const games = [
    { name: "BYPASS CTF", url: "https://unstop.com/competitions/bypass-ctf-solutions-2k25-army-institute-of-technology-ait-pune-1376722" },
    { name: "CRACKHUNT", url: "https://unstop.com/competitions/crackhunt-solutions-2k25-army-institute-of-technology-ait-pune-1378972" },
    { name: "CYBER SECURITY QUIZ", url: "https://unstop.com/quiz/cyber-sec-quiz-solutions-2k25-army-institute-of-technology-ait-pune-1376227" },
  ];

  return (
    <div>
      <Navbar/>
      
      <div className="background">
        <h1 className="heading">CYBER SECURITY</h1>

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

export default CyberSecurity