import React from "react";
import { Navbar } from "./Navbar";
import "./Resume.css";

const resume = () => {
  const educationData = [
    {
      degree: "B-Tech in Computer Science and Technology",
      institution: "Graphic Era Hill University, Dehradun",
      year: "2021 - 2025",
      cgpa: "7.65",
      school: "Kendriya Vidyalaya NSG Manesar, Gurugram",
      board: "CBSE",
      stream: "Intermediate with PCM + Computer Science ",
      year2: "2020-21",
      percentage: "87.6%",
      class:"Matriculation ",
      year3:"2018-19",
      perc: "91.6%"
    },
  ];

  // const achievementsData = [
  //   ,
  //   "Earned Rajya Puraskar (second highest badge) in Bharat Scout and Guides.",
  //   "Selected for SIH 2023 by University.",
  // ];

  const handleDownload = () => {
    const resumeUrl = process.env.PUBLIC_URL + "/Resume__SAHIL_MEHTA.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.download = "Resume.pdf";

    link.click();
  };
  return (
    <>
      <Navbar />
      <div className="resume-container">
        <div className="resume-section education">
          <h2>Education</h2>
          <ul>
            {educationData.map((edu, index) => (
              <li key={index}>
                {edu.degree}
                <br />
                {edu.institution} <br />
                CGPA: {edu.cgpa} <br />({edu.year})
              </li>
            ))}
            <hr />
            {educationData.map((edu1, index1) => (
              <li key={index1}>
                {edu1.stream}({edu1.board}) <br />
                {edu1.school} <br />
                {edu1.year2} <br />
                {edu1.percentage}
              </li>
            ))}
            <hr />
            {educationData.map((edu1, index1) => (
              <li key={index1}>
                {edu1.class}({edu1.board}) <br />
                {edu1.school} <br />
                {edu1.year3} <br />
                {edu1.perc}
              </li>
            ))}
          </ul>
        </div>

        {/* <div className="resume-section achievements">
          <h2>Achievements</h2>
          <ul>
            {achievementsData.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div> */}
    <div className="resume-section skills">
      <h2>Skills</h2>
      <div className="skill-item">
        <h3>Front End Development</h3>
        <div className="progress-bar">
          <div style={{width: '70%'}}></div>
        </div>
        <p>70%</p>
      </div>
      <div className="skill-item">
        <h3>DSA</h3>
        <div className="progress-bar">
          <div style={{width: '50%'}}></div>
        </div>
        <p>60%</p>
      </div>
      <div className="skill-item">
        <h3>Cloud Computing</h3>
        <div className="progress-bar">
          <div style={{width: '50%'}}></div>
        </div>
        <p>50%</p>
      </div>
      <div className="skill-item">
        <h3>Machine Learning</h3>
        <div className="progress-bar">
          <div style={{width: '50%'}}></div>
        </div>
        <p>50%</p>
      </div>
    </div>
<button class="Btn" onClick={handleDownload}>
   <svg class="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
   <span class="icon2"></span>
   <span class="tooltip">Download Resume</span>
</button>
      </div>
    </>
  );
};
export default resume;
