import {NavLink} from 'react-router-dom'

export const Header = () => {
    return <>
        <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/counter'}>Counter</NavLink></li>
            <li><NavLink to={'/login'}>login</NavLink></li>
        </ul>
    </>
}