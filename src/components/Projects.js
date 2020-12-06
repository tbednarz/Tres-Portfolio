import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="Project-Box">
      <div id="project-tab">
        <h1>Codingbat Scraper</h1>
        <p>
          A web scraper used to login to your{" "}
          <a href="http://codingbat.com">codingbat.com</a> account to scrape
          problem solutions.
        </p>
        <a href="https://github.com/tbednarz/codebat-scrape">
          <img
            id="project-pic"
            alt="scraper"
            src="/public/scraper.png"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
      <div id="project-tab">
        <h1>Headmath</h1>
        <p>
          A simple infinite number generator in which you can choose the
          generation speed and operation to perform.
        </p>
        <a href="https://tbednarz.github.io/head-math-live/">
          <img
            id="project-pic"
            alt="head-math"
            src="../tres.jpg"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
      <div id="project-tab">
        <h1>checkSet</h1>
        <p>
          A command line project that allows you to input and keep track of
          paychecks received.
        </p>
        <a href="https://github.com/tbednarz/checkSet">
          <img
            id="project-pic"
            alt="checkset photo"
            src="../checkset.png"
            width="400px"
            height="325px"
          ></img>
        </a>
      </div>
      <div id="project-tab">
        <h1>BankState</h1>
        <p>
          A personal project for parsing CSV bank statements to determine how
          much I've spent and saved each month.
        </p>
        <a href="https://github.com/tbednarz/BankState">
          <img
            id="project-pic"
            alt="bankstate photo"
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
