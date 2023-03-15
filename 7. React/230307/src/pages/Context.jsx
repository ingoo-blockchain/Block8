import { useState, createContext, useContext } from "react"

const Global = createContext()

const D = () => {
    const obj = useContext(Global)
    return (
        <>
            Hello Context : {obj.user}
            <button
                onClick={() => {
                    obj.setUser("web8855")
                }}
            >
                변경
            </button>
        </>
    )
}
const C = () => {
    return <D />
}
const B = () => {
    return <C />
}
const A = () => {
    return <B />
}

export const Context = () => {
    const [user, setUser] = useState("web7722")

    const intialState = {
        user,
        setUser,
    }

    return (
        <Global.Provider value={intialState}>
            <A />
        </Global.Provider>
    )
}
