import "./experience-entry.scss";
import React from "react";
import { Input } from "../shared/input";
import { Textarea } from "../shared/textarea";

export const ExperienceEntry: React.FC<{
  name: string;
  onRemove: () => void;
}> = ({ name, onRemove }) => {
  return (
    <div className="experience-entry">
      <button className="experience-entry__remove-button" onClick={onRemove}>
        <i className="far fa-trash-alt" />
      </button>
      <div className="experience-entry__company-name-and-location">
        <Input
          className="experience-entry__company-name"
          name={`${name}.companyName`}
        />
        <Input
          className="experience-entry__company-location"
          name={`${name}.companyLocation`}
        />
      </div>

      <Input
        className="experience-entry__company-description"
        name={`${name}.companyDescription`}
      />
      <div className="experience-entry__position-and-dates">
        <Input
          className="experience-entry__position"
          name={`${name}.position`}
        />
        <Input className="experience-entry__dates" name={`${name}.dates`} />
      </div>

      <Textarea
        className="experience-entry__role-description"
        name={`${name}.description`}
      />
    </div>
  );
};
