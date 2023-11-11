import { CreateRouteEntity } from "store/route/entities/RouteCreateStore"
import AddPointAction from "./AddPointAction"
import SaveAction from "./SaveAction"
import { wrapperStyles } from "./style.css"
import { observer } from "mobx-react-lite"

interface CreateRouteActionsInterface {
    entity: CreateRouteEntity
}

const Actions = ({ entity }: CreateRouteActionsInterface) => {
    return <div className={wrapperStyles}>
        <AddPointAction entity={entity} />
        <SaveAction entity={entity} />
    </div>
}

export default observer(Actions)