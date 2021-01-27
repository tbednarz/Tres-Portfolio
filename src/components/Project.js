import React from "react";
import "./project.css";

const Project = ({
  projectTitle,
  projectDescription,
  projectLink,
  projectImg,
  imgAlt,
  height,
  width,
}) => {
  return (
    <div id="project-tab">
      <h1 id="project-head">{projectTitle}</h1>
      <p id="project-description">{projectDescription}</p>
      <a href={projectLink}>
        <img
          id="proj-img"
          src={projectImg}
          alt={imgAlt}
          width={width}
          height={height}
        ></img>
      </a>
    </div>
  );
};

export default Project;
