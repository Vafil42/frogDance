import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"
import RouteDetailView from "View/RouteView/FlowDetailView"
export const RouteDetailPage = () => {
    const rootStore = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={rootStore}>
        <RouteDetailView />
    </RootStoreContext.Provider>
}