import "./summary-section.scss";
import React from "react";
import { RichTextEditor } from "../shared/rich-text-editor";

export const SummarySection: React.FC = () => {
  return (
    <div className="summary-section">
      <div className="summary-section__heading">Summary</div>
      <RichTextEditor name="summary" withAttribution />
    </div>
  );
};
