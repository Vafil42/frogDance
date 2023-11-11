import { RootStore, RootStoreContext } from "context"
import { useOutletContext, useParams } from "react-router-dom"
import EditRouteView from "View/RouteView/EditFlowView"

export const EditRoutePage = () => {
    const rootStore = useOutletContext() as RootStore

    const { id } = useParams()

    return <RootStoreContext.Provider value={rootStore}>
        <EditRouteView entityId={id} />
    </RootStoreContext.Provider>
}