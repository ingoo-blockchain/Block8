const intialState = {
    number: 0,
}

const counterReducer = (state, action) => {
    console.log(`reudcer 호출! ${action.type}`)
    switch (action.type) {
        case "increment":
            return { number: state.number + 1 }
        case "decrement":
            return { number: state.number - 1 }
        default:
            return intialState
    }
}

module.exports = { counterReducer }
