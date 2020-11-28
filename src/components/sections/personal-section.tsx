import "./personal-section.scss";
import React, { useState } from "react";
import classNames from "classnames";
import AutosizeInput from "react-input-autosize";

import { Input } from "../shared/input";
import { useField } from "formik";

export const Email: React.FC<{ name: string; className: string }> = ({
  name,
  className,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggle = () => setIsEditing((val) => !val);
  const [field] = useField(name);

  if (isEditing) {
    return (
      <span className="email-input">
        <AutosizeInput
          {...field}
          autoFocus
          inputClassName={classNames("input", "email-input__input", className)}
        />
        <button
          title="Click to save"
          onClick={toggle}
          className="email-input__button"
        >
          <i className="fa fa-check" />
        </button>
      </span>
    );
  } else {
    return (
      <span className="email-input">
        <a href={`mailto:${field.value}`} className="email-input__link">
          {field.value}
        </a>
        <button
          title="Click to edit email"
          onClick={toggle}
          className="email-input__button email-input__button--edit"
        >
          <i className="far fa-edit" />
        </button>
      </span>
    );
  }
};

export const PersonalSection: React.FC = () => {
  return (
    <div className="personal-section">
      <div className="personal-section__row">
        <Input name="name" className="personal-section__name" />
      </div>
      <div className="personal-section__row">
        <Input name="address" className="personal-section__address" />
      </div>
      <div className="personal-section__row">
        <Input name="phone" className="personal-section__phone-and-email" />
        <b className="personal-section__separator">·</b>
        <Email name="email" className="personal-section__email" />
      </div>
    </div>
  );
};
