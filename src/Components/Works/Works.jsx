import React from 'react'
import './Works.css'
import Upwork from "../../img/ssintek.png";
import Amazon from "../../img/telstra.png";
import Fiverr from "../../img/solarsys.png";
import Facebook from "../../img/miyami.png";
import Shopify from "../../img/zero.jpg";
import { themeContext } from '../../Context'
import { useContext } from "react";
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="works">

        {/*left side */}

         <div className="awesome">
            <span style= {{color: darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>Specializing in MERN stack development for Australian clients, <br/> delivering tailored solutions across diverse projects.
                <br/>
                Client Satisfaction: Commitment to meeting client expectations, <br/> deadlines, and delivering solutions that exceed expectations.
                <br/>
                Collaboration and Communication: Effective communication skills  <br/>for collaborating with designers, stakeholders, and team members.
                <br/>
                Quality Assurance: Performing thorough testing <br/> to identify and resolve bugs and ensure high-quality deliverables.            </span>
           <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'> <button className=" button i-button">Contact </button>
           </Link>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/*right side */}

        <div className="w-right">
            <motion.div
            initial = {{rotate:45}}
            whileInView = {{rotate: 0}}
            viewport={{margin: '-40px'}}
            transition={{duration : 3.5, type: 'spring'}} 
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>

            {/*background circles*/}

            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>

    </div>
  )
}

export default Works