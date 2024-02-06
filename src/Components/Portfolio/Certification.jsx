import React from "react";
import Navbar from "./Navbar";
import C1 from "../Assets/c1.png";
import C2 from "../Assets/c2.png";
import C3 from "../Assets/c3.png";
import "./Certification.css";

const certification = () => {
  return (
    <>
      <Navbar />
      <div className="certificate-container">
        <div className="certificate c1">
        <h4>Web Development Masterclass & Certifications</h4>
            <a href=""></a>
          <img src={C1} alt="Web Development masterclasses certificate" />
          <legend>Udemy (2023)</legend>
            
        </div>
        <div className="certificate c2">
        <h4>Responsive Web Design</h4>
        <img src={C2} alt="Responsive Web Design Certificate" />
        <legend>freeCodeCamp (2023)</legend>
        
        </div>
        
        <div className="certificate 3">
            <h4>Hack-O-Holic Hackathon</h4>
          <img src={C3} alt="Hackathon Certificate" />
          <legend>Graphic Era Hill University (2022)</legend>
        </div>
      </div>
    </>
  );
};
export default certification;
