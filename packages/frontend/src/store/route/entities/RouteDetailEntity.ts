import { PointDetailEntity } from "./point/PointDetailEntity"

export class CreateRouteDetailEntity {
    name!: string

    description!: string
}

export class RouteDetailEntity extends CreateRouteDetailEntity {
    updatedAt?: string

    _id!: string

    points: PointDetailEntity[] = []
}