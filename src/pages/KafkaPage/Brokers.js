import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from "../../constants/actionTypes"
import {Route, Switch, useRouteMatch, useLocation} from 'react-router-dom'
import Broker from "./Broker"
import axios from "axios"
import * as api from "../../constants/api";
import Topic from "./Topic";

const Brokers = (props) => {
    const {cluster = {}} = props
    const [waiting, setWaiting] = useState(true)
    const [brokers, setBrokers] = useState([])
    const [brokerActive, setBrokerActive] = useState(null)
    const match = useRouteMatch()

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusterChild: {label: 'brokers', path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusterChild: {label: 'brokers', path: null}}
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.url, brokers])

    useEffect(() => {
        setWaiting(true)
        axios.get(`${api.kafka_clusters}/${cluster.id}/brokers`)
            .then(res => {
                setBrokers(res.data)
                setBrokerActive(1)
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
                                    <th>broker ID</th>
                                    <th>Имя</th>
                                    <th>Версия</th>
                                    <th>адрес broker</th>
                                    <th>controller ID</th>
                                    <th>Скорость in/out</th>
                                </tr>
                                </thead>
                                <tbody>
                                {brokers.map((row, i) => {
                                    const {
                                        id = null,
                                        name = null,
                                        version = '',
                                        address = '',
                                        controller = null,
                                        velocity = ''
                                    } = row
                                    return (
                                        <tr key={i} onClick={() => {
                                            setBrokerActive(id)
                                            props.history.push(`${match.url}/${id}`)
                                        }}>
                                            <td>
                                                <div className="align-right">{id}</div>
                                            </td>
                                            <td>{name}</td>
                                            <td>{version}</td>
                                            <td>
                                                <small>{address}</small>
                                            </td>
                                            <td>
                                                <div className="align-right">{controller}</div>
                                            </td>
                                            <td>{velocity}</td>
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            : <div className="waiting">waiting...</div>}
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    {brokerActive ? <Broker cluster={cluster} brokers={brokers} {...props}/> :
                        <div className="waiting">waiting...</div>}
                </Route>
            </Switch>
        </>
    )
}

Brokers.displayName = 'Brokers'

export default connect()(Brokers)

const initializeBrockeers = [
    {id: 1010, name: 'Broker_001', version: '2.0.4', address: 'localhost:3445', controller: 452, velocity: '345/23'},
    {id: 1, name: 'Broker_002', version: '2.0.4', address: 'localhost:3446', controller: 453, velocity: '145/53'},
    {id: 2, name: 'Broker_003', version: '2.0.4', address: 'localhost:3447', controller: 454, velocity: '342/8'}
]
