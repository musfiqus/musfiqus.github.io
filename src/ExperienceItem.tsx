import React from "react";

export interface Experience {
    title: string;
    company: string;
    location: string;
    duration: Array<Array<number>>;
    duties: Array<string>;
}

interface ExperienceItemProps {
  experience: Experience;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ experience }) => {
  return (
    <li className="mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold">{experience.company}</h3>
          <div className="title text-lg">{experience.title}</div>
        </div>
        <div className="text-right">
          <p className="duration text-sm text-gray-500">
            {`${new Date(
              experience.duration[0][0],
              experience.duration[0][1],
              experience.duration[0][2]
            ).toLocaleString("default", {
              month: "short",
              year: "numeric",
            })} - ${new Date(
              experience.duration[1][0],
              experience.duration[1][1],
              experience.duration[1][2]
            ).toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}`}
          </p>
          <p className="location text-sm">{experience.location}</p>
        </div>
      </div>
      <ul className="duties-list list-disc ml-8 mt-4">
        {experience.duties.map((duty, index) => (
          <li key={index} className="text-lg">
            {duty}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceItem;
