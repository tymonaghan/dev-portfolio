import React from "react";
import { Outlet } from "react-router-dom";

const IDCard = (props) => {
  const { title, url } = props;
  return (
    <a target="_blank" href={`https://www.${url}`}>
      <div className="flex max-w-lg  max-h-20 m-4 py-2 mx-auto bg-card-background hover:bg-card-highlight border-border-dark border-2  shadow rounded-md space-x-4 ">
        <div className="w-1/6 pl-2 my-auto">
          <img className="aspect-square max-h-12" src={`/${title}.png`} />
        </div>
        <div className="m-auto w-5/6 text-left">
          <p className="text-white text-base md:text-lg space-y-2 font-bold">
            {title}
          </p>
          <p className="text-white text-sm md:text-lg space-y-2">{url}</p>
        </div>
      </div>
    </a>
  );
};

export default IDCard;
