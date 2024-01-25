import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
const defaultContent = `
![flav Work](https://codepen.io/flavia-Bosibori/pen/LYaxdLN)

# Hello, 
## You are welcomed at
### Keep the COOL!


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some text**

[Visit My Code](https://codepen.io/flavia-Bosibori/pen/LYaxdLN)

> Block Quote

1. First item
2. Second item
`;

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => /*#__PURE__*/
React.createElement("textarea", { value: content, onChange: handleTextareaChange, id: "editor" });

const Previewer = ({ content }) => /*#__PURE__*/
React.createElement("div", { id: "preview",
  dangerouslySetInnerHTML: {
    __html: marked.parse(content, { renderer: renderer }) } });




const App = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextareaChange = event => {
    setContent(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextareaChange: handleTextareaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));