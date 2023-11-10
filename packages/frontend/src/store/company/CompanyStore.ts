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
        // this.requestManager.createRequest({
        //     url: `company/get/${import.meta.env.VITE_COMPANY_ID}`,
        //     method: "GET"
        // }).then((responce) => {
        //     this.entity = responce.data
        // })

        this.entity = {login: "asas@mail.ru", password: "123", name: "Компаниrrv hyrgntjurrя", id: "1", description: "Описание"}
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