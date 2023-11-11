import { observer } from "mobx-react-lite"
import { inputStyles } from "./style.css"

const TextInput = ({ placeholder, value, onChange }: any) => {
    return <input className={inputStyles} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
}

export default observer(TextInput)