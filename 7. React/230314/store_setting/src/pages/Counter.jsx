import { useSelector, useDispatch } from 'react-redux'

export const Counter = () => {
    const dispatch = useDispatch()
    const {count} = useSelector((state)=>state.counter)

    const increment = () => {
        dispatch({type:'increment'}) 
    }

    const decrement = () => {
        dispatch({type:'decrement'}) 
    }
   
    return (
        <>
            <h2>Counter : {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
