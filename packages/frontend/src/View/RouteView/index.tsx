import Card from "components/Card";
import TitleCard from "components/Card/TitleCard"
import ListElement from "components/ListCard/ListElement";

import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useMemo } from "react";

const RouteView = () => {
    
    const { routStore } = useStore()
    useMemo(() => routStore.loadRouts(), [routStore])

    return <>
        <TitleCard subtitle="Ваши маршруты">:</TitleCard>
        <Card>{routStore.routs?.map((route) => <ListElement to={route._id} title={route.name} link/>)}</Card>
    </>
}

export default observer(RouteView)