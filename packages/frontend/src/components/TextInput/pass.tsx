import { observer } from "mobx-react-lite"
import { inputStyles } from "./style.css"
const TextInputPass = ({ placeholder, value, onChange, className }: any) => {
    return <input className={inputStyles} type="password" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
}

export default observer(TextInputPass)