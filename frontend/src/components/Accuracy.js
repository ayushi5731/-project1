import React from "react";
import "../styles/Accuracy.css";

function BenefitsSection() {
  return (
    <div className="benefits-section">
      <div className="benefit">
        <h1 className="percentage">60%</h1>
        <h3>Faster reporting</h3>
        <p>
          Streamline the reporting process to reduce turnaround times and enable
          radiologists to deliver insights faster.
        </p>
      </div>
      <div className="benefit">
        <h1 className="percentage">95%</h1>
        <h3>AI accuracy</h3>
        <p>
          Ensure diagnostic precision and reliability through AI-driven tools,
          providing radiologists with highly accurate support in identifying
          critical findings.
        </p>
      </div>
      <div className="benefit">
        <h1 className="percentage">40%</h1>
        <h3>Cost reduction</h3>
        <p>
          Lower operational costs associated with diagnostic processes,
          allowing healthcare providers to optimize budgets while maintaining
          high-quality care.
        </p>
      </div>
    </div>
  );
}

export default BenefitsSection;
