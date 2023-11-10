import { ReactNode } from "react"
import Card from ".."
import { observer } from "mobx-react-lite"
import { subtitleStyles, titleStyles } from "./style.css"

interface TitleCardInterface {
    children: ReactNode,
    subtitle: string,
}

const TitleCard = (props: TitleCardInterface) => {
    return <Card className={"df"}>
        <div className={subtitleStyles}>{props.subtitle}</div>
        <div className={titleStyles}>{props.children}</div>
    </Card>
}

export default observer(TitleCard)