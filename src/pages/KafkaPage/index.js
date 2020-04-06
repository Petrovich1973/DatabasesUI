import React, {useEffect} from 'react'
import TitlePage from "../../components/TitlePage";

const KafkaPage = (props) => {
    const {title = 'Наименование страницы'} = props

    useEffect(() => {
        document.title = title
    })

    return (
        <div>
            <TitlePage label={title}/>
            <p>Kafka Page</p>
        </div>
    )
}

export default KafkaPage
