import "./summary-section.scss";
import React from "react";
import { Textarea } from "../shared/textarea";

export const SummarySection: React.FC = () => {
  return (
    <div className="summary-section">
      <div className="summary-section__heading">Summary</div>
      <Textarea name="summary" className="summary-section__textarea" />
    </div>
  );
};
