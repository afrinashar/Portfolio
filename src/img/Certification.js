import React from 'react';
import c from "./img/c0.png";
import c1 from "./img/c1.png";
import c2 from "./img/c2.png";
import c3 from "./img/c3.png";
import c4 from "./img/c4.png";
import './Certification.css';  // Link to the CSS file for styling
import { Link } from 'react-router-dom';
const Certification = () => {
  return (
    <>
      <div className="sticky-button-container">
        <Link to={-1} className=" btn btn-light sticky-button">Back</Link>
      </div>

      <div className="certification-container">
        <h1 className="title">Certifications</h1>
        
        <div className="certification-grid">
          <div className="certification-card">
            <h2>FreeCodeCamp</h2>
            <img src={c} alt="FreeCodeCamp Certificate" className="certificate-image" />
            <h3>Link</h3>
            <a href="https://www.freecodecamp.org/certification/fccb9a56c26-a3cd-42ca-a77c-6033bcecf072/front-end-development-libraries?trk=public_profile_see-credential" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Front End
            </a>
          </div>

          <div className="certification-card">
            <h2>HackerRank</h2>
            <h3>React JS</h3>
            <img src={c3} alt="React JS Certificate" className="certificate-image" />
            <h3>Link</h3>
            <a href="https://www.hackerrank.com/certificates/73c568a86170" target="_blank" rel="noopener noreferrer" className="certificate-link">
              React JS
            </a>
          </div>

          <div className="certification-card">
            <h3>JavaScript</h3>
            <img src={c2} alt="JavaScript Certificate" className="certificate-image" />
            <h3>Link</h3>
            <a href="https://www.hackerrank.com/certificates/40d2d60a0470" target="_blank" rel="noopener noreferrer" className="certificate-link">
              JavaScript
            </a>
          </div>

          <div className="certification-card">
            <h3>API</h3>
            <img src={c1} alt="API Certificate" className="certificate-image" />
            <h3>Link</h3>
            <a href="https://www.hackerrank.com/certificates/acf6f88d81d1" target="_blank" rel="noopener noreferrer" className="certificate-link">
              API
            </a>
          </div>

          <div className="certification-card">
            <h3>Problem Solving</h3>
            <img src={c4} alt="Problem Solving Certificate" className="certificate-image" />
            <h3>Link</h3>
            <a href="https://www.hackerrank.com/certificates/7c4f9545c52c" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Problem Solving
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
