import React from 'react'
import './Settings.scss'
import { useNavigate } from 'react-router-dom'

const Settings = () => {
  const navigate = useNavigate()
  const gotoHome = () => {
    navigate('/')
  }
  return (
    <div className="settingsContainer">
      <p className="setting-title">Settings</p>
      <button onClick={gotoHome}>go to home</button>
    </div>
  )
}

export default Settings
