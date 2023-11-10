import TextInputEmail from "components/TextInput/email"
import TextInputPass from "components/TextInput/pass"
import { observer } from "mobx-react-lite"
import { auth, sec, but, butD} from "./style.css"
import { RootStore } from "context"
import { useMemo } from "react"

const AuthView = () => {
    const { authStore } = useMemo(() => new RootStore, [])

    return <>
    <section className={sec}>
    <div className={auth}>
    <TextInputEmail placeholder="email" value={authStore.login} onChange={(value: string) => authStore.setLogin(value)}></TextInputEmail>
    <TextInputPass placeholder="password" value={authStore.password} onChange={(value: string) => authStore.setPass(value)}> </TextInputPass>
    <div className={butD}><button className={but} onClick={authStore.signIn}>Войти</button></div>
    </div>
    </section>
    </>
}

export default observer(AuthView)