import "./experience-entry.scss";
import React from "react";

interface ExperienceEntryData {
  companyName: string;
  companyLocation: string;
  companyDescription: string;
  position: string;
  dates: string;
  roleDescription: string;
}

export const ExperienceEntry: React.FC<ExperienceEntryData> = ({
  companyName,
  companyLocation,
  companyDescription,
  position,
  dates,
  roleDescription,
}) => {
  return (
    <div className="experience-entry">
      <div className="experience-entry__company-name-and-location">
        <div className="experience-entry__company-name">{companyName}</div>
        <div className="experience-entry__company-location">
          {companyLocation}
        </div>
      </div>

      <div className="experience-entry__company-description">
        {companyDescription}
      </div>
      <div className="experience-entry__position-and-dates">
        <div className="experience-entry__position">{position}</div>
        <div className="experience-entry__dates">{dates}</div>
      </div>

      <div className="experience-entry__role-description">
        {roleDescription}
      </div>
      <div className="experience-entry__responsibilities">{/* TODO: */}</div>
    </div>
  );
};
