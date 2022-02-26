import React from "react";
import { Outlet } from "react-router-dom";

const IDCard = (props) => {
  const { title, url } = props;
  return (
    <a target="_blank" href={`https://www.${url}`}>
      <div className="flex max-w-xl  max-h-20 m-6 p-4 mx-auto bg-slate-600 hover:bg-sky-700 border-slate-300 border-2  shadow rounded-md space-x-4">
        <div className="w-1/4">
          <img className="aspect-square max-h-12" src={`/${title}.png`} />
        </div>
        <div className="my-auto">
          <p className="text-white text-sm sm:text-md md:text-xl space-y-2 font-bold">
            {title}
          </p>
          <p className="text-white text-xs sm:text-sm md:text-lg space-y-2 align-middle">
            {url}
          </p>
        </div>
      </div>
    </a>
  );
};

export default IDCard;
