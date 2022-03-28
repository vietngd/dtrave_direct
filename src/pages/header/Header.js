import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Logodtravel from "./Logodtravel.svg";
const Header = () => {
  return (
    <div className="news">
      <div className="left-header">
        <img className="img" src={Logodtravel} alt=""></img>
        <ul>
          <li>Home</li>
          <li>Settings</li>
          <li>abc</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="right-header"> </div>
    </div>
  );
};

export default Header;
