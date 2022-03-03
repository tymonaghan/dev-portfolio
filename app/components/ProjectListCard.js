import React from "react";
import { Link } from "react-router-dom";
import { ButtonGroup } from ".";

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
          <ButtonGroup
            site={project.site}
            repo={project.repo}
            iconUrl={project.iconUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectListCard;
