import React from "react";
import { Link } from "react-router-dom";

const ProjectListCard = (props) => {
  const { project } = props;

  return (
    <div className="flex max-w-xl my-2 sm:my-6 p-4  mx-auto bg-card-background hover:bg-card-highlight border-border-dark border-2  shadow rounded-md  text-text-primary-dark">
      <div className="w-1/4 mr-5 my-auto">
        <Link to={`./${project.slug}`}>
          <div className="font-bold text-center text-base">{project.name}</div>
          <img
            src={project.imageUrl}
            alt={project.alt}
            className="max-w-20 max-h-28 mx-auto"
          />
        </Link>
      </div>
      <div className="flex-col w-3/4">
        <div className="my-2 text-sm sm:text-base">
          {project.description} {project.type} project.
        </div>
        <div className="sm:my-6 flex-row text-center">
          <a href={project.repo} target="_blank">
            <button
              type="button"
              className="bg-card-button text-text-primary-dark text-sm sm:text-base font-medium rounded-sm shadow-xl p-1 px-2 mx-3 my-1 "
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

          <a href={project.site} target="_blank">
            <button
              type="button"
              className="bg-card-button text-text-primary-dark text-sm sm:text-base font-medium rounded shadow-xl p-1 px-2 mx-3 my-1 "
            >
              <div className="flex">
                <img
                  src={project.iconUrl}
                  alt=""
                  className="w-4 h-4 aspect-square my-auto  mr-1 "
                />
                Deployed App
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectListCard;
