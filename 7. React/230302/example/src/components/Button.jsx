import React from "react"
import styled, { css } from "styled-components"
import { darken, lighten } from "polished"

const flexCenter = css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
`

const fullWidthStyle = css`
    ${(props) => {
        props.fullWidth &&
            css`
                width: 100%;
                justify-content: center;

                & + & {
                    margin-left: 0;
                    margin-top: 1em;
                }
            `
    }}
`

const StyledButton = styled.button`
    /* 공통 스타일 */
    ${flexCenter}
    outline:none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    /* 크기 */
    height: 2.25rem;
    font-size: 1rem;

    /* 색상 */
    background: #228be6;
    &:hover {
        background: ${lighten(0.1, "#339af0")};
    }

    &:active {
        background: ${lighten(0.1, "#1c7ed6")};
    }

    ${fullWidthStyle}
`

const Button = ({ children, color, size, outline, fullWidth, ...rest }) => {
    return (
        <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...rest}>
            {children}
        </StyledButton>
    )
}

export default Button
