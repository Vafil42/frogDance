import { observer } from "mobx-react-lite"
import { inputStyles, placeholderStyles, wrapperStyles } from "./style.css"


interface StringFieldInterface {
    placeholder?: string,
    example?: string,
    value: string | undefined,
    onChange: (value: string) => void,
    className?: string,
    size?: number,
}

const StringField = (props: StringFieldInterface) => {
    return <div className={props.className}>
        <div className={wrapperStyles}>
            <div className={placeholderStyles}>{props.placeholder}</div>
            <input type="text" className={inputStyles} placeholder={props.example} value={props.value} onChange={(e) => props.onChange(e.target.value)} size={props.size ?? 20} />
        </div>
    </div>
}

export default observer(StringField)