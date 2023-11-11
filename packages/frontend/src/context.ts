import { createContext, useContext } from "react";
import { CompanyStore } from "store/company/CompanyStore";
import { AuthStore } from "store/auth/AuthStore"; 
import { RouteStore } from "store/route/RouteStore"
// Write your new stores here
export class RootStore {
    companyStore = new CompanyStore()
    authStore = new AuthStore()
    routStore = new RouteStore()
}

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
    const context = useContext(RootStoreContext)
    if (!context) throw new Error("context is null")

    return context
}