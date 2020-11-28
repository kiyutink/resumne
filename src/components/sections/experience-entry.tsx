import "./experience-entry.scss";
import React from "react";
import { Input } from "../shared/input";
import { RichTextEditor } from "../shared/rich-text-editor";

export const ExperienceEntry: React.FC<{
  name: string;
  onRemove: () => void;
  onInsert: () => void;
  onMoveUp: (() => void) | null;
  onMoveDown: (() => void) | null;
}> = ({ name, onRemove, onInsert, onMoveDown, onMoveUp }) => {
  return (
    <div className="experience-entry">
      <div className="experience-entry__buttons">
        {onMoveUp && (
          <button
            onClick={onMoveUp}
            className="experience-entry__button"
            title="Move up"
          >
            <i className="fas fa-caret-up" />
          </button>
        )}
        {onMoveDown && (
          <button
            onClick={onMoveDown}
            className="experience-entry__button"
            title="Move down"
          >
            <i className="fas fa-caret-down" />
          </button>
        )}

        <button
          onClick={onRemove}
          className="experience-entry__button"
          title="Remove"
        >
          <i className="far fa-trash-alt" />
        </button>
        <button
          onClick={onInsert}
          className="experience-entry__button"
          title="Insert after"
        >
          <i className="fas fa-plus" />
        </button>
      </div>

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

      <RichTextEditor name={`${name}.description`} />
    </div>
  );
};
