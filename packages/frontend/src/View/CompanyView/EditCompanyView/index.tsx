import Card from "components/Card"
import CardTitle from "components/Card/TitleCard"
import TextField from "components/Form/TextField"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useMemo } from "react"
import { EditCompanyEntity } from "store/company/entities/EditCompany"
import { cardStyles, fieldStyles } from "./style.css"
import Actions from "./Actions"

const EditCompanyView = () => {
    const { companyStore } = useStore()

    companyStore.loadCompany()

    const entity = useMemo(() => new EditCompanyEntity(companyStore.entity!), [companyStore])

    return <div>
        <CardTitle subtitle="Ваша компания">Редактирование компании</CardTitle>
        <Card className={cardStyles} actions={<Actions entity={entity} />}>
            <TextField value={entity.entity.name} onChange={entity.setName} placeholder="Название компании" size={40} />
            <TextField value={entity.entity.description} onChange={entity.setDescription} placeholder="Описание компании" size={40} className={fieldStyles} />
        </Card>
    </div>
}

export default observer(EditCompanyView)