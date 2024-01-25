import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const links = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("lawyers"),
      path: "/avocats",
    },
    {
      name: t("contact"),
      path: "/contact",
    },
  ];
  return (
    <footer className="mt-8">
      <div className="c-container py-5 flex gap-2 items-center justify-between">
        <div className="flex flex-col ">
          <Link to="/" className="">
            <h1 className="text-white font-bold">Dz-Mouhami</h1>
          </Link>
          <p className="text-white balance-30 "> {t("footerText")} </p>
        </div>
        <div className="flex justify-end text-white translate-y-8">
        © DZ-Mohami. All Rights Reserved 2024
        </div>
        <div className="flex flex-col gap-2 items-center justify-center ">
          <h1 className="text-secondary" >{t("Navigation")}</h1>
          <ul className="flex flex-col items-center justify-center gap-2">
            {links.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ""
                      : isActive
                      ? "text-secondary"
                      : "hover:text-zinc-300 text-white"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
