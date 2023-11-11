import Card from "components/Card";
import LoadingCard from "components/Card/LoadingCard";
import TitleCard from "components/Card/TitleCard"

import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import Actions from "./Actions";

const CompanyView = () => {

    const { companyStore } = useStore()

    useEffect(() => companyStore.loadCompany(), [companyStore])

    if (!companyStore.entity) return <LoadingCard />

    return <>
        <TitleCard subtitle="Ваша компания" actions={<Actions />}>{companyStore.entity!.name}</TitleCard>
        <Card title="Описание">{companyStore.entity?.description}</Card>
    </>
}

export default observer(CompanyView)