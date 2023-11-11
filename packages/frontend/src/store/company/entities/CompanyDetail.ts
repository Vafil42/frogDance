export class CreateCompanyDetailEntity {
    name!: string
    description!: string
}

export class CompanyDetailEntity extends CreateCompanyDetailEntity {
    id!: string
}