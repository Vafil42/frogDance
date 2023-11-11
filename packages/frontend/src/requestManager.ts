import axios from "axios"
import type { Method } from "axios"
import useCookie from "react-cookies"

interface RequestInterface {
    method: Method,
    url: string,
    body?: unknown,
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
        const token = useCookie.load("token")

        const responce = await this.axios({
            url: request.url,
            method: request.method,
            params: request.method === "GET" ? request.body : undefined,
            data: request.method !== "GET" ? request.body : undefined,
            headers: { Authorization: token }
        })

        return responce
    }

    async createAuthRequest({ body, url, method = "POST" }: AuthRequestInterface) {
        if (useCookie.load("token")) useCookie.remove("token")

        this.axios({
            url,
            method,
            data: body,
            withCredentials: true,
        }).then((responce) => useCookie.save("token", responce.data.token, {}))

    }
}

let requestManager: RequestManager
export const useRequestManager = () => {
    if (!requestManager) requestManager = new RequestManager()
    return requestManager
}