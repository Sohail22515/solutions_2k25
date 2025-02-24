import React from "react";
import "./SponsorsPage.css";

const sponsors = [
  { id: 1, image: "/assets/accops_sponsor.svg", alt: "Sponsor 1" },
  { id: 2, image: "/assets/mro_sponsor.svg", alt: "Sponsor 2" },
  // { id: 3, image: "/assets/mro_sponsor.svg", alt: "Sponsor 3" },
];

const SponsorsPage = () => {
  return (
    <section className="sponsors-page">
      <img src="/assets/sponsers.png" alt="Sponsors Background" className="background-image" />
      <h1>SPONSORS</h1>
      <div className="sponsors">
        {/* Main Sponsor */}
        <div className="sponsor sponsor-main">
          <img src={sponsors[0].image} alt={sponsors[0].alt} />
        </div>

        {/* Other Sponsors */}
        <div className="sponsor">
          <img src={sponsors[1].image} alt={sponsors[1].alt} />
        </div>
      </div>
    </section>
  );
};

export default SponsorsPage;
