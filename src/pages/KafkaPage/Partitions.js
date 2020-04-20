import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from "../../constants/actionTypes"
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Partition from "./Partition"
import axios from "axios";
import * as api from "../../constants/api";

const Partitions = (props) => {
    const {cluster = {}, topic = {}} = props
    const [waiting, setWaiting] = useState(true)
    const [partitions, setPartitions] = useState([])
    const [partitionActive, setPartitionActive] = useState(null)
    const match = useRouteMatch()

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
    }, [match.url, partitions])

    useEffect(() => {
        setWaiting(true)
        axios.get(`${api.kafka_clusters}/${cluster.id}/topics/${topic.id}/partitions`)
            .then(res => {
                setPartitions(res.data)
                setPartitionActive(1)
                setWaiting(false)
            })
            .catch(err => {
                console.log(err)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Switch>
                <Route exact path={`${match.path}`}>
                    <div>
                        {!waiting ? <table className="table">
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
                                        <tr key={i} onClick={() => {
                                            setPartitionActive(id)
                                            props.history.push(`${match.url}/${id}`)
                                        }}>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            <td>{role}</td>
                                            <td>{status}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            : <div className="waiting">waiting...</div>}
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    {partitionActive ? <Partition partitions={partitions} {...props}/> :
                        <div className="waiting">waiting...</div>}
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
    {id: 3, name: 'Partition_004', role: 'LEADER', status: 'ERROR'}
]
