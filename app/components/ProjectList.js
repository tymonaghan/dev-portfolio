import React from "react";
import projectData from "../projectData";

const ProjectList = () => {
  return (
    <div className="text-black dark:text-white">
      This page is a work in progress!
      {projectData.projects.map((project, key) => {
        return (
          <div
            key={key}
            className="flex max-w-xl  max-h-40 m-6 p-4 mx-auto bg-slate-600 hover:bg-sky-700 border-slate-300 border-2  shadow rounded-md space-x-4"
          >
              <div className="font-bold">{project.name}</div>
              <div className="">{project.repo}</div>
              <div className="">{project.site}</div>
            </div>
    </div>
  );
};

export default ProjectList;
