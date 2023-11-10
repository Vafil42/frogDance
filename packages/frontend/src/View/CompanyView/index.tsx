import TitleCard from "components/Card/TitleCard"
import { observer } from "mobx-react-lite"

const CompanyView = () => {
    return <>
        <TitleCard subtitle="Ваша компания">Компания</TitleCard>
    </>
}

export default observer(CompanyView)