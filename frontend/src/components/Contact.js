import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState(""); // For displaying success or error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data to the backend using POST method
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      setResponseMessage(response.data.message); // Display success message from backend response
      setFormData({ name: "", email: "", message: "" }); // Clear form fields
    } catch (error) {
      console.error("Error submitting the form: ", error);
      setResponseMessage("An error occurred. Please try again later."); // Error message on failure
    }
  };

  return (
    <div className="main">
      <div className="contact-form-container">
        <h2 id="Contact">Contact Us</h2>
        <p>We'd love to hear from you! Fill out the form below to get in touch.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary">
            Submit
          </button>
        </form>
        {/* Display response message */}
        {responseMessage && <p>{responseMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
