import React from 'react';
import './header.css';
import headshot from '../img/tres-headshot.png';

function Header() {
    return (
        <div className="Header-Box">
            <img
                id="tres-head-shot"
                src={headshot}
                alt="head shot"
                height={'225px'}
                width={'225px'}
            />
            <div className="Header-Top">
                <span id="span-black">Trés Bednarz</span>
            </div>
            <p className="Header-Bottom">
                <span id="span-black">Developer </span>
                || Gamer || Nerd
            </p>
        </div>
    );
}
export default Header;
