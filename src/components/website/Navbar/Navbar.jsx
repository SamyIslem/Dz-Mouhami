import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/ui";
import Langues from "@/ui/Langues/Langues";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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
    <header
      className={` ${
        scrolled ? "bg-slate-400" : ""
      } fixed top-0 right-0 left-0 z-10`}
    >
      <div className="c-container py-5 flex items-center justify-between">
        <Link to="/" className="">
          <h1 className="text-white font-bold">Dz-Mouhami</h1>
        </Link>

        <div className="flex gap-4">
          <nav className="flex gap-10">
            <ul className="flex items-center justify-center gap-8">
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
            <div className="flex items-center gap-3 font-medium">
              <Button variant="secondary" className="text-primary " to="/login">
                {t("logIn")}
              </Button>
              <Button variant="primary" className="text-primary" to="signup">
                {t("signUp")}
              </Button>
            </div>
          </nav>

          <div>
            <Langues />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
