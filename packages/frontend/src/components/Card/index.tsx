import { ReactNode } from "react";
import { titleStyles, wrapperStyles } from "./style.css";
import { observer } from "mobx-react-lite";

interface CardInterface {
    title?: string,
    children: ReactNode,
    className?: string,
    actions?: ReactNode,
}

const Card = (props: CardInterface) => {
    return <div className={props.className}>
        <div className={wrapperStyles}>
            {props.title && <div className={titleStyles}>{props.title}</div>}
            {props.children}
        </div>
        {props.actions && <div className="">{props.actions}</div>}
    </div>
}
export default observer(Card)