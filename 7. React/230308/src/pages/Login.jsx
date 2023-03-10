import { useStore } from "../store"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const { state, dispatch } = useStore()
    const navigate = useNavigate()

    const handleClick = () => {
        // 전역상태를 바꾸기 위해서요.
        dispatch({ type: "LOGIN", payload: !state.isLogin })
        navigate("/")
    }

    return (
        <>
            <button onClick={handleClick}>로그인</button>
        </>
    )
}
