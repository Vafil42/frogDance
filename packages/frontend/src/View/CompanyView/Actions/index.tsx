import Button from "components/Button"
import LinkButton from "components/Button/LinkButton"
import { observer } from "mobx-react-lite"

const Actions = () => {
    return <LinkButton to={"/company"}>Редактировать</LinkButton>
}

export default observer(Actions)