import { ButtonStyled } from './styled'

// 
export const Button = ({ children, color, fullWidth, active }) => {
    // color : yellow 
    const colorChip = {
        yellow:'#333',
        red:'#0000ff',
        green:{
            background:'#007bff',
            hover:'#0069d9',
            color:'#fff',
            active:'#005cbf'
        }
    }
    const width = fullWidth && "100%"
    const isActive = active && {className:'active'}
    return (
        <ButtonStyled 
            background={colorChip[color].background}
            hover={colorChip[color].hover}
            color={colorChip[color].color}
            active={colorChip[color].active}
            width={width}
            {...isActive}
        >
            {children}
        </ButtonStyled>
    )
}
