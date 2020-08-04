import React from "react";

import "../App.css";

function App() {
  return (
    <div className="Home-Tab">
      <img
        id="tres-pic"
        alt="My photo"
        src="../tres.jpg"
        width="300px"
        height="450px"
      />

      <div className="Home-Text-Div">
        {" "}
        Hi, My name is Trés! A Welder and Heavy Diesel Mechanic turned
        Programmer! Scroll down to see some of my finished projects and others
        in the works!{" "}
      </div>
    </div>
  );
}

export default App;
