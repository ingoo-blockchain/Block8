const React = require("react")
const ReactDOM = require("react-dom")
const home = require("./pages/home")

console.log(home.name)
console.log(React)
console.log(ReactDOM)

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(React.createElement("div", null, "hello world!"))
