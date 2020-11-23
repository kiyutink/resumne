import "./education-section.scss";
import React, { Fragment } from "react";
import { FieldArray } from "formik";
import { EducationEntry } from "./education-entry";
import { EducationEntryModel } from "../../lib/types/education-entry-model";

export const EducationSection: React.FC = () => {
  const name = "education";
  return (
    <div className="education-section">
      <div className="education-section__heading">Education</div>
      <FieldArray name="education">
        {({ form }) => (
          <Fragment>
            {form.values[name].map(
              (value: EducationEntryModel, index: number) => (
                <EducationEntry name={`${name}[${index}]`} />
              )
            )}
          </Fragment>
        )}
      </FieldArray>
    </div>
  );
};
