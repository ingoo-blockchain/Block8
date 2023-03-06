import { useInput } from "../hooks/useInput"
import { useNavigate } from "react-router-dom"

export const Login = ({ login }) => {
    const navigate = useNavigate()
    const userid = useInput("") // {value, onChange}
    const userpw = useInput("")

    const handleSubmit = (e) => {
        e.preventDefault()

        if (userid.value === "web7722" && userpw.value === "1234") {
            login(userid.value)
            alert("로그인 성공")
            navigate("/")
        } else {
            alert("로그인 실패")
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" {...userid} id="userid" name="userid" />
                <input type="password" {...userpw} id="userpw" name="userpw" />
                <button type="submit">로그인</button>
            </form>
        </>
    )
}
