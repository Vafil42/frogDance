import { observer } from "mobx-react-lite"
import cn from "classnames"
import { inputStyles, placeholderStyles, wrapperStyles } from "./style.css"


interface TextFieldInterface {
    placeholder?: string,
    example?: string,
    value: string | undefined,
    onChange: (value: string) => void,
    className?: string,
    size?: number,
}

const TextField = (props: TextFieldInterface) => {
    return <div className={cn(wrapperStyles, props.className)}>
        <div className={placeholderStyles}>{props.placeholder}</div>
        <input type="text" className={inputStyles} placeholder={props.example} value={props.value} onChange={(e) => props.onChange(e.target.value)} size={props.size ?? 20} />
    </div>
}

export default observer(TextField)