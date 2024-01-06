import React, { useState } from "react";
import Algeria from "@/icons/algeria.svg?react";
import France from "@/icons/france.svg?react";
import DownIcon from "@/icons/down.svg?react";
import { useTranslation } from "react-i18next";

const Langues = ({ className, cover, ...props }) => {
  const { i18n } = useTranslation();
  const [langues, setLangue] = useState("Français");
  const [hide, setHide] = useState(true);
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  };

  return (
    <div className={` `}>
      <div
        onClick={() => {
          setHide(!hide);
        }}
        className={` flex flex-row items-center cursor-pointer relative  hover:bg-slate-400 gap-2  group px-3 py-2  ${
          !hide ? "bg-slate-400 rounded-t-xl" : "rounded-xl"
        } ${cover ? "bg-black" : ""}`}
      >
        <div className="flex gap-1">
          <span className="text-white pr-2 ">{langues}</span>
          {langues === "Français" ? <France /> : <Algeria />}
        </div>
        <div>
          <DownIcon
            className={`${
              hide ? "group-hover:animate-bounce" : "rotate-180 "
            } ${className} stroke-white h-2   `}
          />
        </div>

        {!hide ? (
          <div className="flex flex-col w-full absolute  top-[41px] left-0 bg-slate-400 gap-2 p-2 rounded-b-xl ">
            <span
              className={`w-full ${
                langues === "Français"
                  ? " text-secondary"
                  : "text-white hover:animate-pulse"
              }`}
              onClick={() => {
                setLangue("Français");
                changeLanguage("fr");
              }}
            >
              Français{" "}
            </span>
            <span
              className={`w-full ${
                langues === "Français"
                  ? "text-white hover:animate-pulse "
                  : " text-secondary"
              }`}
              onClick={() => {
                setLangue("Arabe");
                changeLanguage("ar");
              }}
            >
              {" "}
              Arabe
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Langues;
