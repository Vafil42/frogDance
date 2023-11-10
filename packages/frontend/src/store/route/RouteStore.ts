import { makeAutoObservable } from "mobx";

import { RouteDetailEntity } from "./entities/RouteDetailEntity";



export class RouteStore {
    constructor() {
        makeAutoObservable(this)
    }

    routs!: RouteDetailEntity[]
    rout!: RouteDetailEntity
}