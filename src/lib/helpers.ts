import { v4 as uuid } from "uuid";
import { EducationEntryModel } from "./types/education-entry-model";
import { ExperienceEntryModel } from "./types/experience-entry-model";

export const createExperienceEntry = (): ExperienceEntryModel => ({
  companyName: "Company name",
  companyLocation: "Company location",
  companyDescription: "Company description",
  position: "Position",
  dates: "start date - end date",
  description: "Role description",
  id: uuid(),
});

export const createEducationEntry = (): EducationEntryModel => ({
  id: uuid(),
  otherInfo: "Received qualifications, Field, Year finished",
  schoolName: "School name",
});
