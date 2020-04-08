import React, {useState} from 'react'
import {Route, Switch, useRouteMatch, useLocation} from 'react-router-dom'
import Broker from "./Broker"

const Brokers = (props) => {
    const [brokers] = useState(initializeBrockeers)
    const match = useRouteMatch()
    const {pathname} = useLocation()

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
                                    <tr key={i} onDoubleClick={() => props.history.push(`${pathname}/${id}`)}>
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
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    <Broker brokers={brokers} {...props}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Brokers

const initializeBrockeers = [
    {id: 0, name: 'Broker_001', version: '2.0.4', address: 'localhost:3445', controller: 452, velocity: '345/23'},
    {id: 1, name: 'Broker_002', version: '2.0.4', address: 'localhost:3446', controller: 453, velocity: '145/53'},
    {id: 2, name: 'Broker_003', version: '2.0.4', address: 'localhost:3447', controller: 454, velocity: '342/8'},
    {id: 3, name: 'Broker_004', version: '2.0.4', address: 'localhost:3448', controller: 455, velocity: '45/203'},
    {id: 4, name: 'Broker_005', version: '2.0.4', address: 'localhost:3449', controller: 456, velocity: '815/723'},
    {id: 5, name: 'Broker_006', version: '2.0.4', address: 'localhost:3450', controller: 457, velocity: '86/35'}
]
