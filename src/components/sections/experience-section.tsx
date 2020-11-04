import "./experience-section.scss";
import React from "react";
import { ExperienceEntry } from "./experience-entry";

export const ExperienceSection: React.FC = () => {
  const entries = [
    {
      companyName: "SM Media",
      companyLocation: "San Francisco, CA",
      companyDescription:
        "Startup that provides cloud-based social media sales and marketing software to large corporations.",
      position: "Vice President - Marketing",
      dates: "2011-2013",
      roleDescription:
        "Responsible for global marketing with a focus on North America and EMEA. Member of Executive Staff, tasked with overall business strategy and execution. Hired and managed 7-person team.",
    },
  ];
  return (
    <div className="experience-section">
      <div className="experience-section__heading">Experience</div>
      <div className="experience-section__list">
        {entries.map((entry) => (
          <ExperienceEntry {...entry} />
        ))}
      </div>
    </div>
  );
};
