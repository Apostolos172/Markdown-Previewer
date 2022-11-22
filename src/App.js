// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Previewer from "./components/Previewer";
import TextArea from "./components/TextArea";
import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

const initialTextareaContent = `
# Here is a header h1
## Here is a smaller semantically header h2

## Links
[I'm a link](#)

## Inline Code
Inline \`code\` has \`back-ticks around\` it.

## Code block
\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`

## Sample To do list 
- Workout
- Coding
- Learning from freeCodeCamp

## Quotes
> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

## Checkout a beautiful image
![sunset](https://uomdai19172.files.wordpress.com/2019/11/sunset1.jpg?w=1024)

## Bolded text
Here you must **pay attention**

And now is your turn. Write something! 
`;

const fromSimpleStringToGoodHtml = (str) => {
  const rawHtml = marked.parse(str);
  const cleanHtml = DOMPurify.sanitize(rawHtml);
  const goodHtml = { __html: cleanHtml };
  return goodHtml;
};

// const rawHtml = marked.parse(initialTextareaContent);
// const cleanHtml = DOMPurify.sanitize(rawHtml);
// const initialPreviewContent = { __html: cleanHtml };
const initialPreviewContent = fromSimpleStringToGoodHtml(initialTextareaContent);

function App() {
  // const [textareaContent, setTextAreaContent] = useState(
  //   initialTextareaContent
  // );
  const [previewContent, setPreviewContent] = useState(initialPreviewContent);

  const onChangeHandler = (event) => {
    //console.log(event.target.value);
    let newPreviewContentTyped = event.target.value;
    // let newPreviewContentRawHtml = marked.parse(newPreviewContentTyped);
    // let newCleanHtml = DOMPurify.sanitize(newPreviewContentRawHtml);
    // let newPreviewContent = { __html: newCleanHtml };
    let newPreviewContent = fromSimpleStringToGoodHtml(newPreviewContentTyped);
    setPreviewContent((previousContent) => {
      return newPreviewContent;
    });
  };

  return (
    <div className="App row">
      <TextArea
        textareaContent={initialTextareaContent}
        onChange={onChangeHandler}
      ></TextArea>
      <Previewer previewContent={previewContent}></Previewer>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
