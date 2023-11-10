import { createContext, useContext } from "react";

// Write your new stores here
export class RootStore {

}

export const RootStoreContext = createContext<RootStore | null>(null)

export const useStore = () => {
    const context = useContext(RootStoreContext)
    if (!context) throw new Error("context is null")

    return context
}