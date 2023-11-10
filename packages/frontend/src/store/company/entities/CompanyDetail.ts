export class CreateCompanyDetailEntity {
    name!: string
    login!: string
    password!: string
    description!: string
}

export class CompanyDetailEntity extends CreateCompanyDetailEntity {
    id!: string
}