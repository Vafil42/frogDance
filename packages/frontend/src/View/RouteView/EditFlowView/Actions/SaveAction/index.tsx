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

    return <LinkButton to="/flow" classname={wrapperStyles} onClick={() => routStore.createRout(entity, import.meta.env.VITE_COMPANY_ID)}>Сохранить</LinkButton>
}

export default observer(SaveAction)