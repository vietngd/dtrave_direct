import React from "react";
import "./Home.scss";
import Daux from "./Daux.svg";
const Home = () => {
  return (
    <div className="paper">
      <div className="wrap">
        <div className="stop">
          <p className="title">HOME</p>
        </div>
        <div className="spaces">
          <div className="left-spaces">
            <div className="reservations">
              <div className="w-full">
                <div className="column">
                  <p className="left-column">Performance</p>
                  <p className="right-column"> Month</p>
                </div>
                <div className="ic-box">
                  <div className="boxgroup">
                    <p className="page">Page Views</p>
                    <p className="page zero">OO</p>
                    <p className="page">+o.oo%</p>
                  </div>
                  <div className="boxgroup pink">
                    <p className="page">Page Views</p>
                    <p className="page zero">OO</p>
                    <p className="page">+o.oo%</p>
                  </div>
                  <div className="boxgroup-green">
                    <p className="page">Page Views</p>
                    <p className="page zero">$O.OO</p>
                    <p className="page">+o.oo%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reservations">
              <div className="w-full">
                <p className="column">
                  <span className="left-column">Reservations</span>
                  <span className="right-column"> Show all</span>
                </p>
                <p className="size">
                  You don’t have any reservations yet. Go to Discord for help
                  getting your first booking.
                </p>
                <button className="join"> Get help in Discord</button>
              </div>
            </div>
            <div className="reservations">
              <div className="w-full">
                <p className="column">
                  <span className="left-column">Listings</span>
                  <span className="right-column"> Show all</span>
                </p>
                <p className="size">
                  You don’t have any listings on Dtravel yet
                </p>
                <button className="join"> Import Listings</button>
              </div>
            </div>
            <div className="reservations">
              <div className="w-full">
                <p className="column">
                  <span className="left-column">Activity</span>
                  <span className="right-column"> Show all</span>
                </p>
                <p className="size">
                  You don’t have any listings on Dtravel yet
                </p>
                <button className="join"> Import Listings</button>
              </div>
            </div>
          </div>

          <div className="right-home">
            <div className="compiled">
              <p className="left-column">Getting Started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
