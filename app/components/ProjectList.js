import React from "react";
import projectData from "../projectData";
import ProjectListCard from "./ProjectListCard";

const ProjectList = () => {
  return (
    <div className="text-text-primary-light dark:text-text-primary-dark h-max min-h-screen px-2">
      <h1 className="font-bold text-xl text-center mt-5 mb-0">
        My Software Projects
      </h1>
      {/* <div className=""> */}
      {projectData.projects.map((project, key) => {
        return <ProjectListCard project={project} key={key} />;
        // interesting how it wants the key on the ProjectListCard and not the divs rendered within it
      })}
      {/* </div> */}
    </div>
  );
};

export default ProjectList;
