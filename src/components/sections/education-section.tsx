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
        {({ form, remove, insert, move }) => (
          <Fragment>
            {form.values[name].map(
              (
                value: EducationEntryModel,
                i: number,
                values: EducationEntryModel[]
              ) => (
                <EducationEntry
                  name={`${name}[${i}]`}
                  key={value.id}
                  onRemove={() => {
                    remove(i);
                  }}
                  onInsert={() => {
                    insert(i + 1, createEducationEntry());
                  }}
                  onMoveUp={
                    i === 0
                      ? null
                      : () => {
                          move(i, i - 1);
                        }
                  }
                  onMoveDown={
                    i === values.length - 1
                      ? null
                      : () => {
                          move(i, i + 1);
                        }
                  }
                />
              )
            )}
          </Fragment>
        )}
      </FieldArray>
    </div>
  );
};
