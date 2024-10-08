import React from 'react';
import c from "./img/c0.jpeg";
import c1 from "./img/c1.jpeg";
import c2 from "./img/c2.jpeg";
import c3 from "./img/c3.jpeg";
import c4 from "./img/c4.jpeg";
import c5 from "./img/c5.jpeg";
import c6 from "./img/c6.jpeg";
import c7 from "./img/c7.jpeg";
 import './Certification.css';  // Link to the CSS file for styling
import { Link } from 'react-router-dom';
import Toggle from './Components/Toggle/Toggle';
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
            <h2>Responsive Web Design</h2>
            <img src={c} alt="FreeCodeCamp Certificate" className="certificate-image" />
            
            <a href="https://www.freecodecamp.org/certification/afrinashar/responsive-web-design" target="_blank" rel="noopener noreferrer" className="certificate-link">
Link            </a>
          </div>

          <div className="certification-card">
            <h2>Frontend Development </h2>
             <img src={c3} alt="React JS Certificate" className="certificate-image" />
            
            <a href="https://www.freecodecamp.org/certification/afrinashar/front-end-development-libraries" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Link
            </a>
          </div>

          <div className="certification-card">
            <h3>JavaScript Algorithm and Datastructure</h3>
            <img src={c2} alt="JavaScript Certificate" className="certificate-image" />
            
            <a href="https://www.freecodecamp.org/certification/afrinashar/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Link
            </a>
          </div>

          <div className="certification-card">
            <h3>Frontend Lagacy</h3>
            <img src={c1} alt="API Certificate" className="certificate-image" />
            
            <a href="https://www.freecodecamp.org/certification/afrinashar/legacy-front-end" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Link
            </a>
          </div>

          <div className="certification-card">
            <h3>React</h3>
            <img src={c4} alt="Problem Solving Certificate" className="certificate-image" />
            
            <a href="https://www.hackerrank.com/certificates/73c568a86170" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Link
            </a>
          </div>
          <div className="certification-card">
            <h3>Problem Solving</h3>
            <img src={c5} alt="Problem Solving Certificate" className="certificate-image" />
            
            <a href="https://www.hackerrank.com/certificates/7c4f9545c52c" target="_blank" rel="noopener noreferrer" className="certificate-link">
             Link
            </a>
          </div>
          <div className="certification-card">
            <h3>Problem Solving</h3>
            <img src={c6} alt="Problem Solving Certificate" className="certificate-image" />
            
            <a href="https://www.hackerrank.com/certificates/7c4f9545c52c" target="_blank" rel="noopener noreferrer" className="certificate-link">
               Link
            </a>
          </div>
          <div className="certification-card">
            <h3>API</h3>
            <img src={c7} alt="Problem Solving Certificate" className="certificate-image" />
            
            <a href="https://www.hackerrank.com/certificates/acf6f88d81d1" target="_blank" rel="noopener noreferrer" className="certificate-link">
              Link
            </a>
          </div>
           
        
        </div>
      </div>
    </>
  );
};

export default Certification;
