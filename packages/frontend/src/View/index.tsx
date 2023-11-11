import { useMemo } from "react"
import { RootStore } from "context"
import { Link, Outlet } from "react-router-dom"
import { childStyles, headerStyles, linkStyles, linksStyles, titleStyles, wrapperStyles } from "./style.css"

const AppView = () => {
    const store = useMemo(() => new RootStore, [])
    const headerRoutes = [
        {
            path: "company",
            placeholder: "Компания"
        },
        {
            path: "routs",
            placeholder: "Маршруты"
        }
    ]

    return <div className={wrapperStyles}>
        <div className={headerStyles}>
            <div className={titleStyles}><img src="/text-logo.svg" /></div>
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