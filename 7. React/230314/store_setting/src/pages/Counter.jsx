import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

export const Counter = () => {
    const dispatch = useDispatch()
    const {loadding, error, data} = useSelector((state)=>state.counter) // {loadding:true,error:null,data:{count: 0}}

    useEffect(()=>{
        ;(async ()=>{
            try {
                const response = await axios.get('http://localhost:3005/counters')
                dispatch({ type:'COUNTER/SETUP_SUCCESS', payload:response.data})
            } catch (e) {
                dispatch({ type:'COUNTER/SETUP_ERROR', payload:e})
            }
            
        })()
    },[])

    const increment = async () => {
        try {
            dispatch({type:'COUNTER/SETUP_START'})
            const response = await axios.post('http://localhost:3005/counters/increment')
            dispatch({ type:'COUNTER/SETUP_SUCCESS', payload:response.data})
        } catch (e) {
            dispatch({ type:'COUNTER/SETUP_ERROR', payload:e})
        }
    }
    const decrement = async () => {
        try {
            dispatch({type:'COUNTER/SETUP_START'})
            const response = await axios.post('http://localhost:3005/counters/decremenet')
            dispatch({ type:'COUNTER/SETUP_SUCCESS', payload:response.data})
        } catch (e) {
            dispatch({ type:'COUNTER/SETUP_ERROR', payload:e})
        }
    }
    
    if(loadding) return <>Loadding</>
    if(error) return <>{error.message}</>
    
    return (
        <>
            {data.count}
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </>
    )
}
