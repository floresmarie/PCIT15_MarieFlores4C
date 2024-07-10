import React from 'react';
import "./Experience.css";
import Navbar from "./Navbar";

const Experience = () => {
  return (
    <>
      <Navbar />

      <div id="experience-info" className="bg-dark text-light py-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col text-center">
              <h1 className="fw-bold display-4 text-white mt-4 pt-3">
                Experience
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="experience-details" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center mb-4">Professional Experience</h2>

              <div className="experience-item">
                <h3>On-the-Job Training (OJT)</h3>
                <h4>KCAT Company</h4>
                <p className="text-muted">June 2024</p>
                <ul>
                  <li>Implemented and maintained network infrastructure.</li>
                  <li>Assisted in troubleshooting hardware and software issues.</li>
                  <li>Learned and applied IT security principles and best practices.</li>
                </ul>
              </div>

              <div className="experience-item">
                <h3>BSIT Internship</h3>
                <h4>XYZ Tech Solutions</h4>
                <p className="text-muted">June 2022 - December 2022</p>
                <ul>
                  <li>Developed web applications using HTML, CSS, and JavaScript.</li>
                  <li>Supported database management tasks using SQL and NoSQL databases.</li>
                  <li>Participated in agile software development processes.</li>
                </ul>
              </div>
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

export default Experience;
