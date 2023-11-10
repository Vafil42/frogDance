import { ReactNode } from "react";
import { wrapperStyles } from "./style.css";
import { observer } from "mobx-react-lite";

interface CardInterface {
    children: ReactNode,
    className: string,
}

const Card = (props: CardInterface) => {
    return <div className={props.className}>
        <div className={wrapperStyles}>{props.children}</div>
    </div>
}
export default observer(Card)