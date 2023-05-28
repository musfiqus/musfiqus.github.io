import React from "react";

export interface Education {
  institution: string;
  start_date: string;
  end_date: string;
  location: string;
  degree: string;
  result: string;
  description: string;
}

interface EducationItemProps {
  education: Education;
  key: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, key }) => {
  const startDate = new Date(education.start_date);
  const endDate = new Date(education.end_date);

  return (
    <li key={key} className="education-item mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold">{education.institution}</h3>
          <p className="text-lg">{education.degree}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500">
            {`${startDate.toLocaleString("default", {
              month: "short",
              year: "numeric",
            })} - ${endDate.toLocaleString("default", {
              month: "short",
              year: "numeric",
            })}`}
          </p>
          <p className="text-sm">{education.location}</p>
        </div>
      </div>
      <p className="text-sm">{education.result}</p>
      <p className="mt-2">{education.description}</p>
    </li>
  );
};

export default EducationItem;
