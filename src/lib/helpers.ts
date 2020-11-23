import { v4 as uuid } from "uuid";
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
