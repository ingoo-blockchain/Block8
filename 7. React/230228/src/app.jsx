import React, { Component } from "react"
import LoginBox from "./pages/login.jsx"
import Counter from "./pages/couner.jsx"
import Dog from "./pages/dog.jsx"

export const App = () => {
    return (
        <div>
            Hello Server 오 된다~
            <LoginBox name="ingoo" />
            <Counter />
            <Dog />
        </div>
    )
}
