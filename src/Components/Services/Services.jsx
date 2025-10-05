import React from 'react';
import './Services.css';
import Heartemoji from "../../img/ai.png";
import Card from '../Card/Card';
import Glasses from "../../img/rjs.png";
import Humble from "../../img/node.png";
import Resume from "./Afrin.pdf";
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';

const serviceCards = [
  {
    links: "AIprojects",
    emoji: Heartemoji,
    heading: "AI",
    detail: "Revolutionizing interactions with advanced AI technologies.",
    motion: { initial: { left: '25rem' }, whileInView: { left: '14rem' }, style: { left: '14rem' } }
  },
  {
    links: "frontend",
    emoji: Glasses,
    heading: "Web Developing",
    detail: "Creating dynamic and interactive web applications with React.js.",
    style: { top: '12rem', left: '-4rem' }
  },
  {
    links: "fullstack",
    emoji: Humble,
    heading: "Full Stack",
    detail: "Building comprehensive and scalable applications with full-stack development",
    motion: { initial: { left: '25rem' }, whileInView: { left: '12rem' }, style: { top: '19rem', left: '12rem' } }
  }
];

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 1, type: 'spring' };
  return (
    <section className="services" id="Services" aria-label="Services">
      <div className="awesome">
        <header>
          <h2 style={{ color: darkMode ? 'white' : '' }}>My Awesome</h2>
          <h3>Services</h3>
        </header>
        <p>
          As a MERN stack developer, I specialize in crafting robust web applications<br />
          that leverage MongoDB, Express.js, React.js, and Node.js.<br />
          My services cater to diverse business needs,<br />
          offering end-to-end solutions from conceptualization to deployment
        </p>
        <a href={Resume}>
          <button className="button s-button" aria-label="Download CV">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      <div className="cards">
        {serviceCards.map((card, idx) => (
          card.motion ? (
            <motion.div
              key={idx}
              initial={card.motion.initial}
              whileInView={card.motion.whileInView}
              transition={transition}
              style={card.motion.style}
            >
              <Card {...card} />
            </motion.div>
          ) : (
            <div key={idx} style={card.style}>
              <Card {...card} />
            </div>
          )
        ))}
        <div className="blur s-blur2" style={{ background: "var(--purple)" }}></div>
      </div>
    </section>
  );
};

export default Services;