import React from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const gotoSetting = () => {
    navigate('/setting')
  }
  return (
    <div className="homeContainer">
      <p className="home-title">Home</p>
      <button onClick={gotoSetting}>go to setting</button>
    </div>
  )
}

export default Home
