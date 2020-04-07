import React, {useEffect, useState} from 'react'
import TitlePage from "../../components/TitlePage";

const initializeColumns = [
    {name: 'id', label: 'id'},
    {name: 'name', label: 'Наименование кластера'},
    {name: 'addresses_zookeepers', label: <span>Адреса <nobr>zookeeper-ов</nobr></span>},
    {name: 'total_brokers', label: 'brokers'},
    {name: 'total_topics', label: 'topics'},
    {name: 'total_partitions', label: 'partitions'},
    {name: 'total_consumers', label: 'consumers'},
    {name: 'total_producers', label: 'producers'},
]

const initializeClusters = [
    {
        id: 0,
        name: 'clusterName_001',
        addresses_zookeepers: ['localhost:5100', 'localhost:5200'],
        total_brokers: 4,
        total_topics: 34,
        total_partitions: 126,
        total_consumers: 8,
        total_producers: 58,
    },
    {
        id: 1,
        name: 'clusterName_002',
        addresses_zookeepers: ['localhost:6100', 'localhost:6200'],
        total_brokers: 8,
        total_topics: 64,
        total_partitions: 326,
        total_consumers: 12,
        total_producers: 58,
    },
    {
        id: 2,
        name: 'clusterName_003',
        addresses_zookeepers: ['localhost:7100', 'localhost:7200'],
        total_brokers: 2,
        total_topics: 14,
        total_partitions: 66,
        total_consumers: 3,
        total_producers: 9,
    },
    {
        id: 3,
        name: 'clusterName_004',
        addresses_zookeepers: ['localhost:8100', 'localhost:8200'],
        total_brokers: 44,
        total_topics: 340,
        total_partitions: 1260,
        total_consumers: 80,
        total_producers: 258,
    },
    {
        id: 4,
        name: 'clusterName_005',
        addresses_zookeepers: ['localhost:9100', 'localhost:9200'],
        total_brokers: 9,
        total_topics: 74,
        total_partitions: 726,
        total_consumers: 22,
        total_producers: 88,
    }
]

const KafkaPage = (props) => {
    const {title = 'Наименование страницы'} = props

    const [columns, setColumns] = useState(initializeColumns)
    const [clusters, setClusters] = useState(initializeClusters)

    useEffect(() => {
        document.title = title
    })

    const onRenderValueCell = (name, value) => {
        if(Number(value)) {
            return (
                <div className="align-right">{value}</div>
            )
        }
        switch (name) {
            case 'addresses_zookeepers':
                const result_addresses_zookeepers = <div>
                    {value
                        .map((address, i) => <span key={i}>{address}</span>)
                        .reduce((prev, curr, i) => [prev, <span key={i+1000}>, </span>, curr])}
                </div>
                return result_addresses_zookeepers
            default:
                return value
        }
    }

    return (
        <div>
            <TitlePage label={title}/>
            <table className="table">
                <thead>
                <tr>
                    {columns.map((column, i) => (
                        <th key={i}>{column.label}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {clusters.map((row, i) => (
                    <tr key={i}>
                        {columns.map((column, i) => (
                            <td key={i}>{onRenderValueCell(column.name, row[column.name])}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default KafkaPage
