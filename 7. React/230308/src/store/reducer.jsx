export const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLogin: action.payload }
        case "LOGOUT":
            return { ...state, isLogin: false }
        default:
            return state
    }
}
