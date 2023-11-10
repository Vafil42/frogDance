import { useMemo } from "react"
import { RootStore } from "context"
import { Link, Outlet } from "react-router-dom"
import { headerStyles, linkStyles, linksStyles, titleStyles } from "./style.css"

const AppView = () => {
    const store = useMemo(() => new RootStore, [])
    const headerRoutes = [
        {
            path: "main",
            placeholder: "Главная"
        },
        {
            path: "company",
            placeholder: "Компания"
        },
        {
            path: "flow",
            placeholder: "Маршруты"
        }
    ]

    return <div>
        <div className={headerStyles}>
            <div className={titleStyles}>Frog Dance</div>
            <div className={linksStyles}>
                {headerRoutes.map((route, index) => <Link className={linkStyles} key={index} to={route.path}>{route.placeholder}</Link>)}
            </div>
        </div>
        <Outlet context={store} />
    </div>
}

export default AppView