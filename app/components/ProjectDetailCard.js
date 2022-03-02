import React from "react";

const ProjectDetailCard = (props) => {
  const { projectt } = props;

  return (
    <div
      id="modal"
      className="hidden fixed left-0 top-0 h-screen w-screen z-10 bg-background-dark bg-opacity-70"
    >
      <div className="z-20 mx-auto my-10 w-3/4 h-1/2 overflow-auto bg-card-background p-10 border-4 border-border-dark shadow rounded">
        <h1 className="h-20 text-lg font-bold text-center">
          Project Detail View
        </h1>
        <p>{projectt.name}</p>
        <p>{projectt.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
