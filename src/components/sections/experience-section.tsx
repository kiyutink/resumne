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
          {({ form, push, remove }) => (
            <Fragment>
              {form.values[name].map(
                (value: ExperienceEntryModel, i: number) => (
                  <ExperienceEntry
                    name={`${name}[${i}]`}
                    key={value.id}
                    onRemove={() => {
                      remove(i);
                    }}
                  />
                )
              )}
              <div className="experience-section__add-button-container">
                <button
                  type="button"
                  className="experience-section__add-button"
                  onClick={() => {
                    push(createExperienceEntry());
                  }}
                >
                  <i className="fa fa-plus" /> Add
                </button>
              </div>
            </Fragment>
          )}
        </FieldArray>
      </div>
    </div>
  );
};
