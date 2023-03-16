import {useDispatch, useSelector} from 'react-redux'

export const Login = () => {
    const dispatch = useDispatch()
    const {loadding, error, data, isLogin} = useSelector(state=> state.user)

    const loginAction = () => {
        dispatch({type:'USER/LOGIN'})
    }

    const logoutAction = () => {
        dispatch({type:'USER/LOGOUT'})
    }

    return <>
        {
            isLogin
            ? <button onClick={logoutAction}>Logout</button> 
            : <button onClick={loginAction}>Login</button>
        }
    </>
}