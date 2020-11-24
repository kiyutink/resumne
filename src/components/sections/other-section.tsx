import "./other-section.scss";
import React from "react";
import { RichTextEditor } from "../shared/rich-text-editor";

export const OtherSection: React.FC = () => (
  <div className="other-section">
    <div className="other-section__heading">Other</div>
    <RichTextEditor name="other" />
  </div>
);
