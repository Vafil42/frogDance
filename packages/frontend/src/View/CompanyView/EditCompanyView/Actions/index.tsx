import { EditCompanyEntity } from "store/company/entities/EditCompany";
import SaveAction from "./SaveAction";
import { observer } from "mobx-react-lite";

interface ActionsInterface {
    entity: EditCompanyEntity
}

const Actions = ({ entity }: ActionsInterface) => {
    return <SaveAction entity={entity} />
}

export default observer(Actions)