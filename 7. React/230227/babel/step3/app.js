const React = require("react")
const ReactDOM = require("react-dom")

class App extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    <a href="#">menu1</a>
                </li>
            </ul>
        )
    }
}

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)
