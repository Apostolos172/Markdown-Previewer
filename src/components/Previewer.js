import "./Previewer.css";

const Previewer = (props) => {
  return (
    <div className="col-xs-12 col-md-6 rounded text-left" id="preview-parent">
      <div id="preview" dangerouslySetInnerHTML={props.previewContent}></div>
      {/* <i className="fa-solid fa-thumbs-up "></i> */}
    </div>
  );
};

export default Previewer;
