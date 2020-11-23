import "./other-section.scss";
import React from "react";
import { Textarea } from "../shared/textarea";

export const OtherSection: React.FC = () => (
  <div className="other-section">
    <div className="other-section__heading">Other</div>
    <Textarea name="other" className="other-section__text" />
  </div>
);
