import { makeAutoObservable } from "mobx";
import { useRequestManager } from "requestManager";

export class AuthStore {
    constructor() {
        makeAutoObservable(this)
    }

    login = ""
    setLogin = (value: string) => {this.login = value; console.log(this.login)}
    setPass = (value: string) => this.password = value
    setName = (value: string) => this.name = value
    setDescription = (value: string) => this.description = value
        
    name? = ""

    description? = ""

    password = ""

    requestManager = useRequestManager()

    get signInReady() {
        return {login: this.login, password: this.password}
    }

    get registrationReady() {
        return {login: this.login, password: this.password, name: this.name, description: this.description}
    }

    signIn = () => {
        console.log(this.signInReady)
        this.requestManager.createRequest({
            url: `company/update/${import.meta.env.VITE_COMPANY_ID}`,
            method: "PATCH",
            body: this.signInReady
        })
    }
    singUp = () => {
        this.requestManager.createRequest({
            url: `company/create/${import.meta.env.VITE_COMPANY_ID}`,
            method: "POST",
            body: this.registrationReady
        })
    }
}