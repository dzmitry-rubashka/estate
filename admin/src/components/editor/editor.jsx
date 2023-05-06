import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";

import "./editor.css";

export default function Editor({ value, setValue }) {
  return (
    <MDEditor
      data-color-mode="light"
      value={value}
      onChange={setValue}
      previewOptions={{
        rehypePlugins: [[rehypeSanitize]],
      }}
    />
  );
}
