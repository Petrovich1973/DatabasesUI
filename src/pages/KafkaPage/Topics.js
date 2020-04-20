import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from "../../constants/actionTypes"
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Topic from "./Topic"
import axios from "axios"
import * as api from "../../constants/api";

const Topics = (props) => {
    const {cluster = {}} = props
    const [waiting, setWaiting] = useState(true)
    const [topics, setTopics] = useState([])
    const [topicActive, setTopicActive] = useState(null)
    const match = useRouteMatch()

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusterChild: {label: 'topics', path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusterChild: {label: 'topics', path: null}}
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.url, topics])

    useEffect(() => {
        setWaiting(true)
        axios.get(`${api.kafka_clusters}/${cluster.id}/topics`)
            .then(res => {
                setTopics(res.data)
                setTopicActive(1)
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
                                    <th>id</th>
                                    <th>name</th>
                                    <th>messages Read</th>
                                    <th>messages Write</th>
                                    <th>under Replicated</th>
                                    <th>in Sync</th>
                                    <th>out Of Sync</th>
                                    <th>bytes In PerSec</th>
                                    <th>bytes Out PerSec</th>
                                </tr>
                                </thead>
                                <tbody>
                                {topics.map((row, i) => {
                                    const {
                                        id = null,
                                        name = null,
                                        messagesRead = null,
                                        messagesWrite = null,
                                        underReplicated = null,
                                        inSync = null,
                                        outOfSync = null,
                                        bytesInPerSec = null,
                                        bytesOutPerSec = null
                                    } = row
                                    return (
                                        <tr key={i} onClick={() => {
                                            setTopicActive(id)
                                            props.history.push(`${match.url}/${id}`)
                                        }}>
                                            <td className="align-center">{id}</td>
                                            <td className="align-center">{name}</td>
                                            <td className="align-center">{messagesRead}</td>
                                            <td className="align-center">{messagesWrite}</td>
                                            <td className="align-center">{underReplicated}</td>
                                            <td className="align-center">{inSync}</td>
                                            <td className="align-center">{outOfSync}</td>
                                            <td className="align-center">{bytesInPerSec}</td>
                                            <td className="align-center">{bytesOutPerSec}</td>
                                        </tr>)
                                })}
                                </tbody>
                            </table>
                            : <div className="waiting">waiting...</div>}
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    {topicActive ? <Topic cluster={cluster} topics={topics} {...props}/> :
                        <div className="waiting">waiting...</div>}
                </Route>
            </Switch>
        </>
    )
}

Topics.displayName = 'Topics'

export default connect()(Topics)

const initializeTopics = [
    {
        id: 0,
        name: 'topicrName_000',
        messagesRead: 45,
        messagesWrite: 45,
        underReplicated: 23,
        inSync: 89,
        outOfSync: 36,
        bytesInPerSec: 81,
        bytesOutPerSec: 17
    },
    {
        id: 1,
        name: 'topicrName_001',
        messagesRead: 75,
        messagesWrite: 75,
        underReplicated: 13,
        inSync: 39,
        outOfSync: 32,
        bytesInPerSec: 41,
        bytesOutPerSec: 77
    },
    {
        id: 2,
        name: 'topicrName_002',
        messagesRead: 78,
        messagesWrite: 56,
        underReplicated: 23,
        inSync: 74,
        outOfSync: 52,
        bytesInPerSec: 55,
        bytesOutPerSec: 23
    }
]
