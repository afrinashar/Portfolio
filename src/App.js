import { useEffect, useContext } from "react";
import ReactGA from 'react-ga4';
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
import { themeContext } from './Context';
import Design from "./Components/Design";
import { Route, Routes } from "react-router";
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

  // Initialize Google Analytics
  useEffect(() => {
    // Replace 'G-XXXXXXXXXX' with your actual Google Analytics tracking ID
    ReactGA.initialize('G-GQ9XM82G0H');

    // Track page views when the app loads or routes change
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    // Optionally, you can track specific events or page views as needed
    // ReactGA.event({ category: 'User', action: 'Clicked Portfolio Section' });
  }, []);

  return (
    <div className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
    >
      <Routes>
        <Route exact path="/design" element={<Design />} ></Route>
        <Route exact path="/" element={<Dashboard />} ></Route>
        <Route exact path="/certificate" element={<Certification />} ></Route>
        <Route exact path="/fullstack" element={<Project />} ></Route>
        <Route exact path="/frontend" element={<Projects />} ></Route>
        <Route exact path="/AIprojects" element={<ProjectsAI />} ></Route>
        <Route exact path="/projects" element={<AllProjects />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
