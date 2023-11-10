import { makeAutoObservable } from "mobx";

import { CreatePointDetailEntity, PointDetailEntity } from "./PointDetailEntity";

export class CreatePointEntity {
    static buildForEntity(entity: PointDetailEntity) {
        const object = new CreatePointEntity()
        object.entity = entity as CreatePointDetailEntity
        return object
    }

    constructor() {
        makeAutoObservable(this)
    }

    entity = new CreatePointDetailEntity()

    setName = (value: string) => this.entity.name = value
    setDescription = (value: string) => this.entity.description = value
    setCoordinates = (value: string) => this.entity.coordinates = value

    get apiReady() {
        return this.entity
    }
}