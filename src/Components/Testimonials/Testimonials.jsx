import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/c1.png";
import profilePic2 from "../../img/c2.png";
import profilePic3 from "../../img/c3.png";
import profilePic4 from "../../img/c4.png";
import c from "../../img/c0.png";

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
import { Link } from 'react-router-dom';

const Testimonials = () => {

    const clients = [
        {
            img:c,
            review:`   Freecodecamp  Frontend development`
            
        },
        {
            img: profilePic2,
            review:`JavaScript 
It covers topics like Design Patterns, Memory management, concurrency model, and event loops, among others.`
        },
        {
            img:profilePic1,
            review: `Problem Solving 
It covers basic topics of Data Structures (such as Arrays, Strings) and Algorithms (such as Sorting and Searching).`
        },
        {
            img: profilePic4,
            review: `Rest API
It covers topics like getting data from an API and process using parameters or paging.`
        },
    ]

  return (
    <div className="t-wrapper" id='Testimonials'>
        <div className="t-heading">
            <span>Some of the </span>
            <span>Certifications </span>
            <span>completed by me...</span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "skyblue"}}></div>
        </div>

        {/* slider */}

        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
            {clients.map((client, index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} width={300} alt="" />
                            <span>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper><Link to="Certificate"><button className=" button i-button">
                   Certificates
                </button> </Link> </div>
  );
};

export default Testimonials