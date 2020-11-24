import React from "react";
import { Form, Formik } from "formik";
import { Persist } from "formik-persist";
import { Page } from "./page";
import { ExperienceSection } from "./sections/experience-section";
import { PersonalSection } from "./sections/personal-section";
import { SummarySection } from "./sections/summary-section";
import { EducationSection } from "./sections/education-section";
import exampleData from "../example-data.json";
import { OtherSection } from "./sections/other-section";

export const App: React.FC = () => (
  <Formik onSubmit={() => {}} initialValues={exampleData}>
    <Form>
      <Page>
        <Persist name="cvState" />
        <PersonalSection />
        <SummarySection />
        <ExperienceSection />
        <EducationSection />
        <OtherSection />
      </Page>
    </Form>
  </Formik>
);
