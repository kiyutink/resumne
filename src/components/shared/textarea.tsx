import "./textarea.scss";
import React from "react";
import classNames from "classnames";
import TextareaAutosize, {
  TextareaAutosizeProps,
} from "react-textarea-autosize";
import { useField } from "formik";

export const Textarea: React.FC<TextareaAutosizeProps & { name: string }> = (
  props
) => {
  const [field] = useField(props);
  return (
    <TextareaAutosize
      {...field}
      {...props}
      className={classNames("textarea", props.className)}
    />
  );
};
