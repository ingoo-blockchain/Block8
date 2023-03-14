const { createStore, applyMiddleware } = require("redux")
const { rootReducer } = require("../reducers")
const { add } = require("../reducers/user")

// npm install redux-thunk
const createThunkMiddleware = (arguments) => {
    return (store) => (next) => (action) => {
        // console.log("hello world!")
        // console.log(typeof action, action) // object { type: 'increment' }
        if (typeof action === "function") {
            console.log("function 이니?")
            return action()
        }
        console.log("객체이니?")
        return next(action)
    }
}

const store = createStore(rootReducer, applyMiddleware(createThunkMiddleware()))

const api = () => {
    // axios..
    //
    store.dispatch({ type: "increment" })
}

store.dispatch(api)

console.log(store.getState())

// store.dispatch({ type: "increment" }) // Datatype ... Object..
// Function
// console.log(store.getState())

// store.dispatch({ type: "increment" })
// console.log(store.getState()) // 0 -> 1

// store.dispatch({ type: "decrement" })
// store.dispatch({ type: "increment" })
// store.dispatch({ type: "increment" })
// console.log(store.getState()) // 0 -> 1

// store.dispatch({ type: "decrement" })
// store.dispatch({ type: "decrement" })
// store.dispatch({ type: "decrement" })
// console.log(store.getState()) // 0 -> 1

// // axios ... ?
// // response.data.userid, reponse.data.username
// store.dispatch(add("web7722", "123"))
// console.log(store.getState())
