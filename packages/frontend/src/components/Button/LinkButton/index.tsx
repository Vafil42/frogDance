import { ReactNode } from "react";
import Button from ".."
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

interface LinkButtonInterface {
    classname?: string,
    onClick?: () => void;
    children: ReactNode,
    to: string,
}

const LinkButton = (props: LinkButtonInterface) => {
    return <Button onClick={props.onClick}><Link to={props.to}>{props.children}</Link></Button>
}

export default observer(LinkButton)