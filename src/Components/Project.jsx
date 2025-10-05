/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import ipaddress from "../img/ipaddress.mp4";
import drawing from "../img/drawing.mp4";
import celebrity from "../img/celebrity.mp4";
import video from "../img/video.mp4";
import image from "../img/imageanalyze.mp4";
import { Link } from "react-router-dom";
import "./ProjectsAI.css";

const projects = [
  {
    title: "AI Image Analyzer",
    description:
      "This project leverages AI to analyze images using a Gemini image as input and provides descriptive text as output. It not only helps identify images but also suggests random elements. If a suggested element is found within the image, the system confirms with a 'yes'; otherwise, it provides a detailed description of the image. This innovative tool demonstrates proficiency in image processing and AI-powered analysis.",
    technologies: "React, Node, Express",
    video: image,
    videoTitle: "Demo of AI Image Analyzer",
    liveLink: "https://gemini-image-tau.vercel.app/",
    liveText: "Visit AI Image Analyzer",
  },
  {
    title: "MERN Gallery",
    description:
      "This project is a web application built with the MERN stack (MongoDB, Express, React, Node.js) featuring a login form and Images displaying in card and table format access based on IP addresses.",
    technologies: "React, Node, Express, JWT for secure token-based authentication.",
    video: celebrity,
    videoTitle: "Demo of MERN Gallery",
    liveLink: "https://crud-frontend-4h7b.vercel.app/",
    liveText: "Visit MERN Celebrity Gallery",
  },
  {
    title: "IP-Restricted Login Form",
    description:
      "This project is a web application built with the MERN stack (MongoDB, Express, React, Node.js) featuring a login form designed to enhance security by restricting access based on IP addresses.",
    technologies: "React, Node, Express, JWT for secure token-based authentication.",
    video: ipaddress,
    videoTitle: "Demo of IP-Restricted Login Form",
    liveLink: "https://ip-ddress.vercel.app/login",
    liveText: "Visit IP Restricter",
  },
  {
    title: "Live Drawing Board with MERN Stack and Socket",
    description:
      "This project is a real-time collaborative drawing application developed using the MERN stack.",
    technologies: "React, Node, Express, Socket.IO",
    video: drawing,
    videoTitle: "Demo of Live Drawing Board",
    liveLink: "https://drawing-socket.vercel.app/",
    liveText: "Visit Drawing Board",
  },
  {
    title: "Live Call using MERN",
    description:
      "This project is a real-time Video call application developed using the MERN stack.",
    technologies: "React, Node, Express, Socket.IO",
    video: video,
    videoTitle: "Demo of Live Call using MERN",
    liveLink: "https://drawing-socket.vercel.app/",
    liveText: "Visit Video Call",
  },
];

export const Project = () => {
  return (
    <main className="projects-main" aria-label="Portfolio Projects">
      <Link to={-1} className="btn btn-light sticky-button" aria-label="Go Back">
        Back
      </Link>
      <h1 className="projects-heading">Portfolio Projects</h1>
      <div className="projects-container">
        {projects.map((proj, idx) => (
          <article className="project-section" key={idx} itemScope itemType="https://schema.org/CreativeWork">
            <header>
              <h2 className="project-title" itemProp="name">{proj.title}</h2>
            </header>
            <p className="project-description" itemProp="description">
              <strong>Description:</strong> {proj.description}
            </p>
            <p>
              <strong>Technologies Used:</strong> <span itemProp="keywords">{proj.technologies}</span>
            </p>
            <div className="video-container">
              <video controls muted width="100%" className="project-video" title={proj.videoTitle} loading="lazy">
                <source src={proj.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h3 className="live-link">
              <a
                href={proj.liveLink}
                target="_blank"
                rel="noreferrer"
                title={`Live demo: ${proj.title}`}
                aria-label={`Live demo for ${proj.title}`}
                itemProp="url"
              >
                {proj.liveText}
              </a>
            </h3>
          </article>
        ))}
      </div>
    </main>
  );
};
