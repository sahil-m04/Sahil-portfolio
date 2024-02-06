import React from "react";
import {
  FaCalendarAlt,
  FaMobileAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./About.css";
import { Navbar } from "./Navbar";

const about = () => {
  
  const University = "Graphic Era Hill University";
  const program = "B-Tech. Computer Science & Engineering";
  const graduationDate = "(2021-2025)";
    const School = "Kendriya Vidyalaya NSG Manesar, Gurugram";
    const Board = "CBSE"
    const grade = "87.6%"
    const passingYear = "(2020-2021)"
  return (
    <>
    <Navbar/>
    <div className="about-container"> 
      <div className="about personal-details">
        <h2>Personal Details</h2>
        <h5 id="name"><strong>Name: </strong>Sahil Mehta</h5>
        <hr />
         <div className="details">
          <ul>
          <li>
            <i>
              <FaCalendarAlt />
            </i>
            <strong>D.O.B:</strong> April 27,2003
          </li>
          <li>
            <i>
              <FaMobileAlt />
            </i>
            <strong>Phone:</strong> +91-8218784150
          </li>
          <li>
            <i>
              <FaMapMarkerAlt />
            </i>
            <strong>Location:</strong> Dehradun, Uttarakhand
          </li>
          </ul>
         
         </div>
         
      </div>

      <div className="about about-intro">
        <h2>About Me</h2>
        <div className="about-content">
        <p>
          Hello! I'm Sahil Mehta, a Computer Science Engineering student based
          in Dehradun, Uttarakhand. I am passionate about technology and always
          eager to learn new things.
          <br />I love working on new technologies and gain experience. Working
          in teams and concquering the challenges always excites me.
        </p>
        </div>
        
      </div>

      <div className="about what-i-do">
        <h2>What I Do</h2>
        <div className="dos web-dev">
          <h3>Web Development</h3>
          <p>
            I am enthusiastic about web development and enjoy working on
            projects that involve creating dynamic and interactive user
            experiences.
          </p>
          
        </div>
        <div className="dos dsa">
          <h3>DSA</h3>
          <p>
            I excel in solving intricate problems using Data Structures,
            implementing optimized solutions through algorithmic design.
            <br />
            <a href="https://leetcode.com/sahilmehta27/">LeetCode Profile</a>
          </p>
        </div>
  
        <div className="dos ml">
          <h3>Machine Learning</h3>
          <p>
            I focus on learning and applying Machine Learning techniques to
            drive data-driven decision-making.
          </p>
        </div>
       
        <div className="dos cc">
          <h3>Cloud Computing</h3>
          <p>
            I focus on learning and applying Cloud Computing technologies to
            the projects.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};
export default about;
