import React from "react";
import "../components/about.css";

const About = () => {
  return (
    <div className="about-box">
      <div id="about-left">
        <h1>About Me</h1>
        <p id="about-me-p">
          Hi I am a former Welder/Fabricator/Mechanic/Salesperson turned
          Software Developer! I began my journey by making a simple program to
          help my mother with her job and was hooked into programming from then
          on. I have spent the last 4 years teaching myself to build websites
          and utilities using JavaScript and Python. When I am not programming I
          will usually be reading Harry Potter for the 19th time,
          drawing/painting, biking or wandering around taking pictures of things
          I find interesting. I am looking for a position working with a team
          who embraces each other learning new things while building interesting
          and impactful projects.
        </p>
      </div>
      <div id="about-right"></div>
    </div>
  );
};

export default About;
