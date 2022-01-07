import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer-box">
            <div>Created By Tres Bednarz</div>
            <div>
                <a href="https://github.com/tbednarz/Tres-Portfolio">
                    Source Code
                </a>
            </div>
            <div>
                <a
                    href="https://mail.google.com/mail/u/0/?fs=1&to=tresbednarz@gmail.com&tf=cm"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    Contact Me
                </a>
            </div>
        </div>
    );
};

export default Footer;
