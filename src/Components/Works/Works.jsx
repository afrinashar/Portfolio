import React from 'react';
import './Works.css';
import Upwork from "../../img/ssintek.png";
import Amazon from "../../img/telstra.png";
import Fiverr from "../../img/solarsys.png";
import Facebook from "../../img/miyami.png";
import Shopify from "../../img/zero.jpg";
import { themeContext } from '../../Context';
import { useContext } from "react";
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const brands = [
  { src: Upwork, alt: 'SSIntek Logo' },
  { src: Fiverr, alt: 'Solarsys Logo' },
  { src: Amazon, alt: 'Telstra Logo' },
  { src: Shopify, alt: 'Zero Logo' },
  { src: Facebook, alt: 'Miyami Logo' },
];

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="works" aria-label="Brands and Clients">
      {/*left side */}
      <div className="awesome">
        <header>
          <h2 style={{ color: darkMode ? 'white' : '' }}>Works for All these</h2>
          <h3>Brands &amp; Clients</h3>
        </header>
        <p>
          Specializing in MERN stack development for Australian clients,<br />
          delivering tailored solutions across diverse projects.<br />
          <strong>Client Satisfaction:</strong> Commitment to meeting client expectations,<br />
          deadlines, and delivering solutions that exceed expectations.<br />
          <strong>Collaboration and Communication:</strong> Effective communication skills<br />
          for collaborating with designers, stakeholders, and team members.<br />
          <strong>Quality Assurance:</strong> Performing thorough testing<br />
          to identify and resolve bugs and ensure high-quality deliverables.
        </p>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
          <button className="button i-button" aria-label="Contact">Contact</button>
        </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }} aria-hidden="true"></div>
      </div>
      {/*right side */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: '-40px' }}
          transition={{ duration: 3.5, type: 'spring' }}
          className="w-mainCircle"
          aria-label="Brand Logos"
        >
          {brands.map((brand, idx) => (
            <div className="w-secCircle" key={idx}>
              <img src={brand.src} alt={brand.alt} loading="lazy" width={80} height={80} />
            </div>
          ))}
        </motion.div>
        {/*background circles*/}
        <div className="w-backCircle blueCircle" aria-hidden="true"></div>
        <div className="w-backCircle yellowCircle" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default Works;