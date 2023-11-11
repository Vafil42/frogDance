import { observer } from "mobx-react-lite"
import { useMemo } from "react"

import { CreateRouteEntity } from "store/route/entities/RouteCreateStore"
import PointView from "./RoutePointView"
import { fieldStyles, wrapperStyles } from "./style.css"
import Card from "components/Card"
import Actions from "./Actions"
import CardTitle from "components/Card/TitleCard"
import TextField from "components/Form/TextField"
import LinkButton from "components/Button/LinkButton"
import { useStore } from "context"

interface EditRouteViewInterface {
    entityId?: string;
}

const EditRouteView = ({ entityId }: EditRouteViewInterface) => {
    const { routStore } = useStore()

    if (entityId) {
        routStore.loadRoute(entityId)
    }

    const entity = useMemo(() => routStore.rout ? CreateRouteEntity.buildForEntity(routStore.rout) : new CreateRouteEntity(), [routStore])

    return <div>
        <CardTitle subtitle="Маршруты" actions={<LinkButton to="/flow">Отмена</LinkButton>}>Создание маршрута</CardTitle>
        <Card >
            <div className={wrapperStyles} >
                <TextField placeholder="Название маршрута" value={entity.entity.name} onChange={entity.setName} />
                <TextField placeholder="Описание маршрута" value={entity.entity.description} onChange={entity.setDescription} className={fieldStyles} />
                {entity.points.map((point, index) => { return <PointView entity={point} onDelete={() => entity.deletePoint(index)} key={index} /> })}
                <Actions entity={entity} />
            </div>
        </ Card>
    </div>
}

export default observer(EditRouteView)