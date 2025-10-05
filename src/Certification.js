import React from 'react';
import c from "./img/c0.jpeg";
import c1 from "./img/c1.jpeg";
import c2 from "./img/c2.jpeg";
import c3 from "./img/c3.jpeg";
import c4 from "./img/c4.jpeg";
import c5 from "./img/c5.jpeg";
import c6 from "./img/c6.jpeg";
import c7 from "./img/c7.jpeg";
import './Certification.css';
import { Link } from 'react-router-dom';
import Toggle from './Components/Toggle/Toggle';

const certifications = [
  {
    title: "Responsive Web Design",
    img: c,
    alt: "FreeCodeCamp Responsive Web Design Certificate",
    link: "https://www.freecodecamp.org/certification/afrinashar/responsive-web-design"
  },
  {
    title: "Frontend Development",
    img: c3,
    alt: "FreeCodeCamp Frontend Development Certificate",
    link: "https://www.freecodecamp.org/certification/afrinashar/front-end-development-libraries"
  },
  {
    title: "JavaScript Algorithm and Datastructure",
    img: c2,
    alt: "FreeCodeCamp JavaScript Algorithms and Data Structures Certificate",
    link: "https://www.freecodecamp.org/certification/afrinashar/javascript-algorithms-and-data-structures-v8"
  },
  {
    title: "Frontend Legacy",
    img: c1,
    alt: "FreeCodeCamp Legacy Frontend Certificate",
    link: "https://www.freecodecamp.org/certification/afrinashar/legacy-front-end"
  },
  {
    title: "React",
    img: c4,
    alt: "HackerRank React Certificate",
    link: "https://www.hackerrank.com/certificates/73c568a86170"
  },
  {
    title: "Problem Solving",
    img: c5,
    alt: "HackerRank Problem Solving Certificate",
    link: "https://www.hackerrank.com/certificates/7c4f9545c52c"
  },
  {
    title: "Problem Solving Advanced",
    img: c6,
    alt: "HackerRank Problem Solving Advanced Certificate",
    link: "https://www.hackerrank.com/certificates/7c4f9545c52c"
  },
  {
    title: "API",
    img: c7,
    alt: "HackerRank API Certificate",
    link: "https://www.hackerrank.com/certificates/acf6f88d81d1"
  }
];

const Certification = () => {
  return (
    <>
      <div className="sticky-button-container">
        <Link to={-1} className="btn btn-light sticky-button">Back</Link>
      </div>
      <div className="certification-container">
        <h1 className="title">Certifications</h1>
        <div className="certification-grid">
          {certifications.map((cert, idx) => (
            <div className="certification-card" key={idx}>
              <h2>{cert.title}</h2>
              <img src={cert.img} alt={cert.alt} className="certificate-image" loading="lazy" />
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                Link
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Certification;
