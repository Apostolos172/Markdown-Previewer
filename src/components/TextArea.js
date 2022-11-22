import React from "react";
import "./TextArea.css";

const TextArea = (props) => {
  return (
    <div>
      <textarea
        id="editor"
        defaultValue={props.textareaContent}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
