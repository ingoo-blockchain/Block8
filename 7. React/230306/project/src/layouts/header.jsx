import { Logo, HeaderWrapper, Nav } from "../components/header"
import { NavLink } from "react-router-dom"

export const Header = ({ user, logout }) => {
    const handleClick = () => {
        // 어떤코드를 ..?
        logout()
    }

    return (
        <HeaderWrapper>
            <Logo>Logo</Logo>
            <Nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    {user === "" ? (
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    ) : (
                        <li>
                            <NavLink to="/logout" onClick={handleClick}>
                                Logout
                            </NavLink>
                        </li>
                    )}
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </Nav>
        </HeaderWrapper>
    )
}
