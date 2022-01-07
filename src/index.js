import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <About />
        <Projects />
        <Footer />
    </React.StrictMode>,
    document.getElementById('root')
);
