import React from "react";
import { NavBar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gutter-light dark:bg-gutter-dark h-max min-h-screen m-0">
      <div className="bg-background-light dark:bg-background-dark h-max min-h-screen w-full sm:w-3/4 sm:mx-auto shadow-xl border-2 border-accent pb-1">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
