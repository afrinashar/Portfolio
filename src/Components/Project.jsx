/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ipaddress from "../img/ipaddress.mp4";
import drawing from "../img/drawing.mp4";
import celebrity from "../img/celebrity.mp4";

import "./ProjectsAI.css"; // Using the same CSS file

export const Project = () => {
  return (
    <>
      <div className="projects-container">
      <section className="project-section">
          <h2 className="project-title"> MERN gallery</h2>
          <p className="project-description">
            <strong>Description:</strong> This project is a web application
            built with the MERN stack (MongoDB, Express, React, Node.js)
            featuring a login form  and Images displayingin card and table format
            access based on IP addresses.
          </p>
          <p>
            <strong>Technologies Used:</strong> React, Node, Express, JWT for
            secure token-based authentication.
          </p>

          <div className="video-container">
            <video controls muted width="100%" className="project-video">
              <source src={celebrity} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="live-link">
            Live Link: 
            <a
              href="https://crud-frontend-4h7b.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              MERN Celebrity Gallery 
            </a>
          </h1>
        </section>
        <section className="project-section">
          <h2 className="project-title"> IP-Restricted Login Form</h2>
          <p className="project-description">
            <strong>Description:</strong> This project is a web application
            built with the MERN stack (MongoDB, Express, React, Node.js)
            featuring a login form designed to enhance security by restricting
            access based on IP addresses.
          </p>
          <p>
            <strong>Technologies Used:</strong> React, Node, Express, JWT for
            secure token-based authentication.
          </p>

          <div className="video-container">
            <video controls muted width="100%" className="project-video">
              <source src={ipaddress} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="live-link">
            Live Link: 
            <a
              href="https://ip-ddress.vercel.app/login"
              target="_blank"
              rel="noreferrer"
            >
              IP Restricter
            </a>
          </h1>
        </section>

        <section className="project-section">
          <div className="project-section">
            <h2 className="project-title">
              Live Drawing Board with MERN Stack and Socket
            </h2>
            <p className="project-description">
              <strong>Description:</strong> This project is a real-time
              collaborative drawing application developed using the MERN
              stack.
            </p>
            <video controls height={500} muted width="100%">
              <source src={drawing} type="video/mp4" />
              Your browser does not support the video tag.
            </video>{" "}
            <div className="live-link">
              <h1>
                Live Link:{" "}
                <a href="https://drawing-socket.vercel.app/" target="_blank">
                  Drawing Board
                </a>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
