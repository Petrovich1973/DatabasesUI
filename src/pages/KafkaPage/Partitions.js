import React, {useState} from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Broker from "./Broker"

const Partitions = (props) => {
    const [partitions] = useState(initializePartitions)
    const match = useRouteMatch()

    return (
        <div>
            <Switch>
                <Route exact path={`${match.path}`}>
                    <div className="flex-center">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>broker ID</th>
                                <th>Имя</th>
                                <th>Роль</th>
                                <th>Статус</th>
                            </tr>
                            </thead>
                            <tbody>
                            {partitions.map((row, i) => {
                                const {
                                    id = null,
                                    name = null,
                                    role = '',
                                    status = ''
                                } = row
                                return (
                                    <tr key={i} onDoubleClick={() => {
                                        // props.history.push(`${pathname}/${id}`)
                                    }}>
                                        <td>
                                            <div className="align-right">{id}</div>
                                        </td>
                                        <td>{name}</td>
                                        <td>{role}</td>
                                        <td>{status}</td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    <Broker brokers={partitions} {...props}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Partitions

const initializePartitions = [
    {id: 0, name: 'Partition_001', role: 'LEADER', status: 'SUCCESS'},
    {id: 1, name: 'Partition_002', role: 'FOLLOWER', status: 'WARNING'},
    {id: 2, name: 'Partition_003', role: 'FOLLOWER', status: 'SUCCESS'},
    {id: 3, name: 'Partition_004', role: 'LEADER', status: 'ERROR'},
    {id: 4, name: 'Partition_005', role: 'LEADER', status: 'SUCCESS'}
]
