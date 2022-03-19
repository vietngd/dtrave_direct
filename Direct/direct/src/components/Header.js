import React from "react";
import Dtrvl from "./Dtrvl.svg";
import Muitendoc from "./Muitendoc.svg";
const Header = () => {
  return (
    <div className="Header">
      <div className="picture">
        <span>
          <img className="pic" src={Dtrvl} alt=""></img>
        </span>
        <ul className="text">
          <li className="li some">
            <b>Home</b>
          </li>
          <li className="li ">
            <b>Listing</b>
          </li>
          <li className="li">
            <b>Wallet</b>
          </li>
          <li className="li">
            <b>Help</b>
          </li>
          <li className="li">
            <b>Survey</b>
          </li>
          <li className="li">
            <b>Settings</b>
          </li>
        </ul>
        <p className="Connect">
          Connect Wallet <img className="muiten" src={Muitendoc} alt=""></img>
        </p>
      </div>
    </div>
  );
};
export default Header;
