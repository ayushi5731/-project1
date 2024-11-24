import React from "react";
import "../styles/HeroSection.css";

function Hero() {
  return (
    <div className="hero-section">
      <nav className="navbar">
        <div className="logo">
          <img src="/images/logo.png" alt="Logo" className="logoImg" />
          <div>
            <span className="brand-name">RADPRETATION</span>
            <small className="brand-tagline">IMAGING SIMPLIFIED</small>
          </div>
        </div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#product">Products</a>
          <a href="#solutions">Solutions</a>
          <a href="#Contact">Contact</a>
        </div>
      </nav>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Radiology Workflows with AI-Powered Intelligence</h1>
          <p>
            Reduce report turnaround time by 60% while improving accuracy
            through advanced AI assistance and seamless teleradiology
            integration.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">Book a Demo</button>
            <button className="btn-secondary">View Solutions</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="/images/image.png"
            alt="Radiology workflow"
            className="workflow-img"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

