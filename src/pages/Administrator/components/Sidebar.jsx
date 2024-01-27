import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/lawyer/logo.png";
import chevronright from "../../../assets/lawyer/chevron-right.png";
import chevronrightwhite from "../../../assets/lawyer/chevron-right-white.png";
import dashboardwhite from "../../../assets/lawyer/dashboardwhite.png";
import dashboardicon from "../../../assets/lawyer/dashboardicon.png";
import DropDown from "./DropDown";

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = location.pathname;
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const links = [
    { path: "/admin/dashboard", text: "Dashboard" },
    { path: "/admin/avocats", text: "Avocats" },
    { path: "/admin/clients", text: "Clients" },
    { path: "/admin/parameters", text: "Parameters" },
    { path: "/admin/help", text: "Help" },
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col items-center justify-between pt-8 pb-16 px-5 ${isMobile ? "w-90" : "w-80"} ${isOpen && isMobile ? "absolute z-10 bg-white" : ""}`}>
      {isMobile && (
        <button onClick={toggleSidebar} className="absolute top-4 right-4 z-20">
          {isOpen ? "Close" : "Open"}
        </button>
      )}
      <div className="flex gap-2 items-center justify-center">
        <img src={logo} className="w-8 h-8" alt="Lawyer Logo" />
        <h1 className="font-bold text-xl">DZ-Mohami</h1>
      </div>
      <div className="">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex text-lg items-center justify-between gap-10 px-2 py-2 ${
                  currentRoute === link.path
                    ? "bg-[#03A9F4] text-white"
                    : "text-[#9197B3]"
                }`}
              >
                <div className="flex gap-2 items-center justify-center">
                  <img src={currentRoute === link.path ? dashboardwhite : dashboardicon} className="" alt="" />
                  <span>{link.text}</span>
                </div>
                <img src={currentRoute === link.path ? chevronrightwhite : chevronright} className="w-4 h-4" alt="" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DropDown/>
    </div>
  );
};

export default Sidebar;