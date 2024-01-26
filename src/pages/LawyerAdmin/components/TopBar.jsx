import React from "react";
import DropDown from "./DropDown";
function TopBar() {
  return (
    <div className=" flex items-center justify-between px-8 pt-5  bg-[#f9f9ff]">
      <h1 className="text-lg font-semibold ">Hello Evano 👋🏼,</h1>
      <DropDown />
    </div>
  );
}

export default TopBar;
