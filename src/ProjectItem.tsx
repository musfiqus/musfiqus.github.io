import React from "react";

export interface Project {
    name: string;
    url: string;
    tech: string;
    features: Array<string>;
    date: string;
}

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <li className="mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </h3>
          <div className="title text-lg">{project.tech}</div>
        </div>
        <div className="text-right">
          <p className="duration text-sm text-gray-500">
            {new Date(project.date).toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      <ul className="features-list list-disc ml-8 mt-4">
        {project.features.map((feature, index) => (
          <li key={index} className="text-lg">
            {feature}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectItem;
