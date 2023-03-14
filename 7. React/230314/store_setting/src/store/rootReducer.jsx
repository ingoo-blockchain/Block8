const intialState = {
    counter: {
        count:5
    }
}

const rootReducer = (state, action) => {
    switch(action.type) {
        case "increment":
            return { ...state,counter:{count: state.counter.count+1} }
        case "decrement":
            return { ...state,counter:{count: state.counter.count-1} }
        default:
            return intialState
    }
}

export default rootReducer