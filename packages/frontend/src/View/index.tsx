import { useMemo } from "react"
import { RootStore } from "context"
import { Outlet } from "react-router-dom"

const AppView = () => {
    const store = useMemo(() => new RootStore, [])

    return <div>
        <Outlet context={store} />
    </div>
}