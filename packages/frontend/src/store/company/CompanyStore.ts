import { makeAutoObservable } from "mobx";
import { CompanyDetailEntity } from "./entities/CompanyDetail";
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

        this.entity = { name: "Смоленский завод резиноизделий", id: "1", description: "Тестовое описание компании. В теории должно быть большим" }
    }

    editCompany(entity: EditCompanyEntity) {
        this.requestManager.createRequest({
            url: `company/update/${import.meta.env.VITE_COMPANY_ID}`,
            method: "PATCH",
            body: entity.apiReady
        })
    }
}