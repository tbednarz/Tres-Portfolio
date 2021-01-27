import React from "react";
import "./projects.css";
import Project from "./Project";
import scrapeImg from "../img/scraper.png";
import headmath from "../img/head-math.PNG";
import checkSetImg from "../img/checkset.PNG";
import bankStateImg from "../img/bankstate.PNG";

function Projects() {
  return (
    <div className="project-container">
      <Project
        projectTitle="Codingbat Scraper"
        projectDescription="A web scraper used to login to your codingbat.com account to scrape problem solutions"
        projectLink="https://github.com/tbednarz/codebat-scrape"
        projectImg={scrapeImg}
      />
      <Project
        projectTitle="HeadMath"
        projectDescription="A simple infinite number generator in which you can choose the generation speed and operation to perform."
        projectLink="https://tbednarz.github.io/head-math-live/"
        projectImg={headmath}
      />
      <Project
        projectTitle="checkSet"
        projectDescription="A command link project to input and keep record of paychecks received."
        projectLink="https://github.com/tbednarz/checkSet"
        projectImg={checkSetImg}
      />
      <Project
        projectTitle="bankState"
        projectDescription="A personal project for parsting CSV bank statements to determine how much has been spent and saved each month."
        projectLink="https://github.com/tbednarz/bankstate"
        projectImg={bankStateImg}
      />
    </div>
  );
}
export default Projects;
