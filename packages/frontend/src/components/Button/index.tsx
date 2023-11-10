import { observer } from "mobx-react-lite"
import { ReactNode } from "react"
import { buttonStyles } from "./style.css"

interface ButtonInterface {
    classname?: string,
    onClick?: () => void;
    children: ReactNode,
}

const Button = (params: ButtonInterface) => {
    return <div>
        <button className={buttonStyles} onClick={params.onClick}>{params.children}</button>
    </div>
}

export default observer(Button)