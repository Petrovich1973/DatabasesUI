import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import * as type from '../../constants/actionTypes'
import {Redirect, Route, Switch, NavLink, Link, useParams, useRouteMatch} from 'react-router-dom'
import Partitions from "./Partitions"

const Topic = (props) => {
    const {topics = []} = props
    const match = useRouteMatch()
    const {id} = useParams()
    const [topicRouters] = useState([
        {title: 'Partitions', path: `/partitions`, component: Partitions}
    ])

    const {
        name = null,
        messagesRead = null,
        messagesWrite = null,
        underReplicated = null,
        inSync = null,
        outOfSync = null,
        bytesInPerSec = null,
        bytesOutPerSec = null
    } = topics.find(item => item.id === +id) || {}

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
                        <NavLink to={`${match.url}`}>
                            <small><em>Topic</em></small>
                            &nbsp;
                            <span style={{fontSize: '140%'}}>{name}</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            &nbsp;
            <div>
                <table className="table md">
                    <tbody>
                    <tr>
                        <td>messages Read</td>
                        <td>{messagesRead}</td>
                        <td/>
                        <td>messages Write</td>
                        <td>{messagesWrite}</td>
                        <td/>
                        <td>bytes Out PerSec</td>
                        <td>{bytesOutPerSec}</td>
                    </tr>
                    <tr>
                        <td>under Replicated</td>
                        <td>{underReplicated}</td>
                        <td/>
                        <td>in Sync</td>
                        <td>{inSync}</td>
                        <td/>
                        <td colSpan={2}/>
                    </tr>
                    <tr>
                        <td>out Of Sync</td>
                        <td>{outOfSync}</td>
                        <td/>
                        <td>bytes In PerSec</td>
                        <td>{bytesInPerSec}</td>
                        <td/>
                        <td colSpan={2}/>
                    </tr>
                    </tbody>
                </table>
            </div>
            &nbsp;
            <nav className="tabs">
                <ul>
                    <li>
                        <Link to={`${match.url}/partitions`}>Partitions</Link>
                    </li>
                </ul>
            </nav>
            &nbsp;
            <Switch>
                <Redirect exact from={`${match.url}`} to={`${match.url}/partitions`}/>
                {topicRouters
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

Topic.displayName = 'Topic'

export default connect()(Topic)