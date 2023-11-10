import TextInputEmail from "components/TextInput/email"
import TextInputPass from "components/TextInput/pass"
import { observer } from "mobx-react-lite"
import { auth, sec} from "./style.css"
const AuthView = () => {

    return <>
    <section className={sec}>
    <div className={auth}>
    <TextInputEmail placeholder="email"> </TextInputEmail>
    <TextInputPass placeholder="password"> </TextInputPass>
    </div>
    </section>
    </>
}

export default observer(AuthView)