import CompanyView from "View/CompanyView"
import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"

export const CompanyPage = () => {
    const store = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={store}>
        <CompanyView />
    </RootStoreContext.Provider>
}