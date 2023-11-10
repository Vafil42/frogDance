import { makeAutoObservable } from "mobx";

import { RouteDetailEntity } from "./entities/RouteDetailEntity";
import { CreateRouteEntity } from "./entities/RouteCreateStore";
import { useRequestManager } from "../../requestManager";

export class RouteStore {
    constructor() {
        makeAutoObservable(this)
    }

    routs?: RouteDetailEntity[]
    rout?: RouteDetailEntity | undefined

    requestManager = useRequestManager()

    createRout(entity: CreateRouteEntity, companyId: string) {
        try {
            this.requestManager.createRequest({
                method: "POST",
                url: "flow/create",
                body: { ...entity.apiReady, company: { _id: companyId } }
            })
        } catch (error) {error}
    }

    loadRouts(companyId: string) {
        try {
            this.requestManager.createRequest({
                method: "GET",
                url: `flow/for-company/${companyId}`,
            }).then((responce) => this.routs = responce.data)

            this.rout = undefined
        } catch (e) { e }
    }

    loadRout(id: string) {
        try {
            this.requestManager.createRequest({
                method: "GET",
                url: `flow/get/${id}`
            }).then((responce) => this.rout = responce.data)
        } catch (e) { e }
    }

    deleteRout(id: string) {
        try {
            this.requestManager.createRequest({
                method: "DELETE",
                url: `flow/${id}/delete`
            }).then((responce) => this.rout = responce.data)
        } catch (e) {e}
    }
}