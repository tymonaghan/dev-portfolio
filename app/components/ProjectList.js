import React from "react";
import projectData from "../projectData";
import ProjectListCard from "./ProjectListCard";
import ProjectDetailCard from "./ProjectDetailCard";
import { Outlet } from "react-router-dom";

const ProjectList = () => {
  return (
    <div className="text-text-primary-light dark:text-text-primary-dark h-max min-h-screen px-2">
      <h1 className="font-bold text-xl text-center mt-2 mb-0">
        My Software Projects
      </h1>
      <div className="w-3/4 text-center mx-auto text-sm text-text-secondary-light dark:text-text-secondary-dark">
        <p className="">Click a screenshot to expand project details.</p>
        <p className="">
          Please allow up to sixty seconds for deployed apps to load.
        </p>
      </div>
      {projectData.projects.map((project, key) => {
        return <ProjectListCard project={project} key={key} />;
        // interesting how it wants the key on the ProjectListCard and not the divs rendered within it
      })}
      <Outlet />
    </div>
  );
};

export default ProjectList;
