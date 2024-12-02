import React from "react";
import "../styles/Solutions.css";

function Solutions() {
  return (
    <div className="advanced-tech" id="Solutions">
      <h2 className="title">
        <u>Making Radiologists' Lives Simpler with Advanced Technology Solutions</u>
      </h2>

      <div className="tech-section">
        {/* Section 1 */}
        <div className="tech-item">
          <div className="icon-container">
            <img
              src="/images/circle1.png" // Replace with your icon URL
              alt="Vision Transformer Icon"
              className="icon"
            />
          </div>
          <div className="content">
            <h3>
              Elevating Image Classification with Precision and Speed – Vision Transformer
            </h3>
            <p>
              ViT divides images into patches and uses a Transformer architecture to analyze each section with incredible
              accuracy. By embedding these patches into a sequence, ViT achieves advanced image classification, allowing
              us to interpret medical images with precision and reliability. This technology is especially effective for fast
              and accurate diagnosis, helping radiologists see beyond the surface.
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* Section 2 */}
        <div className="tech-item">
          <div className="icon-container">
            <img
              src="/images/circle2.png" // Replace with your icon URL
              alt="SegFormer Icon"
              className="icon"
            />
          </div>
          <div className="content">
            <h3>
              Next-Generation Image Segmentation for Enhanced Detail – SegFormer
            </h3>
            <p>
              SegFormer combines the strength of Transformers and multilayer perceptron (MLP) decoders for semantic segmentation. 
              With its hierarchical Transformer encoder and MLP decoder, SegFormer delivers both local and global insights 
              without needing positional encoding. This allows for high-resolution image analysis and exceptional adaptability 
              to different scales, making it ideal for medical imaging scenarios where detail and accuracy are critical.
            </p>
          </div>
        </div>

        <hr className="divider" />

        {/* Section 3 */}
        <div className="tech-item">
          <div className="icon-container">
            <img
              src="/images/circle3.png" // Replace with your icon URL
              alt="Custom Workflows Icon"
              className="icon"
            />
          </div>
          <div className="content">
            <h3>Customizable Workflows for Enhanced Flexibility</h3>
            <p>
              Tailor workflows to meet specific clinical requirements, ensuring seamless integration into existing systems. 
              Advanced AI tools offer flexibility and control, enabling radiologists to optimize efficiency and adapt to 
              diverse diagnostic challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solutions;
