import LinkButton from "components/Button/LinkButton"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { buttonStyles, wrapperStyles } from "./style.css"
import { useState } from "react"
import Button from "components/Button"

const Actions = () => {
    const { flowStore } = useStore()
    const { id } = useParams()

    const [deleteState, setDeleteState] = useState(false)

    return <div className={wrapperStyles}>
        {deleteState ? <LinkButton to="/flow" onClick={() => flowStore.deleteFlow(id)}>Вы уверены?</LinkButton> : <Button onClick={() => setDeleteState(true)}>Удалить</Button>}
        <LinkButton to="edit" className={buttonStyles}>Редактировать</LinkButton>
    </div>
}

export default observer(Actions)