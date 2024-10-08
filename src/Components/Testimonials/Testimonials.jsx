import React from 'react'
import './Testimonials.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import profilePic1 from "../../img/c0.jpeg";
import profilePic2 from "../../img/c2.jpeg";
import profilePic3 from "../../img/c3.jpeg";
import profilePic4 from "../../img/c4.jpeg";
import c from "../../img/c0.jpeg";

import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css'
import { Link } from 'react-router-dom';

const Testimonials = () => {

    const clients = [
        {
            img:c,
            review:`  Responsive Web Design`
            
        },
        {
            img: profilePic2,
            review:`Javascript Algorithms and Datastructure`
        },
        {
            img:profilePic3,
            review: `Frontend Development and Libraries`
        },
        {
            img: profilePic4,
            review: `React JS`
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
        </Swiper>
        <Link to="Certificate"><button className=" button i-button">
                   Certificates
                </button> </Link> </div>
  );
};

export default Testimonials