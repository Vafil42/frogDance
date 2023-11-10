import Card from "components/Card";
import TitleCard from "components/Card/TitleCard"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useMemo } from "react";

const CompanyView = () => {
    
    const { companyStore } = useStore()

    useMemo(() => companyStore.loadCompany(), [companyStore])

    return <>
        <TitleCard subtitle="Ваша компания">{companyStore.entity!.name}</TitleCard>
        <Card title="Описание">{companyStore.entity?.description}</Card>
    </>
}

export default observer(CompanyView)