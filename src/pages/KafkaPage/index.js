import React, {useEffect, useState} from 'react'
import {Redirect, Route, Switch, useRouteMatch, NavLink} from 'react-router-dom'
import TitlePage from "../../components/TitlePage"
import Brokers from "./Brokers"
import Clusters from "./Clusters"
import Topics from "./Topics"

const KafkaPage = (props) => {
    const {title = 'Наименование страницы'} = props
    const [kafkaRoutes] = useState(initializeRoutes)
    const match = useRouteMatch()

    useEffect(() => {
        document.title = title
    }, [])

    return (
        <div>
            <TitlePage label={title} className={'titlePage align-center'}/>
            <nav>
                <ul className="flex-center">
                    {kafkaRoutes.map((item, i) => (
                        <li key={i}>
                            <NavLink to={`${match.path}${item.path}`}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                <Redirect exact from={`${match.path}`} to={`${match.path}/clusters`}/>
                {kafkaRoutes
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

export default KafkaPage

const initializeRoutes = [
    {
        component: Clusters,
        path: '/clusters',
        title: 'Clusters'
    },
    {
        component: Brokers,
        path: '/brokers',
        title: 'Brokers'
    },
    {
        component: Topics,
        path: '/topics',
        title: 'Topics'
    },
]
