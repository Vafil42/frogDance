import { createContext, useContext } from "react";
import { CompanyStore } from "store/company/CompanyStore";

// Write your new stores here
export class RootStore {
    companyStore = new CompanyStore()
}

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
    const context = useContext(RootStoreContext)
    if (!context) throw new Error("context is null")

    return context
}