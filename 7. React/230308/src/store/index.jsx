import { createContext, useContext, useReducer } from "react"
import { rootReducer } from "./reducer"

export const Context = createContext()
export const useStore = () => useContext(Context)

export const StoreProvider = ({ children }) => {
    const intitalState = {
        isLogin: false,
        user: {},
    }
    const [state, dispatch] = useReducer(rootReducer, intitalState)

    return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
}
