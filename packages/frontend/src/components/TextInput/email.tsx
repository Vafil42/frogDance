import { observer } from "mobx-react-lite"
import { inputStyles } from "./style.css"

const TextInputEmail = ({ placeholder, value, onChange }: any) => {
    return <input className={inputStyles} type="email" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
}

export default observer(TextInputEmail)