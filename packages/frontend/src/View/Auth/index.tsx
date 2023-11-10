import TextInputEmail from "components/TextInput/email"
import TextInputPass from "components/TextInput/pass"
import { observer } from "mobx-react-lite"
import { auth, sec} from "./style.css"
import { RootStore } from "context"
import Button from "components/Button"
import { useMemo } from "react"

const AuthView = () => {
    const { authStore } = useMemo(() => new RootStore, [])

    return <>
    <section className={sec}>
    <div className={auth}>
    <TextInputEmail placeholder="email" value={authStore.login} onChange={(value: string) => authStore.setLogin(value)}></TextInputEmail>
    <TextInputPass placeholder="password" value={authStore.password} onChange={(value: string) => authStore.setPass(value)}> </TextInputPass>
    <Button classname="" onClick={authStore.signIn}>Войти</Button>
    </div>
    </section>
    </>
}

export default observer(AuthView)