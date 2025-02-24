import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutUs.css";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-us",
          start: "top 80%",
          end: "top 10%", // Adjusted so elements stay visible
          scrub: 1,
        },
      });

      timeline
        .fromTo(
          ".letter-image",
          { scaleX: 0, transformOrigin: "left center" },
          { scaleX: 1, duration: 2, ease: "power2.out" }
        )
        .fromTo(
          ".about-left",
          { xPercent: -100, opacity: 0 }, // Adjusted xPercent for better positioning
          { xPercent: 0, opacity: 1, duration: 1.7, ease: "power2.out" },
          "-=1"
        )
        .fromTo(
          ".about-right",
          { xPercent: 100, opacity: 0 }, // Adjusted xPercent for better positioning
          { xPercent: 0, opacity: 1, duration: 1.7, ease: "power2.out" },
          "-=1.5"
        );

      return () => timeline.kill();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="about-us">
      <img
        src="/assets/red.jpg"
        alt="Background"
        className="about-bg"
        loading="lazy"
      />
      <h1>ABOUT US</h1>
      <div className="about-content">
        <img
          src="/assets/letter.svg"
          alt="Decorative Letter"
          className="letter-image"
          loading="lazy"
        />
        <div className="about-left">
          <p>
            Gear up for Pune’s Biggest Techfest, Solutions 2k25, from March
            18th to 23rd, 2025, hosted by the Technical Board of the Army
            Institute of Technology! <br />
            <br />
            Experience 25+ electrifying events, from coding challenges to
            robotics quests, in a dynamic atmosphere buzzing with innovation
            and technology.
            <br />
            <br />
            Compete for glory with a colossal prize pool of 9+ lakhs, making
            this an unmissable high-stakes extravaganza!
          </p>
        </div>
        <div className="about-right">
          <iframe
            width="465"
            height="300"
            src="https://www.youtube.com/embed/C1-PPNx2IKs?si=fpOO2GusezTicBKO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
