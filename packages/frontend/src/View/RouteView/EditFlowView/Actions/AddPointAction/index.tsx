import { observer } from "mobx-react-lite"
import { CreateRouteEntity } from "store/route/entities/RouteCreateStore"
import { wrapperStyles } from "./style.css"
import Button from "components/Button"

interface AddPointActionInterface {
    entity: CreateRouteEntity
}

const AddPointAction = ({ entity }: AddPointActionInterface) => {
    return <Button onClick={entity.addPoint}>Добавить точку</Button>
}

export default observer(AddPointAction)