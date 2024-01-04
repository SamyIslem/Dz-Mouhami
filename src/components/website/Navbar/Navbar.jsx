import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/ui";

const Navbar = () => {
  const links = [
    {
      name: "Acceuil",
      path: "/",
    },
    {
      name: "Avocats",
      path: "/avocats",
    },
    {
      name: "Nous contacter",
      path: "/contact",
    },
  ];

  return (
    <header className="fixed top-0 right-0 left-0">
      <div className="c-container py-5 flex items-center justify-between">
        <Link to="/" className="">
          <h1 className="text-white font-bold">Dz-Mouhami</h1>
        </Link>

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
              LogIn
            </Button> 
            <Button variant="primary" className="text-primary"to="signup" >Inscription</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
