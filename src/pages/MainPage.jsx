import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import LandingPage from "../components/LandingPage";
import AboutUs from "../components/AboutUs";
import SponsorsPage from "../components/SponsorsPage";
import Loader from "../components/Loader";
import Footer from "../components/Footer";


const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
          <Navbar />
          <LandingPage />
          <AboutUs />
          <SponsorsPage />
          <Footer/>
    </div>
  );
};

export default MainPage;