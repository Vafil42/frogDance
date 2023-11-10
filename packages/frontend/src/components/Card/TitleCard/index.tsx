import { ReactNode } from "react"
import Card from ".."
import { observer } from "mobx-react-lite"
import { subtitleStyles, titleStyles, titlesStyles, wrapperStyles } from "./style.css"

interface TitleCardInterface {
    children: ReactNode,
    subtitle: string,
    actions?: ReactNode,
}

const TitleCard = (props: TitleCardInterface) => {
    return <Card>
        <div className={wrapperStyles}>
            <div className={titlesStyles}>
                <div className={subtitleStyles}>{props.subtitle}</div>
                <div className={titleStyles}>{props.children}</div>
            </div>
            {props.actions}
        </div>

    </Card>
}

export default observer(TitleCard)