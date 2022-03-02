import React from "react";
import projectData from "../projectData";
import { useParams, Link } from "react-router-dom";
import { TechIcons } from ".";

const ProjectDetailCard = () => {
  // grab the current project based on URL param
  const params = useParams();
  const projectSlug = params.projectName;
  const project = projectData.projects.find(
    (project) => project.slug === projectSlug
  );

  return (
    <div
      id="modal"
      className=" fixed left-0 top-0 h-screen w-screen z-10 bg-background-dark bg-opacity-70"
    >
      <div className="z-20 mx-auto my-10 w-3/4 h-fit text-center overflow-auto bg-card-background p-10 border-4 border-border-dark shadow rounded">
        <div className="flex">
          <div className=" w-11/12 my-auto text-xl font-bold text-center">
            {project.name}
          </div>
          <div className="w-1/12">
            <Link to="/projects">
              <button
                type="button"
                className="rounded shadow py-1 px-2 text-xl border-2 border-x-gutter-dark bg-warning"
              >
                X
              </button>
            </Link>
          </div>
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
        <div className="text-sm sm:text-base text-left my-2">
          <p>{project.longDescription}</p>
        </div>
        <div className="w-full bg-gutter-dark p-2 text-center font-semibold rounded">
          Tech Stack:
          <TechIcons technologies={project.technologies} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
