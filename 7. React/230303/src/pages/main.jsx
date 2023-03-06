import React from "react"
import Button from "../components/button"

const Main = () => {
    return (
        <>
            <h1>Logo</h1>

            <ul>
                <li>Hello world</li>
                <li>
                    <Button fullWidth color="blue">
                        <span>버튼</span>
                        <p>p</p>
                    </Button>
                    <Button color="pink">
                        <span>asdf</span>
                        <p>p</p>
                    </Button>
                    <Button color="gray">
                        <span>gdfgdfg</span>
                        <p>p</p>
                    </Button>
                </li>
                <li></li>
                <li></li>
            </ul>
        </>
    )
}

export default Main
