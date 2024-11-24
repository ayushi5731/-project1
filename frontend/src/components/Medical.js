import React from "react";
import "../styles/Medical.css";

function Medical() {
  return (
    <div className="medical-section">
      <div className="medical-content">
        <h1>Revolutionizing Medical Image Segmentation</h1>
        <p>
          Experience precision annotation with MedSAM, a state-of-the-art
          foundation model designed for universal medical image segmentation.
          Built on over 1.5 million image-mask pairs across 10 imaging
          modalities and 30+ cancer types, MedSAM delivers unparalleled
          accuracy and versatility for medical imaging needs.
        </p>
        <button className="cta-button">CTA</button>
      </div>
      <div className="medical-image">
        <img
          src="/images/medicalImg.png" 
          alt="Medical imaging"
        />
      </div>
    </div>
  );
}

export default Medical;
