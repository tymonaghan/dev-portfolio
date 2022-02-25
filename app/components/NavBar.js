import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex h-16 bg-slate-700">
      <div className="text-l text-slate-50 my-auto mx-10 flex-initial w-32">
        <Link to="/">Portfolio Home</Link>
      </div>
      <div className="text-l text-slate-50 my-auto mx-10 flex-initial w-32">
        <Link to="/projects">Project List</Link>
      </div>
      <div className="text-l text-slate-50 my-auto mx-10 flex-initial w-32">
        This is a navbar!
      </div>
    </div>
  );
};
export default NavBar;
