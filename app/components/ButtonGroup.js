import React from "react";

const ButtonGroup = (props) => {
  const { repo, site, iconUrl } = props;

  return (
    <div className=" text-xs sm:text-sm ">
      <a href={repo} target="_blank">
        <button
          type="button"
          className="bg-card-button text-text-primary-dark font-medium rounded-sm shadow-xl p-1 px-2 mx-3 my-1 "
        >
          <div className="flex">
            <img
              src="/GitHub.png"
              alt=""
              className="w-4 h-4 aspect-square my-auto  mr-1 "
            />
            Project Repo
          </div>
        </button>
      </a>
      <a href={site} target="_blank">
        <button
          type="button"
          className="bg-card-button text-text-primary-dark font-medium rounded-sm shadow-xl p-1 px-2 mx-3 my-1 "
        >
          <div className="flex">
            <img
              src={iconUrl}
              alt=""
              className="w-4 h-4 aspect-square my-auto  mr-1 "
            />
            Deployed App
          </div>
        </button>
      </a>
    </div>
  );
};

export default ButtonGroup;
