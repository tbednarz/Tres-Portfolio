import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <div className="project-box">
      <div id="project">
        {" "}
        <h1>Hotel Website</h1>
        <p>
          A website built for a local hotel to help them function independantly
          from a corporate site.
        </p>
        <ul id="skill-list">
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Netlify</li>
        </ul>
        <div id="link-box">
          <a href="https://www.abvimarquette.com/">Link To website</a>
        </div>
      </div>
      <div id="project">
        <h1>React Math</h1>
        <p>
          An infinite number generator to practice mental math. Choose your
          operator & speed of generation. Then math away!
        </p>
        <ul id="skill-list">
          <li>React</li>
          <li>CSS</li>
          <li>Netlify</li>
        </ul>
        <div id="link-box">
          <a href="https://reactmath.netlify.app/">Github</a>
        </div>
      </div>
      <div id="project">
        {" "}
        <h1>Codebat Scrape</h1>
        <p>
          A project which allows you to login to codingbat.com to scrape every
          problem, and your solution to said problem .{" "}
        </p>
        <ul id="skill-list">
          <li>Python</li>
          <li>BS4</li>
          <li>Requests</li>
          <li>getpass</li>
        </ul>
        <div id="link-box">
          <a href="https://github.com/tbednarz/codebat-scrape">Github</a>
        </div>
      </div>
      <div id="project">
        {" "}
        <h1>checkset</h1>
        <p>
          A command line CRUD app to input "checks" to keep track of incoming
          funds.
        </p>
        <ul id="skill-list">
          <li>Node.JS</li>
          <li>Chalk</li>
          <li>ReadLine</li>
          <li>UUID</li>
          <li>FS</li>
        </ul>
        <div id="link-box">
          <a href="https://github.com/tbednarz/checkSet">Github</a>
        </div>
      </div>
      <div id="project">
        {" "}
        <h1>BankState</h1>
        <p>
          A expense sorting application. Upload a CSV of your monthly statement
          to view where your money is going! *Tailored to my needs but
          adjustable*
        </p>
        <ul id="skill-list">
          <li>JavaScript</li>
          <li>CSV-Parser</li>
          <li>FS</li>
        </ul>
        <div id="link-box">
          <a href="https://github.com/tbednarz/BankState">Github</a>
        </div>
      </div>
      <div id="project">
        {" "}
        <h1>Express-Crash-Course</h1>
        <p>
          An Express crash course project following the Travery Media Youtube
          channel.
        </p>
        <ul id="skill-list">
          <li>Node.JS</li>
          <li>Express</li>
          <li>Path</li>
          <li>Handlebars</li>
          <li>Logger</li>
          <li>Moment</li>
          <li>uuid</li>
        </ul>
        <div id="link-box">
          <a href="https://www.youtube.com/watch?v=L72fhGm1tfE">
            Link To Video
          </a>
        </div>
        <div id="link-box">
          {" "}
          <a href="https://github.com/tbednarz/Express-Crash-Course">Github</a>
        </div>
      </div>
      <div id="project">
        {" "}
        <h1>React-Crash-Course</h1>
        <p>
          A crash course in React following the Traversy Media Youtube channel.
        </p>
        <ul id="skill-list">
          <li>React</li>
          <li>json-server</li>
        </ul>
        <div id="link-box">
          <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">
            Link To Video
          </a>
        </div>
        <div id="link-box">
          {" "}
          <a href="https://github.com/tbednarz/React-crash-course-2021">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
