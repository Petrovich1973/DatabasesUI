import React, {useState} from 'react'
import Brokers from "./Brokers";
import Topics from "./Topics";
import {Redirect, Route, Switch, useRouteMatch, NavLink, useParams} from 'react-router-dom'
import TitlePage from "../../components/TitlePage";

const Cluster = (props) => {
    const {clusters = []} = props
    const match = useRouteMatch()
    const {id} = useParams()
    const [clusterRouters] = useState([
        {title: 'Brokers', path: `/brokers`, component: Brokers},
        {title: 'Topics', path: `/topics`, component: Topics}
    ])

    const {
        name = '',
        addresses_zookeepers = [],
        total_brokers = null,
        total_topics = null,
        total_partitions = null,
        total_consumers = null,
        total_producers = null
    } = clusters.find(item => item.id === +id) || {}

    return (
        <div>
            <TitlePage label={`cluster - ${name}`} tag={'h4'} className={'titlePage align-center'}/>
            <div className="flex-center panel-gray">
                <table className="table md">
                    <tbody>
                    <tr>
                        <td>total_brokers</td>
                        <td>{total_brokers}</td>
                    </tr>
                    <tr>
                        <td>total_topics</td>
                        <td>{total_topics}</td>
                    </tr>
                    <tr>
                        <td>total_partitions</td>
                        <td>{total_partitions}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <nav>
                <ul className="flex-center">
                    {clusterRouters.map((item, i) => (
                        <li key={i}>
                            <NavLink to={`${match.url}${item.path}`}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                <Redirect exact from={`${match.path}`} to={`${match.path}/brokers`}/>
                {clusterRouters
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

export default Cluster