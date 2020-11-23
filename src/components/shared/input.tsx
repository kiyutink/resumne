import "./input.scss";
import React from "react";
import classNames from "classnames";
import AutosizeInput from "react-input-autosize";
import { useField } from "formik";

export const Input: React.FC<{
  className?: string;
  name: string;
}> = (props) => {
  const [field] = useField(props);
  return (
    <AutosizeInput
      {...field}
      {...props}
      inputClassName={classNames("input", props.className)}
    />
  );
};
