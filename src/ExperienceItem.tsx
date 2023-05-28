import React from "react";

export interface Experience {
  title: string;
  company: string;
  location: string;
  start_date: string;
  end_date: string;
  duties: Array<{
    text: string;
    keywords: Array<string>;
  }>;
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
            {`${new Date(experience.start_date).toLocaleString("default", {
              month: "short",
              year: "numeric",
            })} - ${new Date(experience.end_date).toLocaleString("default", {
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
            <div
              dangerouslySetInnerHTML={{
                __html: duty.keywords.reduce(
                  (text, keyword) =>
                    text.replace(
                      new RegExp(`\\b${keyword}\\b`, "g"),
                      `<strong>${keyword}</strong>`
                    ),
                  duty.text
                ),
              }}
            />
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ExperienceItem;
