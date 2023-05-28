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
      <div className="position flex justify-between">
        <div>
          <h3 className="text-2xl font-bold">{experience.title}</h3>
          <div className="company text-lg">{experience.company}</div>
        </div>
        <div className="duration text-right text-lg">
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
