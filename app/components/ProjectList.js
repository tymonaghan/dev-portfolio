import React from "react";
import projectData from "../projectData";

const ProjectList = () => {
  return (
    <div className="text-text-primary-light dark:text-text-primary-dark h-max min-h-screen">
      <h1 className="font-bold text-xl text-center mt-5 mb-0">Project List</h1>
      <div className="">
        {projectData.projects.map((project, key) => {
          return (
            <div
              key={key}
              className="flex max-w-xl m-6 p-4 mx-2 sm:mx-auto bg-card-background hover:bg-card-highlight border-border-dark border-2  shadow rounded-md  text-text-primary-dark"
            >
              <div className="w-1/4 mr-5">
                <div className="font-bold text-center">{project.name}</div>
                <img
                  src={project.imageUrl}
                  alt={project.alt}
                  className="max-w-20 max-h-28 mx-auto"
                />
              </div>
              <div className="flex-col w-3/4">
                <div className="my-2">{project.description}</div>
                <div className="my-6 flex-row text-center">
                  <a href={project.repo} target="_blank">
                    <button
                      type="button"
                      className="bg-card-button text-text-primary-dark font-medium rounded shadow-xl p-1 mx-3 my-1"
                    >
                      <div className="flex">
                        <img
                          src="./GitHub.png"
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
                      className="bg-card-button text-text-primary-dark font-medium rounded shadow-xl p-1 mx-3 my-1"
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
        })}
      </div>
    </div>
  );
};

export default ProjectList;
