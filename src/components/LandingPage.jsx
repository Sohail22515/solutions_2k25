import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./LandingPage.css";

function LandingPage() {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .fromTo("#box1", { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo("#box2", { opacity: 0, bottom: "-400px" }, { opacity: 1, bottom: "300px", duration: 2, ease: "power2.out" })
      .fromTo("#box3", { opacity: 0, x: "100%" }, { opacity: 1, x: "0%", duration: 2.5, ease: "power2.out" }, "-=1")
      .fromTo("#box4", { opacity: 0, x: "-100%" }, { opacity: 1, x: "0%", duration: 1.5, ease: "power2.out" }, "-=1")
      .fromTo("#box5", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1")
      .fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=1");
  }, []);

  return (
    <div className="container">
      <div id="box1"></div>
      <div id="box2"><img src="/assets/Moon.svg" alt="Moon" /></div>
      <div id="box3"><img src="/assets/BackMountain.svg" alt="Back Mountain" /></div>
      <div className="title">
      <img className="solution" src="/assets/SOLUTION_2K25.svg" alt="" />
      </div>
      <div id="box4"><img src="/assets/LeftMountain.svg" alt="Left Mountain" /></div>
      <div id="box5"><img src="/assets/SideTree.svg" alt="Side Tree" /></div>
    </div>
  );
}

export default LandingPage;
