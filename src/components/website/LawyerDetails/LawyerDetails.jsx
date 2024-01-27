import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Experience } from "../Experience";
import { Tarifications } from "../Tarifications";

const LawyerDetails = ({ lawyer, ...props }) => {
  const { t } = useTranslation();

  const [selected, setSelected] = useState(1);

  const links = [
    {
      name: t("experience"),
      id: 1,
    },
    {
      name: t("tarifs"),
      id: 2,
    },
    {
      name: t("disponibilité"),
      id: 3,
    },
    {
      name: t("avis"),
      id: 4,
    },
    {
      name: t("articles"),
      id: 5,
    },
  ];

  return (
    <div className="mt-8 flex flex-col gap-8 ">
      <ul className="flex flex-wrap gap-y-4">
        {links.map((link, index) => (
          <li className="grow cursor-pointer " key={index}>
            <button
              onClick={() => {
                setSelected(link.id);
              }}
              className={`${
                selected === link.id
                  ? "text-yellow-400 border-yellow-400"
                  : "text-white border-white"
              } font-bold border-b-4 py-2 w-full transition-all ease-out duration-300 min-w-32`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      {selected == 1 && <Experience lawyer={lawyer} />}
      {selected == 2 && <Tarifications lawyer={lawyer} />}
    </div>
  );
};

export default LawyerDetails;
