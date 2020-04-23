import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import * as type from '../../constants/actionTypes'
import {Redirect, Route, Switch, useRouteMatch, NavLink, useParams} from 'react-router-dom'
import OverView from "./OverView"
import Brokers from "./Brokers"
import Topics from "./Topics"
import Consumers from "./Consumers"
import Acls from "./Acls"
import KafkaConnect from "./KafkaConnect"
import Settings from "./Settings"
import RollingRestart from "./RollingRestart"
import RollingUpgrade from "./RollingUpgrade"
import KafkaSberEdition from "./KafkaSberEdition"
import TitlePage from "../../components/TitlePage"

const Cluster = (props) => {
    const {clusters = []} = props
    const match = useRouteMatch()
    const {id} = useParams()
    const [clusterRouters] = useState([
        {title: 'OverView', path: `/overview`, component: OverView, icon: null},
        {title: 'Brokers', path: `/brokers`, component: Brokers, icon: null},
        {title: 'Topics', path: `/topics`, component: Topics, icon: null},
        {title: 'Consumers', path: `/consumers`, component: Consumers, icon: null},
        {title: 'ACLs', path: `/acls`, component: Acls, icon: null},
        {title: 'Kafka Connect', path: `/kafkaConnect`, component: KafkaConnect, icon: null},
        {title: 'Settings', path: `/settings`, component: Settings, icon: null},
        {title: 'Rolling Restart', path: `/rollingRestart`, component: RollingRestart, icon: null},
        {title: 'Rolling Upgrade', path: `/rollingUpgrade`, component: RollingUpgrade, icon: null},
        {title: 'Kafka SberEdition', path: `/kafkaSberEdition`, component: KafkaSberEdition, icon: null}
    ])

    const cluster = clusters.find(item => item.id === +id) || {}

    const {
        name = null
    } = cluster

    useEffect(() => {
        props.dispatch({
            type: type.KAFKA_BREADCRUMBS_UPDATE,
            payload: {clusterName: {label: name, path: match.url}}
        })
        return () => {
            props.dispatch({
                type: type.KAFKA_BREADCRUMBS_UPDATE,
                payload: {clusterName: {label: name, path: null}}
            })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [match.url])

    return (
        <>
            <TitlePage tag={'h2'} label={<>
                <small><small><small><em>Cluster</em></small></small></small>
                &nbsp;
                {name}</>}/>

            <div className="content">
                <aside>
                    <nav className="scrollhide">
                        <ul>
                            {clusterRouters.map((item, i) => (
                                <li key={i}>
                                    <NavLink to={`${match.url}${item.path}`}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <section>
                    <Switch>
                        <Redirect exact from={`${match.path}`} to={`${match.path}/overview`}/>
                        {clusterRouters
                            .map(route => {
                                const {path} = route
                                return (
                                    <Route
                                        key={path}
                                        path={`${match.path}${path}`}
                                        render={props => <route.component
                                            {...props}
                                            {...{...route, cluster}}/>}/>
                                )
                            })}
                    </Switch>
                </section>
            </div>
        </>
    )
}

Cluster.displayName = 'Cluster'

export default connect()(Cluster)