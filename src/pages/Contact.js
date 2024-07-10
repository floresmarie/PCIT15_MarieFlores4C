import React, { useState } from 'react';
import "./Contact.css";
import Navbar from "./Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or perform other actions
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <>
      <Navbar />

      <div id="about-info" className="bg-dark text-light py-5">
        <div className="container mt-4">
          <div id="portfolio-info">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <h1 className="fw-bold display-4 text-center mt-4 pt-3">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section id="contact-form" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
          <p>
              &copy; <span id="displayYear">{new Date().getFullYear()}</span> Copyright By
              <a href=""> Marie Flores</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
