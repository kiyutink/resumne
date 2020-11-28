import "./experience-section.scss";
import React, { Fragment } from "react";
import { FieldArray } from "formik";
import { ExperienceEntry } from "./experience-entry";
import { ExperienceEntryModel } from "../../lib/types/experience-entry-model";
import { createExperienceEntry } from "../../lib/helpers";

export const ExperienceSection: React.FC = () => {
  const name = "experience";
  return (
    <div className="experience-section">
      <div className="experience-section__heading">Experience</div>
      <div className="experience-section__list">
        <FieldArray name={name}>
          {({ form, remove, insert, move }) => (
            <Fragment>
              {form.values[name].map(
                (
                  value: ExperienceEntryModel,
                  i: number,
                  values: ExperienceEntryModel[]
                ) => (
                  <ExperienceEntry
                    name={`${name}[${i}]`}
                    key={value.id}
                    onRemove={() => {
                      remove(i);
                    }}
                    onInsert={() => {
                      insert(i + 1, createExperienceEntry());
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
    </div>
  );
};
