import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/home");
  };
  return <div onClick={gotoHome}>default</div>;
};

export default Home;
