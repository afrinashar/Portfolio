import { useEffect, useContext, lazy, Suspense } from "react";
import ReactGA from 'react-ga4';
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { themeContext } from './Context';
import { Route, Routes } from "react-router";
import ChatBot from "react-chatbotify";
import Chatbox from "./Components/Chatbox";

// Lazy load route components for performance
const Design = lazy(() => import("./Components/Design"));
const Dashboard = lazy(() => import("./Dashboard"));
const Projects = lazy(() => import("./Components/Projects"));
const Certification = lazy(() => import("./Certification"));
const Project = lazy(() => import("./Components/Project"));
const ProjectsAI = lazy(() => import("./Components/ProjectsAI"));
const AllProjects = lazy(() => import("./Components/AllProjects"));

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    ReactGA.initialize('G-GQ9XM82G0H');
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <main className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : ''
      }}
      aria-label="Afrin Ashar Portfolio"
    >
      <Helmet>
        <title>Afrin Ashar | MERN Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Afrin Ashar, MERN stack developer specializing in React, Node, Express, and MongoDB." />
      </Helmet>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/design" element={<Design />} />
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/certificate" element={<Certification />} />
          <Route exact path="/fullstack" element={<Project />} />
          <Route exact path="/frontend" element={<Projects />} />
          <Route exact path="/AIprojects" element={<ProjectsAI />} />
          <Route exact path="/projects" element={<AllProjects />} />
        </Routes>
      </Suspense>
      <Footer />
    </main>
  );
}

export default App;