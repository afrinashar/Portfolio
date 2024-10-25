import React from "react";
import gpt from "../img/gpt.mp4";
import image from "../img/imageanalyze.mp4";
import "./ProjectsAI.css"; // Import custom CSS for styling
import { Link } from "react-router-dom";
export const ProjectsAI = () => {
  return (
    <>
            <Link to={-1} className=" btn btn-light sticky-button">Back</Link>

      <div className="projects-container">
        <section className="project-section">
          <h2 className="project-title">AI Image Analyzer</h2>
          <p className="project-description">
            <strong>Description:</strong> This project leverages AI to analyze
            images using a Gemini image as input and provides descriptive text
            as output. It not only helps identify images but also suggests
            random elements. If a suggested element is found within the image,
            the system confirms with a 'yes'; otherwise, it provides a detailed
            description of the image. This innovative tool demonstrates
            proficiency in image processing and AI-powered analysis.
          </p>
          <p>
            <strong>Technologies Used:</strong> React, Node, Express, AI
            Algorithms, Image Processing Techniques
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>Takes an image input and generates a textual description.</li>
              <li>Provides random suggestions related to the image content.</li>
              <li>
                Validates suggestions against the image and confirms their
                presence.
              </li>
              <li>Offers a user-friendly interface for easy interaction.</li>
            </ul>
          </p>
          <div className="video-container">
            <video controls muted width="100%" className="project-video">
              <source src={image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="live-link">
            Live Link:{" "}
            <a
              href="https://gemini-image-tau.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Image Analyzer
            </a>
          </h1>
        </section>

        <section className="project-section">
          <h2 className="project-title">Custom GPT Project</h2>
          <p className="project-description">
            <strong>Description:</strong> This project demonstrates the creation
            of a customized GPT (Generative Pre-trained Transformer) using
            React.js. The custom GPT model is designed to interact with users,
            providing contextually relevant responses based on user inputs. It
            showcases capabilities in natural language understanding and
            generation, offering a unique, interactive experience.
          </p>
          <p>
            <strong>Technologies Used:</strong> React.js, GPT Model Integration,
            Natural Language Processing
          </p>
          <p>
            <strong>Features:</strong>
            <ul>
              <li>Interactive chat interface built with React.js.</li>
              <li>
                Custom GPT model trained to generate context-aware responses.
              </li>
              <li>
                Real-time interaction with users for dynamic conversation.
              </li>
              <li>
                Customizable responses and conversation flow based on user
                input.
              </li>
            </ul>
          </p>
          <div className="video-container">
            <video controls muted width="100%" className="project-video">
              <source src={gpt} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <h1 className="live-link">
            Live Link:{" "}
            <a
              href="https://gemini-wfk2.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              GPT
            </a>
          </h1>
        </section>
      </div>
    </>
  );
};
