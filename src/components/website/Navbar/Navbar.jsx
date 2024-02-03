import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/ui";
import Langues from "@/ui/Langues/Langues";
import { useTranslation } from "react-i18next";
import IconMenu from "@/icons/iconMenu.svg?react";


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);
  const id= localStorage.getItem('lawyer_id');
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

  const mobileLinks = [
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
    {
      name: t("logIn"),
      path: "/login",
    },
    {
      name: t("signUp"),
      path: "/signup",
    },
  ];

  return (
    <header
      className={` ${
        scrolled ? "bg-slate-400" : ""
      } fixed top-0 right-0 left-0 z-50 `}
    >
      <div className="c-container py-5 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-bold text-black bg-secondary px-3 py-2 rounded-lg">
            M
          </span>
          <h1 className="text-white font-bold">Dz-Mouhami</h1>
        </Link>

        <div className=" flex gap-4">
          <nav className="hidden lg:flex flex-row gap-10">
            <ul className="flex  flex-row items-center justify-center gap-8">
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

            {!id &&
            
            <div className="flex items-center gap-3 font-medium">
            <Button variant="secondary" className="text-primary " to="/login">
              {t("logIn")}
            </Button>
            <Button variant="primary" className="text-primary" to="signup">
              {t("signUp")}
            </Button>
          </div>
          }

          </nav>

          <div className="">
            <Langues />
          </div>

          {/* passage en mobile  */}

          <button onClick={()=>setMenuClicked(!menuClicked)} >
            <IconMenu className="stroke-white lg:invisible hover:stroke-secondary "  />
          </button>
          {menuClicked && (
            <ul className="flex  flex-col items-center justify-center gap-8 absolute top-20 right-0 bg-bgCard p-2">
              {mobileLinks.map((link, index) => (
                <li key={index} className="hover:bg-red">
                  <NavLink
                    to={link.path}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? ""
                        : isActive
                        ? "text-secondary"
                        : "hover:text-zinc-300  text-white"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
