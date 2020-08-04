import React from "react";
import "../App.css";

function Header() {
  return (
    <div className="Header-Box">
      <div className="Header-Top">Trés J. Bednarz</div>
      <div className="Header-Bottom">
        <ul className="Link-List">
          <button className="Header-Link">
            <div id="Link-Text">Home</div>
          </button>
          <button className="Header-Link">
            <div id="Link-Text">Projects</div>
          </button>
          <button className="Header-Link">
            <div id="Link-Text">Contact</div>
          </button>
        </ul>
      </div>
    </div>
  );
}
export default Header;
