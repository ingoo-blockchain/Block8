import React from "react"
import Main from "./pages/main"
import { ThemeProvider } from "styled-components"

const App = () => {
    const colorChip = {
        blue: "#228be6",
        gray: "#adb5bd",
        pink: "#f06595",
    }
    return (
        <>
            <ThemeProvider theme={colorChip}>
                <Main />
            </ThemeProvider>
        </>
    )
}

export default App
