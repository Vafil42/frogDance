import LoadingCard from "components/Card/LoadingCard"
import TitleCard from "components/Card/TitleCard"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Card from "components/Card"
import ListElement from "components/ListCard/ListElement"
import Actions from "./Actions"

const FlowDetailView = () => {
    const { routStore } = useStore()

    const { id } = useParams()

    useEffect(() => routStore.loadRoute(id!), [routStore])

    if (!routStore.rout) return <LoadingCard />

    return <>
        <TitleCard subtitle="Ваши маршруты" actions={<Actions />}>{routStore.rout.name}</TitleCard>
        <Card title="Описание">{routStore.rout.description}</Card>
        <Card title="Точки">{routStore.rout.points.map((point) => <ListElement title={point.name} to="" />)}</Card>
    </>
}

export default observer(FlowDetailView)