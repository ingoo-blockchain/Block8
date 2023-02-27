const React = require("react");
const ReactDOM = require("react-dom");
class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, "menu1")));
  }
}
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render( /*#__PURE__*/React.createElement(App, null));
