import { useState, useEffect } from "react"

export const usePersistedState = (key, initialState) => {
    const [state, setState] = useState(() => {
        const storagedState = localStorage.getItem(key)
        return !storagedState ? initialState : JSON.parse(storagedState)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}
