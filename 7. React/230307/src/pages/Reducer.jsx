import { useReducer } from "react"

// {type:'', payload:10}
const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { count: state.count + action.payload, user: state.user }
        case "decrement":
            return { count: state.count - action.payload, user: state.user }
    }
}

export const CounterReducer = () => {
    const intialState = { count: 0, user: "" }
    const [state, dispatch] = useReducer(reducer, intialState)

    // 1씩
    const handleClick = (event) => () => {
        dispatch({ type: event, payload: 1 })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { counter } = e.target

        const action = {
            type: "increment",
            payload: parseInt(counter.value),
        }

        dispatch(action) // 1. 어떤실행을할건지, 2. 바꿀 내용들
    }

    return (
        <>
            <h2>Count : {state.count}</h2>
            <button onClick={handleClick("increment")}>+</button>
            <button onClick={handleClick("decrement")}>-</button>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="text" id="counter" name="counter" />
                <button>+</button>
            </form>
        </>
    )
}
