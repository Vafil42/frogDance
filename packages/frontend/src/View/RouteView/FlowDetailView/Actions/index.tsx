import LinkButton from "components/Button/LinkButton"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { buttonStyles, wrapperStyles } from "./style.css"
import { useState } from "react"
import Button from "components/Button"

const Actions = () => {
    const { routStore } = useStore()
    const { id } = useParams()

    const [deleteState, setDeleteState] = useState(false)

    return <div className={wrapperStyles}>
        {deleteState ? <LinkButton to="/routes" onClick={() => routStore.deleteRoute(id!)}>Вы уверены?</LinkButton> : <Button onClick={() => setDeleteState(true)}>Удалить</Button>}
        <div className={buttonStyles}>
            <LinkButton to="edit" >Редактировать</LinkButton>
        </div>
    </div>
}

export default observer(Actions)