import React from "react";
import { useTranslation } from "react-i18next";

const Tarifications = ({ lawyer, ...props }) => {
  const { t } = useTranslation();

  return (
    <div>
      {lawyer.tarification.map((tarif, index) => (
        <div className="relative flex gap-8 items-center  bg-bgCard p-3 mt-4 rounded-xl w-[80%] ">
          <tarif.icon />
          <div className="flex flex-col font-bold  ">
            <h3 className="text-white"> {tarif.title} </h3>
            <span className="capitalize text-background ">
              {" "}
              {t("duration")}: {tarif.duration}{" "}
            </span>
          </div>

          <span className="text-white font-bold absolute bottom-2 lg:top-6 right-4">{t("price")}: {tarif.price} </span>
        </div>
      ))}
    </div>
  );
};

export default Tarifications;
