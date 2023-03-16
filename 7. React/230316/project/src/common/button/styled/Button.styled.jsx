import styled, { css } from 'styled-components'

// red green blue
export const ButtonStyled = styled.button`
    display:inline-block;
    width:${({width}) => width};
    border: none;
    border-radius:5px;
    padding:8px 16px;
    font-size:0.8rem;
    cursor:pointer;
    outline:none;
    
    background:${props => props.background};
    color:${props=>props.color};
    &.active {
        background:${props=> props.active}
    }
    &:hover {
        background:${props=> props.hover}
    }

    

    

   
`
