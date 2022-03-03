import React from "react";
import projectData from "../projectData";
import { useParams, Link, useNavigate } from "react-router-dom";
import { TechIcons, ButtonGroup } from ".";

const ProjectDetailCard = () => {
  // grab the current project based on URL param
  const params = useParams();
  const projectSlug = params.projectName;
  const project = projectData.projects.find(
    (project) => project.slug === projectSlug
  );

  const navigate = useNavigate();
  function clickHandler(e) {
    if (e.target.id === "modal") {
      navigate(`/projects`);
    }
  }

  return (
    <div
      id="modal"
      className=" fixed left-0 top-0 h-screen w-screen z-10 bg-gutter-light dark:bg-background-dark bg-opacity-70 dark:bg-opacity-70"
      onClick={clickHandler}
    >
      <div className="z-20 mx-auto my-4 w-5/6 sm:w-3/4 h-3/4 text-center overflow-auto text-text-primary-dark bg-card-background p-0 border-4 border-border-dark shadow rounded">
        <div className="w-1/12 fixed right-10 sm:right-24 md:right-32 lg:right-40">
          <Link to="/projects">
            <button type="button" className="py-1 px-2 text-xl">
              X
            </button>
          </Link>
        </div>
        <div className="flex ">
          <div className="w-11/12 my-auto text-xl lg:text-2xl font-bold text-center">
            {project.name} - Details
          </div>
        </div>
        <div className="lg:columns-2 p-2 sm:p-4 md:p-8 lg:p-10">
          <div className=" flex-col text-center">
            <div className="">
              <img
                src={project.imageUrl}
                className="w-auto max-w-full mx-auto max-h-96"
              ></img>
            </div>
            <div className="my-4">
              <ButtonGroup
                site={project.site}
                repo={project.repo}
                iconUrl={project.iconUrl}
              />
            </div>
          </div>
          {/* COLUMN BREAK */}
          <div className="text-sm sm:text-base text-left text-text-primary-dark my-2 break-before-column">
            <p>{project.longDescription}</p>
          </div>
          <div className="w-full bg-gutter-dark p-2 text-center font-semibold rounded my-2">
            Tech Stack:
            <TechIcons technologies={project.technologies} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
