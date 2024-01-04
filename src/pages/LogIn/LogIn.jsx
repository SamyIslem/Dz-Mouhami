import React, { useState } from "react";
import Poignee from "@/images/poignee.png";

const LogIn = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 ">
      <div className="hidden lg:block lg:h-screen  lg:overflow-hidden ">
        <img
          src={Poignee}
          alt="poignée de mains"
          className="h-full object-cover  w-full  "
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="font-bold text-primary text-2xl flex justify-center w-full ">
          Dz_Mouhami
        </h1>
        <div className="flex flex-col gap-3 w-ful ">
          <h1 className="font-semibold">Ravi de vous revoir </h1>
          <p className="text-lg text-black">
            {" "}
            Veuillez introduire vos coordonées pour vous connecter{" "}
          </p>

          <div id="nomUtilisateur" className="flex flex-col gap-2">
            <label htmlFor="Nom" className="font-medium ">
              Nom d'utilisateur
            </label>
            <input
              type="text"
              className="outline-none bg-label border-2 w-full p-2 rounded-xl "
              placeholder="Veuillez intoduire le nom d'utilisateur"
              id="Nom"
            />
          </div>

          <div id="nomUtilisateur" className="flex flex-col gap-2">
            <label htmlFor="Mot De Passe" className="font-medium ">
              Mot De Passe
            </label>
            <input
              type="password"
              className="outline-none bg-label border-2 w-full p-2 rounded-xl "
              placeholder="Veuillez introduire votre mot de passe "
              id="Mot De Passe"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
