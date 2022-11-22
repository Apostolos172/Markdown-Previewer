import "./Previewer.css";

const Previewer = (props) => {
  return (
    <div
      className=""
      id="preview"
      dangerouslySetInnerHTML={props.previewContent}
    >
      {/* <i className="fa-solid fa-thumbs-up "></i> */}
    </div>
  );
};

export default Previewer;
