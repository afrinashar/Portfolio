/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/leets.png";
import geeks from "../../img/geeks.png";
import LoadingText from "./LoadingText";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/me.png";
import Thumbup from "../../img/creative.png";
import Crown from "../../img/crown.png";
import Glassesimoji from "../../img/node.png";
import react from "../../img/react.png";
import js from "../../img//js.png";
import db from "../../img/db.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import html5 from "../../img/html5.png";
import ci from "../../img/ci.png";
import next from "../../img/next.png";
import agil from "../../img/agils.png";
import bs from "../../img/bs.png";
import api from "../../img/api.png";
import arith from "../../img/arith.png";
import css3 from "../../img/css3.png";
import git from "../../img/git.png";
import jest from "../../img/jest.png";
import jwt from "../../img/jwts.png";
import ts from "../../img/ts.png";
import tan from "../../img/tan.png";
import tail from "../../img/tail.png";
import vs from "../../img/vs.png";
import py from "../../img/py.png";
import gpt from "../../img/gpt4.png";
import llm from "../../img/llm.png";
import hug from "../../img/hug.png";
import socket from "../../img/socket.png";

import npm from "../../img/npm.png";

import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>
            <LoadingText style={{ color: darkMode ? "white" : "" }} />
          </span>
          <span>
            Experienced full stack developer working with the MERN stack,
            including expertise in React micro frontends in React.js. I have a
            keen interest in learning new technologies and possess a good
            understanding of LLM, AI/ML, and Python.
          </span>
        </div>
        <Link to="projects"  > <button className="button s-button">Projects</button></Link>
        
     <div className="i-icons">
        <div className="image-container">
         
          <a href="https://www.linkedin.com/in/afrin-ashar/">
            <img
              className="colored-imager"
              src={LinkedIn}
              alt="LinkedIn"
              width={100}
            />
          </a>
          <a href="https://leetcode.com/afrinashar8/">
            <img src={Instagram} className="colored-imagel" alt="Instagram" width={100} />
          </a>
          <a href="https://www.geeksforgeeks.org/user/afrina5rxx/">
            <img
              className="colored-imageg"
              src={geeks}
              alt="Geeks for Geeks"
              width={100}
            />
          </a>
          <img src={Github} alt={Github} className="colored-imageb" />
        </div>
      </div>  </div>
     
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img width={230} className="me" src={Boy} alt="" />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "24%", top: "69%" }}
          transition={transition}
          src={Glassesimoji}
          alt=""
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "22%", top: "2%" }}
          transition={transition}
          src={ci}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "18%", top: "13%" }}
          transition={transition}
          src={arith}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "4%", top: "19%" }}
          transition={transition}
          src={jest}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "20%", top: "39%" }}
          whileInView={{ left: "24%", top: "49%" }}
          transition={transition}
          src={git}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "10%", top: "49%" }}
          transition={transition}
          src={html}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "-6%", top: "64%" }}
          transition={transition}
          src={jwt}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />{" "}
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "2%", top: "36%" }}
          transition={transition}
          src={css}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />{" "}
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "53%", top: "44%" }}
          transition={transition}
          src={py}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        /> 
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "30%", top: "15%" }}
          transition={transition}
          src={gpt}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        /> 
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "50%", top: "28%" }}
          transition={transition}
           alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        /> 
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "34%", top: "51%" }}
          transition={transition}
          src={agil}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />{" "}
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "22%", top: "70%" }}
          transition={transition}
          src={bs}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "12%", top: "29%" }}
          transition={transition}
          src={api}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "64%", top: "39%" }}
          transition={transition}
          src={ts}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "24%", top: "29%" }}
          transition={transition}
          src={react}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "49%" }}
          whileInView={{ left: "64%", top: "19%" }}
          transition={transition}
          src={db}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "8%", top: "66%" }}
          transition={transition}
          src={tan}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
         <motion.img
          className="imgs"
          initial={{ left: "50%", top: "49%" }}
          whileInView={{ left: "86%", top: "16%" }}
          transition={transition}
          src={socket}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "49%" }}
          whileInView={{ left: "54%", top: "11%" }}
          transition={transition}
          src={hug}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "54%", top: "83%" }}
          transition={transition}
          src={js}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "70%", top: "69%" }}
          transition={transition}
          src={npm}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "64%", top: "55%" }}
          transition={transition}
          src={llm}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "80%", top: "29%" }}
          transition={transition}
          src={next}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "80%", top: "49%" }}
          transition={transition}
          src={tail}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "12%", top: "80%" }}
          transition={transition}
          src={vs}
          alt=""
          whileHover={{
            scale: 1.2, // Increase size on hover
            //boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
          }}
        />
        <motion.div
          className="imgs"
          initial={{ top: "-4", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
          className="floating-div"
        >
          {" "}
          <FloatingDiv image={Crown} txt1="Software" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ left: "2rem", top: "18rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          style={{ top: "18rem", left: "0rem" }}
          className="floating-div"
        >
          <FloatingDiv image={Thumbup} txt1="Ideator" />
        </motion.div>
        {/*blur divs*/}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
