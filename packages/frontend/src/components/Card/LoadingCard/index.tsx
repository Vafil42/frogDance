import Card from ".."
import { wrapperStyles } from "./style.css"

const LoadingCard = () => {
    return <Card >
        <div className={wrapperStyles}>Загрузка</div>
    </Card>
}

export default LoadingCard