import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from "../../constants/actionTypes"
import {Route, Switch, useRouteMatch, useLocation} from 'react-router-dom'
import Partition from "./Partition"

const Partitions = (props) => {
    const [partitions] = useState(initializePartitions)
    const match = useRouteMatch()
    const {pathname} = useLocation()

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusterChildSecond: {label: 'partitions', path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusterChildSecond: {label: 'partitions', path: null}}
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.url])

    // console.log('Partitions', match)

    return (
        <>
            <Switch>
                <Route exact path={`${match.path}`}>
                    <div>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>ID</th>
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
                                    role = null,
                                    status = null
                                } = row
                                return (
                                    <tr key={i} onDoubleClick={() => props.history.push(`${pathname}/${id}`)}>
                                        <td>{id}</td>
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
                    <Partition partitions={partitions} {...props}/>
                </Route>
            </Switch>
        </>
    )
}

Partitions.displayName = 'Partitions'

export default connect()(Partitions)

const initializePartitions = [
    {id: 0, name: 'Partition_001', role: 'LEADER', status: 'SUCCESS'},
    {id: 1, name: 'Partition_002', role: 'FOLLOWER', status: 'WARNING'},
    {id: 2, name: 'Partition_003', role: 'FOLLOWER', status: 'SUCCESS'},
    {id: 3, name: 'Partition_004', role: 'LEADER', status: 'ERROR'},
    {id: 4, name: 'Partition_005', role: 'LEADER', status: 'SUCCESS'},
    {id: 5, name: 'Partition_006', role: 'FOLLOWER', status: 'WARNING'},
    {id: 6, name: 'Partition_007', role: 'FOLLOWER', status: 'SUCCESS'},
    {id: 7, name: 'Partition_008', role: 'LEADER', status: 'ERROR'},
    {id: 8, name: 'Partition_009', role: 'LEADER', status: 'SUCCESS'}
]
