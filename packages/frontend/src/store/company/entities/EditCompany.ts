import { makeAutoObservable } from "mobx";
import { CompanyDetailEntity } from "./CompanyDetail";

export class EditCompanyEntity {
    constructor(public entity: CompanyDetailEntity) {
        makeAutoObservable(this)
    }

    setName = (value: string) => this.entity.name = value
    setDescription = (value: string) => this.entity.description = value

    get apiReady() {
        return this.entity
    }
}