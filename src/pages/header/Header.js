import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Logodtravel from "./Logodtravel.svg";
const menu = [
  { name: "HOME", url: "/" },
  { name: "LISTINGS", url: "/listing" },
  { name: "RESERVATIONS", url: "/reservations" },
];
const Header = () => {
  const navigate = useNavigate();
  const gotoHome = (url) => {
    navigate(url);
  };

  return (
    <div className="headerContainer">
      <img className="img" src={Logodtravel} alt=""></img>
      <ul>
        {menu.map((el, idx) => {
          return (
            <li className="headerItem" onClick={() => gotoHome(el.url)}>
              {el.name}
            </li>
          );
        })}
      </ul>
      <ul className="distance">
        <li className="headerItem" onClick={() => gotoHome("/discord")}>
          DISCORD
        </li>
        <li className="headerItem" onClick={() => gotoHome("/twitter")}>
          TWITTER
        </li>
      </ul>
    </div>
  );
};

export default Header;
