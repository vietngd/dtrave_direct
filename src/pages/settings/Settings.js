import React from "react";
import "./Settings.scss";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const gotoSetting = () => {
    navigate("/setting");
  };
  return <div onClick={gotoSetting}> Settings</div>;
};
export default Settings;
