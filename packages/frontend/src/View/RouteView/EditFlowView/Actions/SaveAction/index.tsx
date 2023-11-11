import { observer } from "mobx-react-lite"
import { CreateRouteEntity } from "store/route/entities/RouteCreateStore"
import { wrapperStyles } from "./style.css"
import { useStore } from "context"
import LinkButton from "components/Button/LinkButton"

interface AddPointActionInterface {
    entity: CreateRouteEntity
}

const SaveAction = ({ entity }: AddPointActionInterface) => {
    const { routStore } = useStore()

    return <LinkButton to="/routes" classname={wrapperStyles} onClick={() => routStore.createRout(entity)}>Сохранить</LinkButton>
}

export default observer(SaveAction)