import React from "react";
import projectData from "../projectData";

const ProjectList = () => {
  return (
    <div className="text-black dark:text-white">
      <h1 className="text-white font-bold text-xl text-center mt-5 mb-0">
        Project List
      </h1>
      <div className="">
        {projectData.projects.map((project, key) => {
          return (
            <div
              key={key}
              className="flex max-w-xl m-6 p-4 mx-2 sm:mx-auto bg-slate-600 hover:bg-sky-700 border-slate-300 border-2  shadow rounded-md  text-white"
            >
              <div className="w-1/4 mr-5">
                <div className="font-bold text-center">{project.name}</div>
                <img
                  src={project.imageUrl}
                  alt={project.alt}
                  className="max-w-20 max-h-28 mx-auto"
                />
              </div>
              <div className="">
                <div className="">{project.description}</div>
                <div className="">
                  <div className="my-auto text-center">
                    <a href={project.repo} target="_blank">
                      <button
                        type="button"
                        className="bg-slate-400 text-white font-medium rounded shadow-xl p-1 mx-3 my-2 my-auto"
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
                        className="bg-slate-400 text-white font-medium rounded shadow-xl mx-3 p-1 my-auto"
                      >
                        Deployed App
                      </button>
                    </a>
                  </div>
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
