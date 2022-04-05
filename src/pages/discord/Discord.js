import React from "react";
import "./Discord.scss";
import { useNavigate } from "react-router-dom";

const Discord = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return <div onClick={gotoHome}>Discord page</div>;
};

export default Discord;
