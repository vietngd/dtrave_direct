import React from "react";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
import Logodtravel from "./Logodtravel.svg";
const menu = [
  { name: "HOME", link: "/" },
  { name: "LISTINGS", link: "/listing" },
  { name: "RESERVATIONS", link: "/reservations" },
];
const Header = () => {
  const navigate = useNavigate();
  const gotoHome = (url) => {
    navigate(url); // chuyen link
  };


  return (
    <div className="headerContainer">
      <img className="img" src={Logodtravel} alt=""></img>
      <ul>
        {menu.map((el, idx) => {
          return (
            <li className="headerItem" onClick={() => {
              console.log('clicked item: ', el)
              gotoHome(el.link)
            }}>
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
