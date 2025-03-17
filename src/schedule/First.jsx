import React, { useState } from 'react';
import './First.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const First = () => {
    // State to track the selected date
    const [selectedDate, setSelectedDate] = useState("3rd April");

    // Event data for different dates
    const eventData = {
        "3rd April": [
            { name: "AR-CADE", time: "10:00AM to 1:00PM",venue:"RH" },
            { name: "Imaginate", time: "3:00PM t0 6:00PM",venue:"RH" },
            { name: "CrackHunt", time: "2:00PM to 5:00PM",venue:"Manekshaw" },
            { name: "CSS Battle", time: "Begins- 11:00AM",venue:"Online" },
            { name: "Solidworks", time: "11:00AM to 2:00PM",venue:"Online" },
            { name: "Photography", time: "Deadline- 11:00PM",venue:"Online" },
            { name: "Movie Making", time: "Deadline- 11:00PM",venue:"Online" },
            { name: "TrainIT", time: "",venue:"Online" },
            { name: "Valorant", time: "",venue:"Online" },
            { name: "BGMI", time: "",venue:"RH" },
            { name: "Innovex", time: "",venue:"NCH" },
            { name: "Ethon", time: "10:00AM to 1:00PM",venue:"Manekshaw" },
            
        ],
        "4th April": [
            { name: "SheCode", time: "12:00AM to 2:00PM",venue:"RH" },
            { name: "CodeRed", time: "4:00PM to 6:00PM",venue:"RH" },
            { name: "Prompt Painter", time: "Begins- 11:00AM",venue:"Online" },
            { name: "Jupyter", time: "Begins- 10:00AM",venue:"Online" },
            { name: "B Plan", time: "Begins- 11:00AM",venue:"Online" },
            { name: "Placement Apti", time: "10:00AM to 1:00AM",venue:"Online" },
            { name: "DriveLink", time: "10:00AM to 12:00PM",venue:"EV lab" },
            { name: "CiruitCraft", time: "2:00PM to 4:00PM",venue:"RH" },
        ],
        "5th April": [
            { name: "Solvex", time: "Begins- 11:00AM",venue:"Aryabhatta" },
            { name: "Bypass CTF", time: "",venue:"Online" },
            { name: "Techstorm", time: "12:00PM to 1:00PM",venue:"Online" },
            { name: "Cyber Security Quiz", time: "",venue:"Online" },
            { name: "Gate-ronics", time: "11:00AM to 12:00PM",venue:"Online" },
            { name: "Dataviz", time: "",venue:"Online" },
            { name: "Current Clash", time: "10:00AM to 1:00PM",venue:"Manekshaw" },
            { name: "Wartech", time: "",venue:"RH" },
            { name: "Mystery Box", time: "",venue:"ME classroom" },
        ],
        "6th April": [
            { name: "Solvex", time: "",venue:"Aryabhatta" },
            { name: "Speaker Session", time: "Begins- 2:00PM",venue:"Manekshaw" },
            { name: "Model Making", time: "Begins- 2PM",venue:"Aryabhatta" },
            { name: "Wartech", time: "",venue:"" },
        ],
       
    };

    // Get the events for the selected date
    const displayedGames = eventData[selectedDate] || [];

    return (
        <div>
            <Navbar />
            <div className="background2">
                <h1 className="heading2">SCHEDULE</h1>

                {/* Date Buttons */}
                <div className="date-buttons">
                    {Object.keys(eventData).map((date, index) => (
                        <button
                            key={index}
                            className={selectedDate === date ? "active" : ""}
                            onClick={() => setSelectedDate(date)}
                        >
                            {date}
                        </button>
                    ))}
                </div>

                {/* Event Cards */}
                <div className="cards-container2">
                    {displayedGames.length > 0 ? (
                        displayedGames.map((game, index) => (
                            <div key={index} className="card2">
                                <h4>{game.name}</h4>
                                <p>{game.time}</p>
                                <b>{game.venue}</b>
                            </div>
                        ))
                    ) : (
                        <p className="no-events">No events scheduled for this date.</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default First;
