import AuthView from "View/Auth"
import { RootStore, RootStoreContext } from "context"
import { useOutletContext } from "react-router-dom"

export const AuthPage = () => {
    const store = useOutletContext() as RootStore

    return <RootStoreContext.Provider value={store}>
        <AuthView />
    </RootStoreContext.Provider>
}