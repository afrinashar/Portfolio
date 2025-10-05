/* eslint-disable react/jsx-no-duplicate-props */
 import { Link } from "react-router-dom";
import "./Intro.css";
import LoadingText from "../Intro/LoadingText"
// import Github from "../../img/github.png";
 
import { LinkedIn, Instagram, Github, geeks, Vector1, Vector2,jest,  Boy, ci,arith,jwt,css,html,py,bs,api,db,tan,agil,ts, hug, js, socket, tail, Crown,vs,Thumbup,git,react,llm,gpt,next,Glassesimoji } from './IntroImage';

import npm from "../../img/npm.png";

import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
    
const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const motionImages = [
    { src: ci, alt: "Continuous Integration", inView: { left: "22%", top: "2%" } },
    { src: arith, alt: "Arithmetic", inView: { left: "18%", top: "13%" } },
    { src: jest, alt: "Jest", inView: { left: "4%", top: "19%" } },
    { src: git, alt: "Git", initial: { left: "20%", top: "39%" }, inView: { left: "24%", top: "49%" } },
    { src: html, alt: "HTML5", inView: { left: "10%", top: "49%" } },
    { src: jwt, alt: "JWT", inView: { left: "-6%", top: "64%" } },
    { src: css, alt: "CSS3", inView: { left: "2%", top: "36%" } },
    { src: py, alt: "Python", inView: { left: "53%", top: "44%" } },
    { src: gpt, alt: "GPT", inView: { left: "30%", top: "15%" } },
    { src: agil, alt: "Agile", inView: { left: "34%", top: "51%" } },
    { src: bs, alt: "Bootstrap", inView: { left: "22%", top: "70%" } },
    { src: api, alt: "API Logo", inView: { left: "12%", top: "29%" }, width: 120, height: 120 },
    { src: ts, alt: "TypeScript", inView: { left: "64%", top: "39%" } },
    { src: react, alt: "React", inView: { left: "24%", top: "29%" } },
    { src: db, alt: "Database", initial: { left: "50%", top: "49%" }, inView: { left: "64%", top: "19%" } },
    { src: tan, alt: "TanStack", inView: { left: "8%", top: "66%" } },
    { src: socket, alt: "Socket.IO", initial: { left: "50%", top: "49%" }, inView: { left: "86%", top: "16%" } },
    { src: hug, alt: "HuggingFace", inView: { left: "54%", top: "11%" } },
    { src: js, alt: "JavaScript", inView: { left: "54%", top: "83%" } },
    { src: npm, alt: "npm", inView: { left: "70%", top: "69%" } },
    { src: llm, alt: "LLM", inView: { left: "64%", top: "55%" } },
    { src: next, alt: "Next.js", inView: { left: "80%", top: "29%" } },
    { src: tail, alt: "Tailwind CSS", inView: { left: "80%", top: "49%" } },
    { src: vs, alt: "Visual Studio Code", inView: { left: "12%", top: "80%" } },
  ];
  return (
    <main className="intro" aria-label="Personal Portfolio Intro" itemScope itemType="https://schema.org/Person">
      <section className="i-left">
        <header>
          <h1 className="intro-heading" itemProp="name">Afrin Ashar</h1>
        </header>
        <div className="i-name">
          <span>
            <LoadingText style={{ color: darkMode ? "white" : "" }} />
          </span>
          <span itemProp="description">
            Experienced full stack developer working with the MERN stack, including expertise in React micro frontends in React.js. I have a keen interest in learning new technologies and possess a good understanding of LLM, AI/ML, and Python.
          </span>
        </div>
        <Link to="projects">
          <button className="button s-button" aria-label="View Projects">Projects</button>
        </Link>
        <nav className="i-icons" aria-label="Social Links">
          <div className="image-container">
            <a href="https://www.linkedin.com/in/afrin-ashar/" title="LinkedIn" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
              <img className="colored-imager" src={LinkedIn} alt="LinkedIn profile" width={100} loading="lazy" />
            </a>
            <a href="https://leetcode.com/afrinashar8/" title="LeetCode" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
              <img src={Instagram} className="colored-imagel" alt="LeetCode profile" width={100} loading="lazy" />
            </a>
            <a href="https://www.geeksforgeeks.org/user/afrina5rxx/" title="GeeksforGeeks" target="_blank" rel="noopener noreferrer" itemProp="sameAs">
              <img className="colored-imageg" src={geeks} alt="GeeksforGeeks profile" width={100} loading="lazy" />
            </a>
            <img src={Github} alt="Github profile" className="colored-imageb" width={100} loading="lazy" />
          </div>
        </nav>
      </section>
      <section className="i-right" aria-label="Skills Showcase">
        <img src={Vector1} alt="Decorative vector 1" loading="lazy" />
        <img src={Vector2} alt="Decorative vector 2" loading="lazy" />
        <img width={230} className="me" src={Boy} alt="Afrin Ashar profile" loading="lazy" itemProp="image" />
        <motion.img
          className="imgs"
          initial={{ left: "50%", top: "59%" }}
          whileInView={{ left: "24%", top: "69%" }}
          transition={transition}
          src={Glassesimoji}
          alt="Glasses Emoji"
          loading="lazy"
        />
        {/* Render motion images efficiently */}
        {motionImages.map((img, idx) => (
          <motion.img
            key={idx}
            className="imgs"
            initial={img.initial || { left: "50%", top: "59%" }}
            whileInView={img.inView}
            transition={transition}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            width={img.width}
            height={img.height}
            whileHover={{
              scale: 1.2,
              boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.3)',
            }}
          />
        ))}
        <motion.div
          className="imgs floating-div"
          initial={{ top: "-4", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          style={{ top: "-4%", left: "68%" }}
        >
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
      </section>
    </main>
  );
};

export default Intro;
