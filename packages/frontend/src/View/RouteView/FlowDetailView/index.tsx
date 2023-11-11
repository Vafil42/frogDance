import LoadingCard from "components/Card/LoadingCard"
import TitleCard from "components/Card/TitleCard"
import { useStore } from "context"
import { observer } from "mobx-react-lite"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import Card from "components/Card"
import ListElement from "components/ListCard/ListElement"
import Actions from "./Actions"

const RouteDetailView = () => {
    const { routStore } = useStore()

    const { id } = useParams()

    useEffect(() => routStore.loadRoute(id!), [routStore])

    if (!routStore.route) return <LoadingCard />

    return <>
        <TitleCard subtitle="Ваши маршруты" actions={<Actions />}>{routStore.route.name}</TitleCard>
        <Card title="Описание">{routStore.route.description}</Card>
        <Card title="Точки">{routStore.route.points.map((point) => <ListElement title={point.name} to="" />)}</Card>
    </>
}

export default observer(RouteDetailView)