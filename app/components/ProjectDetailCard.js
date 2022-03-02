import React from "react";
import projectData from "../projectData";
import { useParams, Link } from "react-router-dom";

const ProjectDetailCard = () => {
  const params = useParams();
  const projectSlug = params.projectName;
  console.log(projectSlug);
  const project = projectData.projects.find(
    (project) => project.slug === projectSlug
  );

  return (
    <div
      id="modal"
      className=" fixed left-0 top-0 h-screen w-screen z-10 bg-background-dark bg-opacity-70"
    >
      <div className="z-20 mx-auto my-10 w-3/4 h-1/2 overflow-auto bg-card-background p-10 border-4 border-border-dark shadow rounded">
        <h1 className="h-20 text-lg font-bold text-center">
          Project Detail View: {project.name}
        </h1>
        <Link to="/projects">
          <button type="button" className="bg-card-button rounded shadow p-1">
            GO BACK
          </button>
        </Link>
        <p>{project.name}</p>
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
