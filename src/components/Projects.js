import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="Project-Box">
      <div id="project-tab">
        <h1 id="project-head">Codingbat Scraper</h1>
        <p id="project-description">
          A web scraper used to login to your{" "}
          <a href="http://codingbat.com">codingbat.com</a> account to scrape
          problem solutions.
        </p>
        <a href="https://github.com/tbednarz/codebat-scrape">
          <img
            id="project-pic"
            alt="scraper"
            src="../scraper.png"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
      <div id="project-tab">
        <h1 id="project-head">Headmath</h1>
        <p id="project-description">
          A simple infinite number generator in which you can choose the
          generation speed and operation to perform.
        </p>
        <a href="https://tbednarz.github.io/head-math-live/">
          <img
            id="project-pic"
            alt="head-math"
            src="../head-math.png"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
      <div id="project-tab">
        <h1 id="project-head">checkSet</h1>
        <p id="project-description">
          A command line project that allows you to input and keep track of
          paychecks received.
        </p>
        <a href="https://github.com/tbednarz/checkSet">
          <img
            id="project-pic"
            alt=""
            src="../checkset.png"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
      <div id="project-tab">
        <h1 id="project-head">BankState</h1>
        <p id="project-description">
          A personal project for parsing CSV bank statements to determine how
          much I've spent and saved each month.
        </p>
        <a href="https://github.com/tbednarz/BankState">
          <img
            id="project-pic"
            alt=""
            src="../bankstate.png"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
    </div>
  );
}
export default Projects;
