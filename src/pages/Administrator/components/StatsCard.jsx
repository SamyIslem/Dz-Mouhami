import React from "react";
import  Costumers  from "../../../assets/lawyer/costumers.svg";
import  Costumer  from "../../../assets/lawyer/costumer.svg";
import  Pc  from "../../../assets/lawyer/pc.svg";
function StatsCard() {
  return (
    <div className="bg-white shadow-drop flex justify-around  py-6 mb-4 rounded-xl">
      <div className={` flex gap-2     judtify-center`}>
        <img src={Costumers} alt="" />
        <div className="flex flex-col justify-between">
          <h3 className="text-grey text-md">Total costumers</h3>
          <h1 className="text-xl font-bold">147896</h1>
          <div className="flex">
            <img src="" alt="" />
            <span>14%</span> &nbsp;this month<span></span>
          </div>
        </div>
      </div>
<div className="border"/>
      <div className={` flex gap-2  `}>
        <img src={Costumer} alt="" />
        <div className="flex flex-col justify-between">
          <h3 className="text-grey text-md">Ratings</h3>
          <h1 className="text-xl font-bold">147896</h1>
          <div className="flex">
            <img src="" alt="" />
            <span>14%  </span> &nbsp;this month<span></span>
          </div>
        </div>
      </div>
      <div className="border"/>
      <div className={` flex gap-2  `}>
        <img src={Pc} alt="" />
        <div className="flex flex-col justify-between">
          <h3 className="text-grey text-md">Visitors</h3>
          <h1 className="text-xl font-bold">147896</h1>
          <div className="flex">
            <img src="" alt="" />
            <span>14%</span>&nbsp;this month<span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
