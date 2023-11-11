import { observer } from "mobx-react-lite"
import { ReactNode } from "react"
import { buttonStyles } from "./style.css"

interface ButtonInterface {
    className?: string,
    onClick?: () => void;
    children: ReactNode,
}

const Button = (props: ButtonInterface) => {
    return <div className={props.className}>
        <button className={buttonStyles} onClick={props.onClick}>{props.children}</button>
    </div>
}

export default observer(Button)