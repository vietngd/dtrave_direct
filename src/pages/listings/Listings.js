import React from "react";
import { useNavigate } from "react-router-dom";

const Listings = () => {
  const navigate = useNavigate();
  const gotoSetting = () => {
    navigate("/setting");
  };
  return <div onClick={gotoSetting}> Listings page</div>;
};
export default Listings;
