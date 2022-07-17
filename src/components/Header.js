import React from "react";

import GoogleAuth from "./GoogleAuth";
import "../Header.css";

const Header = () => {
  return (
    <div className="ui three column grid center aligned container">
      <div className="column">
        <button className="ui icon button">
          <i className="plus icon"></i>
        </button>
      </div>
      <div className="column">
        <h1 className="ui header title">
          to-do
          <div className="sub header">TODAY</div>
        </h1>
      </div>
      <div className="column">
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
