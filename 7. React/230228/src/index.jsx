import React from "react"
import ReactDOM from "react-dom"
import { App } from "./app.jsx"

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(<App />)

// <App /> => React.createElement(App)
