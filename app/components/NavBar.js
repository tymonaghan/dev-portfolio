import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let activeStyle = {
    // this style applies to the currently selected NavLink item
    textDecoration: "underline",
    textShadow: "1px 1px 3px #fbbe2499",
    color: "accent",
  };
  return (
    <div>
      <div className="bg-background-dark text-base font-semibold text-center shadow text-text-primary-dark">
        Tyler Monaghan's Dev Portfolio
      </div>
      <div className="bg-accent text-sm text-center">Under Construction</div>
      <div className="flex h-14 bg-background-dark dark:bg-gutter-dark  text-text-secondary-dark dark:text-text-primary-light font-bold justify-center">
        <div className="my-auto  w-1/5 text-center">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </div>
        <div className="my-auto  w-1/5 text-center">
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
        </div>
        <div className="my-auto  w-1/5 text-center">
          <NavLink
            to="/videos"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Videos
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
