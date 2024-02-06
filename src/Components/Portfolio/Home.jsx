import React from "react";
import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import "./Home.css";
import Logo from "../Assets/Logo.png";
import { Navbar } from "./Navbar";
const Landing = () => {
  return (
    <>
    <Navbar/>
      <div className="main">
        <section id="home">
          <div className="profile-image">
            <h1 className="name">Sahil Mehta</h1>
            <img src={Logo} alt="Your Name" />
            <legend>Student</legend>
            <div className="social-icons">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/sahil-mehta-1235b0158/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i><FaLinkedin /></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/sahil-m04"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i><FaGithub /></i>
                </a>
              </li>
              <li>
                <a href="mailto:sahilmehta2704@gmail.com">
                  <i><FaEnvelope /></i>
                </a>
              </li>
            </ul>
            </div>
            
          </div>
        </section>
        <section id="introduction">
          <div className="about-me">
            <p className="intro">
              <span className="span-intro">Hello! </span>
              <br />I am <span className="span-intro">Sahil Mehta</span>. <br />
              I am a{" "}
              <span className="span-intro">
                Computer Science Engineering Student
              </span>{" "}
              <br /> based in <span className="span-intro">Dehradun,Uttarakhand.</span> <br />
              
            </p>
          </div>
        </section>
      </div>
      </>
  );
};

export default Landing;
