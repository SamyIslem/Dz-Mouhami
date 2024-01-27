import React from "react";
import { useTranslation } from "react-i18next";

const SignUpDetails = () => {
  const { t } = useTranslation();
  return (
    <div className="c-container">
      <div id="nomUtilisateur" className="flex flex-col gap-2">
        <label htmlFor="Nom" className="font-medium ">
          {t("userName")}
        </label>
        <input
          type="text"
          className="outline-none bg-label border-2 w-full p-2 rounded-xl "
          placeholder="Veuillez intoduire le nom d'utilisateur"
          id="Nom"
        />
      </div>
    </div>
  );
};

export default SignUpDetails;
