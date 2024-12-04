import React from "react";
import "../styles/Aiworks.css";


function Aiworks() {
  return (
    <div className="how-it-works">
      <h2 className="section-title">Here’s how radpretation.ai works</h2>
      
      <div className="work-item">
        <div className="Content">
          <div className="icon-container">
            <div className="circle">
              <span className="number">1</span>
            </div>
          </div>
          <div className="text-content">
            <h3>Radiology Information System</h3>
            <p>Comprehensive Dashboard for Seamless Workflow Management</p>
          </div>
        </div>

        <div className="image-container">
          <img
            src="/images/sectionImg1.jpg" 
            alt="Radiology Dashboard"
            className="dashboard-image"
          />
         
        </div>
      </div>
    </div>
  );
}

export default Aiworks;