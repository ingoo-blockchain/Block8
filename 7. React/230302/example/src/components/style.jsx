import React from "react"
import styled from "styled-components"

const Div = styled.div`
    background: ${(props) => (props.background === "blue" ? "blue" : "yellow")};
`

const Button = styled.button`
    display: inline-flex;
    width: ${(props) => props.size + `px`};
    padding: 7px 14px;
    justify-content: center;
    align-items: center;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    outline: none;

    &:hover {
        background: #666;
    }
`

const Style = () => {
    return (
        <>
            <Div background="red">Hello!!!</Div>
            <Button size="300">버튼!</Button>
        </>
    )
}

export default Style
