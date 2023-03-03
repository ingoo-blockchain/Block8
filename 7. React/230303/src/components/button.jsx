import React from "react"
import styled, { css } from "styled-components"

const flexCenter = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

const fullWidthStyle = css`
    ${(props) => {
        return (
            props.fullWidth &&
            css`
                width: 100%;

                & + & {
                    margin-top: 10px;
                }
            `
        )
    }}
`

const Button = styled.button`
    ${flexCenter}
    border: none;
    outline: none;
    font-size: 12px;
    font-weight: bold;
    padding: 7px 14px;

    background: ${(props) => props.theme[props.color]};

    // hover
    &:hover {
        background: #339af0;
    }
    // active

    // fullWidth
    ${fullWidthStyle}

    & + & {
        margin-left: 5px;
    }
`

const StyledButton = ({ children, ...rest }) => {
    return <Button {...rest}>{children}</Button>
}

export default StyledButton
