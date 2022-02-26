import React from "react";
import { NavBar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-orange-100 dark:bg-slate-400 h-max m-0">
      <div className="bg-slate-100 dark:bg-slate-700 h-max w-full sm:w-3/4 mx-auto shadow-xl">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
