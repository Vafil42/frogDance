import { observer } from "mobx-react-lite"
import { CreateRouteEntity } from "store/route/entities/RouteCreateStore"
import { wrapperStyles } from "./style.css"

interface AddPointActionInterface {
    entity: CreateRouteEntity
}

const AddPointAction = ({ entity }: AddPointActionInterface) => {
    return <button className={wrapperStyles} onClick={entity.addPoint}>Добавить точку</button>
}

export default observer(AddPointAction)