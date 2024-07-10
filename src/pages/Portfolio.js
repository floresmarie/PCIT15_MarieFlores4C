import "./Portfolio.css";
import Navbar from "./Navbar";

import marie from "../img/makeup.jpg";
import marie2 from "../img/makeup2.jpg";
import marie3 from "../img/makeup3.jpg";
const Portfolio = () => {
  return (
    <>
      <Navbar />

      <div id="about-info" className="bg-dark text-light py-5">
        
          <div class="container mt-4">
            <div id="portfolio-info">
              <div className="container-fluid mt-">
                <div className="row">
                  <div className="col">
                    <h1 className="fw-bold display-4 text-center mt-4 pt-3">
                      Portfolio
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <section id="portfolio">
        <div className="container">
          <div className="pb-5">
          
            <br />
            <hr />
          </div>
          <div class="isotope">
            <div class="row">
              <p className="display-6">Student Journey</p>
              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={marie} alt="one" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={marie2} alt="two" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={marie3} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-6 mb-4">
                <div class="item">
                  <img src={marie} alt="three" />
                  <div class="overlay"></div>
                </div>
              </div>
              <hr />
              <p className="display-6">Make Up Costumer</p>
              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={marie2} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>

              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={marie3} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>


              <div class="col-lg-4 mb-4">
                <div class="item">
                  <img src={marie} alt="" />
                  <div class="overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      <footer id="footer" className="footer_section pt-2 pb-2">
        <div className="container">
          <div className="footer-info">
            <p>
              &copy; <span id="displayYear"></span> Copyright By
              <a href="#"> Marie Flores</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Portfolio;
