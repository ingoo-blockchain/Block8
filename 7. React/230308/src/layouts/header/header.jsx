import { Nav, HeaderWrapper, Logo } from "./styled"
import { Navigation } from "../navigation"
import { useStore } from "../../store"

export const Header = () => {
    const { state } = useStore()

    const category = [
        { path: "/", name: "Home" },
        { path: "/login", name: "Login", isLogin: false },
        { path: "/singup", name: "Signup", isLogin: false },
        { path: "/logout", name: "Logout", isLogin: true },
        { path: "/profile", name: "Profile", isLogin: true },
        {
            path: "/board/list",
            name: "Board",
            subMenu: [
                { path: "/board/list", name: "list" },
                {
                    path: "/board/write",
                    name: "write",
                    subMenu: [
                        { path: "/logout", name: "Logout", isLogin: false },
                        { path: "/profile", name: "Profile", isLogin: false },
                    ],
                },
            ],
        },
    ]

    return (
        <HeaderWrapper>
            <Logo>Logo</Logo>
            <Nav>
                <Navigation category={category} isLogin={state.isLogin} />
            </Nav>
        </HeaderWrapper>
    )
}
