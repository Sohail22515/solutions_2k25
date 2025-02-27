import React, { useState } from "react";
import './Team.css';
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const teamMembers = [
  {
    name: "NABAJIT DAS",
    role: "SECRETARY",
    description:
      '"Get busy living or get busy dying"',
    image: "/team/Images/nabjit.webp",
    linkedin: "https://www.linkedin.com/in/nabajit-das",
    instagram: "https://www.instagram.com/knightmare._._",
  },
  {
    name: "NISHA DHAKA",
    role: "SECRETARY",
    description:
      '"Stalling To Thriving"',
    image: "/team/Images/cropped-nisha.jpg",
    linkedin: "https://www.linkedin.com/in/nisha-dhaka-649971270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/blaze_x_rise?igsh=cHZ3dzk4ODlmdHFm",
  },
  {
    name: "SOHAIL",
    role: "WebDev Lead",
    description:
      '"Dimaag kam lagata hu, code jyada krta hu!"',
    image: "/team/Images/sohail2.png",
    linkedin: "https://www.linkedin.com/in/mohammad-sohail22515/",
    github:"https://github.com/Sohail22515",
    instagram: "#",
  },
  {
    name: "Vikrant Singh",
    role: "Pseudo Sec",
    description:'"While (lifeEnd--) learn++;"',
    image: "/team/Images/vikrant.webp",
    linkedin: "https://www.linkedin.com/in/vikrant-singh-135002256",
    instagram: "https://www.instagram.com/_thakur.vikrant_/",
  },
  {
    name: "Shivam Gaikwad ",
    role: "HeadTML",
    description:'"Perfect time to start is now!"',
    image: "/team/Images/shivam.jpg",
    linkedin: "https://www.linkedin.com/in/shivam-gaikwad-816a3725b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/shivam_gaikwad200/",
  },
  {
    name: "♠️PUSHPENDRA♠️",
    role: "WebDev Lead",
    description:'"🤟Ya Ya Head!"',
    image: "/team/Images/pusy.jpg",
    linkedin: "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAEKUtIUBqDlTvD7JO61tX_nWsKYwxAOe10o&keywords=pushpendra%20rathore&origin=RICH_QUERY_SUGGESTION&position=0&searchId=21e51de7-6d6f-437b-aba2-dedb9dfceb9b&sid=T%3Bp&spellCorrectionEnabled=false",
    instagram: "https://www.instagram.com/im_vip.in_?igsh=OXQ2azE4YzV2dnd2",
  },
  {
    name: "Nitesh Singh",
    role: "TE MEMBER",
    image: "/team/Images/nitesh.jpg",
    linkedin: "https://www.linkedin.com/in/niteshsingh15?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/nitesh.s_15?igsh=enMweHZyNTRhc3F1",
  },
  {
    name: "Sagar Kumar",
    role: "GAMING HEAD",
    image: "/team/Images/sagar.JPG",
    linkedin: "https://www.linkedin.com/in/sagar-kumar-212389271/",
    instagram: "https://www.instagram.com/s.sagar.k/",

  },
  {
    name: "Yashwant Reddy",
    role: "TE MEMBER",
    image: "/team/Images/yashwant.JPG",
    linkedin: "https://www.linkedin.com/in/yashwanth-reddy-062030143?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/yashwantreddy619?igsh=MWFtNzhuejJtdGRqaA==",
  },
  {
    name: "Manish",
    role: "TE MEMBER",
    image: "/team/Images/manish.jpg",
    linkedin: "https://www.linkedin.com/in/manish-kumar-150b3825a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/maybe_manish_?igsh=Z2hrZzVpd2xsazU4",
  },
  {
    name: "Yash.J",
    role: "TE MEMBER",
    image: "/team/Images/yash.jpg",
    linkedin: "https://www.linkedin.com/in/yash-jadhav-368313252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/yash.jadhav_03?igsh=MW5hZzRtYmgyMDFweg==",
  },
  {
    name: "Tanu Kohli ",
    role: "TE MEMBER",
    image: "/team/Images/tanu.jpg",
    linkedin: "https://www.linkedin.com/in/tanu-kohli-00ab341a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/_eccentric.x?igsh=MW93NW1vZ2lmd2UwNQ==",
  },
  {
    name: "Sayan",
    role: "TE MEMBER",
    image: "/team/Images/sayan.jpg",
    linkedin: "https://www.linkedin.com/in/sayan-chakraborty-67a4b9249",
    instagram: "https://www.instagram.com/sayanophile?igsh=cXAzODBlY3o4eXI2",
  },
  {
    name: "Krishna",
    role: "AI Titan Member",
    image: "/team/Images/krishna.jpeg",
    linkedin: "https://www.linkedin.com/in/krishna-shankar-pandey-6375711b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    instagram: "https://www.instagram.com/krishna.pnd?igsh=MWxxbmpoMG9jNnFucg==",

  },
  {
    name: "Sitanshu",
    role: "TE MEMBER",
    image: "/team/Images/sitanshu.webp",
    linkedin: "https://www.linkedin.com/in/sitanshu-swain/",
    instagram: "https://www.instagram.com/sitanshu_sekhar16/",

  },
  {
    name: "Vipin",
    role: "TE MEMBER",
    image: "/team/Images/vipin1.jpeg",
    linkedin: "https://www.linkedin.com/in/vipin-kumar-5b70b5256/",
    instagram: "https://www.instagram.com/iam_dhankhar01/",

  },
  {
    name: "Nishant",
    role: "WebDev Lead",
    image: "/team/Images/Nishant.jpg",
    linkedin: "http://linkedin.com/in/nishant-kumar-56aa70269/",
    github:"https://github.com/78Nishant",
    instagram: "https://www.instagram.com/nishantkumar_____78/",
  },
];

const MemberCard = ({ name, role, image, linkedin,github, instagram }) => (
  <div className="member_card">
    <div className="social_media">
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <FaLinkedin size={35} color="white"/>
      </a>
      {github && ( // Only render if a GitHub link exists
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} color="white"/>
        </a>
      )}
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <FaInstagram size={40} color="white"/>
      </a>
    </div>
    <div className="member_name">
      <div className="photo_background">
        <img src={image} alt={name} className="member_photo" />
      </div>
      <span className="fullname">{name}</span>
      <span className="post">{role}</span>
    </div>
  </div>
);

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="team-page">
      <Navbar />
      <div className="carousel">
        <div className="carousel-content">
          <div className="text-section">
            <h1>{teamMembers[currentIndex].name}</h1>
            <h3>{teamMembers[currentIndex].role}</h3>
            <p>{teamMembers[currentIndex].description}</p>
          </div>
          <div className="image-section">
            <img
              src={teamMembers[currentIndex].image}
              alt={teamMembers[currentIndex].name}
              className="carousel-image"
            />
          </div>
        </div>
        <button className="carousel-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          ❯
        </button>
      </div>

      {/* Team Grid */}
      <div className="team_grid">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Team;
