import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"
import { fieldsStyles, hoverStyles, titleStyles, wrapperStyles } from "./style.css" 
import cn from "classnames"

interface ListElementInterface {
    title: string,
    to: string,
    className?: string,
    fields?: ListElementFieldsInterface
    link?: true,
}

interface ListElementFieldsInterface {
    updatedAt?: string
}

const ListElement = ({ title, to, fields, link }: ListElementInterface) => {
    if (link) return <Link to={to} className={cn(wrapperStyles, hoverStyles)}>
        <div className={titleStyles}>{title}</div>
        {fields && <div className={fieldsStyles}>
            {fields.updatedAt && <div >Дата обновления: {fields.updatedAt}</div>}
        </div>}
    </Link>

    return <div className={wrapperStyles}>
        <div className={titleStyles}>{title}</div>
        {fields && <div className={fieldsStyles}>
            {fields.updatedAt && <div >Дата обновления: {fields.updatedAt}</div>}
        </div>}
    </div>
}

export default observer(ListElement)