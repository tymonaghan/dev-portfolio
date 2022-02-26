import React from "react";
import { NavBar } from ".";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-orange-100 dark:bg-slate-400 h-max min-h-screen m-0">
      <div className="bg-slate-100 dark:bg-slate-700 h-max min-h-screen w-full sm:w-3/4 sm:mx-auto shadow-xl">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
