import { memo } from "react"
import { NavLink } from "react-router-dom"

export const Navigation = memo(({ category, isLogin }) => {
    const categortFilter = (item) => !item.hasOwnProperty("isLogin") || item.isLogin === isLogin
    const categoryMap = (item) => (
        <li key={item.path}>
            <NavLink to={item.path}>{item.name}</NavLink>
            {item.subMenu && <Navigation category={item.subMenu} isLogin={isLogin} />}
        </li>
    )

    return <ul>{category.filter(categortFilter).map(categoryMap)}</ul>
})
