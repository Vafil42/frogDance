import { useMemo } from "react"
import { RootStore } from "context"
import { Link, Navigate, Outlet } from "react-router-dom"
import cookies from "react-cookies"
import { childStyles, headerStyles, linkStyles, linksStyles, titleStyles, wrapperStyles } from "./style.css"

const AppView = () => {
    if (!cookies.load("token")) return <Navigate to={"/auth"} />

    const store = useMemo(() => new RootStore, [])
    const headerRoutes = [
        {
            path: "company",
            placeholder: "Компания"
        },
        {
            path: "routes",
            placeholder: "Маршруты"
        }
    ]

    return <div className={wrapperStyles}>
        <div className={headerStyles}>
            <div className={titleStyles}><img src="/logo-white.svg" width={220} /></div>
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