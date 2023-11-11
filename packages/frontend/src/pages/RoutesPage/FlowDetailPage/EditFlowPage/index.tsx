import { RootStore, RootStoreContext } from "context"
import { useOutletContext, useParams } from "react-router-dom"
import EditFlowView from "views/FlowView/EditFlowView"

export const EditFlowPage = () => {
    const rootStore = useOutletContext() as RootStore

    const { id } = useParams()

    return <RootStoreContext.Provider value={rootStore}>
        <EditFlowView entityId={id} />
    </RootStoreContext.Provider>
}