import { NavLink } from 'react-router-dom'

export const Header = ({ items }) => {

    const navigation = items.map((category) => {
        return <li key={category.path}>
            <NavLink to={category.path}>{category.name}</NavLink>
        </li>
    })

    return <ul>{navigation}</ul>
}