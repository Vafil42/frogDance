import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"
import FlowDetailView from "views/FlowView/FlowDetailView"

export const FlowDetailPage = () => {
    const rootStore = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={rootStore}>
        <FlowDetailView />
    </RootStoreContext.Provider>
}