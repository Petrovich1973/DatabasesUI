import React, {useState} from 'react'
import {Redirect, Route, Switch, NavLink, useParams, useRouteMatch} from 'react-router-dom'
import TitlePage from "../../components/TitlePage"
import Partitions from "./Partitions"

const Broker = (props) => {
    const {brokers = []} = props
    const match = useRouteMatch()
    const {id} = useParams()
    const [brokerRouters] = useState([
        {title: 'Partitions', path: `/partitions`, component: Partitions}
    ])

    const {
        name = null,
        version = '2.0.4',
        address = 'localhost:3445',
        controller = 452,
        velocity = '345/23'
    } = brokers.find(item => item.id === +id) || {}

    return (
        <div>
            <TitlePage
                label={<span>broker - {name}<span className="btn">&#9874;</span></span>}
                tag={'h4'}
                className={'titlePage align-center'}/>
            <div className="flex-center panel-gray">
                <table className="table md">
                    <tbody>
                    <tr>
                        <td>version</td>
                        <td>{version}</td>
                    </tr>
                    <tr>
                        <td>address</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td>controller</td>
                        <td>{controller}</td>
                    </tr>
                    <tr>
                        <td>velocity</td>
                        <td>{velocity}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <nav>
                <ul className="flex-center">
                    {brokerRouters.map((item, i) => (
                        <li key={i}>
                            <NavLink to={`${match.url}${item.path}`}>{item.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                <Redirect exact from={`${match.path}`} to={`${match.path}/partitions`}/>
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

export default Broker