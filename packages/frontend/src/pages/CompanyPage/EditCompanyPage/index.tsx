import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"
import EditCompanyView from "View/CompanyView/EditCompanyView"

export const EditCompanyPage = () => {
    const rootStore = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={rootStore}>
        <EditCompanyView />
    </RootStoreContext.Provider>
}