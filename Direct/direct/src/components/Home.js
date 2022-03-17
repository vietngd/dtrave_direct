import React from "react";
import Daux from "./Daux.svg";
import Performance from "./Performance";
import Assets from "./Assets";
const Home = () => {
  return (
    <div className="wrap">
      <div className="stop">
        <p className="title">HOME</p>
      </div>
      <div className="Home">
        <div className="paper-left">
          <div className="Getting-started">
            <div className="Getting">
              <p className="text-big"> Getting Started</p>
              <p className="box">
                <p className="dismiss"> Dismiss</p>
                <img src={Daux} alt=""></img>
              </p>
            </div>

            <div className="under">
              <p className="number">1</p>
              <span className="content">
                Schedule a phone call with our team
              </span>
            </div>
            <div className="under">
              <p className="number">2</p>
              <span className="content">
                Join the private host discord server
              </span>
            </div>
            <div className="under">
              <p className="number">3</p>
              <span className="content">Import your listings</span>
            </div>
          </div>

          <Performance />
        </div>
        <Assets />
      </div>
    </div>
  );
};
export default Home;
