import React, { useState } from "react";
import Poignee from "@/images/poignee.png";
import { useTranslation } from "react-i18next";
import Eye from "@/icons/eye.svg?react";
import ClosedEye from "@/icons/closedEye.svg?react";
import Google from "@/icons/google.svg?react";
import { Langues } from "@/ui";
import Button from "@/components/ui/Button/Button";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [hidden, setHidden] = useState(true);
  const [compte, setCompte] = useState("");

  const { t } = useTranslation();
  

  return (
    <div
      className=" grid grid-cols-1 lg:grid-cols-2 relative items-center bg-white "
      dir={t("dir")}
    >
      <div className="hidden lg:block lg:h-screen  lg:overflow-hidden ">
        <img
          src={Poignee}
          alt="poignée de mains"
          className="h-full object-cover  w-full  "
        />
      </div>

      <div id="coordonées" className="flex flex-col gap-2 items-center">
        <div
          className="flex flex-col items-center justify-center gap-8 "
          dir={t("dir")}
        >
          <h1 className="font-bold text-primary text-2xl flex justify-center w-full ">
            Dz_Mouhami
          </h1>
          <div className="flex flex-col gap-5 w-ful ">
            <h1 className="font-semibold">{t("welcome")} </h1>
            <p className="text-lg text-black"> {t("register")} </p>

            <div id="typeCompte" className="flex flex-col gap-2">
              <label htmlFor="Nom" className="font-medium ">
                {t("typeCompte")}
              </label>
              <select className="cursor-pointer outline-none bg-label border-2 w-full p-2 rounded-xl pr-12">
                <option value="choix type du compte ">
                  {t("choixCompte")}{" "}
                </option>
                <option value="Lawyer" onClick={() => setCompte("lawyer")}>
                  {t("lawyer")}
                </option>
                <option value="User" onClick={() => setCompte("user")}>
                  {" "}
                  {t("user")}{" "}
                </option>
              </select>
            </div>

            <div id="password" className="flex flex-col gap-2 relative ">
              <label htmlFor="Mot De Passe" className="font-medium ">
                {t("password")}
              </label>
              <input
                type={`${hidden ? "password" : "text"}`}
                className="outline-none bg-label border-2 w-full p-2 rounded-xl pr-12"
                placeholder={t("password")}
                id="Mot De Passe"
              />

              <div
                className="absolute right-[10px] bottom-[12px] cursor-pointer"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                {hidden ? <Eye /> : <ClosedEye />}
              </div>
            </div>

            <div id="confirmPassword" className="flex flex-col gap-2 relative ">
              <label htmlFor="Mot De Passe" className="font-medium ">
                {t("confirmPassword")}
              </label>
              <input
                type={`${hidden ? "password" : "text"}`}
                className="outline-none bg-label border-2 w-full p-2 rounded-xl pr-12"
                placeholder={t("confirmPassword")}
                id="Mot De Passe"
              />

              <div
                className="absolute right-[10px] bottom-[12px] cursor-pointer"
                onClick={() => {
                  setHidden(!hidden);
                }}
              >
                {hidden ? <Eye /> : <ClosedEye />}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[280px] flex flex-col gap-4 mt-4">
          <Button className="bg-secondaryButton w-full text-white font-bold ">
            {" "}
            {t("finaliseLogIn")}{" "}
          </Button>
          
          <div className="flex gap-3 items-center w-full justify-center border-2 rounded-xl p-2 cursor-pointe font-bold ">
            <Google />
            <span> {t("Google")} </span>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-0">
        <Langues cover />
      </div>
    </div>
  );
};

export default SignUp;
