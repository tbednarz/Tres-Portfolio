import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Header headerTitle="Trés J. Bednarz" subTitle="JavaScript Developer" />
    <AboutMe />
    <Projects />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
