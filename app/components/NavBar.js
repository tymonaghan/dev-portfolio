import React from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const activeStyle =
    "text-accent bg-card-highlight dark:bg-card-highlight-dark rounded p-2";
  const inactiveStyle = "underline text-link-dark dark:text-link-light";

  return (
    <div className="text-text-primary-dark">
      <Link to="/">
        <div className="bg-background-dark text-lg font-bold text-center ">
          Tyler Monaghan's Dev Portfolio
        </div>
      </Link>
      <div className="flex h-14 bg-background-dark dark:bg-gutter-dark font-bold justify-center">
        <div className="my-auto  w-2/6 text-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Portfolio Home
          </NavLink>
        </div>
        <div className="my-auto  w-2/6 text-center">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeStyle : inactiveStyle
            }
          >
            Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
