import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import './App.css'
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
import {themeContext} from './Context'
import { useContext } from "react";
import Design from "./Components/Design";
import { Route,Routes } from "react-router";
import Dashboard from "./Dashboard";
import Projects from "./Components/Projects";
import Certification from "./Certification";
import { Project } from "./Components/Project";

import { ProjectsAI } from "./Components/ProjectsAI";
import ChatBot from "react-chatbotify";
import Chatbox from "./Components/Chatbox";
import AllProjects from "./Components/AllProjects";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  // useEffect(() => {
  //   // Tawk.to Script
  //   var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
  //   (function () {
  //     var s1 = document.createElement("script"),
  //       s0 = document.getElementsByTagName("script")[0];
  //     s1.async = true;
  //     s1.src = "https://embed.tawk.to/66f6760de5982d6c7bb57b89/1i8pbqa64";
  //     s1.charset = "UTF-8";
  //     s1.setAttribute("crossorigin", "*");
  //     s0.parentNode.insertBefore(s1, s0);
  //   })();
  // }, []);

  return (
    <div className="App"
      style={{
        background : darkMode? 'black': '',
        color : darkMode? 'white': ''
      }}
    >
 
  <Routes>
  <Route exact path="/design" element={<Design/>}  ></Route>
  <Route exact path="/" element={<Dashboard/>}  ></Route>
  <Route exact path="/certificate" element={<Certification/>}  ></Route>
  <Route exact path="/fullstack" element={<Project/>}  ></Route>

  <Route exact path="/frontend" element={<Projects/>}  ></Route>
  <Route exact path="/AIprojects" element={<ProjectsAI/>}  ></Route>
  <Route exact path="/projects" element={<AllProjects/>}  ></Route>

</Routes>
       
    </div>
  );
}

export default App;
