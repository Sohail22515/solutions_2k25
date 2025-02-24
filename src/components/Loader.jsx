import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="body">
      <div id="loader">
        <img
          className="tb"
          src="/assets/drago3.svg"
          alt="Outer Box"
        />
        <img
          className="tb2"
          src="/assets/tb2.svg"
          alt="Inner Box"
        />
      </div>
    </div>
  );
};

export default Loader;
