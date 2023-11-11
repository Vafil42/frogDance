import RouteView from "View/RouteView"
import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"

export const RoutePage = () => {
    const store = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={store}>
        <RouteView />
    </RootStoreContext.Provider>
}