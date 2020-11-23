import "./education-entry.scss";
import React from "react";
import { Input } from "../shared/input";

export const EducationEntry: React.FC<{ name: string }> = ({ name }) => {
  return (
    <div className="education-entry">
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
