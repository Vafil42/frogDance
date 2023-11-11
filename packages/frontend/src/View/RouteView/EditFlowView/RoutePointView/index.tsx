import { observer } from "mobx-react-lite";
import { CreatePointEntity } from "store/route/entities/point/CreatePointEntity";

import { actionStyles, fieldStyles, wrapperStyles } from "./style.css";
import TextField from "components/Form/TextField";
import Button from "components/Button";


interface PointViewInterface {
    entity: CreatePointEntity,
    onDelete: () => void
}

const PointView = ({ entity, onDelete }: PointViewInterface) => {
    return <div className={wrapperStyles}>
        <TextField placeholder="Название точки" value={entity.entity.name} onChange={entity.setName} className={fieldStyles} />
        <TextField placeholder="Описание точки" value={entity.entity.description} onChange={entity.setDescription} className={fieldStyles} />
        <TextField placeholder="Координаты точки" value={entity.entity.coordinates} onChange={entity.setCoordinates} className={fieldStyles} />
        <Button onClick={onDelete} classname={actionStyles}>Удалить точку</Button>
    </ div>
}

export default observer(PointView)