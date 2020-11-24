import "./rich-text-editor.scss";
import { Editor } from "@tinymce/tinymce-react";
import { useField } from "formik";
import React from "react";

export const RichTextEditor: React.FC<{
  name: string;
  withAttribution?: boolean;
}> = (props) => {
  const [field] = useField(props);
  return (
    <div className="rich-text-editor">
      <Editor
        initialValue="<p>This is the initial content of the editor</p>"
        apiKey="qr3ueihj1madcyxai2sffnjsu9ta0tl902v1hqux1eemjxmn"
        init={{
          plugins: ["quickbars", "link", "lists", "paste", "table"],
          inline: true,
          toolbar: false,
          menubar: false,
          quickbars_insert_toolbar: false,
          quickbars_selection_toolbar: "bold italic quicklink bullist",
          paste_as_text: true,
        }}
        value={field.value}
        onBlur={field.onBlur(field.name)}
        onEditorChange={field.onChange(field.name)}
      />
      {props.withAttribution && (
        <div
          className="rich-text-editor__attribution"
          title="This won't be rendered in the pdf"
        >
          Powered by{" "}
          <a
            href="https://www.tiny.cloud"
            target="_blank"
            rel="noreferrer noopener"
          >
            Tiny
          </a>
        </div>
      )}
    </div>
  );
};
