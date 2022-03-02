import React from "react";
import projectData from "../projectData";
import ProjectDetailCard from "./ProjectDetailCard";
import ProjectListCard from "./ProjectListCard";

const ProjectList = () => {
  return (
    <div className="text-text-primary-light dark:text-text-primary-dark h-max min-h-screen px-2">
      <h1 className="font-bold text-xl text-center mt-2 mb-0">
        My Software Projects
      </h1>
      <div className="w-3/4 text-center mx-auto text-sm">
        <p>Please allow up to sixty seconds for deployed apps to load.</p>
        {/* <p className="text-text-secondary-dark">
          Coming soon: Click a card to expand details.
        </p> */}
      </div>
      {projectData.projects.map((project, key) => {
        return <ProjectListCard project={project} key={key} />;
        // interesting how it wants the key on the ProjectListCard and not the divs rendered within it
      })}
      <ProjectDetailCard />
    </div>
  );
};

export default ProjectList;
