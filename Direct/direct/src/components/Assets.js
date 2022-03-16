import React from "react";
import Icon1 from "./Icon1.svg";
import Icon2 from "./Icon2.svg";
import Icon3 from "./Icon3.svg";
import Icon4 from "./Icon4.svg";
import Iconfinal from "./Iconfinal.svg";
const Assets = () => {
  return (
    <div className="paper-right">
      <div className="box-assets">
        <div className="assets">
          <p className="text-big">Assets</p>
          <p className="war"></p>
        </div>
        <div className="assets">
          <p className="control">
            <span className="one">$455.21</span>
            <span className="two"> TRVL</span>
          </p>
          <p className="war">
            <img src={Icon1} alt=""></img>
          </p>
        </div>
        <div className="assets">
          <p className="control">
            <span className="one">$980.24</span>
            <span className="two"> USDT</span>
          </p>
          <p className="war">
            <img src={Icon2} alt=""></img>
          </p>
        </div>
        <div className="assets">
          <p className="control">
            <span className="one">$4,101.87</span>
            <span className="two"> BTC</span>
          </p>
          <p className="war">
            <img src={Icon3} alt=""></img>
          </p>
        </div>
        <div className="assets">
          <p className="control">
            <span className="one">$5,098.27</span>
            <span className="two"> ETH</span>
          </p>
          <p className="war">
            <img src={Icon4} alt=""></img>
          </p>
        </div>
        <div className="assets">
          <p className="control">
            <span className="text-big">$12,324.29</span>
            <span className="two"> Total USD value in your wallet</span>
          </p>
          <p className="war"></p>
        </div>
      </div>
      <div className="box-assets">
        <div className="assets">
          <p className="text-big">Shortcuts</p>
        </div>

        <div className="assets">
          <p className="control">
            <span className="one">Dtravel Discord</span>
          </p>
          <p className="war">
            <img src={Iconfinal} alt=""></img>
          </p>
        </div>
        <div className="assets">
          <p className="control">
            <span className="one">Dtravel Twitter</span>
          </p>
          <p className="war">
            <img src={Iconfinal} alt=""></img>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Assets;
