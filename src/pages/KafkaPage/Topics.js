import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from "../../constants/actionTypes"
import {Route, Switch, useRouteMatch} from 'react-router-dom'
import Topic from "./Topic"

const Topics = (props) => {
    const [topics] = useState(initializeTopics)
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
    }, [match.url])

    return (
        <>
            <Switch>
                <Route exact path={`${match.path}`}>
                    <div>
                        <table className="table">
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
                                    <tr key={i} onDoubleClick={() => props.history.push(`${match.url}/${id}`)}>
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
                    </div>
                </Route>
                <Route path={`${match.path}/:id`}>
                    <Topic topics={topics} {...props}/>
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
    },
    {
        id: 3,
        name: 'topicrName_003',
        messagesRead: 85,
        messagesWrite: 25,
        underReplicated: 44,
        inSync: 65,
        outOfSync: 23,
        bytesInPerSec: 66,
        bytesOutPerSec: 23
    },
    {
        id: 4,
        name: 'topicrName_004',
        messagesRead: 22,
        messagesWrite: 23,
        underReplicated: 76,
        inSync: 22,
        outOfSync: 67,
        bytesInPerSec: 3,
        bytesOutPerSec: 3
    },
    {
        id: 5,
        name: 'topicrName_005',
        messagesRead: 84,
        messagesWrite: 84,
        underReplicated: 34,
        inSync: 63,
        outOfSync: 22,
        bytesInPerSec: 88,
        bytesOutPerSec: 33
    },
    {
        id: 6,
        name: 'topicrName_006',
        messagesRead: 23,
        messagesWrite: 23,
        underReplicated: 65,
        inSync: 21,
        outOfSync: 54,
        bytesInPerSec: 56,
        bytesOutPerSec: 654
    },
    {
        id: 7,
        name: 'topicrName_007',
        messagesRead: 85,
        messagesWrite: 27,
        underReplicated: 23,
        inSync: 62,
        outOfSync: 77,
        bytesInPerSec: 23,
        bytesOutPerSec: 454
    },
    {
        id: 8,
        name: 'topicrName_008',
        messagesRead: 18,
        messagesWrite: 53,
        underReplicated: 82,
        inSync: 74,
        outOfSync: 25,
        bytesInPerSec: 43,
        bytesOutPerSec: 56
    },
]
