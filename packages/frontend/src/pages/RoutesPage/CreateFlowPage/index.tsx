import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"
import EditFlowView from "View/RouteView/EditFlowView"

export const CreateRoutePage = () => {
    const rootStore = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={rootStore}>
        <EditFlowView />
    </RootStoreContext.Provider>
}   