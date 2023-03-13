const initialState = {
    userid: "",
    username: "",
}

const ADD = "USER/ADD"
const add = (userid, username) => {
    return { type: ADD, payload: { userid, username } }
}

const userReducer = (state, action) => {
    switch (action.type) {
        case ADD: {
            const { userid, username } = action.payload
            return {
                userid,
                username,
            }
        }
        default:
            return initialState
    }
}

module.exports = { userReducer, add }
