import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  let activeStyle = {
    textDecoration: "underline",
    shadow: "accent",
  };
  return (
    <div>
      <div className="bg-accent text-sm text-center">Under Construction</div>
      <div className="flex h-16 bg-background-dark dark:bg-gutter-dark  text-text-secondary-dark dark:text-text-primary-light  font-bold">
        <div className="my-auto mx-10 flex-initial w-32 ">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Portfolio Home
          </NavLink>
        </div>
        <div className="my-auto mx-10 flex-initial w-32">
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Projects
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
