import "./education-section.scss";
import React, { Fragment } from "react";
import { FieldArray } from "formik";
import { EducationEntry } from "./education-entry";
import { EducationEntryModel } from "../../lib/types/education-entry-model";
import { createEducationEntry } from "../../lib/helpers";

export const EducationSection: React.FC = () => {
  const name = "education";
  return (
    <div className="education-section">
      <div className="education-section__heading">Education</div>
      <FieldArray name="education">
        {({ form, push, remove }) => (
          <Fragment>
            {form.values[name].map(
              (value: EducationEntryModel, index: number) => (
                <EducationEntry
                  name={`${name}[${index}]`}
                  key={value.id}
                  onRemove={() => {
                    remove(index);
                  }}
                />
              )
            )}
            <div className="education-section__add-button-container">
              <button
                type="button"
                className="education-section__add-button"
                onClick={() => {
                  push(createEducationEntry());
                }}
              >
                <i className="fa fa-plus" /> Add
              </button>
            </div>
          </Fragment>
        )}
      </FieldArray>
    </div>
  );
};
