import "./About.css";
import "./Education.css";
import Navbar from "./Navbar";

import marie from "../img/m1.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUnity,
  faGithub,
  faSpotify,
  faSteam,
} from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="bg-dark text-light py-5">
        <div className="container mt-4">
          <div className="row">
            <div className="col text-center">
              <h1 className="fw-bold display-4 text-white mt-4 pt-3">
                About
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section id="carton">
        <div className="container mt-5">
          <div className="col">
            <div className="card p-5 shadow">
              <div className="row">
                <div className="col-lg-7 text">
                  <h4 className="text-secondary">About Me</h4>
                  <p>
                    I'm 24 years old, I live in Brgy. Camansi Kabankalan City, currently Studying At Central Philippines State University, dedicated make up artist in any kind of Event, and content
                    creator.
                  </p>
                  <h4 className="text-secondary">Academic Journey</h4>
                  <p>
                    During my high school days, I loved participating in contests and activities, especially singing contests, where I could showcase my musical talents. Simultaneously, I was deeply committed to athletics, always striving to excel in sports. These experiences instilled in me a strong work ethic and a passion for both creativity and physical fitness.

                    As I transitioned into college life as an IT student, my journey took on new dimensions. I found myself immersed in the world of technology and computing, fascinated by the endless possibilities and challenges it offered. Studying IT has been both exciting and rewarding, as I've delved into programming languages, software development, and the broader implications of technology in today's society.

                    My college experience has been a time of growth and exploration, where I've combined my love for music and sports with my newfound passion for technology. It's been a journey of learning, adapting to new technologies, and preparing myself for a future career in the dynamic field of information technology.

                    I look forward to continuing this journey with enthusiasm, leveraging my diverse interests and experiences to make meaningful contributions in both the technological and creative realms.

                  </p>
                  <h4 className="text-secondary">Skills :</h4>
                  <ul>
                    <li>Communication: Clear and effective speaking and writing.</li>
                    <li>Teamwork: Working well with others towards a common goal.</li>
                    <li>Problem-solving: Finding solutions to challenges.</li>
                    <li>Time Management: Organizing tasks and meeting deadlines.</li>
                    <li>Adaptability: Adjusting to new situations or changes.</li>
                  </ul>
                  <h4 className="text-secondary">Education Background :</h4>
                  <h6><bold>College Level </bold></h6>
                  <p>
                    <i>
                      <li>Currently Studying of Bachelor of Science in Information Technological (BSIT)
                        (S.Y 2021-2024)</li>
                      <li>Central Philippines State University</li>
                      <li>Brgy. Camingawan, Kabankalan City, Negros Occidental</li>
                    </i>
                  </p>
                  <h6><bold>Secondary Level </bold></h6>
                  <p>
                    <i><li>General Academic Strand -GAS ( Graduated S.Y 2020)</li>
                      <li>Camansi National High School-Senior High School</li>
                      <li>Brgy. Camansi, Kabankalan City, Negros Occidental</li>
                    </i>
                  </p>
                  <h6><bold> Primary Level </bold></h6>
                  <p>
                    <i><li>Graduated (S.Y 2020)</li>
                      <li>Camansi National High School-Senior High School</li>
                      <li>Brgy. Camansi, Kabankalan City, Negros Occidental</li>
                    </i>
                  </p>


                </div>

                <div className="col-lg-5 mb-5">
                  <center>
                    <img
                      src={marie}
                      alt="Profile Picture of Marie Flores"/>
                  </center>
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
              <a href="">Marie Flores</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default About;
