import { makeAutoObservable } from "mobx";
import { CreateRouteDetailEntity, RouteDetailEntity } from "./RouteDetailEntity";
import { CreatePointEntity } from "./point/CreatePointEntity";

export class CreateRouteEntity {
    static buildForEntity(entity: RouteDetailEntity) {
        const object = new CreateRouteEntity()
        object.entity = entity as CreateRouteDetailEntity
        entity.points.forEach((point) => object.points.push(CreatePointEntity.buildForEntity(point)))
        return object
    }

    constructor() {
        makeAutoObservable(this)
    }

    entity = new CreateRouteDetailEntity()
    setName = (value: string) => this.entity.name = value
    setDescription = (value: string) => this.entity.description = value

    points: CreatePointEntity[] = []
    addPoint = () => this.points.push(new CreatePointEntity())
    deletePoint = (index: number) => this.points.splice(index)

    get apiReady() {
        return {
            ...this.entity,
            points: this.points.map((point) => point.apiReady)
        }
    }
}