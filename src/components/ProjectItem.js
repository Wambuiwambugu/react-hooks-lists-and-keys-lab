import React from "react";
import { v4 as uuidv4 } from 'uuid';

function ProjectItem({ name, about, technologies }) {
  const techElement = technologies.map((technology) => {
    return <span key={(uuidv4())}>{technology}</span>
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techElement}
      </div>
    </div>
  );
}

export default ProjectItem;
