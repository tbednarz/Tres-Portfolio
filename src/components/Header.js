import React from "react";
import "./header.css";

function Header({ headerTitle, subTitle }) {
  return (
    <div className="Header-Box">
      <div className="Header-Top">{headerTitle}</div>
      <p className="Header-Bottom">{subTitle}</p>
    </div>
  );
}
export default Header;
