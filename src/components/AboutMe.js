import React from "react";

import "./AboutMe.css";

import tresPic from "../img/tres-headshot.png";

function AboutMe() {
  return (
    <div className="Home-Tab">
      <img id="tres-pic" src={tresPic} alt="" height="300px" width="300px" />
      <div className="Home-Text-Div">
        {" "}
        <p id="photo-text">
          I am a self taught developer looking to break into the industry to
          leverage my interest in building tools/utilities to solve interesting
          problems that delight potential uses. Very excited to continue my
          learning!
        </p>{" "}
      </div>
    </div>
  );
}

export default AboutMe;
