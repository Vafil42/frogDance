import { makeAutoObservable } from "mobx";

import { RouteDetailEntity } from "./entities/RouteDetailEntity";
import { CreateRouteEntity } from "./entities/RouteCreateStore";
import { useRequestManager } from "../../requestManager";

export class RouteStore {
    constructor() {
        makeAutoObservable(this)
    }

    routs?: RouteDetailEntity[]
    route?: RouteDetailEntity | undefined

    requestManager = useRequestManager()

    createRout(entity: CreateRouteEntity) {
        try {
            this.requestManager.createRequest({
                method: "POST",
                url: "routes/create",
                body: { ...entity.apiReady }
            })
        } catch (error) { }
    }

    loadRouts() {
        try {
            this.requestManager.createRequest({
                method: "GET",
                url: `companies/get-routes`,
            }).then((responce) => this.routs = responce.data.routes)

            this.route = undefined
        } catch (e) { }

    }

    loadRoute(id: string) {
        try {
            this.requestManager.createRequest({
                method: "GET",
                url: `routes/get-one/${id}`
            }).then((responce) => this.route = responce.data.route)
        } catch (e) { }
    }

    deleteRoute(id: string) {
        try {
            this.requestManager.createRequest({
                method: "DELETE",
                url: `routes/delete/${id}`
            }).then((responce) => this.route = responce.data)
        } catch (e) { }
    }
}