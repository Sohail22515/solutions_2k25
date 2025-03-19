import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"
import "./Events.css";
import { useNavigate } from "react-router-dom";

const Events = () => {

  const navigate = useNavigate();

  const eventCategories = [
    { name: "/assets/solvex.svg", slug:"Solvex"},
    // { name: "/assets/Gaming3.svg" },
    // { name: "/assets/Gaming4.svg" },
    { name: "/assets/CodingEvents.svg", slug: "Coding" },
    
    { name: "/assets/OpenEvents.svg", slug: "openEvents" },
    
    {name: "/assets/fusion.svg", slug:"fusion"},
    
    { name: "/assets/CyberSec.svg", slug: "CyberSecurity" },
    
    { name: "/assets/GDXR.svg", slug: "Gdxr" },
    
    { name: "/assets/ML.svg", slug: "MachineLearning" },
    
    { name: "/assets/EV.svg", slug: "Ev" },

    { name: "/assets/Gaming.svg", slug: "Gaming"},

    { name: "/assets/Robotics.svg", slug: "Robotics" },
  ];

  return (
    <div className="events-container">
      <Navbar/>
      <div className="events-main">
        <div className="events-background">
        </div>

        <div className="events-title">
          <img className="event-img" src="/assets/EventsLogo.svg" alt="" />
        <div className="blur"></div>
        </div>
        <div className="events-grid">
            <div className="event-grid-bg"></div>
          {eventCategories.map((category, index) => (
            <div 
              key={index} 
              className="event-card"
              onClick={() => 
                {navigate(`${category.slug}`)
                window.scrollTo(0, 0); // Scroll to the top after navigation
              }}
              
              >
              <img src={category.name} alt={category.slug} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
