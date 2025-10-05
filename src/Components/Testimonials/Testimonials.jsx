import React from 'react';
import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from "../../img/c0.jpeg";
import profilePic2 from "../../img/c2.jpeg";
import profilePic3 from "../../img/c3.jpeg";
import profilePic4 from "../../img/c4.jpeg";
import c from "../../img/c0.jpeg";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { Link } from 'react-router-dom';

const clients = [
  {
    img: c,
    review: 'Responsive Web Design',
    alt: 'Responsive Web Design Certificate',
  },
  {
    img: profilePic2,
    review: 'Javascript Algorithms and Datastructure',
    alt: 'Javascript Algorithms and Datastructure Certificate',
  },
  {
    img: profilePic3,
    review: 'Frontend Development and Libraries',
    alt: 'Frontend Development and Libraries Certificate',
  },
  {
    img: profilePic4,
    review: 'React JS',
    alt: 'React JS Certificate',
  },
];

const Testimonials = () => {
  return (
    <section className="t-wrapper" id="Testimonials" aria-label="Certifications">
      <header className="t-heading">
        <h2>Some of the Certifications</h2>
        <h3>completed by me...</h3>
        <div className="blur t-blur1" style={{ background: "var(--purple)" }} aria-hidden="true"></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }} aria-hidden="true"></div>
      </header>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        aria-label="Certificates Slider"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <article className="testimonial" itemScope itemType="https://schema.org/CreativeWork">
              <img src={client.img} width={300} alt={client.alt} loading="lazy" itemProp="image" />
              <span itemProp="name">{client.review}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <Link to="Certificate">
        <button className="button i-button" aria-label="View all certificates">
          Certificates
        </button>
      </Link>
    </section>
  );
};

export default Testimonials;