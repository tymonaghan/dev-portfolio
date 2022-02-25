import React from "react";
import { Outlet } from "react-router-dom";

const IDCard = (props) => {
  const { title, url } = props;
  return (
    <a target="_blank" href={`https://www.${url}`}>
      <div className="flex w-3/4 max-w-sm m-6 p-4 mx-auto bg-slate-600 border-slate-300 border-2 shadow rounded-md space-x-4">
        <div className="w-1/5">
          <img className="" src={`/${title}.png`} />
        </div>
        <div className="">
          <p className="text-white font-bold">{title}</p>
          <p className="text-white">{url}</p>
        </div>
      </div>
    </a>
  );
};

export default IDCard;
