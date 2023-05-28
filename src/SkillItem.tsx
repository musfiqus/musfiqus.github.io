import React from "react";

export interface Skill {
  label: string;
  item: string;
}

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <li className="mb-4">
      <h4 className="text-lg font-bold inline">{skill.label}:</h4>
      <span className="text-lg ml-2">{skill.item}</span>
    </li>
  );
};

export default SkillItem;
