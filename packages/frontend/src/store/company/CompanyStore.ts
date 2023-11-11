import { makeAutoObservable } from "mobx";
import { CompanyDetailEntity, CreateCompanyDetailEntity } from "./entities/CompanyDetail";
import { EditCompanyEntity } from "./entities/EditCompany";
import { useRequestManager } from "requestManager";

export class CompanyStore {
    constructor() {
        makeAutoObservable(this)
    }

    entity?: CompanyDetailEntity

    requestManager = useRequestManager()

    loadCompany() {
        this.requestManager.createRequest({
            url: `company/get`,
            method: "GET"
        }).then((responce) => {
            this.entity = responce.data
        })
    }

    editCompany(entity: EditCompanyEntity) {
        this.requestManager.createRequest({
            url: `company/update/${import.meta.env.VITE_COMPANY_ID}`,
            method: "PATCH",
            body: entity.apiReady
        })
    }
    createCompany(entity: CreateCompanyDetailEntity) {
        this.requestManager.createRequest({
            url: `company/update/${import.meta.env.VITE_COMPANY_ID}`,
            method: "POST",
            body: entity
        })
    }
}