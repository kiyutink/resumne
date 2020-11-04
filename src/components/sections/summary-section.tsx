import "./summary-section.scss";
import React, { useState } from "react";
import Textarea from "react-textarea-autosize";

export const SummarySection: React.FC = () => {
  const [summary, setSummary] = useState(
    "Accomplished senior marketing executive with a proven ability to grow revenue and market share and increase brand awareness for B2B software companies using digital media and traditional marketing. Extensive experience at both Fortune 100 companies and technology startups."
  );

  return (
    <div className="summary-section">
      <div className="summary-section__heading">Summary</div>
      <Textarea
        className="summary-section__textarea"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
    </div>
  );
};
