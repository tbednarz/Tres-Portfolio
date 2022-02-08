import React from 'react';
import '../components/about.css';
const About = () => {
    return (
        <div className="about-box">
            <div className="about-left">
                <h1>About Me</h1>
                <p id="about-me-p">
                    Hi, I am a former Welder/Fabricator/Mechanic/ turned
                    Software Developer! I have spent the last 4 years teaching
                    myself to build websites and utilities using HTML/CSS, JavaScript, React and
                    Python. I am looking for a position working with a team who
                    embraces each other learning new things while building
                    interesting and impactful projects.
                </p>
            </div>
            <div id="about-right"></div>
        </div>
    );
};

export default About;
