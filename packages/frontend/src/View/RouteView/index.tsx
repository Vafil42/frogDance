import Card from "components/Card";
import LoadingCard from "components/Card/LoadingCard";
import TitleCard from "components/Card/TitleCard"
import ListElement from "components/ListCard/ListElement";

import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useMemo } from "react";
import Actions from "./Actions";

const RouteView = () => {
    const { routStore } = useStore()
    useMemo(() => routStore.loadRouts(), [routStore])

    if (!routStore.routs) return <LoadingCard />

    return <>
        <TitleCard actions={<Actions />} subtitle="Ваши маршруты">Список маршрутов</TitleCard>
        <Card>{routStore.routs?.map((route) => <ListElement to={route._id} title={route.name} link />)}</Card>
    </>
}

export default observer(RouteView)