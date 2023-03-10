import { createContext, useContext, useReducer } from "react"
import { rootReducer } from "./reducer"
import { usePersistedState } from "../hooks/usePersistedState"

export const Context = createContext()
export const useStore = () => useContext(Context)

// Window 객체
// localStorage.setItem()
// localStorage.getItem()
export const StoreProvider = ({ children }) => {
    // 1. 혹시 로컬스토리에 데이터가 있니 ?
    // const storageState = localStorage.getItem("state")
    const intitalState = {
        isLogin: false, // true
        user: {},
    }

    // const initial = !storageState ? intitalState : JSON.parse(storageState)
    const [state, dispatch] = useReducer(rootReducer, intitalState)
    const [persistedState, setPersistedState] = usePersistedState("state", state)

    const globalState = {
        state: persistedState,
        dispatch: (action) => {
            setPersistedState(rootReducer(persistedState, action))
        },
    }

    return <Context.Provider value={globalState}>{children}</Context.Provider>
}
