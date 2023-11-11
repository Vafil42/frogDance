import LinkButton from "components/Button/LinkButton"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useCallback } from "react"
import { EditCompanyEntity } from "store/company/entities/EditCompany"

interface SaveActionInterface {
    entity: EditCompanyEntity
}

const SaveAction = ({ entity }: SaveActionInterface) => {
    const { companyStore } = useStore()

    const handleSave = useCallback(() => {
        companyStore.editCompany(entity)
    }, [companyStore, entity])

    return <LinkButton to="/company" onClick={handleSave}>Сохранить</LinkButton>
}

export default observer(SaveAction)