import { observer } from "mobx-react-lite"
import { ReactNode } from "react"

interface ButtonInterface {
    classname?: string,
    onClick: () => void,
    children: ReactNode,
}

const Button = (params: ButtonInterface) => {
    return <div>
        <button>{params.children}</button>
    </div>
}

export default observer(Button)