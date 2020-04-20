import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import * as type from '../../constants/actionTypes'
import {Redirect, Route, Switch, NavLink, useParams, useRouteMatch} from 'react-router-dom'
import Partitions from "./Partitions"

const Broker = (props) => {
    const {brokers = []} = props
    const match = useRouteMatch()
    const {id} = useParams()
    const [brokerRouters] = useState([
        {title: 'Partitions', path: `/partitions`, component: Partitions}
    ])

    const {
        name = null
    } = brokers.find(item => item.id === +id) || {}

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusterChildName: {label: name, path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusterChildName: {label: name, path: null}}
            })
        }
    }, [match.url])

    return (
        <div>
            <nav className="tabs">
                <ul>
                    <li>
                        <NavLink to={`${match.url}`}>Detail</NavLink>
                    </li>
                    <li>
                        <NavLink to={`${match.url}/partitions`}>Partitions</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                {/*<Route exact path={`${match.path}`}>
                    <div>
                        Detail Broker {name}
                    </div>
                </Route>*/}
                <Redirect exact from={`${match.url}`} to={`${match.url}/partitions`}/>
                {brokerRouters
                    .map(route => {
                        const {path} = route
                        return (
                            <Route
                                key={path}
                                path={`${match.path}${path}`}
                                render={props => <route.component
                                    {...props}
                                    {...{...route}}/>}/>
                        )
                    })}
            </Switch>
        </div>
    )
}

Broker.displayName = 'Broker'

export default connect()(Broker)