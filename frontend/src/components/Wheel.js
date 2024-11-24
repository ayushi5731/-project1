import React from "react";
import "../styles/Wheel.css";

const Wheel = () => {
  return (
    <div className="wheel-container">
      {/* Outer circle */}
      <div className="outer-circle">
        {/* Inner circle */}
        <div className="inner-circle">
          <img
            src="https://via.placeholder.com/150"
            alt="Center placeholder"
            className="inner-img"
          />
        </div>

        {/* Horizontal and vertical lines */}
        <div className="horizontal-line"></div>
        <div className="vertical-line"></div>
      </div>
    </div>
  );
};

export default Wheel;
