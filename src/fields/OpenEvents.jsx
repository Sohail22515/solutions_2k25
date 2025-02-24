import React from 'react'
import './Coding.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const OpenEvents = () => {

  const games = [
    { name: "PLACEMENT APTI", url: "https://unstop.com/quiz/placement-aptitude-solutions-2k25-army-institute-of-technology-ait-pune-1378986" },
    { name: "CSS BATTLE", url: "https://example.com/valorant" },
    { name: "PHOTOGRAPHTY", url: "https://unstop.com/competitions/photography-competition-solutions-2k25-army-institute-of-technology-ait-pune-1376524" },
    { name: "MOVIE MAKING", url: "https://unstop.com/competitions/movie-making-competition-solutions-2k25-army-institute-of-technology-ait-pune-1374647" },
    { name: "SCHOOL MODEL MAKING", url: "https://unstop.com/competitions/model-making-solutions-2k25-army-institute-of-technology-ait-pune-1376827" },
    { name: "B PLAN", url: "https://unstop.com/competitions/b-plan-solutions-2k25-army-institute-of-technology-ait-pune-1378292" },
    { name: "SOLID WORKS", url: "https://unstop.com/competitions/solidworks-solutions-2k25-army-institute-of-technology-ait-pune-1376509" },
    { name: "Tech Storm", url: "https://unstop.com/competitions/techstorm-solutions-2k25-army-institute-of-technology-ait-pune-1378296"},
    
  ];

  return (
    <div>
      <Navbar />
      
      <div className="background">
        <h1 className="heading">OPEN EVENTS</h1>

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

export default OpenEvents