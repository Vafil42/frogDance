import LinkButton from "components/Button/LinkButton"
import { observer } from "mobx-react-lite"

const Actions = () => {
    return <LinkButton to={"/company/edit"}>Редактировать</LinkButton>
}

export default observer(Actions)