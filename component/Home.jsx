// import { Link } from "react-router-dom";
import "../style/style.css";
import photo from "../src/assets/photo.png";

function Home() {
  return (
    <>
      <div className="home-container">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div className="navbar-container">
          <div className="logo">
            <h2>CHETAN PRAJAPAT</h2>
          </div>
          <div className="navbar">
            <nav>
              <ul className="nav-link">
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Project">Project</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="talk-button">
            <a href="">let's Talk</a>
          </div>

          <svg class="draw-arrow" viewBox="0 0 200 80">
            {/* <!-- Pencil-drawn curved arrow --> */}
            <path d="M0 120 C80 10, 120 1, 180 40" fill="none" />

            {/* <!-- Arrow head --> */}
            <path d="M180 35 L190 40 L180 45" fill="none" />
          </svg>
        </div>

        <div className="home-info-container">
          <div class="vertical-text">Software Enthusiast</div>
          <div className="home-info">
            <div className="hero-name">
              <p>HELLO, I'M CHETAN PRAJAPAT</p>
              <h1>
                I build <br></br> Websites
              </h1>
              <div className="hero-role">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
                <h2>Building digital experiences</h2>
              </div>

              <div className="home-button">
                <a className="hire" href="">
                  Hire me
                </a>

                <a className="resume" href="">
                  Resume
                </a>
              </div>
            </div>

            <div className="image-side">
              <div className="sticker">
                <svg viewBox="0 0 100 100" width="100" height="100">
                  <defs>
                    <path
                      id="circle"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>

                  <text fontSize="12" fontWeight="bold">
                    <textPath xlinkHref="#circle">
                      OPEN FOR WORK • OPEN FOR WORK •
                    </textPath>
                  </text>

                  <circle cx="50" cy="50" r="15" fill="#0F2027" />

                  <path
                    d="M 45 48 L 45 52 M 55 48 L 55 52"
                    stroke="white"
                    strokeWidth="2"
                  />

                  <path
                    d="M 45 55 Q 50 60 55 55"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
              </div>

              <img className="my-image" src={photo} alt="" />
            </div>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="about-container">
          <h1 className="head">About me</h1>

          <div class="about-blob pink"></div>
          <div class="about-blob blue"></div>

          <div className="about-info">
            <div className="about-box">
              <p>
                I’m a passionate web developer who enjoys turning creative ideas
                into clean, functional, and visually appealing websites. I focus
                on writing efficient code, crafting smooth user experiences, and
                building designs that truly stand out. I love exploring new
                technologies, improving my skills, and taking on challenges that
                push me to grow. Outside of coding, I enjoy gaming, which often
                inspires my creativity and problem-solving approach
              </p>
            </div>

            <div className="about-box">
              <div class="wrapper">
                <div class="image-box">
                  <img
                    src="https://readdy.ai/api/search-image?query=creative%20workspace%20desk%20setup%20with%20sketches%2C%20design%20tools%2C%20coffee%20cup%2C%20plants%2C%20artistic%20materials%2C%20hand%20drawn%20style%20illustration%2C%20cozy%20creative%20environment%2C%20pastel%20colors%2C%20inspiring%20atmosphere&width=500&height=400&seq=workspace&orientation=landscape"
                    alt="Creative Workspace"
                  />
                </div>

                <div class="about-img-blob blob-yellow"></div>
                <div class="about-img-blob blob-pink"></div>
                <div class="about-img-blob blob-blue"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="skills">
        <div>
          <h2 className="head">Skills</h2>
        </div>

        <div className="skills-list">
          <div className="skill" style={{ "--r": "-4deg" }}>
            HTML5
          </div>
          <div className="skill" style={{ "--r": "3deg" }}>
            CSS3
          </div>
          <div className="skill" style={{ "--r": "-2deg" }}>
            Javascript
          </div>
          <div className="skill" style={{ "--r": "5deg" }}>
            React
          </div>
          <div className="skill" style={{ "--r": "-3deg" }}>
            Programming C
          </div>
          <div className="skill" style={{ "--r": "4deg" }}>
            Coffee making
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
