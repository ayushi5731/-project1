import React from 'react';
import '../styles/Product.css'; // Ensure to create and style this CSS file

function Product() {
  return (
    <div className="product-container">
      <h1 className="product-title" id="product">Product Offerings</h1>
      <div className="product-cards">
        {/* Card 1 */}
        <div className="card">
          <img
            src="/images/pacs.jpg"
            alt="PACS"
            className="card-image"
          />
          <h5 className="card-title">PACS</h5>
          <p className="card-description">
            Comprehensive imaging storage and retrieval system.
          </p>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img
            src="/images/ai.jpg"
            alt="AI Suite"
            className="card-image"
          />
          <h5 className="card-title">AI SUITE</h5>
          <p className="card-description">
            Assist radiologists in detecting, diagnosing complex medical conditions.
          </p>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img
            src="/images/platform.jpg"
            alt="Teleradiology Platform"
            className="card-image"
          />
          <h5 className="card-title">TELERADIOLOGY PLATFORM</h5>
          <p className="card-description">
            Ensuring timely and high-quality diagnostic services.
          </p>
        </div>
      </div>

      {/* Call to Action Button */}
      <button className="cta-button">CTA</button>
    </div>
  );
}

export default Product;
