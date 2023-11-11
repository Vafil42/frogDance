import Card from "components/Card"
import CardTitle from "components/Card/TitleCard"
import TextField from "components/Form/TextField"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useMemo, useEffect } from "react"
import { EditCompanyEntity } from "store/company/entities/EditCompany"
import { cardStyles, fieldStyles } from "./style.css"
import Actions from "./Actions"

const EditCompanyView = () => {
    const { companyStore } = useStore()

    useEffect(() => companyStore.loadCompany(), [companyStore])

    const entity = useMemo(() => new EditCompanyEntity(companyStore.entity!), [companyStore])

    return <div>
        <CardTitle subtitle="Ваша компания">Редактирование компании</CardTitle>
        <Card className={cardStyles}>
            <TextField value={entity.entity.name} onChange={entity.setName} placeholder="Название компании" size={40} />
            <TextField value={entity.entity.description} onChange={entity.setDescription} placeholder="Описание компании" size={40} className={fieldStyles} />
            <Actions entity={entity} />
        </Card>
    </div>
}

export default observer(EditCompanyView)