import "./personal-section.scss";
import React from "react";
import { Input } from "../shared/input";

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
        <Input name="email" className="personal-section__email" />
      </div>
    </div>
  );
};
