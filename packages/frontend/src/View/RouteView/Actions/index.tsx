import LinkButton from "components/Button/LinkButton"
import { observer } from "mobx-react-lite"

const Actions = () => {
    return <LinkButton to="create">Добавить маршрут</LinkButton>
}

export default observer(Actions)