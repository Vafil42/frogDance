import TextInputEmail from "components/TextInput/email"
import TextInputPass from "components/TextInput/pass"
import cookies from "react-cookies"
import { observer } from "mobx-react-lite"
import { auth, sec, buttonStyles } from "./style.css"
import { RootStore } from "context"
import { useMemo } from "react"
import { Navigate } from "react-router-dom"
import Button from "components/Button"

const AuthView = () => {
    const { authStore } = useMemo(() => new RootStore, [])

    if (cookies.load("token")) return <Navigate to={"/"} />

    return <>
        <section className={sec}>
            <div className={auth}>
                <TextInputEmail placeholder="email" value={authStore.login} onChange={(value: string) => authStore.setLogin(value)}></TextInputEmail>
                <TextInputPass placeholder="password" value={authStore.password} onChange={(value: string) => authStore.setPass(value)}></TextInputPass>
                <Button onClick={authStore.signIn} className={buttonStyles}>Войти</Button>
            </div>
        </section>
    </>
}

export default observer(AuthView)