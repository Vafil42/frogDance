import axios from "axios"
import type { Method } from "axios"

interface RequestInterface {
    method: Method,
    url: string,
    body?: any,
}

interface AuthRequestInterface {
    body: SignInData | SignUpData
    url: string,
    method?: string
}

interface SignInData {
    login: string,
    password: string
}

interface SignUpData {
    email: string,
}

export class RequestManager {
    axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL,
    })

    async createRequest(request: RequestInterface) {
        const responce = await this.axios({
            url: request.url,
            method: request.method,
            params: request.method === "GET" ? request.body : undefined,
            data: request.method !== "GET" ? request.body : undefined,
        })

        return responce
    }

    async createAuthRequest({ body, url, method = "POST" }: AuthRequestInterface) {
        const responce = await this.axios({
            url,
            method,
            data: body,
            withCredentials: true,
        })
        return responce
    }
}

let requestManager: RequestManager
export const useRequestManager = () => {
    if (!requestManager) requestManager = new RequestManager()
    return requestManager
}