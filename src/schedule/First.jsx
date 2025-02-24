import React, { useState } from 'react';
import './First.css';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const First = () => {
    // State to track the selected date
    const [selectedDate, setSelectedDate] = useState("19th Mar");

    // Event data for different dates
    const eventData = {
        "19th Mar": [
            { name: "Imaginate", time: "Begins - 12:00AM" },
            { name: "Arcade", time: "Begins - 12:00AM" },
            { name: "Valorant", time: "10:30AM to 6:00PM" },
            { name: "Placement Apti", time: "11:00AM - 11:30PM" },
            { name: "She Code", time: "4:30PM - 5:30PM" },
            { name: "Photography", time: "Deadline - 11:50PM" },
            { name: "Movie Making", time: "Deadline - 11:50PM" }
        ],
        "20nd Mar": [
            { name: "Valorant", time: "10:00AM - 6:00PM" },
            { name: "BGMI", time: "10:00AM - 6:00PM"},
            { name: "Project Jupyter", time: "Begins - 10:00AM" },
            { name: "Quiziotics", time: "10:00AM - 11:00MP" },
            { name: "Ethon", time: "Begins - 11:00AM" },
            { name: "Robo Race", time: "11:30AM - 1:00PM" },
            { name: "Maze Runner", time: "1:00AM - 2:30PM" },
            { name: "Robo Clench", time: "4:00PM to 5:00PM" },
            { name: "Techstorm", time: "5:30AM to 6:00PM" },
            { name: "Flash 500", time: "Deadline - 11:50PM" },
        ],
        "21th Mar": [
            { name: "Valorant", time: "10:00AM - 6:00PM" },
            { name: "Model Making", time: "8:00AM - 12:30PM"},
            { name: "Project Jupyter", time: "Deadline - 10:00PM" },
            { name: "CrackHunt", time: "9:00AM - 12:000PM" },
            { name: "SolidWorks", time: "10:30AM - 1:00PM" },
            // { name: "Session", time: "11:30AM - 1:00PM" },
            { name: "ByPass CTF", time: "Begins - -12:00PM" },
            { name: "Robo Soccer", time: "3:00PM to 5:00PM" },
            // { name: "Techstorm", time: "5:30AM to 6:00PM" },
            { name: "Drone Drag", time: "5:30PM - 7:30PM" },
        ],
        "22nd Mar": [
            { name: "Drive Link", time: "Begins - -10:00AM" },
            { name: "Shortest Code", time: "3:30AM - 5:30PM"},
            { name: "How Unicorn", time: "Begins - 3:00PM" },
            { name: "Dron Racing", time: "Begins - 2:00PM" },
            { name: "Circuit Craft", time: "3:00PM" },
            { name: "Cybersecurity quiz", time: "3:30AM - 4:00PM" },
            { name: "Maze Runner", time: "4:00PM - 5:00PM" },
            { name: "Robo wars", time: "5:30PM to 6:30PM" },
        ],
        "23rd Mar": [
            { name: "ByPass CTF", time: "Deadline - 12:00AM" },
            { name: "Current Clash", time: "Begins - 10:00AM"},
            { name: "Robo Clench", time: "4:00PM - 5:00PM" },
            { name: "Rusty Wheels", time: "5:30PM - 6:30PM" },
            { name: "Imaginate", time: "Deadline - 11:50PM" },
            { name: "Arcade", time: "Deadline - 11:50PM" }
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
