import React, {useState} from 'react'
import {Route, Switch, useRouteMatch, NavLink} from 'react-router-dom'
import Cluster from "./Cluster"

const Clusters = (props) => {
    const [clusters] = useState(initializeClusters)
    const match = useRouteMatch()

    return (
        <div>
            <nav>
                <ul className="flex-center">
                    <li><NavLink to={match.path}>clusters</NavLink></li>
                </ul>
            </nav>
            <Switch>
                <Route exact path={`${match.path}`}>
                    <div className="flex-center">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>id</th>
                                <th>имя</th>
                                <th>адреса zookeeper'ов</th>
                                <th>brokers</th>
                                <th>topics</th>
                                <th>partitions</th>
                                <th>consumer</th>
                                <th>producers</th>
                            </tr>
                            </thead>
                            <tbody>
                            {clusters.map((row, i) => {
                                const {
                                    id = null,
                                    name = '',
                                    addresses_zookeepers = [],
                                    total_brokers = null,
                                    total_topics = null,
                                    total_partitions = null,
                                    total_consumers = null,
                                    total_producers = null
                                } = row
                                return (
                                    <tr key={i} onDoubleClick={() => props.history.push(`${match.path}/${id}`)}>
                                        <td>{id}</td>
                                        <td>{name}</td>
                                        <td>
                                            <div>
                                                {addresses_zookeepers
                                                    .map((address, i) => <small key={i}>{address}</small>)
                                                    .reduce((prev, curr, i) => (
                                                        [prev, <small key={i + 1000}>, </small>, curr]
                                                    ))}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="align-right">{total_brokers}</div>
                                        </td>
                                        <td>
                                            <div className="align-right">{total_topics}</div>
                                        </td>
                                        <td>
                                            <div className="align-right">{total_partitions}</div>
                                        </td>
                                        <td>
                                            <div className="align-right">{total_consumers}</div>
                                        </td>
                                        <td>
                                            <div className="align-right">{total_producers}</div>
                                        </td>
                                    </tr>)
                            })}
                            </tbody>
                        </table>
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    <Cluster clusters={clusters}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Clusters


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
        addresses_zookeepers: ['localhost:6100', 'localhost:6200', 'localhost:6220', 'localhost:6230'],
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
        addresses_zookeepers: ['localhost:8100', 'localhost:8200', 'localhost:8220'],
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
