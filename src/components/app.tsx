import React from "react";
import { Page } from "./page";
import { PersonalSection } from "./sections/personal-section";
import { SummarySection } from "./sections/summary-section";
export const App: React.FC = () => (
  <div>
    <Page>
      <PersonalSection />
      <SummarySection />
    </Page>
  </div>
);
