import "./Home.css";

import marie from "../img/m1.png";

import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="wrapper">
        <div className="overlay">
          <div class="container1">

            <div id="banner" className="d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 ok">
                    <div className="card">
                      <h1 className="text display-4 fw-bold text-white">Hello, I'm</h1>
                      <h1 className="text display-4 fw-bold text-white">
                      Marie Flores
                      </h1>
                      <br />
                      <p className="self text-light">
                        Dedicated Student & Make Up artist
                      </p>
                      <a href="" className="btn btn-brand shadow">
                        Know Me More
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6 zoom-effect">
                    <div className="card">
                      <img
                        src={marie}
                        alt="Profile Picture of Marie  Flores"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="info">
        <div className="container">
          <div className="row">
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={marie} alt="" />
                <h4 className="text-center"> Studend Life </h4>
                <p>
                  IbisPaint X is a popular digital art app designed for creating
                  illustrations and manga on mobile devices. You can also share
                  your creations with others and get feedback from a community
                  of artists within the app. IbisPaint X provides a convenient
                  way to unleash your creativity.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={marie} alt="" />
                <h4 className="text-center">Make Up</h4>
                <p>
                  Gaming center base is a venue where gamers gather to play
                  video games together on high-end computers and consoles. It
                  offers a social and competitive environment with comfortable
                  amenities like chairs and snacks, making it a popular spot for
                  gaming enthusiasts.
                </p>
              </div>
            </div>
            <div className="col-lg mb-3">
              <div className="card p-5 shadow">
                <img src={marie} alt="" />
                <h4 className="text-center">Make Up</h4>
                <p>
                  Gaming center base is a venue where gamers gather to play
                  video games together on high-end computers and consoles. It
                  offers a social and competitive environment with comfortable
                  amenities like chairs and snacks, making it a popular spot for
                  gaming enthusiasts.
                </p>
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
              <a href=""> Marie Flores</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
