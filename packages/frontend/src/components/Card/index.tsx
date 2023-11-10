import { ReactNode } from "react";
import { titleStyles, wrapperStyles } from "./style.css";
import { observer } from "mobx-react-lite";

interface CardInterface {
    title?: string,
    children: ReactNode,
    className?: string,
}

const Card = (props: CardInterface) => {
    return <div className={props.className}>
        <div className={wrapperStyles}>
            {props.title && <div className={titleStyles}>{props.title}</div>}
            {props.children}
        </div>
    </div>
}
export default observer(Card)