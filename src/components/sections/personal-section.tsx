import "./personal-section.scss";
import React, { useState } from "react";
import { PersonalData } from "../../types/personal-data";

export const PersonalSection: React.FC = () => {
  const [state, setState] = useState<PersonalData>({
    fullName: "Kirill Kiiutin",
    address: "Berlin, Germany",
    email: "kiyutin@gmail.com",
    phone: "555-555-555",
  });
  const { fullName, address, email, phone } = state;
  return (
    <div className="personal-section">
      <div className="personal-section__name">{fullName}</div>
      <div className="personal-section__address">{address}</div>
      <div className="personal-section__phone-and-email">
        <a href={`mailto:${email}`}>{email}</a> <b>·</b> {phone}
      </div>
    </div>
  );
};
