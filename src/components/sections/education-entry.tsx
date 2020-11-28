import "./education-entry.scss";
import React from "react";
import { Input } from "../shared/input";

export const EducationEntry: React.FC<{
  name: string;
  onRemove: () => void;
  onMoveUp: (() => void) | null;
  onMoveDown: (() => void) | null;
  onInsert: () => void;
}> = ({ name, onRemove, onMoveUp, onMoveDown, onInsert }) => {
  return (
    <div className="education-entry">
      <div className="education-entry__buttons">
        {onMoveUp && (
          <button
            onClick={onMoveUp}
            className="education-entry__button"
            title="Move up"
          >
            <i className="fas fa-caret-up" />
          </button>
        )}
        {onMoveDown && (
          <button
            onClick={onMoveDown}
            className="education-entry__button"
            title="Move down"
          >
            <i className="fas fa-caret-down" />
          </button>
        )}

        <button
          onClick={onRemove}
          className="education-entry__button"
          title="Remove"
        >
          <i className="far fa-trash-alt" />
        </button>
        <button
          onClick={onInsert}
          className="education-entry__button"
          title="Insert after"
        >
          <i className="fas fa-plus" />
        </button>
      </div>
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
