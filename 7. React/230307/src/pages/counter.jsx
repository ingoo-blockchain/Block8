import React, { useState, useCallback, useMemo } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const increment = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const decrement = useCallback(() => {
        setCount(count - 1)
    }, [count])

    // useCallback(function값, [상태]) => function값
    const view = useCallback(() => {
        console.log("실행되나?~")
        return count
    }, [count])

    const getDate = () => {
        const today = new Date()

        const year = today.getFullYear()
        const month = today.getMonth()
        const day = today.getDate()
        const hour = today.getHours()
        const minute = today.getMinutes()
        const second = today.getSeconds()

        return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    }

    // useMemo(함수값, []) => 함수값에 들어가있는 return 값
    const today = useMemo(() => {
        return getDate()
    }, [count])

    return (
        <>
            <h2>{view()}</h2>
            <h3>{today}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <h2>{value}</h2>
            <button
                onClick={() => {
                    setValue(value + 1)
                }}
            >
                +
            </button>
        </>
    )
}

class Counter2 extends React.Component {
    state = { count: 0 }

    increment() {
        this.setState(this.state.count + 1)
    }
    decrement() {
        this.setState(this.state.count - 1)
    }
    view() {
        return this.state.count
    }

    render() {
        return (
            <>
                <h2>{this.view()}</h2>
                <button onClick={() => this.increment()}>+</button>
                <button onClick={() => this.decrement()}>-</button>
            </>
        )
    }
}
