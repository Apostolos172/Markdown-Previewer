import React from "react";
import "./TextArea.css";

const TextArea = (props) => {
  return (
    <div className="col-xs-12 col-md-6" id="editor-parent">
      <textarea
        id="editor"
        defaultValue={props.textareaContent}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};

export default TextArea;
