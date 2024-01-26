import React from "react";
import chevronright from "../../../assets/lawyer/chevron-right.png";
import avatar from "../../../assets/lawyer/useravatar.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function DropDown() {
    const [isShown, setIsShown] = useState(false);

    const toggleIsShown = () => {
      setIsShown(!isShown);
    };
  return (
    
      <div className="flex items-center justify-between w-48 relative">
        <button className="flex items-center justify-between " onClick={toggleIsShown}>
          <img src={avatar} alt="" />
          <div className="flex flex-col items-center justify-center ml-4">
            <h1 className="font-semibold font-md">Evano</h1>
            <h4 className="text-[#757575] font-sm">Loi prtale</h4>
          </div>
        </button>
        <img className=" rotate-90" src={chevronright} alt="" />
        {isShown && (
        <div className="absolute w-48 flex flex-col top-full mt-2" onClick={toggleIsShown}>
          <Link to="/profile" className=" bg-slate-300 border p-2 text-center">
            Profile
          </Link>
          <Link className=" bg-slate-300 border p-2 text-center">
            Deconnexion
          </Link>
        </div>
      )}
      </div>
    
  );
}

export default DropDown;
