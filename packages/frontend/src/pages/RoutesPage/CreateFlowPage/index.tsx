import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"
import EditFlowView from "views/FlowView/EditFlowView"

export const CreateFlowPage = () => {
    const rootStore = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={rootStore}>
        <EditFlowView />
    </RootStoreContext.Provider>
}   