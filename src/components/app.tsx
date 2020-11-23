import React from "react";
import { Form, Formik } from "formik";
import { Page } from "./page";
import { ExperienceSection } from "./sections/experience-section";
import { PersonalSection } from "./sections/personal-section";
import { SummarySection } from "./sections/summary-section";
import { EducationSection } from "./sections/education-section";
import defaultData from "../default-data.json";

export const App: React.FC = () => (
  <Formik
    initialValues={
      localStorage.getItem("cvState")
        ? JSON.parse(localStorage.getItem("cvState")!)
        : defaultData
    }
    onSubmit={(data) => localStorage.setItem("cvState", JSON.stringify(data))}
  >
    <Form>
      <Page>
        <PersonalSection />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <button type="submit">Save</button>
      </Page>
    </Form>
  </Formik>
);
