import React from "react";
import gallery from "../img/gallery.png";
import gallery1 from "../img/gallery1.png";
// import drawing from "../img/drawing.png";
import currency from "../img/currency.png";
import gpt from "../img/gpt.mp4";
import "./ProjectsAI.css";

import game from "../img/game.mp4";
import code from "../img/code.mp4";
import study from "../img/study.mp4";
import portfolio from "../img/portfolio.mp4";

// import p1 from "../img/p1.jpeg";
// import p2 from "../img/p2.jpeg";
// import p3 from "../img/p3.jpeg";
// import p5 from "../img/p5.jpeg";

// import p4 from "../img/p4.jpeg";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <>
      {" "}
      <Link to={-1} className=" btn btn-light sticky-button">
        Back
      </Link>
      <div className="projects-container">
        <section className="project-section">
          <div className="description-container">
            <h1 className="project-title"> Game Website</h1>

            <section>
              <h2>Overview</h2>
              <p className="project-description">
                The game website is an interactive platform built using
                React.js, Three.js, and Bootstrap. It offers a variety of
                engaging games designed to provide entertainment and mental
                stimulation. The website features a sleek and modern user
                interface with intuitive navigation and dynamic visuals, thanks
                to the powerful combination of React.js for front-end
                development, Three.js for 3D graphics, and Bootstrap for
                responsive and stylish design.
              </p>
            </section>
          </div>

          <div>
            <video controls height={500} muted width="100%">
              <source src={game} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="live-link">
            <h1>
              Live Link:{" "}
              <a
                className="live-link"
                href="https://three-js-game-tawny.vercel.app/"
                target="_blank"
              >
                Game website
              </a>
            </h1>
          </div>
        </section>
        <section className="project-section">
          <div className="description-container">
            <h1 className="project-title"> Custom GPT Project</h1>

            <section>
              <h2>Overview</h2>
              <p className="project-description">
                This project demonstrates the creation of a customized GPT
                (Generative Pre-trained Transformer) using React.js. The custom
                GPT model is designed to interact with users, providing
                contextually relevant responses based on user inputs. It
                showcases capabilities in natural language understanding and
                generation, offering a unique, interactive experience.{" "}
              </p>
            </section>
          </div>

          <div>
            <video controls height={500} muted width="100%">
              <source src={gpt} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="live-link">
            <h1>
              Live Link:{" "}
              <a
                className="live-link"
                href="https://gemini-wfk2.vercel.app/"
                target="_blank"
              >
                Game website
              </a>
            </h1>
          </div>
        </section>

        <section className="project-section">
          <div className="description-container">
            <h1 className="project-title"> Study Material</h1>

            <section>
              <h2>Overview</h2>
              <p className="project-description">
                Develop my own study material.
              </p>
            </section>
          </div>

          <div>
            <video controls height={500} muted width="100%">
              <source src={study} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="live-link">
            <h1>
              Live Link:{" "}
              <a className="live-link" target="_blank">
                {" "}
                Study Material
              </a>
            </h1>
          </div>
        </section>

        <section className="project-section">
          <div className="description-container">
            <h1 className="project-title"> Online code editor</h1>

            <section>
              <h2>Overview</h2>
              <p className="project-description">
                The code editor website is an interactive platform built using
                React.js. Engaging games designed to provide entertainment and
                mental stimulation.
              </p>
            </section>
          </div>

          <div>
            <video controls height={500} muted width="100%">
              <source src={code} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="live-link">
            <h1>
              Live Link:{" "}
              <a
                className="live-link"
                href="https://vercel.com/afrinashars-projects/code-editor"
                target="_blank"
              >
                Online code editor
              </a>
            </h1>
          </div>
        </section>

        <section className="project-section">
          <div className="description-container">
            <h1 className="project-title"> Portfolio</h1>

            <section>
              <h2>Overview</h2>
            </section>
          </div>

          <div>
            <video controls height={500} muted width="100%">
              <source src={portfolio} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="live-link">
            <h1>
              Live Link:{" "}
              <a
                className="live-link"
                href="https://afrin-ashar.vercel.app/"
                target="_blank"
              >
                Portfolio
              </a>
            </h1>
          </div>
        </section>

        <section className="project-section">
          <div className="description-container">
            <h2 className="project-title">Currency Converter</h2>
            <div className="project-description">
              {" "}
              <p>
                This project is a currency converter built using React.js. It
                allows users to convert currencies using real-time exchange
                rates fetched from an external API. Key features include:
              </p>
            </div>

            <img width={1000} height={500} src={currency} />
            <div className="live-link">
              <h1>
                Live Link:{" "}
                <a
                  href="https://currency-converter-master-nine.vercel.app/"
                  target="_blank"
                >
                  Currency Converter
                </a>
              </h1>
            </div>
          </div>{" "}
        </section>
      </div>{" "}
    </>
  );
};

export default Projects;
