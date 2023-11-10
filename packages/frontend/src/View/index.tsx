import { useMemo } from "react"
import { RootStore } from "context"
import { Link, Outlet } from "react-router-dom"
import { childStyles, headerStyles, linkStyles, linksStyles, titleStyles, wrapperStyles } from "./style.css"

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

    return <div className={wrapperStyles}>
        <div className={headerStyles}>
            <div className={titleStyles}>СМОЛГИД</div>
            <div className={linksStyles}>
                {headerRoutes.map((route, index) => <Link className={linkStyles} key={index} to={route.path}>{route.placeholder}</Link>)}
            </div>
        </div>
        <div className={childStyles}>
            <Outlet context={store} />
        </div>
    </div>
}

export default AppView