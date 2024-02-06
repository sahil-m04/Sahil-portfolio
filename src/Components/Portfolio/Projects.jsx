import React from "react";
import Navbar from "./Navbar";
import P1 from "../Assets/P1.png";
import P2 from "../Assets/P2.png";
import P3 from "../Assets/P3.png";
import P4 from "../Assets/P4.png";
import "./Projects.css";

const Project = ({ title, image, introduction, link }) => {
  return (
    <div className="certificates">
      <h4>{title}</h4>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
      <p>{introduction}</p>
    </div>
  );
};

const Certification = () => {
  return (
    <>
      <Navbar />
      <div className="certificates-container">
        <Project
          title="Soccer Academy"
          image={P1}
          introduction="Developed a website for a football club,using HTML, CSS, PHP, and MySQL.
          This comprehensive approach highlights the synergy of HTML and CSS for design alongside PHP and MySQL for dynamic functionality."
          link="https://github.com/sahil-m04/mywebsite01"
        />
        <Project
          title="My Cart"
          image={P2}
          introduction="Developed a modern and secure shopping cart web application leveraging Firebase Realtime Database. Designed an intuitive user interface, using HTML, CSS & JavaScript, allowing users to seamlessly add, remove,
          and manage their list in real-time."
          link="https://github.com/sahil-m04/MyCart"
        />
        <Project
          title="Leads Tracker"
          image={P3}
          introduction="Created a Chrome extension for lead tracking using HTML, CSS, and JavaScript, with real-time URL extraction
          using the Chrome extension API."
          link="https://github.com/sahil-m04/Lead-Tracker"
        />
        <Project
          title="Deep Vis Ai"
          image={P4}
          introduction="Developed an AI Image Generator, a React.js app, seamlessly blends user input with OpenAI’s AI prowess to
          create captivating visuals."
          link="/"
        />
      </div>
    </>
  );
};

export default Certification;
