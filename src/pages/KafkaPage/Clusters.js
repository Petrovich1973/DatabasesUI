import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from "../../constants/actionTypes"
import * as api from "../../constants/api"
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Cluster from "./Cluster"
import axios from "axios"

const Clusters = (props) => {
    const [waiting, setWaiting] = useState(true)
    const [clusters, setClusters] = useState([])
    const [clusterActive, setClusterActive] = useState(null)
    const match = useRouteMatch()

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusters: {label: 'clusters', path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusters: {label: 'clusters', path: null}}
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.url, clusters])

    useEffect(() => {
        setWaiting(true)
        axios.get(`${api.kafka_clusters}`)
            .then(res => {
                setClusters(res.data)
                setClusterActive(1)
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
                            <colgroup>
                                <col span="4"/>
                                <col className="col-yellow" span="5"/>
                                <col span="1"/>
                                <col className="col-blue" span="3"/>
                            </colgroup>
                            <thead>
                            <tr>
                                <th rowSpan={2}>id</th>
                                <th rowSpan={2}>name</th>
                                <th rowSpan={2}>host</th>
                                <th rowSpan={2}>topics</th>
                                <th className="border-bottom opacity" colSpan={5}>partitions</th>
                                <th rowSpan={2}>controller id</th>
                                <th className="border-bottom opacity" colSpan={3}>system</th>
                            </tr>
                            <tr>
                                <th>total</th>
                                <th>online</th>
                                <th>in sync</th>
                                <th>out of sync</th>
                                <th>under replicated</th>
                                <th>cpu</th>
                                <th>disk</th>
                                <th>ram</th>
                            </tr>
                            </thead>
                            <tbody>
                            {clusters.map((row, i) => {
                                const {
                                    id = null,
                                    name = null,
                                    host = null,
                                    topics: {
                                        totalTopic = row.topics.total
                                    },
                                    partitions: {
                                        totalPart = row.partitions.total,
                                        online = null,
                                        inSync = null,
                                        outOfSync = null,
                                        underReplicated = null
                                    },
                                    controllerId = null,
                                    system: {
                                        cpu = null,
                                        disk = null,
                                        ram = null
                                    }
                                } = row

                                return (
                                    <tr key={i} onClick={() => {
                                        setClusterActive(id)
                                        props.history.push(`${match.url}/${id}`)
                                    }}>
                                        <td className="align-center">{id}</td>
                                        <td className="align-center">{name}</td>
                                        <td className="align-center">{host}</td>
                                        <td className="align-center">{totalTopic}</td>
                                        <td className="align-center">{totalPart}</td>
                                        <td className="align-center">{online}</td>
                                        <td className="align-center">{inSync}</td>
                                        <td className="align-center">{outOfSync}</td>
                                        <td className="align-center">{underReplicated}</td>
                                        <td className="align-center">{controllerId}</td>
                                        <td className="align-center">{cpu}</td>
                                        <td className="align-center">{disk}</td>
                                        <td className="align-center">{ram}</td>
                                    </tr>)
                            })}
                            </tbody>
                        </table> : <div className="waiting">waiting...</div>}
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    {clusterActive ? <Cluster clusters={clusters}/> : <div className="waiting">waiting...</div>}
                </Route>
            </Switch>
        </>
    )
}

Clusters.displayName = 'Clusters'

export default connect()(Clusters)


const initializeClusters = [
    {
        id: 0,
        name: 'clusterName_000',
        host: 'localhost:9100',
        topics: {
            total: 23
        },
        partitions: {
            total: 78,
            online: 17,
            inSync: 58,
            outOfSync: 20,
            underReplicated: 0
        },
        controllerId: 32461,
        system: {
            cpu: 67,
            disk: '1000Gb/120000Gb',
            ram: '6200Mb/240000Mb'
        }
    },
    {
        id: 1,
        name: 'clusterName_001',
        host: 'localhost:4100',
        topics: {
            total: 42
        },
        partitions: {
            total: 82,
            online: 17,
            inSync: 58,
            outOfSync: 20,
            underReplicated: 0
        },
        controllerId: 32461,
        system: {
            cpu: 67,
            disk: '1000Gb/120000Gb',
            ram: '6200Mb/240000Mb'
        }
    },
    {
        id: 2,
        name: 'clusterName_002',
        host: 'localhost:2100',
        topics: {
            total: 24
        },
        partitions: {
            total: 81,
            online: 17,
            inSync: 58,
            outOfSync: 20,
            underReplicated: 0
        },
        controllerId: 32461,
        system: {
            cpu: 67,
            disk: '1000Gb/120000Gb',
            ram: '6200Mb/240000Mb'
        }
    },
    {
        id: 3,
        name: 'clusterName_003',
        host: 'localhost:3130',
        topics: {
            total: 34
        },
        partitions: {
            total: 66,
            online: 47,
            inSync: 88,
            outOfSync: 21,
            underReplicated: 1
        },
        controllerId: 72461,
        system: {
            cpu: 67,
            disk: '1000Gb/120000Gb',
            ram: '6200Mb/240000Mb'
        }
    },
    {
        id: 4,
        name: 'clusterName_004',
        host: 'localhost:4430',
        topics: {
            total: 94
        },
        partitions: {
            total: 16,
            online: 88,
            inSync: 22,
            outOfSync: 73,
            underReplicated: 3
        },
        controllerId: 12461,
        system: {
            cpu: 67,
            disk: '1000Gb/120000Gb',
            ram: '6200Mb/240000Mb'
        }
    }
]
