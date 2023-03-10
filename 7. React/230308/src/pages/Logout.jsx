import { useStore } from "../store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Logout = () => {
    const { dispatch } = useStore()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: "LOGOUT" })
        navigate("/")
    }, [])

    return <></>
}
