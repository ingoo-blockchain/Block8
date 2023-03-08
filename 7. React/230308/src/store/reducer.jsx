export const rootReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLogin: action.payload }
        default:
            return state
    }
}
