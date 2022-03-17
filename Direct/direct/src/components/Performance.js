import React from "react";
import Muitendoc from "./Muitendoc.svg";
import Muitenngang from "./Muitenngang.svg";
const Performance = () => {
  return (
    <div className="Getting-started">
      <div className="Getting">
        <p className="text-big"> Performance</p>
        <p className="box">
          <span className="dismiss">Month</span>
          <img className="arrow" src={Muitendoc} alt=""></img>
        </p>
      </div>

      <div className="box-group">
        <div className="item">
          <p className="text-item"> Page Views</p>
          <span className="ingredient font-big"> OO</span>
          <span className="ingredient">+0.0%</span>
        </div>
        <div className="item">
          <p className="text-item"> Page Views</p>
          <span className="ingredient font-big"> OO</span>
          <span className="ingredient">+0.0%</span>
        </div>
        <div className="item">
          <p className="text-item"> Page Views</p>
          <span className="ingredient font-big"> OO</span>
          <span className="ingredient">+0.0%</span>
        </div>
        <div className="item">
          <p className="text-item"> Page Views</p>
          <span className="ingredient font-big"> OO</span>
          <span className="ingredient">+0.0%</span>
        </div>
      </div>

      <div className="Getting-started">
        <div className="Getting">
          <p className="text-big"> Reservations</p>
          <p className="box">
            <span className="dismiss">Show all</span>
            <img className="arrow" src={Muitenngang} alt=""></img>
          </p>
        </div>
        <div>
          <p className="final">
            You don’t have any reservations yet. Go to Discord for help getting
            your first booking.
          </p>
        </div>
        <div className="final">
          <button className="join">Get help in Discord</button>
        </div>
      </div>
      <div className="Getting-started">
        <div className="Getting">
          <p className="text-big"> Listings</p>
          <p className="box">
            <span className="dismiss">Show all</span>
            <img className="arrow" src={Muitenngang} alt=""></img>
          </p>
        </div>
        <div>
          <p className="final">You don’t have any listings on Dtravel yet</p>
        </div>
        <div className="final">
          <button className="join">Import Listings</button>
        </div>
      </div>
    </div>
  );
};
export default Performance;
