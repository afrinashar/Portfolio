 import React from 'react'
import gallery from "../img/gallery.png";
import gallery1 from "../img/gallery1.png";
// import drawing from "../img/drawing.png";
import currency from "../img/currency.png";
import gpt from "../img/gpt.png";
import "./ProjectsAI.css"
import game from "../img/game.mp4";
import drawing from "../img/drawing.mp4"
import p from "../img/p.jpeg";
// import p1 from "../img/p1.jpeg";
// import p2 from "../img/p2.jpeg";
// import p3 from "../img/p3.jpeg";
// import p5 from "../img/p5.jpeg";

// import p4 from "../img/p4.jpeg";


const Projects = () => {
  return (
  <>
    <div className="projects-container">
    <h1 className="project-title">Projects</h1>

    <div className="project-section">
      <h2>Image Gallery Project Using MERN Stack with JWT Authentication</h2>
      <h3>Project Overview</h3>
      <p className="project-description">
        This project is an image gallery web application built using the MERN stack...
      </p>
      {/* Add your content here */}
      <div className="live-link">
        <h1>Live Link: <a href="https://crud-frontend-4h7b.vercel.app/" target="_blank">MERN Gallery</a></h1>
      </div>
      <img width={300} src={p} alt="project screenshot"/>
      {/* Other images */}
    </div>

   
    <div className="description-container">
      <h1>Project Description: Game Website</h1>
      
      <section>
        <h2>Overview</h2>
        <p>
          The game website is an interactive platform built using React.js, Three.js, and Bootstrap. It offers a variety of engaging games designed to provide entertainment and mental stimulation. The website features a sleek and modern user interface with intuitive navigation and dynamic visuals, thanks to the powerful combination of React.js for front-end development, Three.js for 3D graphics, and Bootstrap for responsive and stylish design.
        </p>
      </section>

     
    </div>
   
    <div>  
        <video  controls  height={500}  muted width="100%">
        <source src={game} type="video/mp4" />
        Your browser does not support the video tag.
      </video></div><h1>Live Link: <a href="https://three-js-game-tawny.vercel.app/" target="_blank">Game website</a></h1>

   <div className="project-description">
      <h2>MERN Stack Image Gallery CRUD Application</h2>
      <p>
        This project is a full-stack web application built using the MERN
        (MongoDB, Express.js, React.js, Node.js) stack, aimed at managing and
        displaying a gallery of images with CRUD (Create, Read, Update, Delete)
        functionalities.
      </p>

      
      <h3>Technologies Used:</h3>
      <p>
        <strong>Frontend:</strong> React.js, HTML/CSS, Bootstrap or Material-UI
        for styling and UI components.<br />
        <strong>Backend:</strong> Node.js, Express.js for API development,
        MongoDB for database management.<br />
        <strong>Authentication:</strong> JSON Web Tokens (JWT) for secure user
        authentication.<br />
        <strong>Deployment:</strong> Heroku, AWS, or similar cloud platforms for
        hosting and deployment.
      </p>

      <h3>Purpose:</h3>
      <p>
        The primary goal of this project is to provide a practical demonstration
        of implementing CRUD operations within a MERN stack environment, focusing
        on managing image data effectively. It serves as an educational tool for
        understanding full-stack web development concepts and best practices.
      </p>
     <div> <img width={800} src={gallery}/>
      <img width={300} src={gallery1}/></div>
<h1>Live Link: <a  href="https://gallery-react-query.vercel.app" target="_blank">MERN Gallery</a></h1>

    </div>





 
   
    
   
   
   
    <div className="currency-converter-description">
      <h2>Currency Converter</h2>
      <p>
        This project is a currency converter built using React.js. It allows users to convert currencies using real-time exchange rates fetched from an external API. Key features include:
      </p>

      <h3>Key Features:</h3>
      <ul>
        <li>User Interface: Input fields for entering the amount to convert and selecting currencies.</li>
        <li>Real-Time Conversion: Fetches current exchange rates from a currency API to perform conversions.</li>
        <li>Dynamic Updates: Updates the converted amount instantly as users change input values.</li>
        <li>Responsive Design: Ensures usability across various devices and screen sizes.</li>
        <li>Error Handling: Provides feedback for invalid inputs or API request failures.</li>
      </ul>

      <h3>Technologies Used:</h3>
      <ul>
        <li>React.js: Frontend library for building user interfaces.</li>
        <li>API Integration: Utilizes a currency exchange rate API (e.g., fixer.io, exchangeratesapi.io).</li>
        <li>Bootstrap (or other CSS frameworks): For styling and responsive design.</li>
        <li>Deployment: Hosted on platforms like Heroku or AWS for accessibility and scalability.</li>
      </ul>

      <h3>Purpose:</h3>
      <p>
        This project demonstrates proficiency in React.js and API integration, providing a practical tool for users to convert currencies efficiently and accurately.
      </p>

      <img width={1000} height={500} src={currency}/> 
<h1>Live Link: <a href="https://currency-converter-master-nine.vercel.app/" target="_blank">Currency Converter</a></h1>

    </div>  
   </div> </>
  )
}

export default Projects