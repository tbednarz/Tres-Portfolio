import React from "react";
import "../App.css";

function Projects() {
  return (
    <div className="Project-Box">
      <div id="project-tab">
        <h1>Codingbat Scraper</h1>
        <p>
          A web scraper used to login to your{" "}
          <a href="http://codingbat.com">codingbat.com</a> account and scrape
          every problem and your solution.
        </p>
      </div>
      <div id="project-tab">
        <h1>Headmath</h1>
        <p>
          A simple infinite number generator in which you can choose the
          generation speed and operation to perform.
        </p>
      </div>
      <div id="project-tab">
        <h1>Command Line Paychecks</h1>
        <p>
          A command line project that allows you to input and keep track of
          paychecks received.
        </p>
      </div>
    </div>
  );
}
export default Projects;
