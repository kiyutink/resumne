import "./education-entry.scss";
import React from "react";
import { Input } from "../shared/input";

export const EducationEntry: React.FC<{
  name: string;
  onRemove: () => void;
}> = ({ name, onRemove }) => {
  return (
    <div className="education-entry">
      <button
        type="button"
        className="education-entry__remove-button"
        onClick={onRemove}
      >
        <i className="far fa-trash-alt" />
      </button>
      <Input
        className="education-entry__school-name"
        name={`${name}.schoolName`}
      />
      ,{" "}
      <Input
        className="eduction-entry__other-info"
        name={`${name}.otherInfo`}
      />
    </div>
  );
};
