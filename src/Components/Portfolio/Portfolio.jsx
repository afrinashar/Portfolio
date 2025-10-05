/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sidebar from '../../img/gallery.png';
import Ecommerce from '../../img/drawing.png';
import HOC from '../../img/tom.png';
import Musicapp from '../../img/g.png';
import 'swiper/css';
import { themeContext } from '../../Context';
import { useContext } from "react";
import { Link } from 'react-router-dom';

const projects = [
  {
    href: "https://gallery-react-query.vercel.app",
    img: Sidebar,
    alt: "React Query Gallery Project Screenshot",
    title: "Gallery React Query"
  },
  {
    href: "https://drawing-socket.vercel.app/",
    img: Ecommerce,
    alt: "Drawing Socket Project Screenshot",
    title: "Drawing Socket"
  },
  {
    href: "https://talking-tom-black.vercel.app/",
    img: HOC,
    alt: "Talking Tom Project Screenshot",
    title: "Talking Tom"
  },
  {
    href: "https://three-js-game-tawny.vercel.app/",
    img: Musicapp,
    alt: "Three JS Game Project Screenshot",
    title: "Three JS Game"
  }
];

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section className="portfolio" id="Portfolio" aria-label="Portfolio Projects">
      <header>
        <h2 style={{ color: darkMode ? 'white' : '' }}>Recent Projects</h2>
      </header>
      <Swiper
        spaceBetween={-6}
        slidesPerView={4}
        grabCursor={true}
        className="portfolio-slider"
        aria-label="Project Gallery"
      >
        {projects.map((proj, idx) => (
          <SwiperSlide key={idx}>
            <a href={proj.href} target="_blank" rel="noopener noreferrer" title={proj.title} aria-label={proj.title}>
              <img src={proj.img} height={230} alt={proj.alt} loading="lazy" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="projects">
        <button className="button i-button" aria-label="View More Projects">
          More
        </button>
      </Link>
    </section>
  );
};

export default Portfolio;