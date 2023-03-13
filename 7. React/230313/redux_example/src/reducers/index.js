const { combineReducers } = require("redux")
const { counterReducer } = require("./counter")
const { userReducer } = require("./user")

const rootReducer = combineReducers({
    counter: counterReducer, // {number:0}
    user: userReducer,
})

module.exports = { rootReducer }
