export class CreatePointDetailEntity {
    name!: string

    description!: string

    coordinates!: string
}

export class PointDetailEntity extends CreatePointDetailEntity {
    id!: string
}