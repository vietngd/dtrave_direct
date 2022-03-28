import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Logodtravel from "./Logodtravel.svg";
const menu = [
  { name: "Home", url: "/" },
  { name: "Settings", url: "/settings" },
  { name: "Reservations", url: "/reservations" }
]
const Header = () => {
  const navigate = useNavigate();
  const gotoHome = (url) => {
    navigate(url);
  };
  return (
    <div className="headerContainer">
      <img className="img" src={Logodtravel} alt=""></img>
      <ul>{menu.map((el, idx) => {
        return (
          <li className="headerItem" onClick={() => gotoHome(el.url)}>{el.name}</li>
        )
      })}</ul>
      <ul>
        <li className="headerItem" onClick={() => gotoHome('/settings')}>Settings</li>
        <li className="headerItem" onClick={() => gotoHome('/')}>Home</li>
        <li className="headerItem" onClick={() => gotoHome('/')}>Home</li>
        <li className="headerItem" onClick={() => gotoHome('/')}>Home</li>
        <li className="headerItem" onClick={() => gotoHome('/')}>Home</li>
      </ul>
    </div>
  );
};

export default Header;
